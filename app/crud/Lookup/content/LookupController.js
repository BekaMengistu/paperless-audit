(function() {
    'use strict';
    angular
        .module('app')
        .controller('LookupController', LookupController)

 		LookupController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"LookupService","LookupManager","DataImportExportService","DataImportManager"];

      	
/*--------------LookupController------------------*/
		
		function LookupController($scope, $http, $filter,$stateParams,$state,LookupService,LookupManager,DataImportExportService,DataImportManager)
		{
			 $scope.lookupManager=LookupManager.create({state:$state});
             $scope.dataImportManager=$scope.lookupManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.lookup_id?$stateParams.lookup_id:"list";
				console.log("LookupController",id);
				$scope.lookupManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/LookupController------------------*/
		
        
})();

