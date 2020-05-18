(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditEngagementController', AuditEngagementController)

 		AuditEngagementController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditEngagementService","AuditEngagementManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditEngagementController------------------*/
		
		function AuditEngagementController($scope, $http, $filter,$stateParams,$state,AuditEngagementService,AuditEngagementManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_engagementManager=AuditEngagementManager.create();

			 $scope.audit_engagementManager.state=$state;
			
             $scope.dataImportManager=DataImportManager.create();
			 
			 $scope.dataImportManager.importOptions.dataTable="audit_engagement";
			 
			 $scope.dataImportManager.buildUploader();
             	
			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_engagement_id?$stateParams.audit_engagement_id:"list";
				console.log("AuditEngagementController",id);
				$scope.audit_engagementManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditEngagementController------------------*/
		
        
})();

