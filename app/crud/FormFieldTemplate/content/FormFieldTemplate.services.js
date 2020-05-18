(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "FormFieldTemplateService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/FormFieldTemplateService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormFieldTemplateService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormFieldTemplateService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormFieldTemplateService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("FormFieldTemplateManager",["FormFieldTemplateService","DataImportManager",
		function(FormFieldTemplateService,DataImportManager){
		
		
		function FormFieldTemplateManager(options)
		{
			this.form_field_templateList=[{}];
			this.editedFormFieldTemplate="";
		}
		FormFieldTemplateManager.prototype.editPath={url:"app.crud.form_field_templateEdit",id:"form_field_template_id"};
		FormFieldTemplateManager.prototype.listPath={url:"app.crud.form_field_template"};
		
		FormFieldTemplateManager.prototype.formData={
				 	list:{title:"Form Field Templates"
                    		,subTitle:"List of Form Field Templates"
                            ,prefix:"form_field_template",headerStyle:"dker"}
                            
					,detail:{title:"Form Field Template Detail"
                    	,subTitle:"Edit Form Field Template"
                        ,prefix:"form_field_template",headerStyle:"dker"}
					}
		FormFieldTemplateManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.form_field_templatesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="form_field_template";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		FormFieldTemplateManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        FormFieldTemplateManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		FormFieldTemplateManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		FormFieldTemplateManager.prototype.saveItem=function(item)
		{
			var _FormFieldTemplateManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_FormFieldTemplateManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		FormFieldTemplateManager.prototype.loadData=function(id)
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
		
		FormFieldTemplateManager.prototype.save=function(item)
		{
			 return FormFieldTemplateService.save(item);
		}
		
		FormFieldTemplateManager.prototype.newFormFieldTemplate=function()
		{
			return this.editedFormFieldTemplate={}
		}
        
		FormFieldTemplateManager.prototype.newItem=function()
		{
			return FormFieldTemplateService.readNew({});
		}

		FormFieldTemplateManager.prototype.readDetail=function(id)
		{
			return FormFieldTemplateService.readDetailById(id);
		}
        
        FormFieldTemplateManager.prototype.loadNew=function(params)
		{
			var _FormFieldTemplateManager=this;
			return this.newItem()
	 		.then(function(sr){return _FormFieldTemplateManager.editedFormFieldTemplate=sr});
		}
        
		FormFieldTemplateManager.prototype.loadDetail=function(id)
		{
			var _FormFieldTemplateManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _FormFieldTemplateManager.editedFormFieldTemplate=sr});
		}
		
		FormFieldTemplateManager.prototype.readList=function()
		{
			return FormFieldTemplateService.readAll();
		}
		
		FormFieldTemplateManager.prototype.loadList=function()
		{
			//var vm=this;
			var _form_field_templateManager=this;
			return this.readList()
	 		.then(function(sr){return _form_field_templateManager.form_field_templatesList=sr; return sr;});
		}
		
		FormFieldTemplateManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _FormFieldTemplateManager=this;
	 		FormFieldTemplateService.delete(id)
			.then(_FormFieldTemplateManager.readList)
	 		.then(function(sr){_FormFieldTemplateManager.form_field_templatesList=sr});
     	}
		var FormFieldTemplateManagerFactory={
        	create:function(options)
            	{
                	var _FormFieldTemplateManager=new FormFieldTemplateManager(options);
					for(var i in options)
					{
						_FormFieldTemplateManager[i]=options[i];
					}
					_FormFieldTemplateManager.buildUploader();
					return _FormFieldTemplateManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------FormFieldTemplateManager Factory");
		return FormFieldTemplateManagerFactory;
		
		}])
             
 }(window.angular));