(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "WebContentService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/WebContentService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/WebContentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/WebContentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/WebContentService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("WebContentManager",["WebContentService","DataImportManager",
		function(WebContentService,DataImportManager){
		
		
		function WebContentManager(options)
		{
			this.web_contentList=[{}];
			this.editedWebContent="";
		}
		WebContentManager.prototype.editPath={url:"app.crud.web_contentEdit",id:"web_content_id"};
		WebContentManager.prototype.listPath={url:"app.crud.web_content"};
		
		WebContentManager.prototype.formData={
				 	list:{title:"Web Contents"
                    		,subTitle:"List of Web Contents"
                            ,prefix:"web_content",headerStyle:"dker"}
                            
					,detail:{title:"Web Content Detail"
                    	,subTitle:"Edit Web Content"
                        ,prefix:"web_content",headerStyle:"dker"}
					}
		WebContentManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.web_contentsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="web_content";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		WebContentManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        WebContentManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		WebContentManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		WebContentManager.prototype.saveItem=function(item)
		{
			var _WebContentManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_WebContentManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		WebContentManager.prototype.loadData=function(id)
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
		
		WebContentManager.prototype.save=function(item)
		{
			 return WebContentService.save(item);
		}
		
		WebContentManager.prototype.newWebContent=function()
		{
			return this.editedWebContent={}
		}
        
		WebContentManager.prototype.newItem=function()
		{
			return WebContentService.readNew({});
		}

		WebContentManager.prototype.readDetail=function(id)
		{
			return WebContentService.readDetailById(id);
		}
        
        WebContentManager.prototype.loadNew=function(params)
		{
			var _WebContentManager=this;
			return this.newItem()
	 		.then(function(sr){return _WebContentManager.editedWebContent=sr});
		}
        
		WebContentManager.prototype.loadDetail=function(id)
		{
			var _WebContentManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _WebContentManager.editedWebContent=sr});
		}
		
		WebContentManager.prototype.readList=function()
		{
			return WebContentService.readAll();
		}
		
		WebContentManager.prototype.loadList=function()
		{
			//var vm=this;
			var _web_contentManager=this;
			return this.readList()
	 		.then(function(sr){return _web_contentManager.web_contentsList=sr; return sr;});
		}
		
		WebContentManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _WebContentManager=this;
	 		WebContentService.delete(id)
			.then(_WebContentManager.readList)
	 		.then(function(sr){_WebContentManager.web_contentsList=sr});
     	}
		var WebContentManagerFactory={
        	create:function(options)
            	{
                	var _WebContentManager=new WebContentManager(options);
					for(var i in options)
					{
						_WebContentManager[i]=options[i];
					}
					_WebContentManager.buildUploader();
					return _WebContentManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------WebContentManager Factory");
		return WebContentManagerFactory;
		
		}])
             
 }(window.angular));