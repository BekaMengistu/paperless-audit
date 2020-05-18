var bmCrudFormFieldTemplateDependencies={
			"bm.crud.form_field_template":[
						'app/crud/FormFieldTemplate/content/FormFieldTemplateController.js'
               			,'app/crud/FormFieldTemplate/content/FormFieldTemplate.Services.js'
						]};
					
addDependencyToApp(bmCrudFormFieldTemplateDependencies);

var AppCrudFormFieldTemplateRoutes={
			'app.crud.form_field_template': 
            	{url: '/form_field_template', controller: 'FormFieldTemplateController'
            	,resolve:["bm.crud.form_field_template"]
            	,data : { title: 'Form Field Template' }
                ,templateUrl: 'app/crud/FormFieldTemplate/content/FormFieldTemplateList.php'
             	}	
            
			,'app.crud.form_field_templateEdit': 
            	{url: '/form_field_template/{form_field_template_id}'
            	,controller: 'FormFieldTemplateController'
            	,resolve: 
                	["bm.crud.form_field_template"]
            	,data : { title: 'Form Field Template' }
                ,templateUrl: 'app/crud/FormFieldTemplate/content/FormFieldTemplateEdit.php'}

			};
  addRoutesToApp(AppCrudFormFieldTemplateRoutes);