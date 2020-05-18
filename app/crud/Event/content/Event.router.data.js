var bmCrudEventDependencies={
			"bm.crud.event":[
						'app/crud/Event/content/EventController.js'
               			,'app/crud/Event/content/Event.Services.js'
						]};
					
addDependencyToApp(bmCrudEventDependencies);

var AppCrudEventRoutes={
			'app.crud.event': 
            	{url: '/event', controller: 'EventController'
            	,resolve:["bm.crud.event"]
            	,data : { title: 'Event' }
                ,templateUrl: 'app/crud/Event/content/EventList.php'
             	}	
            
			,'app.crud.eventEdit': 
            	{url: '/event/{event_id}'
            	,controller: 'EventController'
            	,resolve: 
                	["bm.crud.event"]
            	,data : { title: 'Event' }
                ,templateUrl: 'app/crud/Event/content/EventEdit.php'}

			};
  addRoutesToApp(AppCrudEventRoutes);