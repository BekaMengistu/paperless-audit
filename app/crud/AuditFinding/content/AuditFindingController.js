(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditFindingController', AuditFindingController)

 		AuditFindingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditFindingService","AuditFindingManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditFindingController------------------*/
		
		function AuditFindingController($scope, $http, $filter,$stateParams,$state,AuditFindingService,AuditFindingManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_findingManager=AuditFindingManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_findingManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_finding_id?$stateParams.audit_finding_id:"list";
				console.log("AuditFindingController",id);
				$scope.audit_findingManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditFindingController------------------*/
		
        
})();

