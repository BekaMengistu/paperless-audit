(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditEngagementController', AuditEngagementController)

 		AuditEngagementController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditEngagementService","AuditEngagementManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditEngagementController------------------*/
		
		function AuditEngagementController($scope, $http, $filter,$stateParams,$state,AuditEngagementService,AuditEngagementManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_engagementManager=AuditEngagementManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_engagementManager.dataImportManager;

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

