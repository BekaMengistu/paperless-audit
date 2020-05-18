(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "FormFieldValueService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/FormFieldValueService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormFieldValueService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormFieldValueService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormFieldValueService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("FormFieldValueManager",["FormFieldValueService","DataImportManager",
		function(FormFieldValueService,DataImportManager){
		
		
		function FormFieldValueManager(options)
		{
			this.form_field_valueList=[{}];
			this.editedFormFieldValue="";
		}
		FormFieldValueManager.prototype.editPath={url:"app.crud.form_field_valueEdit",id:"form_field_value_id"};
		FormFieldValueManager.prototype.listPath={url:"app.crud.form_field_value"};
		
		FormFieldValueManager.prototype.formData={
				 	list:{title:"Form Field Values"
                    		,subTitle:"List of Form Field Values"
                            ,prefix:"form_field_value",headerStyle:"dker"}
                            
					,detail:{title:"Form Field Value Detail"
                    	,subTitle:"Edit Form Field Value"
                        ,prefix:"form_field_value",headerStyle:"dker"}
					}
		FormFieldValueManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.form_field_valuesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="form_field_value";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		FormFieldValueManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        FormFieldValueManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		FormFieldValueManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		FormFieldValueManager.prototype.saveItem=function(item)
		{
			var _FormFieldValueManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_FormFieldValueManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		FormFieldValueManager.prototype.loadData=function(id)
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
		
		FormFieldValueManager.prototype.save=function(item)
		{
			 return FormFieldValueService.save(item);
		}
		
		FormFieldValueManager.prototype.newFormFieldValue=function()
		{
			return this.editedFormFieldValue={}
		}
        
		FormFieldValueManager.prototype.newItem=function()
		{
			return FormFieldValueService.readNew({});
		}

		FormFieldValueManager.prototype.readDetail=function(id)
		{
			return FormFieldValueService.readDetailById(id);
		}
        
        FormFieldValueManager.prototype.loadNew=function(params)
		{
			var _FormFieldValueManager=this;
			return this.newItem()
	 		.then(function(sr){return _FormFieldValueManager.editedFormFieldValue=sr});
		}
        
		FormFieldValueManager.prototype.loadDetail=function(id)
		{
			var _FormFieldValueManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _FormFieldValueManager.editedFormFieldValue=sr});
		}
		
		FormFieldValueManager.prototype.readList=function()
		{
			return FormFieldValueService.readAll();
		}
		
		FormFieldValueManager.prototype.loadList=function()
		{
			//var vm=this;
			var _form_field_valueManager=this;
			return this.readList()
	 		.then(function(sr){return _form_field_valueManager.form_field_valuesList=sr; return sr;});
		}
		
		FormFieldValueManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _FormFieldValueManager=this;
	 		FormFieldValueService.delete(id)
			.then(_FormFieldValueManager.readList)
	 		.then(function(sr){_FormFieldValueManager.form_field_valuesList=sr});
     	}
		var FormFieldValueManagerFactory={
        	create:function(options)
            	{
                	var _FormFieldValueManager=new FormFieldValueManager(options);
					for(var i in options)
					{
						_FormFieldValueManager[i]=options[i];
					}
					_FormFieldValueManager.buildUploader();
					return _FormFieldValueManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------FormFieldValueManager Factory");
		return FormFieldValueManagerFactory;
		
		}])
             
 }(window.angular));