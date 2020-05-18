(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "UserService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/UserService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/UserService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/UserService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/UserService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("UserManager",["UserService","DataImportManager",
		function(UserService,DataImportManager){
		
		
		function UserManager(options)
		{
			this.userList=[{}];
			this.editedUser="";
		}
		UserManager.prototype.editPath={url:"app.crud.userEdit",id:"user_id"};
		UserManager.prototype.listPath={url:"app.crud.user"};
		
		UserManager.prototype.formData={
				 	list:{title:"Users"
                    		,subTitle:"List of Users"
                            ,prefix:"user",headerStyle:"dker"}
                            
					,detail:{title:"User Detail"
                    	,subTitle:"Edit User"
                        ,prefix:"user",headerStyle:"dker"}
					}
		UserManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.usersList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="user";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		UserManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        UserManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		UserManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		UserManager.prototype.saveItem=function(item)
		{
			var _UserManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_UserManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		UserManager.prototype.loadData=function(id)
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
		
		UserManager.prototype.save=function(item)
		{
			 return UserService.save(item);
		}
		
		UserManager.prototype.newUser=function()
		{
			return this.editedUser={}
		}
        
		UserManager.prototype.newItem=function()
		{
			return UserService.readNew({});
		}

		UserManager.prototype.readDetail=function(id)
		{
			return UserService.readDetailById(id);
		}
        
        UserManager.prototype.loadNew=function(params)
		{
			var _UserManager=this;
			return this.newItem()
	 		.then(function(sr){return _UserManager.editedUser=sr});
		}
        
		UserManager.prototype.loadDetail=function(id)
		{
			var _UserManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _UserManager.editedUser=sr});
		}
		
		UserManager.prototype.readList=function()
		{
			return UserService.readAll();
		}
		
		UserManager.prototype.loadList=function()
		{
			//var vm=this;
			var _userManager=this;
			return this.readList()
	 		.then(function(sr){return _userManager.usersList=sr; return sr;});
		}
		
		UserManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _UserManager=this;
	 		UserService.delete(id)
			.then(_UserManager.readList)
	 		.then(function(sr){_UserManager.usersList=sr});
     	}
		var UserManagerFactory={
        	create:function(options)
            	{
                	var _UserManager=new UserManager(options);
					for(var i in options)
					{
						_UserManager[i]=options[i];
					}
					_UserManager.buildUploader();
					return _UserManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------UserManager Factory");
		return UserManagerFactory;
		
		}])
             
 }(window.angular));