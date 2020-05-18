var bmCrudFormTemplateDependencies={
			"bm.crud.form_template":[
						'app/crud/FormTemplate/content/FormTemplateController.js'
               			,'app/crud/FormTemplate/content/FormTemplate.Services.js'
						]};
					
addDependencyToApp(bmCrudFormTemplateDependencies);

var AppCrudFormTemplateRoutes={
			'app.crud.form_template': 
            	{url: '/form_template', controller: 'FormTemplateController'
            	,resolve:["bm.crud.form_template"]
            	,data : { title: 'Form Template' }
                ,templateUrl: 'app/crud/FormTemplate/content/FormTemplateList.php'
             	}	
            
			,'app.crud.form_templateEdit': 
            	{url: '/form_template/{form_template_id}'
            	,controller: 'FormTemplateController'
            	,resolve: 
                	["bm.crud.form_template"]
            	,data : { title: 'Form Template' }
                ,templateUrl: 'app/crud/FormTemplate/content/FormTemplateEdit.php'}

			};
  addRoutesToApp(AppCrudFormTemplateRoutes);