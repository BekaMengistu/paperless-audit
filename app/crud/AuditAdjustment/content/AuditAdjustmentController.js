(function() {
    'use strict';
    angular
        .module('app')
        .controller('AuditAdjustmentController', AuditAdjustmentController)

 		AuditAdjustmentController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AuditAdjustmentService","AuditAdjustmentManager","DataImportExportService","DataImportManager"];

      	
/*--------------AuditAdjustmentController------------------*/
		
		function AuditAdjustmentController($scope, $http, $filter,$stateParams,$state,AuditAdjustmentService,AuditAdjustmentManager,DataImportExportService,DataImportManager)
		{
			 $scope.audit_adjustmentManager=AuditAdjustmentManager.create({state:$state});
             $scope.dataImportManager=$scope.audit_adjustmentManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.audit_adjustment_id?$stateParams.audit_adjustment_id:"list";
				console.log("AuditAdjustmentController",id);
				$scope.audit_adjustmentManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AuditAdjustmentController------------------*/
		
        
})();

