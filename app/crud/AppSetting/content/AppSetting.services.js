(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AppSettingService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AppSettingService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AppSettingService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AppSettingService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AppSettingService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AppSettingManager",["AppSettingService","DataImportManager",
		function(AppSettingService,DataImportManager){
		
		
		function AppSettingManager(options)
		{
			this.app_settingList=[{}];
			this.editedAppSetting="";
		}
		AppSettingManager.prototype.editPath={url:"app.crud.app_settingEdit",id:"app_setting_id"};
		AppSettingManager.prototype.listPath={url:"app.crud.app_setting"};
		
		AppSettingManager.prototype.formData={
				 	list:{title:"App Settings"
                    		,subTitle:"List of App Settings"
                            ,prefix:"app_setting",headerStyle:"dker"}
                            
					,detail:{title:"App Setting Detail"
                    	,subTitle:"Edit App Setting"
                        ,prefix:"app_setting",headerStyle:"dker"}
					}
		AppSettingManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.app_settingsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="app_setting";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AppSettingManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AppSettingManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AppSettingManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AppSettingManager.prototype.saveItem=function(item)
		{
			var _AppSettingManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AppSettingManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AppSettingManager.prototype.loadData=function(id)
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
		
		AppSettingManager.prototype.save=function(item)
		{
			 return AppSettingService.save(item);
		}
		
		AppSettingManager.prototype.newAppSetting=function()
		{
			return this.editedAppSetting={}
		}
        
		AppSettingManager.prototype.newItem=function()
		{
			return AppSettingService.readNew({});
		}

		AppSettingManager.prototype.readDetail=function(id)
		{
			return AppSettingService.readDetailById(id);
		}
        
        AppSettingManager.prototype.loadNew=function(params)
		{
			var _AppSettingManager=this;
			return this.newItem()
	 		.then(function(sr){return _AppSettingManager.editedAppSetting=sr});
		}
        
		AppSettingManager.prototype.loadDetail=function(id)
		{
			var _AppSettingManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AppSettingManager.editedAppSetting=sr});
		}
		
		AppSettingManager.prototype.readList=function()
		{
			return AppSettingService.readAll();
		}
		
		AppSettingManager.prototype.loadList=function()
		{
			//var vm=this;
			var _app_settingManager=this;
			return this.readList()
	 		.then(function(sr){return _app_settingManager.app_settingsList=sr; return sr;});
		}
		
		AppSettingManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AppSettingManager=this;
	 		AppSettingService.delete(id)
			.then(_AppSettingManager.readList)
	 		.then(function(sr){_AppSettingManager.app_settingsList=sr});
     	}
		var AppSettingManagerFactory={
        	create:function(options)
            	{
                	var _AppSettingManager=new AppSettingManager(options);
					for(var i in options)
					{
						_AppSettingManager[i]=options[i];
					}
					_AppSettingManager.buildUploader();
					return _AppSettingManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AppSettingManager Factory");
		return AppSettingManagerFactory;
		
		}])
             
 }(window.angular));