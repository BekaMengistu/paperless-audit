(function() {
    'use strict';
    angular
        .module('app')
        .controller('UserRoleController', UserRoleController)

 		UserRoleController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"UserRoleService","UserRoleManager","DataImportExportService","DataImportManager"];

      	
/*--------------UserRoleController------------------*/
		
		function UserRoleController($scope, $http, $filter,$stateParams,$state,UserRoleService,UserRoleManager,DataImportExportService,DataImportManager)
		{
			 $scope.user_roleManager=UserRoleManager.create({state:$state});
             $scope.dataImportManager=$scope.user_roleManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.user_role_id?$stateParams.user_role_id:"list";
				console.log("UserRoleController",id);
				$scope.user_roleManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/UserRoleController------------------*/
		
        
})();

