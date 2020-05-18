var bmCrudAppPermissionDependencies={
			"bm.crud.app_permission":[
						'app/crud/AppPermission/content/AppPermissionController.js'
               			,'app/crud/AppPermission/content/AppPermission.Services.js'
						]};
					
addDependencyToApp(bmCrudAppPermissionDependencies);

var AppCrudAppPermissionRoutes={
			'app.crud.app_permission': 
            	{url: '/app_permission', controller: 'AppPermissionController'
            	,resolve:["bm.crud.app_permission"]
            	,data : { title: 'App Permission' }
                ,templateUrl: 'app/crud/AppPermission/content/AppPermissionList.php'
             	}	
            
			,'app.crud.app_permissionEdit': 
            	{url: '/app_permission/{app_permission_id}'
            	,controller: 'AppPermissionController'
            	,resolve: 
                	["bm.crud.app_permission"]
            	,data : { title: 'App Permission' }
                ,templateUrl: 'app/crud/AppPermission/content/AppPermissionEdit.php'}

			};
  addRoutesToApp(AppCrudAppPermissionRoutes);