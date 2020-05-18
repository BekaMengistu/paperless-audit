var bmCrudFormValueDependencies={
			"bm.crud.form_value":[
						'app/crud/FormValue/content/FormValueController.js'
               			,'app/crud/FormValue/content/FormValue.Services.js'
						]};
					
addDependencyToApp(bmCrudFormValueDependencies);

var AppCrudFormValueRoutes={
			'app.crud.form_value': 
            	{url: '/form_value', controller: 'FormValueController'
            	,resolve:["bm.crud.form_value"]
            	,data : { title: 'Form Value' }
                ,templateUrl: 'app/crud/FormValue/content/FormValueList.php'
             	}	
            
			,'app.crud.form_valueEdit': 
            	{url: '/form_value/{form_value_id}'
            	,controller: 'FormValueController'
            	,resolve: 
                	["bm.crud.form_value"]
            	,data : { title: 'Form Value' }
                ,templateUrl: 'app/crud/FormValue/content/FormValueEdit.php'}

			};
  addRoutesToApp(AppCrudFormValueRoutes);