var bmCrudCompanyTypeKeyDependencies={
			"bm.crud.company_type_key":[
						'app/crud/CompanyTypeKey/content/CompanyTypeKeyController.js'
               			,'app/crud/CompanyTypeKey/content/CompanyTypeKey.Services.js'
						]};
					
addDependencyToApp(bmCrudCompanyTypeKeyDependencies);

var AppCrudCompanyTypeKeyRoutes={
			'app.crud.company_type_key': 
            	{url: '/company_type_key', controller: 'CompanyTypeKeyController'
            	,resolve:["bm.crud.company_type_key"]
            	,data : { title: 'Company Type Key' }
                ,templateUrl: 'app/crud/CompanyTypeKey/content/CompanyTypeKeyList.php'
             	}	
            
			,'app.crud.company_type_keyEdit': 
            	{url: '/company_type_key/{company_type_key_id}'
            	,controller: 'CompanyTypeKeyController'
            	,resolve: 
                	["bm.crud.company_type_key"]
            	,data : { title: 'Company Type Key' }
                ,templateUrl: 'app/crud/CompanyTypeKey/content/CompanyTypeKeyEdit.php'}

			};
  addRoutesToApp(AppCrudCompanyTypeKeyRoutes);