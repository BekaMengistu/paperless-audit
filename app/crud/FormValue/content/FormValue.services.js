(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "FormValueService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/FormValueService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormValueService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormValueService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormValueService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("FormValueManager",["FormValueService","DataImportManager",
		function(FormValueService,DataImportManager){
		
		
		function FormValueManager(options)
		{
			this.form_valueList=[{}];
			this.editedFormValue="";
		}
		FormValueManager.prototype.editPath={url:"app.crud.form_valueEdit",id:"form_value_id"};
		FormValueManager.prototype.listPath={url:"app.crud.form_value"};
		
		FormValueManager.prototype.formData={
				 	list:{title:"Form Values"
                    		,subTitle:"List of Form Values"
                            ,prefix:"form_value",headerStyle:"dker"}
                            
					,detail:{title:"Form Value Detail"
                    	,subTitle:"Edit Form Value"
                        ,prefix:"form_value",headerStyle:"dker"}
					}
		FormValueManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.form_valuesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="form_value";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		FormValueManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        FormValueManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		FormValueManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		FormValueManager.prototype.saveItem=function(item)
		{
			var _FormValueManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_FormValueManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		FormValueManager.prototype.loadData=function(id)
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
		
		FormValueManager.prototype.save=function(item)
		{
			 return FormValueService.save(item);
		}
		
		FormValueManager.prototype.newFormValue=function()
		{
			return this.editedFormValue={}
		}
        
		FormValueManager.prototype.newItem=function()
		{
			return FormValueService.readNew({});
		}

		FormValueManager.prototype.readDetail=function(id)
		{
			return FormValueService.readDetailById(id);
		}
        
        FormValueManager.prototype.loadNew=function(params)
		{
			var _FormValueManager=this;
			return this.newItem()
	 		.then(function(sr){return _FormValueManager.editedFormValue=sr});
		}
        
		FormValueManager.prototype.loadDetail=function(id)
		{
			var _FormValueManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _FormValueManager.editedFormValue=sr});
		}
		
		FormValueManager.prototype.readList=function()
		{
			return FormValueService.readAll();
		}
		
		FormValueManager.prototype.loadList=function()
		{
			//var vm=this;
			var _form_valueManager=this;
			return this.readList()
	 		.then(function(sr){return _form_valueManager.form_valuesList=sr; return sr;});
		}
		
		FormValueManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _FormValueManager=this;
	 		FormValueService.delete(id)
			.then(_FormValueManager.readList)
	 		.then(function(sr){_FormValueManager.form_valuesList=sr});
     	}
		var FormValueManagerFactory={
        	create:function(options)
            	{
                	var _FormValueManager=new FormValueManager(options);
					for(var i in options)
					{
						_FormValueManager[i]=options[i];
					}
					_FormValueManager.buildUploader();
					return _FormValueManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------FormValueManager Factory");
		return FormValueManagerFactory;
		
		}])
             
 }(window.angular));