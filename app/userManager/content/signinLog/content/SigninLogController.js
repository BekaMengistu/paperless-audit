(function() {
    'use strict';
    angular
        .module('app')
        .controller('SigninLogController', SigninLogController)

 		SigninLogController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','CRUDManagers'];

   
/*--------------SigninLogController------------------*/
		
		function SigninLogController($scope, $http, $filter,$stateParams,$state,CRUDManagers)
		{
			 $scope.signin_logManager=CRUDManagers.SigninLog({state:$state});
            

			 $scope.onPageLoad=function()
			 {
				var id=$state.params.signin_log_id?$stateParams.signin_log_id:"list";
				console.log("SigninLogController",id);
				$scope.signin_logManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
     }
/*--------------/SigninLogController------------------*/


	    	
/*--------------SigninLogController2------------------*/
		
		function SigninLogController2($scope, $http, $filter,$stateParams,$state,SigninLogService,SigninLogManager,DataImportExportService,DataImportManager)
		{
			 $scope.signin_logManager=SigninLogManager.create({state:$state});
             $scope.dataImportManager=$scope.signin_logManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.signin_log_id?$stateParams.signin_log_id:"list";
				console.log("SigninLogController",id);
				$scope.signin_logManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/SigninLogController------------------*/
		
        
})();

