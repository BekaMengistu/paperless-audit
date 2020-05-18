var bmCrudAppSettingDependencies={
			"bm.crud.app_setting":[
						'app/crud/AppSetting/content/AppSettingController.js'
               			,'app/crud/AppSetting/content/AppSetting.Services.js'
						]};
					
addDependencyToApp(bmCrudAppSettingDependencies);

var AppCrudAppSettingRoutes={
			'app.crud.app_setting': 
            	{url: '/app_setting', controller: 'AppSettingController'
            	,resolve:["bm.crud.app_setting"]
            	,data : { title: 'App Setting' }
                ,templateUrl: 'app/crud/AppSetting/content/AppSettingList.php'
             	}	
            
			,'app.crud.app_settingEdit': 
            	{url: '/app_setting/{app_setting_id}'
            	,controller: 'AppSettingController'
            	,resolve: 
                	["bm.crud.app_setting"]
            	,data : { title: 'App Setting' }
                ,templateUrl: 'app/crud/AppSetting/content/AppSettingEdit.php'}

			};
  addRoutesToApp(AppCrudAppSettingRoutes);