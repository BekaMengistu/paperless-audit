var bmCrudFormFieldValueDependencies={
			"bm.crud.form_field_value":[
						'app/crud/FormFieldValue/content/FormFieldValueController.js'
               			,'app/crud/FormFieldValue/content/FormFieldValue.Services.js'
						]};
					
addDependencyToApp(bmCrudFormFieldValueDependencies);

var AppCrudFormFieldValueRoutes={
			'app.crud.form_field_value': 
            	{url: '/form_field_value', controller: 'FormFieldValueController'
            	,resolve:["bm.crud.form_field_value"]
            	,data : { title: 'Form Field Value' }
                ,templateUrl: 'app/crud/FormFieldValue/content/FormFieldValueList.php'
             	}	
            
			,'app.crud.form_field_valueEdit': 
            	{url: '/form_field_value/{form_field_value_id}'
            	,controller: 'FormFieldValueController'
            	,resolve: 
                	["bm.crud.form_field_value"]
            	,data : { title: 'Form Field Value' }
                ,templateUrl: 'app/crud/FormFieldValue/content/FormFieldValueEdit.php'}

			};
  addRoutesToApp(AppCrudFormFieldValueRoutes);