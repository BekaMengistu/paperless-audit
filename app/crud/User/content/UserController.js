(function() {
    'use strict';
    angular
        .module('app')
        .controller('UserController', UserController)

 		UserController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"UserService","UserManager","DataImportExportService","DataImportManager"];

      	
/*--------------UserController------------------*/
		
		function UserController($scope, $http, $filter,$stateParams,$state,UserService,UserManager,DataImportExportService,DataImportManager)
		{
			 $scope.userManager=UserManager.create({state:$state});
             $scope.dataImportManager=$scope.userManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.user_id?$stateParams.user_id:"list";
				console.log("UserController",id);
				$scope.userManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/UserController------------------*/
		
        
})();

