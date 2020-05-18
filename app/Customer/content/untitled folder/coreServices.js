(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CoreLookupService", function( $q,$http )
	{
		return {
		readUsersLookup :function(){return excuteService($q,$http,"api/lookupService/users/", {},"get");}
		}
	})
.service( "CoreCustomerService", function( $q,$http )
	{
		return {
			readAllClients :function(){return excuteService($q,$http,"api/clientAppService/readAll/", {},"get");}
			,readCustomerTasks:function(id){return excuteService($q,$http,"api/CoreAppService/readTasksForEntity/Customer/" + id, {},"get");}
			};
	})	
.service( "CoreDocumentService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/DocumentService/readActiveDocuments/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DocumentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DocumentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DocumentService/delete/" + id, {},"delete");}
			,createFromTemplate: function(params){return excuteService($q,$http,"api/DocumentService/createFromTemplate/", params,"post");}
			};
	})
.service( "CustomerService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/CustomerService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/CustomerService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/CustomerService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/CustomerService/delete/" + id, {},"delete");}
			};
	})		
.factory("CustomerManager",["CustomerService",
	function(CustomerService){
		
		
		function CustomerManager(options)
		{
			this.customerList=[{}];
			this.editedCustomer="";
		}
		CustomerManager.prototype.editItem=function(item)
		{
		}
		CustomerManager.prototype.save=function(item)
		{
			 return CustomerService.save(item);
		}
		
		CustomerManager.prototype.newCustomer=function()
		{
			return this.editedCustomer={}
		}
		
		CustomerManager.prototype.readDetail=function(id)
		{
			return CustomerService.readDetailById(id);
		}
		CustomerManager.prototype.loadDetail=function(id)
		{
			var _customerManager=this;
			return this.readDetail(id)
	 		.then(function(sr){_customerManager.editedCustomer=sr});
		}
		
		CustomerManager.prototype.readList=function()
		{
			return CustomerService.readAll();
		}
		
		CustomerManager.prototype.loadList=function()
		{
			//var vm=this;
			var _customerManager=this;
			return this.readList()
	 		.then(function(sr){_customerManager.customersList=sr; return sr;});
		}
		
		CustomerManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _customerManager=this;
	 		CustomerService.delete(id)
			.then(_customerManager.readList)
	 		.then(function(sr){_customerManager.customersList=sr});
     	}
		var CustomerManagerFactory={create:function(options){return new CustomerManager(options)}};
		//console.log("/n-----------------------------------------------CustomerManager Factory");
		return CustomerManagerFactory;
		
		}])
	
 }(window.angular));