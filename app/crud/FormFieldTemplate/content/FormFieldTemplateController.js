(function() {
    'use strict';
    angular
        .module('app')
        .controller('FormFieldTemplateController', FormFieldTemplateController)

 		FormFieldTemplateController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"FormFieldTemplateService","FormFieldTemplateManager","DataImportExportService","DataImportManager"];

      	
/*--------------FormFieldTemplateController------------------*/
		
		function FormFieldTemplateController($scope, $http, $filter,$stateParams,$state,FormFieldTemplateService,FormFieldTemplateManager,DataImportExportService,DataImportManager)
		{
			 $scope.form_field_templateManager=FormFieldTemplateManager.create({state:$state});
             $scope.dataImportManager=$scope.form_field_templateManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.form_field_template_id?$stateParams.form_field_template_id:"list";
				console.log("FormFieldTemplateController",id);
				$scope.form_field_templateManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/FormFieldTemplateController------------------*/
		
        
})();

