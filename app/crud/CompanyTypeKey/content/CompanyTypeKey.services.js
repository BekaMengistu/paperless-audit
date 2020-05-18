(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CompanyTypeKeyService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/CompanyTypeKeyService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/CompanyTypeKeyService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/CompanyTypeKeyService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/CompanyTypeKeyService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("CompanyTypeKeyManager",["CompanyTypeKeyService","DataImportManager",
		function(CompanyTypeKeyService,DataImportManager){
		
		
		function CompanyTypeKeyManager(options)
		{
			this.company_type_keyList=[{}];
			this.editedCompanyTypeKey="";
		}
		CompanyTypeKeyManager.prototype.editPath={url:"app.crud.company_type_keyEdit",id:"company_type_key_id"};
		CompanyTypeKeyManager.prototype.listPath={url:"app.crud.company_type_key"};
		
		CompanyTypeKeyManager.prototype.formData={
				 	list:{title:"Company Type Keys"
                    		,subTitle:"List of Company Type Keys"
                            ,prefix:"company_type_key",headerStyle:"dker"}
                            
					,detail:{title:"Company Type Key Detail"
                    	,subTitle:"Edit Company Type Key"
                        ,prefix:"company_type_key",headerStyle:"dker"}
					}
		CompanyTypeKeyManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.company_type_keysList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="company_type_key";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		CompanyTypeKeyManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        CompanyTypeKeyManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		CompanyTypeKeyManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		CompanyTypeKeyManager.prototype.saveItem=function(item)
		{
			var _CompanyTypeKeyManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_CompanyTypeKeyManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		CompanyTypeKeyManager.prototype.loadData=function(id)
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
		
		CompanyTypeKeyManager.prototype.save=function(item)
		{
			 return CompanyTypeKeyService.save(item);
		}
		
		CompanyTypeKeyManager.prototype.newCompanyTypeKey=function()
		{
			return this.editedCompanyTypeKey={}
		}
        
		CompanyTypeKeyManager.prototype.newItem=function()
		{
			return CompanyTypeKeyService.readNew({});
		}

		CompanyTypeKeyManager.prototype.readDetail=function(id)
		{
			return CompanyTypeKeyService.readDetailById(id);
		}
        
        CompanyTypeKeyManager.prototype.loadNew=function(params)
		{
			var _CompanyTypeKeyManager=this;
			return this.newItem()
	 		.then(function(sr){return _CompanyTypeKeyManager.editedCompanyTypeKey=sr});
		}
        
		CompanyTypeKeyManager.prototype.loadDetail=function(id)
		{
			var _CompanyTypeKeyManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _CompanyTypeKeyManager.editedCompanyTypeKey=sr});
		}
		
		CompanyTypeKeyManager.prototype.readList=function()
		{
			return CompanyTypeKeyService.readAll();
		}
		
		CompanyTypeKeyManager.prototype.loadList=function()
		{
			//var vm=this;
			var _company_type_keyManager=this;
			return this.readList()
	 		.then(function(sr){return _company_type_keyManager.company_type_keysList=sr; return sr;});
		}
		
		CompanyTypeKeyManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _CompanyTypeKeyManager=this;
	 		CompanyTypeKeyService.delete(id)
			.then(_CompanyTypeKeyManager.readList)
	 		.then(function(sr){_CompanyTypeKeyManager.company_type_keysList=sr});
     	}
		var CompanyTypeKeyManagerFactory={
        	create:function(options)
            	{
                	var _CompanyTypeKeyManager=new CompanyTypeKeyManager(options);
					for(var i in options)
					{
						_CompanyTypeKeyManager[i]=options[i];
					}
					_CompanyTypeKeyManager.buildUploader();
					return _CompanyTypeKeyManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------CompanyTypeKeyManager Factory");
		return CompanyTypeKeyManagerFactory;
		
		}])
             
 }(window.angular));