(function() {
    'use strict';
    angular
        .module('app')
        .controller('FormValueController', FormValueController)

 		FormValueController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"FormValueService","FormValueManager","DataImportExportService","DataImportManager"];

      	
/*--------------FormValueController------------------*/
		
		function FormValueController($scope, $http, $filter,$stateParams,$state,FormValueService,FormValueManager,DataImportExportService,DataImportManager)
		{
			 $scope.form_valueManager=FormValueManager.create({state:$state});
             $scope.dataImportManager=$scope.form_valueManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.form_value_id?$stateParams.form_value_id:"list";
				console.log("FormValueController",id);
				$scope.form_valueManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/FormValueController------------------*/
		
        
})();

