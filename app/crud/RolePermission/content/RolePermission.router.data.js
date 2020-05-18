var bmCrudRolePermissionDependencies={
			"bm.crud.role_permission":[
						'app/crud/RolePermission/content/RolePermissionController.js'
               			,'app/crud/RolePermission/content/RolePermission.Services.js'
						]};
					
addDependencyToApp(bmCrudRolePermissionDependencies);

var AppCrudRolePermissionRoutes={
			'app.crud.role_permission': 
            	{url: '/role_permission', controller: 'RolePermissionController'
            	,resolve:["bm.crud.role_permission"]
            	,data : { title: 'Role Permission' }
                ,templateUrl: 'app/crud/RolePermission/content/RolePermissionList.php'
             	}	
            
			,'app.crud.role_permissionEdit': 
            	{url: '/role_permission/{role_permission_id}'
            	,controller: 'RolePermissionController'
            	,resolve: 
                	["bm.crud.role_permission"]
            	,data : { title: 'Role Permission' }
                ,templateUrl: 'app/crud/RolePermission/content/RolePermissionEdit.php'}

			};
  addRoutesToApp(AppCrudRolePermissionRoutes);