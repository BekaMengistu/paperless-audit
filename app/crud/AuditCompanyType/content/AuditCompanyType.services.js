(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditCompanyTypeService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditCompanyTypeService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditCompanyTypeService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditCompanyTypeService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditCompanyTypeService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AuditCompanyTypeManager",["AuditCompanyTypeService","DataImportManager",
		function(AuditCompanyTypeService,DataImportManager){
		
		
		function AuditCompanyTypeManager(options)
		{
			this.audit_company_typeList=[{}];
			this.editedAuditCompanyType="";
		}
		AuditCompanyTypeManager.prototype.editPath={url:"app.crud.audit_company_typeEdit",id:"audit_company_type_id"};
		AuditCompanyTypeManager.prototype.listPath={url:"app.crud.audit_company_type"};
		
		AuditCompanyTypeManager.prototype.formData={
				 	list:{title:"Audit Company Types"
                    		,subTitle:"List of Audit Company Types"
                            ,prefix:"audit_company_type",headerStyle:"dker"}
                            
					,detail:{title:"Audit Company Type Detail"
                    	,subTitle:"Edit Audit Company Type"
                        ,prefix:"audit_company_type",headerStyle:"dker"}
					}
		AuditCompanyTypeManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_company_typesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_company_type";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AuditCompanyTypeManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditCompanyTypeManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditCompanyTypeManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditCompanyTypeManager.prototype.saveItem=function(item)
		{
			var _AuditCompanyTypeManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditCompanyTypeManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditCompanyTypeManager.prototype.loadData=function(id)
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
		
		AuditCompanyTypeManager.prototype.save=function(item)
		{
			 return AuditCompanyTypeService.save(item);
		}
		
		AuditCompanyTypeManager.prototype.newAuditCompanyType=function()
		{
			return this.editedAuditCompanyType={}
		}
        
		AuditCompanyTypeManager.prototype.newItem=function()
		{
			return AuditCompanyTypeService.readNew({});
		}

		AuditCompanyTypeManager.prototype.readDetail=function(id)
		{
			return AuditCompanyTypeService.readDetailById(id);
		}
        
        AuditCompanyTypeManager.prototype.loadNew=function(params)
		{
			var _AuditCompanyTypeManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditCompanyTypeManager.editedAuditCompanyType=sr});
		}
        
		AuditCompanyTypeManager.prototype.loadDetail=function(id)
		{
			var _AuditCompanyTypeManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditCompanyTypeManager.editedAuditCompanyType=sr});
		}
		
		AuditCompanyTypeManager.prototype.readList=function()
		{
			return AuditCompanyTypeService.readAll();
		}
		
		AuditCompanyTypeManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_company_typeManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_company_typeManager.audit_company_typesList=sr; return sr;});
		}
		
		AuditCompanyTypeManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditCompanyTypeManager=this;
	 		AuditCompanyTypeService.delete(id)
			.then(_AuditCompanyTypeManager.readList)
	 		.then(function(sr){_AuditCompanyTypeManager.audit_company_typesList=sr});
     	}
		var AuditCompanyTypeManagerFactory={
        	create:function(options)
            	{
                	var _AuditCompanyTypeManager=new AuditCompanyTypeManager(options);
					for(var i in options)
					{
						_AuditCompanyTypeManager[i]=options[i];
					}
					_AuditCompanyTypeManager.buildUploader();
					return _AuditCompanyTypeManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditCompanyTypeManager Factory");
		return AuditCompanyTypeManagerFactory;
		
		}])
             
 }(window.angular));