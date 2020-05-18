(function() {
    'use strict';
    angular
        .module('app')
        .controller('DocumentController', DocumentController)

 		DocumentController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"DocumentService","DocumentManager","DataImportExportService","DataImportManager"];

      	
/*--------------DocumentController------------------*/
		
		function DocumentController($scope, $http, $filter,$stateParams,$state,DocumentService,DocumentManager,DataImportExportService,DataImportManager)
		{
			 $scope.documentManager=DocumentManager.create();

			 $scope.documentManager.state=$state;
				
             $scope.documentManager.buildUploader();   
             
             $scope.dataImportManager=$scope.documentManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.document_id?$stateParams.document_id:"list";
				console.log("DocumentController",id);
				$scope.documentManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/DocumentController------------------*/
		
        
})();

