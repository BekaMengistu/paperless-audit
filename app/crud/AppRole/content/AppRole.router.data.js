var bmCrudAppRoleDependencies={
			"bm.crud.app_role":[
						'app/crud/AppRole/content/AppRoleController.js'
               			,'app/crud/AppRole/content/AppRole.Services.js'
						]};
					
addDependencyToApp(bmCrudAppRoleDependencies);

var AppCrudAppRoleRoutes={
			'app.crud.app_role': 
            	{url: '/app_role', controller: 'AppRoleController'
            	,resolve:["bm.crud.app_role"]
            	,data : { title: 'App Role' }
                ,templateUrl: 'app/crud/AppRole/content/AppRoleList.php'
             	}	
            
			,'app.crud.app_roleEdit': 
            	{url: '/app_role/{app_role_id}'
            	,controller: 'AppRoleController'
            	,resolve: 
                	["bm.crud.app_role"]
            	,data : { title: 'App Role' }
                ,templateUrl: 'app/crud/AppRole/content/AppRoleEdit.php'}

			};
  addRoutesToApp(AppCrudAppRoleRoutes);