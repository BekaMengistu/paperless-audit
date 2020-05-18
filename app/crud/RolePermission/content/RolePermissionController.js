(function() {
    'use strict';
    angular
        .module('app')
        .controller('RolePermissionController', RolePermissionController)

 		RolePermissionController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"RolePermissionService","RolePermissionManager","DataImportExportService","DataImportManager"];

      	
/*--------------RolePermissionController------------------*/
		
		function RolePermissionController($scope, $http, $filter,$stateParams,$state,RolePermissionService,RolePermissionManager,DataImportExportService,DataImportManager)
		{
			 $scope.role_permissionManager=RolePermissionManager.create({state:$state});
             $scope.dataImportManager=$scope.role_permissionManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.role_permission_id?$stateParams.role_permission_id:"list";
				console.log("RolePermissionController",id);
				$scope.role_permissionManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/RolePermissionController------------------*/
		
        
})();

