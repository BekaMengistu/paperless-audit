var bmCrudSigninLogDependencies={
			"bm.crud.signin_log":[
						'app/crud/SigninLog/content/SigninLogController.js'
            //,'app/crud/SigninLog/content/SigninLog.Services.js'
						]};
					
addDependencyToApp(bmCrudSigninLogDependencies);

var AppCrudSigninLogRoutes={
			'app.crud.signin_log': 
            	{url: '/signin_log', controller: 'SigninLogController'
            	,resolve:["bm.crud.signin_log"]
            	,data : { title: 'Signin Log' }
                ,templateUrl: 'app/crud/SigninLog/content/SigninLogList.php'
             	}	
            
			,'app.crud.signin_logEdit': 
            	{url: '/signin_log/{signin_log_id}'
            	,controller: 'SigninLogController'
            	,resolve: 
                	["bm.crud.signin_log"]
            	,data : { title: 'Signin Log' }
                ,templateUrl: 'app/crud/SigninLog/content/SigninLogEdit.php'}

			};
  addRoutesToApp(AppCrudSigninLogRoutes);