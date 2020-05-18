var bmToolsDependencies={
			"bm.tools":[
						,'app/Tools/content/ToolsController.js'
						,'app/Tools/content/tools.Services.js'
						,'app/Tools/content/WebContent/WebContentController.js'
               			,'app/Tools/content/WebContent/WebContent.Services.js'
						
						]
					};
					
addDependencyToApp(bmToolsDependencies);

toolRoutes={
			'app.tools':
				{
					url: '/tools'
					,data : { title: 'Tools'}
					,template:"<div ui-view></div>"
					//,templateUrl: 'app/crud/Customer/content/CustomerList.php'
					,resolve: ["bm.tools"]
					//,controller: 'CustomerAppController'
				}
			,'app.tools.web_content':
				{
					url: '/web_content'
					,data : { title: 'Tools'}
					//,template:"TOOLs<div ui-view></div>"
					,templateUrl: 'app/Tools/content/WebContent/WebContentList.php'
					,resolve: ["bm.tools"]
					,controller: 'WebContentController'
				}	
			,'app.tools.web_contentEdit': 
            	{url: '/web_content/{web_content_id}'
            	,controller: 'WebContentController'
            	,resolve: ["bm.tools","summernote"]
            	,data : { title: 'Web Content' }
                ,templateUrl: 'app/Tools/content/WebContent/WebContentEdit.php'}

			
			
			};	
					
   addRoutesToApp(toolRoutes);