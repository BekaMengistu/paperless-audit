(function() {
    'use strict';
    angular
        .module('app')
        .controller('FormFieldValueController', FormFieldValueController)

 		FormFieldValueController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"FormFieldValueService","FormFieldValueManager","DataImportExportService","DataImportManager"];

      	
/*--------------FormFieldValueController------------------*/
		
		function FormFieldValueController($scope, $http, $filter,$stateParams,$state,FormFieldValueService,FormFieldValueManager,DataImportExportService,DataImportManager)
		{
			 $scope.form_field_valueManager=FormFieldValueManager.create({state:$state});
             $scope.dataImportManager=$scope.form_field_valueManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.form_field_value_id?$stateParams.form_field_value_id:"list";
				console.log("FormFieldValueController",id);
				$scope.form_field_valueManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/FormFieldValueController------------------*/
		
        
})();

