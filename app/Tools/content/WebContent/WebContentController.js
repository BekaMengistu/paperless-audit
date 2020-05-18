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
	         $scope.webContentEditorOptions={fontNames: ['Roboto','Arial', 'Arial Black','Eurostile', 'Comic Sans MS', 'Courier New', 'Merriweather','Impact','Times New Roman']};
			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.web_content_id?$stateParams.web_content_id:"list";
				console.log("WebContentController",id);
				$scope.web_contentManager.loadData(id)
				.then(function(sr){
					if(sr.reference){$scope.contentUrl="api/WebContentService/getContent/" + sr.reference}
					
					});
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/WebContentController------------------*/
		
        
})();

