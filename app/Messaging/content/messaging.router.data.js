var bmCustomerDependencies={
			"bm.messaging":[
						,'app/Messaging/content/MessagingController.js'
						,'app/Messaging/content/DiscussionMessage.Services.js'
						,'app/Messaging/content/Discussion.Services.js'
						,'app/Messaging/content/directive.bm.messaging.js'
						
						]
					};
					
addDependencyToApp(bmCustomerDependencies);

customerRoutes={
			'app.messaging':
				{
					url: '/messaging'
					,data : { title: 'Messaging'}
					,template:"<div ui-view></div>"
					//,templateUrl: 'app/crud/Customer/content/CustomerList.php'
					,resolve: ["bm.messaging"]
					//,controller: 'CustomerAppController'
				}
			,'app.messaging.lists': 
            	{url: '/lists'
            	,controller: 'MessagingController'
            	,resolve: ["bm.crud.user","bm.messaging"]
            	,data : { title: 'Discussion' }
				,templateUrl: 'app/Messaging/content/DiscussionList.php'
				}	
				
			,'app.messaging.detail': 
            	{url: '/{discussion_id}'
            	,controller: 'MessagingController'
            	,resolve: ["bm.crud.user","bm.messaging","summernote"]
            	,data : { title: 'Discussion' }
				,templateUrl: 'app/Messaging/content/DiscussionEdit.php'}	
				
			
			
			};	
					
   addRoutesToApp(customerRoutes);