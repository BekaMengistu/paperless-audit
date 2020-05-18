(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "ReplicationAllowedHostsService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/ReplicationAllowedHostsService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/ReplicationAllowedHostsService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/ReplicationAllowedHostsService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/ReplicationAllowedHostsService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("ReplicationAllowedHostsManager",["ReplicationAllowedHostsService","DataImportManager",
		function(ReplicationAllowedHostsService,DataImportManager){
		
		
		function ReplicationAllowedHostsManager(options)
		{
			this.replication_allowed_hostsList=[{}];
			this.editedReplicationAllowedHosts="";
		}
		ReplicationAllowedHostsManager.prototype.editPath={url:"app.crud.replication_allowed_hostsEdit",id:"replication_allowed_hosts_id"};
		ReplicationAllowedHostsManager.prototype.listPath={url:"app.crud.replication_allowed_hosts"};
		
		ReplicationAllowedHostsManager.prototype.formData={
				 	list:{title:"Replication Allowed Hostss"
                    		,subTitle:"List of Replication Allowed Hostss"
                            ,prefix:"replication_allowed_hosts",headerStyle:"dker"}
                            
					,detail:{title:"Replication Allowed Hosts Detail"
                    	,subTitle:"Edit Replication Allowed Hosts"
                        ,prefix:"replication_allowed_hosts",headerStyle:"dker"}
					}
		ReplicationAllowedHostsManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.replication_allowed_hostssList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="replication_allowed_hosts";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		ReplicationAllowedHostsManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        ReplicationAllowedHostsManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		ReplicationAllowedHostsManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		ReplicationAllowedHostsManager.prototype.saveItem=function(item)
		{
			var _ReplicationAllowedHostsManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_ReplicationAllowedHostsManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		ReplicationAllowedHostsManager.prototype.loadData=function(id)
		{
			if(id=="list")
				{
					return this.loadList();
				}
				else if(id/1)
				{
					return this.loadDetail(id);
				}
				else if(id==0)
				{
					return this.loadNew();
				}
		}
		
		ReplicationAllowedHostsManager.prototype.save=function(item)
		{
			 return ReplicationAllowedHostsService.save(item);
		}
		
		ReplicationAllowedHostsManager.prototype.newReplicationAllowedHosts=function()
		{
			return this.editedReplicationAllowedHosts={}
		}
        
		ReplicationAllowedHostsManager.prototype.newItem=function()
		{
			return ReplicationAllowedHostsService.readNew({});
		}

		ReplicationAllowedHostsManager.prototype.readDetail=function(id)
		{
			return ReplicationAllowedHostsService.readDetailById(id);
		}
        
        ReplicationAllowedHostsManager.prototype.loadNew=function(params)
		{
			var _ReplicationAllowedHostsManager=this;
			return this.newItem()
	 		.then(function(sr){return _ReplicationAllowedHostsManager.editedReplicationAllowedHosts=sr});
		}
        
		ReplicationAllowedHostsManager.prototype.loadDetail=function(id)
		{
			var _ReplicationAllowedHostsManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _ReplicationAllowedHostsManager.editedReplicationAllowedHosts=sr});
		}
		
		ReplicationAllowedHostsManager.prototype.readList=function()
		{
			return ReplicationAllowedHostsService.readAll();
		}
		
		ReplicationAllowedHostsManager.prototype.loadList=function()
		{
			//var vm=this;
			var _replication_allowed_hostsManager=this;
			return this.readList()
	 		.then(function(sr){return _replication_allowed_hostsManager.replication_allowed_hostssList=sr; return sr;});
		}
		
		ReplicationAllowedHostsManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _ReplicationAllowedHostsManager=this;
	 		ReplicationAllowedHostsService.delete(id)
			.then(_ReplicationAllowedHostsManager.readList)
	 		.then(function(sr){_ReplicationAllowedHostsManager.replication_allowed_hostssList=sr});
     	}
		var ReplicationAllowedHostsManagerFactory={
        	create:function(options)
            	{
                	var _ReplicationAllowedHostsManager=new ReplicationAllowedHostsManager(options);
					for(var i in options)
					{
						_ReplicationAllowedHostsManager[i]=options[i];
					}
					_ReplicationAllowedHostsManager.buildUploader();
					return _ReplicationAllowedHostsManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------ReplicationAllowedHostsManager Factory");
		return ReplicationAllowedHostsManagerFactory;
		
		}])
             
 }(window.angular));