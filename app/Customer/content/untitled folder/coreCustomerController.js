// ClientController

(function() {
    'use strict';
    angular
        .module('app')
        .controller('CoreCustomerListController', CoreCustomerListController)
		.controller('CoreCustomerController', CoreCustomerController)
		.controller('DefaultTaskController', DefaultTaskController)
		.controller('CustomerTaskController', CustomerTaskController)
		
        CoreCustomerController.$inject = ['$scope','$rootScope','$stateParams','$state',"TaskManager","CoreLookupService",'CoreCustomerService',"CustomerService","DocumentService","TaskService"];
		
		CoreCustomerListController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"CustomerService"];
		
		
		DefaultTaskController.$inject = ['$scope', '$http', '$filter',"TaskService","TaskManager"];
		
		CustomerTaskController.$inject = ['$scope', '$http', '$filter',"TaskService","TaskManager","CoreCustomerService"];
      
 function DefaultTaskController($scope, $http, $filter,TaskService,TaskManager)
 {
	 $scope.formData={title:"Tasks",subTitle:"List of Tasks",prefix:"def_"};
	 $scope.taskManager=TaskManager.create();
     
     $scope.taskManager.loadList();
 }
 function CustomerTaskController($scope, $http, $filter,TaskService,TaskManager,CoreCustomerService)
 {
	 $scope.formData={title:"Customer Tasks",subTitle:"List of Tasks",prefix:"cus_"};
	 $scope.taskManager=TaskManager.create();
     
	 $scope.taskManager.readList=function(){return CoreCustomerService.readCustomerTasks(1)};
	 
     $scope.taskManager.loadList();
	 
 }
		
		
		function CoreCustomerListController($scope, $http, $filter,$stateParams,$state,CustomerService)
		 {
			 $scope.CustomerList=[];
			  $scope.setList=function(sr)
			 {
				 $scope.CustomerList=sr;
			 }
			 $scope.loadList=function()
			 {
				CustomerService.readAll()
				.then($scope.setList);
			 }
			 $scope.deleteCustomer=function(id)
			 {
				CustomerService.delete(id)
				.then($scope.loadList);
			 }
			 $scope.loadList();
		 }
        function CoreCustomerController($scope,$rootScope,$stateParams,$state,TaskManager,CoreLookupService,CoreCustomerService,CustomerService,DocumentService,TaskService) 
		{
			
			
			
			
			
			
			$scope.customerTaskManager=TaskManager.create();
     
	 		$scope.customerTaskManager.readList=function(){return CoreCustomerService.readCustomerTasks(1)};
	 
     		$scope.customerTaskManager.loadList();
			
	 
			$scope.defaultTaskManager= TaskManager.create();
     
   		  	$scope.defaultTaskManager.loadList();
			
			//$scope.taskManagers={customerTaskManager:$scope.customerTaskManager,defaultTaskManager:$scope.defaultTaskManager};
			
			
			/*
			function TaskManager(options) {
                //this.tasksList=[{id:"instanceid",name:"Instance Task"}];
				
				            }
			TaskManager.prototype.tasksList=[{id:"classid",name:"Class Task"}];
			
			TaskManager.prototype.getList=function(){
				return this.tasksList;
				}
				
			$scope.taskManager=new TaskManager({});
			
			
			//$scope.taskManager
			$scope.addInstanceVar=function()
			{
			 	$scope.taskManager.tasksList=[{id:"instanceid",name:"Instance Task"}];
			}
			$scope.removeInstanceVar=function()
			{
			 	delete($scope.taskManager.tasksList);;//=[{id:"instanceid",name:"Instance Task"}];
			}
			*/
			
			$scope.activeTab="Tasks";
			
			$scope.editedCustomer={};
			
			$scope.lookups={};
			
			$scope.setLookupValue=function(lookupName,data)
			{
				var loopupHash={};
				$scope.lookups[lookupName]=data;
				
				$scope.lookups[lookupName + "Hash"]=loopupHash;
				for(var i in data)
				{
					var row=data[i];
					loopupHash["item" + row[lookupName + "_id"]]=row;
				}
			}
			
			$scope.loadLookups=function()
			{
				CoreLookupService.readUsersLookup()
				.then(function(sr){$scope.setLookupValue("user",sr)})
			}
			
			$scope.selectTab=function(tab)
			{
				$scope.activeTab=tab;
			}
			
			 $scope.loadDetailById=function (id)
			 {
				 return CustomerService.readDetailById(id)
					.then( function( si )
					{
						$scope.editedCustomer=si;
						return si;
					});
			 }		
			 $scope.loadCustomerDocuments=function(customer)
			 {
				 return DocumentService.readAll(customer)
					.then( function( si )
					{
						customer.documents=si;
						return customer;
					});
					
			 }
			 	
			 $scope.loadCustomerTasks=function(customer)
			 {
				 return CoreCustomerService.readCustomerTasks(customer.customer_id)
					.then( function( si )
					{
						customer.tasks=si;
						return customer;
					});
					
			 }
			 $scope.saveCustomer=function()
			{
					console.log("saveCustomer",$scope.editedCustomer)
					return CustomerService.save($scope.editedCustomer)
					.then( function( si )
					{
						if(si.lastInsertId/1)
						{
						$state.go("app.customerdetail",{id:si.lastInsertId/1});
						}
						return si;
					});
				
			}	

			$scope.onAppStart2=function()
			{
				var id=$stateParams.id?$stateParams.id:0;
				console.log("CustomerDetailController",id);
				if(id/1)
				{
					$scope.loadDetailById(id)
						.then($scope.loadCustomerDocuments)
						.then($scope.loadCustomerTasks)
						.then($scope.loadLookups)
				}

			}
			$scope.onAppStart2();
		}
		
})();
