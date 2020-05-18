(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CustomerService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/CustomerService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/CustomerService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/CustomerService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/CustomerService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("CustomerManager",["CustomerService","DataImportManager",
		function(CustomerService,DataImportManager){
		
		
		function CustomerManager(options)
		{
			this.customerList=[{}];
			this.editedCustomer="";
		}
		CustomerManager.prototype.editPath={url:"app.crud.customerEdit",id:"customer_id"};
		CustomerManager.prototype.listPath={url:"app.crud.customer"};
		
		CustomerManager.prototype.formData={
				 	list:{title:"Customers"
                    		,subTitle:"List of Customers"
                            ,prefix:"customer",headerStyle:"dker"}
                            
					,detail:{title:"Customer Detail"
                    	,subTitle:"Edit Customer"
                        ,prefix:"customer",headerStyle:"dker"}
					}
		CustomerManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.customersList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="customer";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		CustomerManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        CustomerManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		CustomerManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		CustomerManager.prototype.saveItem=function(item)
		{
			var _CustomerManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_CustomerManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		CustomerManager.prototype.loadData=function(id)
		{
			if(id=="list")
				{
					return this.loadList();
				}
				else if(id/1)
				{
					return this.loadDetail(id);
				}
				else if(id==0)
				{
					return this.loadNew();
				}
		}
		
		CustomerManager.prototype.save=function(item)
		{
			 return CustomerService.save(item);
		}
		
		CustomerManager.prototype.newCustomer=function()
		{
			return this.editedCustomer={}
		}
        
		CustomerManager.prototype.newItem=function()
		{
			return CustomerService.readNew({});
		}

		CustomerManager.prototype.readDetail=function(id)
		{
			return CustomerService.readDetailById(id);
		}
        
        CustomerManager.prototype.loadNew=function(params)
		{
			var _CustomerManager=this;
			return this.newItem()
	 		.then(function(sr){return _CustomerManager.editedCustomer=sr});
		}
        
		CustomerManager.prototype.loadDetail=function(id)
		{
			var _CustomerManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _CustomerManager.editedCustomer=sr});
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
	 		.then(function(sr){return _customerManager.customersList=sr; return sr;});
		}
		
		CustomerManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _CustomerManager=this;
	 		CustomerService.delete(id)
			.then(_CustomerManager.readList)
	 		.then(function(sr){_CustomerManager.customersList=sr});
     	}
		var CustomerManagerFactory={
        	create:function(options)
            	{
                	var _CustomerManager=new CustomerManager(options);
					for(var i in options)
					{
						_CustomerManager[i]=options[i];
					}
					_CustomerManager.buildUploader();
					return _CustomerManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------CustomerManager Factory");
		return CustomerManagerFactory;
		
		}])
             
 }(window.angular));