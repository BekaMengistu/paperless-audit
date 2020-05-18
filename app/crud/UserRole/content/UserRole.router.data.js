var bmCrudUserRoleDependencies={
			"bm.crud.user_role":[
						'app/crud/UserRole/content/UserRoleController.js'
               			,'app/crud/UserRole/content/UserRole.Services.js'
						]};
					
addDependencyToApp(bmCrudUserRoleDependencies);

var AppCrudUserRoleRoutes={
			'app.crud.user_role': 
            	{url: '/user_role', controller: 'UserRoleController'
            	,resolve:["bm.crud.user_role"]
            	,data : { title: 'User Role' }
                ,templateUrl: 'app/crud/UserRole/content/UserRoleList.php'
             	}	
            
			,'app.crud.user_roleEdit': 
            	{url: '/user_role/{user_role_id}'
            	,controller: 'UserRoleController'
            	,resolve: 
                	["bm.crud.user_role"]
            	,data : { title: 'User Role' }
                ,templateUrl: 'app/crud/UserRole/content/UserRoleEdit.php'}

			};
  addRoutesToApp(AppCrudUserRoleRoutes);