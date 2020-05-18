(function() {
    'use strict';
    angular
        .module('app')
        .controller('CustomerController', CustomerController)

 		CustomerController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"CustomerService","CustomerManager","DataImportExportService","DataImportManager"];

      	
/*--------------CustomerController------------------*/
		
		function CustomerController($scope, $http, $filter,$stateParams,$state,CustomerService,CustomerManager,DataImportExportService,DataImportManager)
		{
			 $scope.customerManager=CustomerManager.create({state:$state});
             $scope.dataImportManager=$scope.customerManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.customer_id?$stateParams.customer_id:"list";
				console.log("CustomerController",id);
				$scope.customerManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/CustomerController------------------*/
		
        
})();

