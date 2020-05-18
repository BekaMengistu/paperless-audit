(function() {
    'use strict';
    angular
        .module('app')
        .controller('ReplicationServerController', ReplicationServerController)

 		ReplicationServerController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','CRUDManagers'];

   
/*--------------ReplicationServerController------------------*/
		
		function ReplicationServerController($scope, $http, $filter,$stateParams,$state,CRUDManagers)
		{
			 $scope.replication_serverManager=CRUDManagers.ReplicationServer({state:$state});
            

			 $scope.onPageLoad=function()
			 {
				var id=$state.params.replication_server_id?$stateParams.replication_server_id:"list";
				console.log("ReplicationServerController",id);
				$scope.replication_serverManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
     }
/*--------------/ReplicationServerController------------------*/


	    	
/*--------------ReplicationServerController2------------------*/
		
		function ReplicationServerController2($scope, $http, $filter,$stateParams,$state,ReplicationServerService,ReplicationServerManager,DataImportExportService,DataImportManager)
		{
			 $scope.replication_serverManager=ReplicationServerManager.create({state:$state});
             $scope.dataImportManager=$scope.replication_serverManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.replication_server_id?$stateParams.replication_server_id:"list";
				console.log("ReplicationServerController",id);
				$scope.replication_serverManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/ReplicationServerController------------------*/
		
        
})();

