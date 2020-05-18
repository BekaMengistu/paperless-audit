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
				,importExcel:function(fileType,param){return excuteService($q,$http,"api/CustomerService/importExcel/", param,"post");}
				,exportExcel:function(){return excuteService($q,$http,"api/CustomerService/exportExcel/", {},"get");}
				,checkTin:function(id){return excuteService($q,$http,"api/CustomerService/checkTin/" + id, {},"get");}
			};
	})	
	.factory("CustomerManager",["CustomerService","DataImportManager","FileUploader",
		function(CustomerService,DataImportManager,FileUploader){
		
		
		function CustomerManager(options)
		{
			this.customerList=[{}];
			this.editedCustomer="";
		}
		CustomerManager.prototype.editPath={url:"app.customer.detail.edit",id:"customer_id"};
		CustomerManager.prototype.listPath={url:"app.customer.list"};
		
		CustomerManager.prototype.formData={
				 	list:{title:"Customers"
                    		,subTitle:"List of Customers"
                            ,prefix:"customer",headerStyle:"dker"}
                            
					,detail:{title:"Customer Detail"
                    	,subTitle:"Edit Customer"
                        ,prefix:"customer",headerStyle:"dker"}
					}
		CustomerManager.prototype.buildDataImporter=function()
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
			
			this.dataImportManager.importOptions.importService=CustomerService.importExcel;
			this.dataImportManager.importOptions.fieldsList=["customer_id","customer_name","telephone_no","email","address","establishment"];
			
		}
        CustomerManager.prototype.buildUploader=function(uploadOptions)
		{
			var __this=this;
			this.uploaderBuilt=true;
			var uploaderSingle = this.uploader= new FileUploader({url: uploadOptions.uploadUrl});
			
			console.info('buildUploader', this.uploader);
			
			uploaderSingle.onAfterAddingFile = function(fileItem) 
			{
                console.info('onAfterAddingFile', fileItem);
				fileItem.upload();
            };			
			
			uploaderSingle.onSuccessItem = function(fileItem, response, status, headers) 
			{ 
				console.info('onSuccessItem', fileItem, response); 
				__this.editedCustomer.logo=response.fileName;
				};
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
				if(si.customer_id!=item.customer_id)
				{
					_CustomerManager.editItem(si.customer_id);
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
				else if(id==0)
				{
					this.newCustomer();
				}
				else
				{
					return this.loadDetail(id);
				}
				
		}
		
		CustomerManager.prototype.save=function(item)
		{
			var fields={logo:"habtamu-logo-final.svg",customer_name:"",telephone_no:"",email:"",address:"",establishment:"",company_type:""};
			for(var i in fields)
			{
				if(typeof(item[i])=="undefined")
				{
					item[i]=fields[i];
				}
			}
			 return CustomerService.save(item);
		}
		
		CustomerManager.prototype.newCustomer=function()
		{
			return this.editedCustomer={logo:"habtamu-logo-final.svg"}
		}
		
		CustomerManager.prototype.readDetail=function(id)
		{
			return CustomerService.readDetailById(id);
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
	 		.then(function(sr){_customerManager.customersList=sr; return sr;});
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
		var CustomerManagerFactory={create:function(options){return new CustomerManager(options)}};
		//console.log("/n-----------------------------------------------CustomerManager Factory");
		return CustomerManagerFactory;
		
		}])
             
 }(window.angular));