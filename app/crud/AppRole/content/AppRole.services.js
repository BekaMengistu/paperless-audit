(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AppRoleService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AppRoleService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AppRoleService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AppRoleService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AppRoleService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AppRoleManager",["AppRoleService","DataImportManager",
		function(AppRoleService,DataImportManager){
		
		
		function AppRoleManager(options)
		{
			this.app_roleList=[{}];
			this.editedAppRole="";
		}
		AppRoleManager.prototype.editPath={url:"app.crud.app_roleEdit",id:"app_role_id"};
		AppRoleManager.prototype.listPath={url:"app.crud.app_role"};
		
		AppRoleManager.prototype.formData={
				 	list:{title:"App Roles"
                    		,subTitle:"List of App Roles"
                            ,prefix:"app_role",headerStyle:"dker"}
                            
					,detail:{title:"App Role Detail"
                    	,subTitle:"Edit App Role"
                        ,prefix:"app_role",headerStyle:"dker"}
					}
		AppRoleManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.app_rolesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="app_role";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AppRoleManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AppRoleManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AppRoleManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AppRoleManager.prototype.saveItem=function(item)
		{
			var _AppRoleManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AppRoleManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AppRoleManager.prototype.loadData=function(id)
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
		
		AppRoleManager.prototype.save=function(item)
		{
			 return AppRoleService.save(item);
		}
		
		AppRoleManager.prototype.newAppRole=function()
		{
			return this.editedAppRole={}
		}
        
		AppRoleManager.prototype.newItem=function()
		{
			return AppRoleService.readNew({});
		}

		AppRoleManager.prototype.readDetail=function(id)
		{
			return AppRoleService.readDetailById(id);
		}
        
        AppRoleManager.prototype.loadNew=function(params)
		{
			var _AppRoleManager=this;
			return this.newItem()
	 		.then(function(sr){return _AppRoleManager.editedAppRole=sr});
		}
        
		AppRoleManager.prototype.loadDetail=function(id)
		{
			var _AppRoleManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AppRoleManager.editedAppRole=sr});
		}
		
		AppRoleManager.prototype.readList=function()
		{
			return AppRoleService.readAll();
		}
		
		AppRoleManager.prototype.loadList=function()
		{
			//var vm=this;
			var _app_roleManager=this;
			return this.readList()
	 		.then(function(sr){return _app_roleManager.app_rolesList=sr; return sr;});
		}
		
		AppRoleManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AppRoleManager=this;
	 		AppRoleService.delete(id)
			.then(_AppRoleManager.readList)
	 		.then(function(sr){_AppRoleManager.app_rolesList=sr});
     	}
		var AppRoleManagerFactory={
        	create:function(options)
            	{
                	var _AppRoleManager=new AppRoleManager(options);
					for(var i in options)
					{
						_AppRoleManager[i]=options[i];
					}
					_AppRoleManager.buildUploader();
					return _AppRoleManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AppRoleManager Factory");
		return AppRoleManagerFactory;
		
		}])
             
 }(window.angular));