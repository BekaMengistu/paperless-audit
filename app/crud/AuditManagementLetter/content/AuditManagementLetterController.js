(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditManagementLetterController', AuditManagementLetterController)

 		AuditManagementLetterController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditManagementLetterService","AuditManagementLetterManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditManagementLetterController------------------*/
		
		function AuditManagementLetterController($scope, $http, $filter,$stateParams,$state,AuditManagementLetterService,AuditManagementLetterManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_management_letterManager=AuditManagementLetterManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_management_letterManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_management_letter_id?$stateParams.audit_management_letter_id:"list";
				console.log("AuditManagementLetterController",id);
				$scope.audit_management_letterManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditManagementLetterController------------------*/
		
        
})();

