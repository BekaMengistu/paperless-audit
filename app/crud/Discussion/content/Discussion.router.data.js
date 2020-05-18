var bmCrudDiscussionDependencies={
			"bm.crud.discussion":[
						'app/crud/Discussion/content/DiscussionController.js'
               			,'app/crud/Discussion/content/Discussion.Services.js'
						]};
					
addDependencyToApp(bmCrudDiscussionDependencies);

var AppCrudDiscussionRoutes={
			'app.crud.discussion': 
            	{url: '/discussion', controller: 'DiscussionController'
            	,resolve:["bm.crud.discussion"]
            	,data : { title: 'Discussion' }
                ,templateUrl: 'app/crud/Discussion/content/DiscussionList.php'
             	}	
            
			,'app.crud.discussionEdit': 
            	{url: '/discussion/{discussion_id}'
            	,controller: 'DiscussionController'
            	,resolve: 
                	["bm.crud.discussion"]
            	,data : { title: 'Discussion' }
                ,templateUrl: 'app/crud/Discussion/content/DiscussionEdit.php'}

			};
  addRoutesToApp(AppCrudDiscussionRoutes);