(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "FormTemplateService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/FormTemplateService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormTemplateService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormTemplateService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormTemplateService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("FormTemplateManager",["FormTemplateService","DataImportManager",
		function(FormTemplateService,DataImportManager){
		
		
		function FormTemplateManager(options)
		{
			this.form_templateList=[{}];
			this.editedFormTemplate="";
		}
		FormTemplateManager.prototype.editPath={url:"app.crud.form_templateEdit",id:"form_template_id"};
		FormTemplateManager.prototype.listPath={url:"app.crud.form_template"};
		
		FormTemplateManager.prototype.formData={
				 	list:{title:"Form Templates"
                    		,subTitle:"List of Form Templates"
                            ,prefix:"form_template",headerStyle:"dker"}
                            
					,detail:{title:"Form Template Detail"
                    	,subTitle:"Edit Form Template"
                        ,prefix:"form_template",headerStyle:"dker"}
					}
		FormTemplateManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.form_templatesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="form_template";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		FormTemplateManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        FormTemplateManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		FormTemplateManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		FormTemplateManager.prototype.saveItem=function(item)
		{
			var _FormTemplateManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_FormTemplateManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		FormTemplateManager.prototype.loadData=function(id)
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
		
		FormTemplateManager.prototype.save=function(item)
		{
			 return FormTemplateService.save(item);
		}
		
		FormTemplateManager.prototype.newFormTemplate=function()
		{
			return this.editedFormTemplate={}
		}
        
		FormTemplateManager.prototype.newItem=function()
		{
			return FormTemplateService.readNew({});
		}

		FormTemplateManager.prototype.readDetail=function(id)
		{
			return FormTemplateService.readDetailById(id);
		}
        
        FormTemplateManager.prototype.loadNew=function(params)
		{
			var _FormTemplateManager=this;
			return this.newItem()
	 		.then(function(sr){return _FormTemplateManager.editedFormTemplate=sr});
		}
        
		FormTemplateManager.prototype.loadDetail=function(id)
		{
			var _FormTemplateManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _FormTemplateManager.editedFormTemplate=sr});
		}
		
		FormTemplateManager.prototype.readList=function()
		{
			return FormTemplateService.readAll();
		}
		
		FormTemplateManager.prototype.loadList=function()
		{
			//var vm=this;
			var _form_templateManager=this;
			return this.readList()
	 		.then(function(sr){return _form_templateManager.form_templatesList=sr; return sr;});
		}
		
		FormTemplateManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _FormTemplateManager=this;
	 		FormTemplateService.delete(id)
			.then(_FormTemplateManager.readList)
	 		.then(function(sr){_FormTemplateManager.form_templatesList=sr});
     	}
		var FormTemplateManagerFactory={
        	create:function(options)
            	{
                	var _FormTemplateManager=new FormTemplateManager(options);
					for(var i in options)
					{
						_FormTemplateManager[i]=options[i];
					}
					_FormTemplateManager.buildUploader();
					return _FormTemplateManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------FormTemplateManager Factory");
		return FormTemplateManagerFactory;
		
		}])
             
 }(window.angular));