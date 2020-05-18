
coreRoutes={
			'app.user':{url:'/user',template:"<div ui-view></div>",resolve:[]}
				
			,"app.user.permission":{url: '/permission/',controller:'CorePermissionController',templateUrl:"apps/user/permission/corePermissionView.php"
				,resolve: ['apps/user/permission/permissionServices.js','apps/user/permission/CorePermissionController.js'],data : { title: 'Roles and Permissions' }}
			
			,'app.user.manage_users':{url: '/manage',controller: 'CoreUserController',templateUrl: 'apps/core/user/UserListDetail.php'
				,resolve: ['xeditable','ui.select','angularFileUpload','apps/user/permission/permissionServices.js', 'apps/core/user/CoreUserController.js'],data : { title: 'Users' }}
				
			,'app.user.manage_users.detail':{url: '/detail/{id}',controller:'CoreUserEditController',templateUrl: 'apps/core/user/UserEdit.php',resolve: []}
			,'app.user.detail.permission':{url: '/permission',templateUrls: 'apps/user/userMainPage.php',resolve: []}
			
			,'app.profile':{url: '/profile',controller: 'AppUserController',templateUrl: 'apps/user/userMainPage.php'
				,resolve: ['xeditable','angularFileUpload', 'apps/user/appUserController.js'],data : { title: 'Profile' }}
			
			//,'app.user.profile':{url: '/profile',templates: '<div><h3>User profile</h3><div ui-view></div></div>',templateUrl: 'apps/user/UserProfile.php',resolve: []}
			,'app.profile.tasks':{url: '/tasks',template: '<div><h3>User Tasks</h3><div ui-view></div></div>',templateUrls: 'apps/user/userMainPage.php',resolve: []}
			,'app.profile.messages':{url: '/messages',template: '<div><h3>User messages</h3><div ui-view></div></div>',templateUrls: 'apps/user/userMainPage.php',resolve: []}
			,'app.profile.account_management':{url: '/accountmanagement',templates: '<div><h3>account management</h3><div ui-view></div></div>',templateUrl: 'apps/user/accountManagement.php',resolve: []}
				
			,'app.customer':
				{
					url: '/customer'
					,data : { title: 'Core/Customer',"taskManager":"clientTaskManager" }
					,templateUrl: 'apps/core/Customer/CustomerList.php'
					,resolve: ["apps/core/coreServices.js",'apps/core/Customer/coreCustomerController.js']
					,controller: 'CoreCustomerListController'
				}
			,'app.customerdetail': 
            	{url: '/customerdetail/{id}'
            	,controller: 'CoreCustomerController'
            	,resolve: ["apps/core/coreServices.js",'apps/core/Customer/coreCustomerController.js','apps/directives/task/directive.bm.task.js','apps/crud/Task/TaskController.js']
            	,data : { title: 'Customer' },templateUrl: 'apps/core/Customer/CustomerView.php'}	
			,'app.customerDetails':
				{
					url: '/customerDetail'
					,data : { title: 'Core/Customer',"taskManager":"clientTaskManager" }
					,templateUrl: 'apps/core/Customer/CustomerView.php'
					,resolve: ["apps/core/coreServices.js",'apps/core/Customer/coreCustomerController.js']
					,controller: 'CoreCustomerController'
				}
			,'app.document':
				{
					url: '/document'
					,data : { title: 'Core/Docs' }
					,templateUrl: 'apps/core/digitalDocuments/mainPage.php'
					,resolve: ['angularBootstrapNavTree', "apps/core/coreServices.js",'apps/core/digitalDocuments/DigitalDocumentsController.js']
					,controller: 'DigitalDocumentsController'
				}
       
			};			
  // addRoutesToApp(coreRoutes);