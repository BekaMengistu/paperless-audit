(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AppPermissionService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AppPermissionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AppPermissionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AppPermissionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AppPermissionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AppPermissionManager",["AppPermissionService","DataImportManager",
		function(AppPermissionService,DataImportManager){
		
		
		function AppPermissionManager(options)
		{
			this.app_permissionList=[{}];
			this.editedAppPermission="";
		}
		AppPermissionManager.prototype.editPath={url:"app.crud.app_permissionEdit",id:"app_permission_id"};
		AppPermissionManager.prototype.listPath={url:"app.crud.app_permission"};
		
		AppPermissionManager.prototype.formData={
				 	list:{title:"App Permissions"
                    		,subTitle:"List of App Permissions"
                            ,prefix:"app_permission",headerStyle:"dker"}
                            
					,detail:{title:"App Permission Detail"
                    	,subTitle:"Edit App Permission"
                        ,prefix:"app_permission",headerStyle:"dker"}
					}
		AppPermissionManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.app_permissionsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="app_permission";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AppPermissionManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AppPermissionManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AppPermissionManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AppPermissionManager.prototype.saveItem=function(item)
		{
			var _AppPermissionManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AppPermissionManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AppPermissionManager.prototype.loadData=function(id)
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
		
		AppPermissionManager.prototype.save=function(item)
		{
			 return AppPermissionService.save(item);
		}
		
		AppPermissionManager.prototype.newAppPermission=function()
		{
			return this.editedAppPermission={}
		}
        
		AppPermissionManager.prototype.newItem=function()
		{
			return AppPermissionService.readNew({});
		}

		AppPermissionManager.prototype.readDetail=function(id)
		{
			return AppPermissionService.readDetailById(id);
		}
        
        AppPermissionManager.prototype.loadNew=function(params)
		{
			var _AppPermissionManager=this;
			return this.newItem()
	 		.then(function(sr){return _AppPermissionManager.editedAppPermission=sr});
		}
        
		AppPermissionManager.prototype.loadDetail=function(id)
		{
			var _AppPermissionManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AppPermissionManager.editedAppPermission=sr});
		}
		
		AppPermissionManager.prototype.readList=function()
		{
			return AppPermissionService.readAll();
		}
		
		AppPermissionManager.prototype.loadList=function()
		{
			//var vm=this;
			var _app_permissionManager=this;
			return this.readList()
	 		.then(function(sr){return _app_permissionManager.app_permissionsList=sr; return sr;});
		}
		
		AppPermissionManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AppPermissionManager=this;
	 		AppPermissionService.delete(id)
			.then(_AppPermissionManager.readList)
	 		.then(function(sr){_AppPermissionManager.app_permissionsList=sr});
     	}
		var AppPermissionManagerFactory={
        	create:function(options)
            	{
                	var _AppPermissionManager=new AppPermissionManager(options);
					for(var i in options)
					{
						_AppPermissionManager[i]=options[i];
					}
					_AppPermissionManager.buildUploader();
					return _AppPermissionManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AppPermissionManager Factory");
		return AppPermissionManagerFactory;
		
		}])
             
 }(window.angular));