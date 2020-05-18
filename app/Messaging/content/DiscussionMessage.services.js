(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "DiscussionMessageService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/DiscussionMessageService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DiscussionMessageService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DiscussionMessageService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DiscussionMessageService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			,readMessagesForDiscussion : function(id){return excuteService($q,$http,"api/MessagingService/readMessagesForDiscussion/" + id, {},"get");}
			};
	})	
	.factory("DiscussionMessageManager",["DiscussionMessageService","DataImportManager",
		function(DiscussionMessageService,DataImportManager){
		
		
		function DiscussionMessageManager(options)
		{
			this.discussion_messageList=[{}];
			this.editedDiscussionMessage="";
		}
		DiscussionMessageManager.prototype.editPath={url:"app.crud.discussion_messageEdit",id:"discussion_message_id"};
		DiscussionMessageManager.prototype.listPath={url:"app.crud.discussion_message"};
		
		DiscussionMessageManager.prototype.formData={
				 	list:{title:"Discussion Messages"
                    		,subTitle:"List of Discussion Messages"
                            ,prefix:"discussion_message",headerStyle:"dker"}
                            
					,detail:{title:"Discussion Message Detail"
                    	,subTitle:"Edit Discussion Message"
                        ,prefix:"discussion_message",headerStyle:"dker"}
					}
		DiscussionMessageManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.discussion_messagesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="discussion_message";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
		DiscussionMessageManager.prototype.loadMessagesForDiscussion=function(id)
		{
			//var vm=this;
			var _discussion_messageManager=this;
			return DiscussionMessageService.readMessagesForDiscussion(id)
	 		.then(function(sr){_discussion_messageManager.discussion_messagesList=sr; return sr;});
		}
        
		DiscussionMessageManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        DiscussionMessageManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		DiscussionMessageManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		DiscussionMessageManager.prototype.saveItem=function(item)
		{
			var _DiscussionMessageManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_DiscussionMessageManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		DiscussionMessageManager.prototype.loadData=function(id)
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
		
		DiscussionMessageManager.prototype.save=function(item)
		{
			 return DiscussionMessageService.save(item);
		}
		
		DiscussionMessageManager.prototype.newDiscussionMessage=function()
		{
			return this.editedDiscussionMessage={}
		}
        
		DiscussionMessageManager.prototype.newItem=function()
		{
			return DiscussionMessageService.readNew({});
		}

		DiscussionMessageManager.prototype.readDetail=function(id)
		{
			return DiscussionMessageService.readDetailById(id);
		}
        
        DiscussionMessageManager.prototype.loadNew=function(params)
		{
			var _DiscussionMessageManager=this;
			return this.newItem()
	 		.then(function(sr){_DiscussionMessageManager.editedDiscussionMessage=sr});
		}
        
		DiscussionMessageManager.prototype.loadDetail=function(id)
		{
			var _DiscussionMessageManager=this;
			return this.readDetail(id)
	 		.then(function(sr){_DiscussionMessageManager.editedDiscussionMessage=sr});
		}
		
		DiscussionMessageManager.prototype.readList=function()
		{
			return DiscussionMessageService.readAll();
		}
		
		DiscussionMessageManager.prototype.loadList=function()
		{
			//var vm=this;
			var _discussion_messageManager=this;
			return this.readList()
	 		.then(function(sr){_discussion_messageManager.discussion_messagesList=sr; return sr;});
		}
		
		DiscussionMessageManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _DiscussionMessageManager=this;
	 		DiscussionMessageService.delete(id)
			.then(_DiscussionMessageManager.readList)
	 		.then(function(sr){_DiscussionMessageManager.discussion_messagesList=sr});
     	}
		var DiscussionMessageManagerFactory={
        	create:function(options)
            	{
                	var _DiscussionMessageManager=new DiscussionMessageManager(options);
					for(var i in options)
					{
						_DiscussionMessageManager[i]=options[i];
					}
					_DiscussionMessageManager.buildUploader();
					return _DiscussionMessageManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------DiscussionMessageManager Factory");
		return DiscussionMessageManagerFactory;
		
		}])
             
 }(window.angular));