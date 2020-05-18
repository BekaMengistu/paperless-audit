(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditAccountGroupingController', AuditAccountGroupingController)

 		AuditAccountGroupingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditAccountGroupingService","AuditAccountGroupingManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditAccountGroupingController------------------*/
		
		function AuditAccountGroupingController($scope, $http, $filter,$stateParams,$state,AuditAccountGroupingService,AuditAccountGroupingManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_account_groupingManager=AuditAccountGroupingManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_account_groupingManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_account_grouping_id?$stateParams.audit_account_grouping_id:"list";
				console.log("AuditAccountGroupingController",id);
				$scope.audit_account_groupingManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditAccountGroupingController------------------*/
		
        
})();

