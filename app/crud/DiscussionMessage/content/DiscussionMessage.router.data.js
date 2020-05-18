var bmCrudDiscussionMessageDependencies={
			"bm.crud.discussion_message":[
						'app/crud/DiscussionMessage/content/DiscussionMessageController.js'
               			,'app/crud/DiscussionMessage/content/DiscussionMessage.Services.js'
						]};
					
addDependencyToApp(bmCrudDiscussionMessageDependencies);

var AppCrudDiscussionMessageRoutes={
			'app.crud.discussion_message': 
            	{url: '/discussion_message', controller: 'DiscussionMessageController'
            	,resolve:["bm.crud.discussion_message"]
            	,data : { title: 'Discussion Message' }
                ,templateUrl: 'app/crud/DiscussionMessage/content/DiscussionMessageList.php'
             	}	
            
			,'app.crud.discussion_messageEdit': 
            	{url: '/discussion_message/{discussion_message_id}'
            	,controller: 'DiscussionMessageController'
            	,resolve: 
                	["bm.crud.discussion_message"]
            	,data : { title: 'Discussion Message' }
                ,templateUrl: 'app/crud/DiscussionMessage/content/DiscussionMessageEdit.php'}

			};
  addRoutesToApp(AppCrudDiscussionMessageRoutes);