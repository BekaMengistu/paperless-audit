(function() {
    'use strict';
    angular
        .module('app')
        .controller('ReplicationController', ReplicationController)
        .controller('ReplicationToolbarController', ReplicationToolbarController)
        .service('ReplicationManagerService', ReplicationManagerService)    
    .controller('ReplicationAllowedHostsController', ReplicationAllowedHostsController)

 		ReplicationAllowedHostsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','CRUDManagers',"ReplicationManagerService"];

    
 		ReplicationController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$q",'CRUDManagers',"CRUDService","ReplicationManagerService"];
    
        ReplicationToolbarController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$q","$timeout",'CRUDManagers',"CRUDService","ReplicationManagerService"];
    
        ReplicationManagerService.$inject = ['$http',"$q","$state","$timeout", 'CRUDManagers',"CRUDService"];


    function ReplicationManagerService($http,$q,$state,$timeout,CRUDManagers,CRUDService)
    {
        var createReplicationAllowedHostsManager=function(options)
        {
            var replication_allowed_hostsManager=CRUDManagers.ReplicationAllowedHosts(options);
            
            replication_allowed_hostsManager.detailEditor={title:"Allowed Host",subTitle:"Edit Allowed Host Detail",headerStyle:"dker",url:"app.replication.allowed_hostsEdit",id:"replication_allowed_hosts_id"}

            replication_allowed_hostsManager.listEditor={title:"Allowed Hosts",subTitle:"List of hosts that can replicate on this server",headerStyle:"b-b",url:"app.replication.allowed_hosts"};
            
            replication_allowed_hostsManager.afterDetailLoaded=function(sr){sr.allowedBool=sr.allowed=="1"; return sr;}
            
            replication_allowed_hostsManager.createNew=function(){return {allowedBool:true,allowed:1}}
            
            return replication_allowed_hostsManager;
        }
        var manager=CRUDManagers.ReplicationServer({state:$state});
        var hidePace=true;
        var replicationService={
            pingRemote :function(url,message){
                var ping_url=url+"api/ReplicationService/ping/"+message;
                return excuteService($q,$http,"api/appService/runRemoteApi/", {url:ping_url,methode:"get"},"post",hidePace);
            }
            ,syncUp:function(param){return excuteService($q,$http,"api/ReplicationService/syncUp/",param,"post",hidePace)}
            ,syncUp:function(id){return excuteService($q,$http,"api/ReplicationService/syncUp/"+id,{},"get",hidePace)}
            ,syncDown:function(id){return excuteService($q,$http,"api/ReplicationService/syncDown/"+id,{},"get",hidePace)}
            
            ,countRecordsForSync:function(id){return excuteService($q,$http,"api/ReplicationService/countRecordsForSync/"+id,{},"get",hidePace)}
        }
        
        /*$url=get_attribute_value($apiparams,"url");
		$method=get_attribute_value($apiparams,"method");
		$params=get_attribute_value($apiparams,"params");
        */
        manager.replicationService=replicationService;
        manager.listEditor.title="Replication Servers List"
        manager.listEditor.subTitle="Master Replication Servers";
        manager.ping=function(item)
        {
            item.ping_status="pinging with hello..";
            item.ping_result="";
            return replicationService.pingRemote(item.server_address,"Hello" )
            .then(function(sr){
                if(sr.response)
                    {
                        item.ping_status="Success ";
                        item.ping_result=sr.response + " From '" + sr.host + "'"; 
                        item.online=sr.online;
                    }
                else
                    {
                        item.ping_status="Failed";
                        item.online=false;
                    }
                console.log(sr);
                //$timeout(function(){manager.ping(item)},10000);
                return sr;
            })
            /*
            $timeout(function(){item.ping_status="Timeout";
                               item.ping_result=": No Response";
                               },2000)*/
        }
        manager.runSync=function(item,type,index)
        {
            if( item[type+"_started"])
                {
                   // console.log("----",type);
                    replicationService[type](item.replication_server_id)
                    .then(function(sr){
                        for(var i in sr)
                            {
                                item[i]=sr[i];
                            }
                        manager.summerizeServerStatus();
                        $timeout(function(){manager.runSync(item,type)},1000);
                    })
                    
                }
        }
        
       
        manager.toggleSync=function(index,type)
        {
            var item=manager.items[index];
            console.log("toggleSync",item[type+"_started"])
            if(item[type+"_started"]==true)
                {
                    //console.log("--Pausing");
                  item[type+"_started"]=false;
                }
            else
                {
                    item[type+"_started"]=true;
                    manager.runSync(item,type,index);
                    //manager.startSync(item,type);
                }
            
        }
        manager.syncDown=function(item,untilDone)
        {
            //item.forSync.down=
            console.log(item.forSync);
            
           // return;
            replicationService.syncDown(item.replication_server_id)
            .then(function(sr){
               // console.log("syncDown");
                //console.log(sr);
                item.forSync.down=sr.down;
                //manager.loadData("list")
                //.then(function(){manager.countRecordsForSync()})
            })
        }
        manager.syncUp=function(item)
        {
            replicationService.syncUp(item)
            .then(function(sr){
                // console.log("syncUp");
               // console.log(sr);
                manager.loadData("list")
                .then(function(){manager.countRecordsForSync()})
            })
        }
        manager.statusStyles={online:"primary",offline:"danger",partial:"warn"}
        manager.summerizeServerStatus=function()
        {
            var statusUnknown=false;
            manager.syncStatus=manager.syncStatus?manager.syncStatus:{recordsCount:{}};
            manager.itemsCount=manager.items.length;
            manager.onlineItems=0;
            
            manager.syncStatus.recordsCount={up:0,down:0,total:0};
            manager.syncStatus.recordsCount.up=0;
            
            for(var i in manager.items)
            {
                var item=manager.items[i];
                var forSync=item.forSync;
                if(forSync)
                {
                    if(forSync.status=='online')
                    {
                        manager.onlineItems++; 
                        manager.syncStatus.recordsCount.up+=forSync.up.records*1;
                        manager.syncStatus.recordsCount.down+=forSync.down.records*1;
                        manager.syncStatus.recordsCount.total=manager.syncStatus.recordsCount.down+manager.syncStatus.recordsCount.up;
                        item.syncUp_started=item.syncUp_started && ((forSync.up.records*1)>0);
                        item.syncDown_started=item.syncDown_started && ((forSync.down.records*0)>1);
                    }

                }
                else
                {
                    statusUnknown=true;
                }
            }
            manager.serversStatus=statusUnknown?"unknown":"offline";
            if(manager.onlineItems==manager.itemsCount)
            {
                manager.serversStatus="online";    
            }
            else if(manager.onlineItems>0)
            {
                manager.serversStatus="partial";    
            }
        }
        manager.countRecordsForSync=function(index,this_item_only)
             {
            
            
                 index=index?index:0;
            
            var item= manager.items[index];
                 if(item)
                {
                    //item.forSync="";
                    manager.replicationService.countRecordsForSync(item.replication_server_id)
                     .then(function(sr){
                        if(sr)
                            {
                                item.forSync=sr.forSync;
                        item.up_index=sr.up_index;
                        item.down_index=sr.down_index;
                        
                            }
                        
                        manager.summerizeServerStatus();
                        if(!this_item_only)
                        
                        {manager.countRecordsForSync(index+1);}
                    })
                }
                 
             }
        
        return {manager:manager,ReplicationAllowedHostsManager:createReplicationAllowedHostsManager};
    }
    
/*--------------ReplicationServerController------------------*/
		
		function ReplicationController($scope, $http, $filter,$stateParams,$state,$q,CRUDManagers,CRUDService,ReplicationManagerService)
		{
			 $scope.replication_serverManager=ReplicationManagerService.manager;
            
         //   buildReplicationManager($scope.replication_serverManager);

			 $scope.app.replicationOnPageLoad=function()
			 {
				var id=$state.params.replication_server_id?$stateParams.replication_server_id:"list";
				console.log("ReplicationServerController",id);
				return $scope.replication_serverManager.loadData(id)
                 .then(function(){$scope.replication_serverManager.countRecordsForSync()})
			 }
			 
             
			// $scope.ReplicationController_onPageLoad();
     }
/*--------------/ReplicationServerController------------------*/

    function ReplicationToolbarController($scope, $http, $filter,$stateParams,$state,$q,$timeout,
                                           CRUDManagers,CRUDService,ReplicationManagerService)
		{
			 $scope.toolbar_replication_serverManager=$scope.replication_serverManager=ReplicationManagerService.manager;
             
             $scope.loadReplicationInfoBackground=function()
             {
                 //console.log("loadReplicationInfoBackground ---");
                 //$scope.toolbar_replication_serverManager.countRecordsForSync();
                 // $timeout($scope.loadReplicationInfoBackground,120000);
             }
			 $scope.ReplicationToolbarController_onPageLoad=function()
			 {
				if(!$scope.app.loadReplicationInfoBackgroundStarted)
                {
                    $scope.app.loadReplicationInfoBackgroundStarted=true;
                    $scope.toolbar_replication_serverManager.loadData("list")
                    .then($scope.loadReplicationInfoBackground);
                }
				
                 
                 //.then(function(){$scope.toolbar_replication_serverManager.countRecordsForSync()})
			 }
			 
             
			// $scope.ReplicationToolbarController_onPageLoad();
     }
    
   
/*--------------ReplicationAllowedHostsController------------------*/
		
		function ReplicationAllowedHostsController($scope, $http, $filter,$stateParams,$state,CRUDManagers,ReplicationManagerService)
		{
           // $scope.replication_allowed_hostsManager=CRUDManagers.ReplicationAllowedHosts({state:$state});
            $scope.replication_allowed_hostsManager=ReplicationManagerService.ReplicationAllowedHostsManager({state:$state});

			 $scope.app.ReplicationAllowedHostsControllerOnPageLoad=function()
			 {
				var id=$state.params.replication_allowed_hosts_id?$stateParams.replication_allowed_hosts_id:"list";
				//console.log("ReplicationAllowedHostsController",id);
				return $scope.replication_allowed_hostsManager.loadData(id);
			 }
			 
			// $scope.onPageLoad();
     }
/*--------------/ReplicationAllowedHostsController------------------*/

        
})();

