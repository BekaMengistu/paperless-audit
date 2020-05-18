(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditClientTrialbalanceController', AuditClientTrialbalanceController)

 		AuditClientTrialbalanceController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditClientTrialbalanceService","AuditClientTrialbalanceManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditClientTrialbalanceController------------------*/
		
		function AuditClientTrialbalanceController($scope, $http, $filter,$stateParams,$state,AuditClientTrialbalanceService,AuditClientTrialbalanceManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_client_trialbalanceManager=AuditClientTrialbalanceManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_client_trialbalanceManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_client_trialbalance_id?$stateParams.audit_client_trialbalance_id:"list";
				console.log("AuditClientTrialbalanceController",id);
				$scope.audit_client_trialbalanceManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditClientTrialbalanceController------------------*/
		
        
})();

