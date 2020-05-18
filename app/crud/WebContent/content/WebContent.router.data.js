var bmCrudWebContentDependencies={
			"bm.crud.web_content":[
						'app/crud/WebContent/content/WebContentController.js'
               			,'app/crud/WebContent/content/WebContent.Services.js'
						]};
					
addDependencyToApp(bmCrudWebContentDependencies);

var AppCrudWebContentRoutes={
			'app.crud.web_content': 
            	{url: '/web_content', controller: 'WebContentController'
            	,resolve:["bm.crud.web_content"]
            	,data : { title: 'Web Content' }
                ,templateUrl: 'app/crud/WebContent/content/WebContentList.php'
             	}	
            
			,'app.crud.web_contentEdit': 
            	{url: '/web_content/{web_content_id}'
            	,controller: 'WebContentController'
            	,resolve: 
                	["bm.crud.web_content"]
            	,data : { title: 'Web Content' }
                ,templateUrl: 'app/crud/WebContent/content/WebContentEdit.php'}

			};
  addRoutesToApp(AppCrudWebContentRoutes);