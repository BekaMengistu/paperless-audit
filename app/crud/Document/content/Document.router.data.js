var bmCrudDocumentDependencies={
			"bm.crud.document":[
						'app/crud/Document/content/DocumentController.js'
               			,'app/crud/Document/content/Document.Services.js'
						]};
					
addDependencyToApp(bmCrudDocumentDependencies);

var AppCrudDocumentRoutes={
			'app.crud.document': 
            	{url: '/document', controller: 'DocumentController'
            	,resolve:["bm.crud.document"]
            	,data : { title: 'Document' }
                ,templateUrl: 'app/crud/Document/content/DocumentList.php'
             	}	
            
			,'app.crud.documentEdit': 
            	{url: '/document/{document_id}'
            	,controller: 'DocumentController'
            	,resolve: 
                	["bm.crud.document"]
            	,data : { title: 'Document' }
                ,templateUrl: 'app/crud/Document/content/DocumentEdit.php'}

			};
  addRoutesToApp(AppCrudDocumentRoutes);