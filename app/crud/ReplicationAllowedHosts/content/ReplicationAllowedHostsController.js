(function() {
    'use strict';
    angular
        .module('app')
        .controller('ReplicationAllowedHostsController', ReplicationAllowedHostsController)

 		ReplicationAllowedHostsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','CRUDManagers'];

   
/*--------------ReplicationAllowedHostsController------------------*/
		
		function ReplicationAllowedHostsController($scope, $http, $filter,$stateParams,$state,CRUDManagers)
		{
			 $scope.replication_allowed_hostsManager=CRUDManagers.ReplicationAllowedHosts({state:$state});
            

			 $scope.onPageLoad=function()
			 {
				var id=$state.params.replication_allowed_hosts_id?$stateParams.replication_allowed_hosts_id:"list";
				console.log("ReplicationAllowedHostsController",id);
				$scope.replication_allowed_hostsManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
     }
/*--------------/ReplicationAllowedHostsController------------------*/


	    	
/*--------------ReplicationAllowedHostsController2------------------*/
		
		function ReplicationAllowedHostsController2($scope, $http, $filter,$stateParams,$state,ReplicationAllowedHostsService,ReplicationAllowedHostsManager,DataImportExportService,DataImportManager)
		{
			 $scope.replication_allowed_hostsManager=ReplicationAllowedHostsManager.create({state:$state});
             $scope.dataImportManager=$scope.replication_allowed_hostsManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.replication_allowed_hosts_id?$stateParams.replication_allowed_hosts_id:"list";
				console.log("ReplicationAllowedHostsController",id);
				$scope.replication_allowed_hostsManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/ReplicationAllowedHostsController------------------*/
		
        
})();

