(function() {
    'use strict';
    angular
        .module('app')
        .controller('AppPermissionController', AppPermissionController)

 		AppPermissionController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AppPermissionService","AppPermissionManager","DataImportExportService","DataImportManager"];

      	
/*--------------AppPermissionController------------------*/
		
		function AppPermissionController($scope, $http, $filter,$stateParams,$state,AppPermissionService,AppPermissionManager,DataImportExportService,DataImportManager)
		{
			 $scope.app_permissionManager=AppPermissionManager.create({state:$state});
             $scope.dataImportManager=$scope.app_permissionManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.app_permission_id?$stateParams.app_permission_id:"list";
				console.log("AppPermissionController",id);
				$scope.app_permissionManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AppPermissionController------------------*/
		
        
})();

