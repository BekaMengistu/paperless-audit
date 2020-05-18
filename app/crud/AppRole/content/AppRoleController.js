(function() {
    'use strict';
    angular
        .module('app')
        .controller('AppRoleController', AppRoleController)

 		AppRoleController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AppRoleService","AppRoleManager","DataImportExportService","DataImportManager"];

      	
/*--------------AppRoleController------------------*/
		
		function AppRoleController($scope, $http, $filter,$stateParams,$state,AppRoleService,AppRoleManager,DataImportExportService,DataImportManager)
		{
			 $scope.app_roleManager=AppRoleManager.create({state:$state});
             $scope.dataImportManager=$scope.app_roleManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.app_role_id?$stateParams.app_role_id:"list";
				console.log("AppRoleController",id);
				$scope.app_roleManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AppRoleController------------------*/
		
        
})();

