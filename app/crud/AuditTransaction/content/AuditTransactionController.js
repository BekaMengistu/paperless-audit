(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditTransactionController', AuditTransactionController)

 		AuditTransactionController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditTransactionService","AuditTransactionManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditTransactionController------------------*/
		
		function AuditTransactionController($scope, $http, $filter,$stateParams,$state,AuditTransactionService,AuditTransactionManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_transactionManager=AuditTransactionManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_transactionManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_transaction_id?$stateParams.audit_transaction_id:"list";
				console.log("AuditTransactionController",id);
				$scope.audit_transactionManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditTransactionController------------------*/
		
        
})();

