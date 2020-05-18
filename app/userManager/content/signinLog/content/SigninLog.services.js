(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "SigninLogService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/SigninLogService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/SigninLogService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/SigninLogService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/SigninLogService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("SigninLogManager",["SigninLogService","DataImportManager",
		function(SigninLogService,DataImportManager){
		
		
		function SigninLogManager(options)
		{
			this.signin_logList=[{}];
			this.editedSigninLog="";
		}
		SigninLogManager.prototype.editPath={url:"app.crud.signin_logEdit",id:"signin_log_id"};
		SigninLogManager.prototype.listPath={url:"app.crud.signin_log"};
		
		SigninLogManager.prototype.formData={
				 	list:{title:"Signin Logs"
                    		,subTitle:"List of Signin Logs"
                            ,prefix:"signin_log",headerStyle:"dker"}
                            
					,detail:{title:"Signin Log Detail"
                    	,subTitle:"Edit Signin Log"
                        ,prefix:"signin_log",headerStyle:"dker"}
					}
		SigninLogManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.signin_logsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="signin_log";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		SigninLogManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        SigninLogManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		SigninLogManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		SigninLogManager.prototype.saveItem=function(item)
		{
			var _SigninLogManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_SigninLogManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		SigninLogManager.prototype.loadData=function(id)
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
		
		SigninLogManager.prototype.save=function(item)
		{
			 return SigninLogService.save(item);
		}
		
		SigninLogManager.prototype.newSigninLog=function()
		{
			return this.editedSigninLog={}
		}
        
		SigninLogManager.prototype.newItem=function()
		{
			return SigninLogService.readNew({});
		}

		SigninLogManager.prototype.readDetail=function(id)
		{
			return SigninLogService.readDetailById(id);
		}
        
        SigninLogManager.prototype.loadNew=function(params)
		{
			var _SigninLogManager=this;
			return this.newItem()
	 		.then(function(sr){return _SigninLogManager.editedSigninLog=sr});
		}
        
		SigninLogManager.prototype.loadDetail=function(id)
		{
			var _SigninLogManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _SigninLogManager.editedSigninLog=sr});
		}
		
		SigninLogManager.prototype.readList=function()
		{
			return SigninLogService.readAll();
		}
		
		SigninLogManager.prototype.loadList=function()
		{
			//var vm=this;
			var _signin_logManager=this;
			return this.readList()
	 		.then(function(sr){return _signin_logManager.signin_logsList=sr; return sr;});
		}
		
		SigninLogManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _SigninLogManager=this;
	 		SigninLogService.delete(id)
			.then(_SigninLogManager.readList)
	 		.then(function(sr){_SigninLogManager.signin_logsList=sr});
     	}
		var SigninLogManagerFactory={
        	create:function(options)
            	{
                	var _SigninLogManager=new SigninLogManager(options);
					for(var i in options)
					{
						_SigninLogManager[i]=options[i];
					}
					_SigninLogManager.buildUploader();
					return _SigninLogManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------SigninLogManager Factory");
		return SigninLogManagerFactory;
		
		}])
             
 }(window.angular));