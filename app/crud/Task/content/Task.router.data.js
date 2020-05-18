var bmCrudTaskDependencies={
			"bm.crud.task":[
						'app/crud/Task/content/TaskController.js'
               			,'app/crud/Task/content/Task.Services.js'
						]};
					
addDependencyToApp(bmCrudTaskDependencies);

var AppCrudTaskRoutes={
			'app.crud.task': 
            	{url: '/task', controller: 'TaskController'
            	,resolve:["bm.crud.task"]
            	,data : { title: 'Task' }
                ,templateUrl: 'app/crud/Task/content/TaskList.php'
             	}	
            
			,'app.crud.taskEdit': 
            	{url: '/task/{task_id}'
            	,controller: 'TaskController'
            	,resolve: 
                	["bm.crud.task"]
            	,data : { title: 'Task' }
                ,templateUrl: 'app/crud/Task/content/TaskEdit.php'}

			};
  addRoutesToApp(AppCrudTaskRoutes);