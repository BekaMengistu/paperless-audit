(function() {
    'use strict';
    angular
        .module('app')
        .controller('DbTransactionController', DbTransactionController)

 		DbTransactionController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','CRUDManagers'];

   
/*--------------DbTransactionController------------------*/
		
		function DbTransactionController($scope, $http, $filter,$stateParams,$state,CRUDManagers)
		{
			 $scope.db_transactionManager=CRUDManagers.DbTransaction({state:$state});
            

			 $scope.onPageLoad=function()
			 {
				var id=$state.params.db_transaction?$stateParams.db_transaction:"list";
				console.log("DbTransactionController",id);
				$scope.db_transactionManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
     }
/*--------------/DbTransactionController------------------*/


	    	
/*--------------DbTransactionController2------------------*/
		
		function DbTransactionController2($scope, $http, $filter,$stateParams,$state,DbTransactionService,DbTransactionManager,DataImportExportService,DataImportManager)
		{
			 $scope.db_transactionManager=DbTransactionManager.create({state:$state});
             $scope.dataImportManager=$scope.db_transactionManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.db_transaction?$stateParams.db_transaction:"list";
				console.log("DbTransactionController",id);
				$scope.db_transactionManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/DbTransactionController------------------*/
		
        
})();

