(function() {
    'use strict';
    angular
        .module('app')
        .controller('WebContentController', WebContentController)

 		WebContentController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"WebContentService","WebContentManager","DataImportExportService","DataImportManager"];

      	
/*--------------WebContentController------------------*/
		
		function WebContentController($scope, $http, $filter,$stateParams,$state,WebContentService,WebContentManager,DataImportExportService,DataImportManager)
		{
			 $scope.web_contentManager=WebContentManager.create({state:$state});
             $scope.dataImportManager=$scope.web_contentManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.web_content_id?$stateParams.web_content_id:"list";
				console.log("WebContentController",id);
				$scope.web_contentManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/WebContentController------------------*/
		
        
})();

