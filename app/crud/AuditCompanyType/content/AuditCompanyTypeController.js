(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditCompanyTypeController', AuditCompanyTypeController)

 		AuditCompanyTypeController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditCompanyTypeService","AuditCompanyTypeManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditCompanyTypeController------------------*/
		
		function AuditCompanyTypeController($scope, $http, $filter,$stateParams,$state,AuditCompanyTypeService,AuditCompanyTypeManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_company_typeManager=AuditCompanyTypeManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_company_typeManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_company_type_id?$stateParams.audit_company_type_id:"list";
				console.log("AuditCompanyTypeController",id);
				$scope.audit_company_typeManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditCompanyTypeController------------------*/
		
        
})();

