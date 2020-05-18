(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "MessagingService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/DiscussionService/readAll/", {},"get");}
    		
			,readDetailById: function(id){return excuteService($q,$http,"api/MessagingService/readDiscussionDetailById/" + id, {},"get");}

			,readDiscussionForEntity: function(param){return excuteService($q,$http,"api/MessagingService/readDiscussionForEntity/", param,"post");}
			
    		,save : function(params){return excuteService($q,$http,"api/DiscussionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DiscussionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("DiscussionManager",["MessagingService","DataImportManager",
		function(DiscussionService,DataImportManager){
		
		
		function DiscussionManager(options)
		{
			this.discussionList=[{}];
			this.editedDiscussion="";
		}
		DiscussionManager.prototype.editPath={url:"app.crud.discussionEdit",id:"discussion_id"};
		DiscussionManager.prototype.listPath={url:"app.crud.discussion"};
		
		DiscussionManager.prototype.formData={
				 	list:{title:"Discussions"
                    		,subTitle:"List of Discussions"
                            ,prefix:"discussion",headerStyle:"dker"}
                            
					,detail:{title:"Discussion Detail"
                    	,subTitle:"Edit Discussion"
                        ,prefix:"discussion",headerStyle:"dker"}
					}
					
		DiscussionManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.discussionsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="discussion";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
		DiscussionManager.prototype.loadDiscussionForEntity=function(param)
		{
			var _DiscussionManager=this;
			return DiscussionService.readDiscussionForEntity(param)
	 		.then(function(sr){return _DiscussionManager.editedDiscussion=sr});
		}
        
		DiscussionManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        DiscussionManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		DiscussionManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		DiscussionManager.prototype.saveItem=function(item)
		{
			var _DiscussionManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_DiscussionManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		DiscussionManager.prototype.loadData=function(id)
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
		
		DiscussionManager.prototype.save=function(item)
		{
			 return DiscussionService.save(item);
		}
		
		DiscussionManager.prototype.newDiscussion=function()
		{
			return this.editedDiscussion={}
		}
        
		DiscussionManager.prototype.newItem=function()
		{
			return DiscussionService.readNew({});
		}

		DiscussionManager.prototype.readDetail=function(id)
		{
			return DiscussionService.readDetailById(id);
		}
        
        DiscussionManager.prototype.loadNew=function(params)
		{
			var _DiscussionManager=this;
			return this.newItem()
	 		.then(function(sr){_DiscussionManager.editedDiscussion=sr});
		}
        
		DiscussionManager.prototype.loadDetail=function(id)
		{
			var _DiscussionManager=this;
			return this.readDetail(id)
	 		.then(function(sr){_DiscussionManager.editedDiscussion=sr});
		}
		
		DiscussionManager.prototype.readList=function()
		{
			return DiscussionService.readAll();
		}
		
		DiscussionManager.prototype.loadList=function()
		{
			//var vm=this;
			var _discussionManager=this;
			return this.readList()
	 		.then(function(sr){_discussionManager.discussionsList=sr; return sr;});
		}
		
		DiscussionManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _DiscussionManager=this;
	 		DiscussionService.delete(id)
			.then(_DiscussionManager.readList)
	 		.then(function(sr){_DiscussionManager.discussionsList=sr});
     	}
		var DiscussionManagerFactory={
        	create:function(options)
            	{
                	var _DiscussionManager=new DiscussionManager(options);
					for(var i in options)
					{
						_DiscussionManager[i]=options[i];
					}
					_DiscussionManager.buildUploader();
					return _DiscussionManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------DiscussionManager Factory");
		return DiscussionManagerFactory;
		
		}])
             
 }(window.angular));