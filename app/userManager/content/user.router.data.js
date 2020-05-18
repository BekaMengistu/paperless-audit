var bmUserDependencies={
			"bm.user.manager":[
						'app/UserManager/content/permission/permissionServices.js'
						,'app/UserManager/content/permission/CorePermissionController.js'
						,'app/UserManager/content/User.services.js'
						,"app/UserManager/content/user.management/UserManagementController.js"
						]
					};
					
addDependencyToApp(bmUserDependencies);



var userRoutes={
			'app.user':{
					url:'/user'
					,template:"<div ui-view></div>"
					,data : { title: 'User Management' }
					,controller:'UserAppController'
					,resolve:["bm.user.manager"]
					}
			,"app.user.signin_log":{
				url: '/signin_log'
				,controller: 'SigninLogController'
				,templateUrl:"app/userManager/content/signinLog/SigninLogList.php"
				,resolve: ["bm.user.manager",'ui.tree.grid']
				,data : { title: 'Signin Attempts',onLoad:"onSigninLogPageLoad" }
				}
			,"app.user.permission":{
				url: '/permission'
				,controller:'CorePermissionController'
				//,template:"Permissions<div ui-view></div>"
				,templateUrl:"app/userManager/content/permission/corePermissionView.php"
				,resolve: ["bm.user.manager",'ui.tree.grid']
				,data : { title: 'Roles and Permissions' }
				}
			
			,'app.user.manage_users':{
				url: '/manage'
				,controller: 'UserManagementController'
				,templateUrl: 'app/UserManager/content/user.management/UserListDetail.php'
				,resolve: ['xeditable','ui.select',"bm.user.manager"]
				,data : { title: 'Users' }}
				
				
			,'app.user.manage_users.detail':{
					url: '/detail/{user_id}'
					,controller: 'UserManagementController'
					,templateUrl: 'app/UserManager/content/user.management/UserEdit.php'
					,resolve: []
					}
					
			,'app.user.detail.permission':{url: '/permission',templateUrls: 'apps/user/userMainPage.php',resolve: []}
			
			,'app.user.profile':{
				url: '/profile'
				,controller: 'UserProfileController'
				,templateUrl: 'app/UserManager/content/user.profile.php'
				,resolve: ['xeditable','angularFileUpload',"bm.user.manager",'bm.validation.error']
				,data : { title: 'Profile' }
				}
			,'app.user.profile.home':{
				url: '/home'
				,controllers: 'UserProfileController'
				,templateUrl: 'app/UserManager/content/UserWidget.html'
				,resolve: ['xeditable','angularFileUpload',"bm.user.manager"]
				,data : { title: 'Profile' }
				}
				
			,'app.user.profile.account_management':{
				url: '/accountmanagement'
				,templates: '<div><h3>account management</h3><div ui-view></div></div>'
				,templateUrl: 'app/UserManager/content/accountManagement.php'
				,resolve: []
				}
			,'app.user.profile.messages':{
				url: '/messages'
				,template: '<div class="p-a"><h3>Your Messages</h3></div>'
				,templateUrls: 'app/UserManager/content/accountManagement.php'
				,resolve: []
				}
			,'app.user.profile.documents':{
				url: '/documents'
				,controller: 'UserDocumentController'
				,templates: '<div><h3>Your Messages</h3></div>'
				,templateUrl: 'app/UserManager/content/user.document.html'
				,resolve: ["bm.document"]
				}
			
			//,'app.user.profile':{url: '/profile',templates: '<div><h3>User profile</h3><div ui-view></div></div>',templateUrl: 'apps/user/UserProfile.php',resolve: []}
			,'app.profile.tasks':{url: '/tasks',template: '<div><h3>User Tasks</h3><div ui-view></div></div>',templateUrls: 'apps/user/userMainPage.php',resolve: []}
			,'app.profile.messages':{url: '/messages',template: '<div><h3>User messages</h3><div ui-view></div></div>',templateUrls: 'apps/user/userMainPage.php',resolve: []}
			,'app.profile.account_management':{url: '/accountmanagement',templates: '<div><h3>account management</h3><div ui-view></div></div>',templateUrl: 'apps/user/accountManagement.php',resolve: []}
				
			/**/
       
			};			

   addRoutesToApp(userRoutes);
   