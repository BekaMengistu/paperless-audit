(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "UserRoleService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/UserRoleService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/UserRoleService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/UserRoleService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/UserRoleService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("UserRoleManager",["UserRoleService","DataImportManager",
		function(UserRoleService,DataImportManager){
		
		
		function UserRoleManager(options)
		{
			this.user_roleList=[{}];
			this.editedUserRole="";
		}
		UserRoleManager.prototype.editPath={url:"app.crud.user_roleEdit",id:"user_role_id"};
		UserRoleManager.prototype.listPath={url:"app.crud.user_role"};
		
		UserRoleManager.prototype.formData={
				 	list:{title:"User Roles"
                    		,subTitle:"List of User Roles"
                            ,prefix:"user_role",headerStyle:"dker"}
                            
					,detail:{title:"User Role Detail"
                    	,subTitle:"Edit User Role"
                        ,prefix:"user_role",headerStyle:"dker"}
					}
		UserRoleManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.user_rolesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="user_role";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		UserRoleManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        UserRoleManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		UserRoleManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		UserRoleManager.prototype.saveItem=function(item)
		{
			var _UserRoleManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_UserRoleManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		UserRoleManager.prototype.loadData=function(id)
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
		
		UserRoleManager.prototype.save=function(item)
		{
			 return UserRoleService.save(item);
		}
		
		UserRoleManager.prototype.newUserRole=function()
		{
			return this.editedUserRole={}
		}
        
		UserRoleManager.prototype.newItem=function()
		{
			return UserRoleService.readNew({});
		}

		UserRoleManager.prototype.readDetail=function(id)
		{
			return UserRoleService.readDetailById(id);
		}
        
        UserRoleManager.prototype.loadNew=function(params)
		{
			var _UserRoleManager=this;
			return this.newItem()
	 		.then(function(sr){return _UserRoleManager.editedUserRole=sr});
		}
        
		UserRoleManager.prototype.loadDetail=function(id)
		{
			var _UserRoleManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _UserRoleManager.editedUserRole=sr});
		}
		
		UserRoleManager.prototype.readList=function()
		{
			return UserRoleService.readAll();
		}
		
		UserRoleManager.prototype.loadList=function()
		{
			//var vm=this;
			var _user_roleManager=this;
			return this.readList()
	 		.then(function(sr){return _user_roleManager.user_rolesList=sr; return sr;});
		}
		
		UserRoleManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _UserRoleManager=this;
	 		UserRoleService.delete(id)
			.then(_UserRoleManager.readList)
	 		.then(function(sr){_UserRoleManager.user_rolesList=sr});
     	}
		var UserRoleManagerFactory={
        	create:function(options)
            	{
                	var _UserRoleManager=new UserRoleManager(options);
					for(var i in options)
					{
						_UserRoleManager[i]=options[i];
					}
					_UserRoleManager.buildUploader();
					return _UserRoleManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------UserRoleManager Factory");
		return UserRoleManagerFactory;
		
		}])
             
 }(window.angular));