var bmCrudUserDependencies={
			"bm.crud.user":[
						'app/crud/User/content/UserController.js'
               			,'app/crud/User/content/User.Services.js'
						]};
					
addDependencyToApp(bmCrudUserDependencies);

var AppCrudUserRoutes={
			'app.crud.user': 
            	{url: '/user', controller: 'UserController'
            	,resolve:["bm.crud.user"]
            	,data : { title: 'User' }
                ,templateUrl: 'app/crud/User/content/UserList.php'
             	}	
            
			,'app.crud.userEdit': 
            	{url: '/user/{user_id}'
            	,controller: 'UserController'
            	,resolve: 
                	["bm.crud.user"]
            	,data : { title: 'User' }
                ,templateUrl: 'app/crud/User/content/UserEdit.php'}

			};
  addRoutesToApp(AppCrudUserRoutes);