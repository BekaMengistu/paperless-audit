(function() {
    'use strict';
    angular
        .module('app')
        .controller('CompanyTypeKeyController', CompanyTypeKeyController)

 		CompanyTypeKeyController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"CompanyTypeKeyService","CompanyTypeKeyManager","DataImportExportService","DataImportManager"];

      	
/*--------------CompanyTypeKeyController------------------*/
		
		function CompanyTypeKeyController($scope, $http, $filter,$stateParams,$state,CompanyTypeKeyService,CompanyTypeKeyManager,DataImportExportService,DataImportManager)
		{
			 $scope.company_type_keyManager=CompanyTypeKeyManager.create({state:$state});
             $scope.dataImportManager=$scope.company_type_keyManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.company_type_key_id?$stateParams.company_type_key_id:"list";
				console.log("CompanyTypeKeyController",id);
				$scope.company_type_keyManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/CompanyTypeKeyController------------------*/
		
        
})();

