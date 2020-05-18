(function() {
    'use strict';
    angular
        .module('app')
        .controller('FormTemplateController', FormTemplateController)

 		FormTemplateController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"FormTemplateService","FormTemplateManager","DataImportExportService","DataImportManager"];

      	
/*--------------FormTemplateController------------------*/
		
		function FormTemplateController($scope, $http, $filter,$stateParams,$state,FormTemplateService,FormTemplateManager,DataImportExportService,DataImportManager)
		{
			 $scope.form_templateManager=FormTemplateManager.create({state:$state});
             $scope.dataImportManager=$scope.form_templateManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.form_template_id?$stateParams.form_template_id:"list";
				console.log("FormTemplateController",id);
				$scope.form_templateManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/FormTemplateController------------------*/
		
        
})();

