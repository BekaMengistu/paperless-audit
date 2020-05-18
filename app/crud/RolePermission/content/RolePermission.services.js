(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "RolePermissionService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/RolePermissionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/RolePermissionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/RolePermissionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/RolePermissionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("RolePermissionManager",["RolePermissionService","DataImportManager",
		function(RolePermissionService,DataImportManager){
		
		
		function RolePermissionManager(options)
		{
			this.role_permissionList=[{}];
			this.editedRolePermission="";
		}
		RolePermissionManager.prototype.editPath={url:"app.crud.role_permissionEdit",id:"role_permission_id"};
		RolePermissionManager.prototype.listPath={url:"app.crud.role_permission"};
		
		RolePermissionManager.prototype.formData={
				 	list:{title:"Role Permissions"
                    		,subTitle:"List of Role Permissions"
                            ,prefix:"role_permission",headerStyle:"dker"}
                            
					,detail:{title:"Role Permission Detail"
                    	,subTitle:"Edit Role Permission"
                        ,prefix:"role_permission",headerStyle:"dker"}
					}
		RolePermissionManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.role_permissionsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="role_permission";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		RolePermissionManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        RolePermissionManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		RolePermissionManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		RolePermissionManager.prototype.saveItem=function(item)
		{
			var _RolePermissionManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_RolePermissionManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		RolePermissionManager.prototype.loadData=function(id)
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
		
		RolePermissionManager.prototype.save=function(item)
		{
			 return RolePermissionService.save(item);
		}
		
		RolePermissionManager.prototype.newRolePermission=function()
		{
			return this.editedRolePermission={}
		}
        
		RolePermissionManager.prototype.newItem=function()
		{
			return RolePermissionService.readNew({});
		}

		RolePermissionManager.prototype.readDetail=function(id)
		{
			return RolePermissionService.readDetailById(id);
		}
        
        RolePermissionManager.prototype.loadNew=function(params)
		{
			var _RolePermissionManager=this;
			return this.newItem()
	 		.then(function(sr){return _RolePermissionManager.editedRolePermission=sr});
		}
        
		RolePermissionManager.prototype.loadDetail=function(id)
		{
			var _RolePermissionManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _RolePermissionManager.editedRolePermission=sr});
		}
		
		RolePermissionManager.prototype.readList=function()
		{
			return RolePermissionService.readAll();
		}
		
		RolePermissionManager.prototype.loadList=function()
		{
			//var vm=this;
			var _role_permissionManager=this;
			return this.readList()
	 		.then(function(sr){return _role_permissionManager.role_permissionsList=sr; return sr;});
		}
		
		RolePermissionManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _RolePermissionManager=this;
	 		RolePermissionService.delete(id)
			.then(_RolePermissionManager.readList)
	 		.then(function(sr){_RolePermissionManager.role_permissionsList=sr});
     	}
		var RolePermissionManagerFactory={
        	create:function(options)
            	{
                	var _RolePermissionManager=new RolePermissionManager(options);
					for(var i in options)
					{
						_RolePermissionManager[i]=options[i];
					}
					_RolePermissionManager.buildUploader();
					return _RolePermissionManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------RolePermissionManager Factory");
		return RolePermissionManagerFactory;
		
		}])
             
 }(window.angular));