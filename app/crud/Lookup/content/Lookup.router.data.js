var bmCrudLookupDependencies={
			"bm.crud.lookup":[
						'app/crud/Lookup/content/LookupController.js'
               			,'app/crud/Lookup/content/Lookup.Services.js'
						]};
					
addDependencyToApp(bmCrudLookupDependencies);

var AppCrudLookupRoutes={
			'app.crud.lookup': 
            	{url: '/lookup', controller: 'LookupController'
            	,resolve:["bm.crud.lookup"]
            	,data : { title: 'Lookup' }
                ,templateUrl: 'app/crud/Lookup/content/LookupList.php'
             	}	
            
			,'app.crud.lookupEdit': 
            	{url: '/lookup/{lookup_id}'
            	,controller: 'LookupController'
            	,resolve: 
                	["bm.crud.lookup"]
            	,data : { title: 'Lookup' }
                ,templateUrl: 'app/crud/Lookup/content/LookupEdit.php'}

			};
  addRoutesToApp(AppCrudLookupRoutes);