(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditProcedureController', AuditProcedureController)

 		AuditProcedureController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditProcedureService","AuditProcedureManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditProcedureController------------------*/
		
		function AuditProcedureController($scope, $http, $filter,$stateParams,$state,AuditProcedureService,AuditProcedureManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_procedureManager=AuditProcedureManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_procedureManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_procedure_id?$stateParams.audit_procedure_id:"list";
				console.log("AuditProcedureController",id);
				$scope.audit_procedureManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditProcedureController------------------*/
		
        
})();

