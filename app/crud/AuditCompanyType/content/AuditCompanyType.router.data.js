var bmCrudAuditCompanyTypeDependencies={
			"bm.crud.audit_company_type":[
						'app/crud/AuditCompanyType/content/AuditCompanyTypeController.js'
               			,'app/crud/AuditCompanyType/content/AuditCompanyType.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditCompanyTypeDependencies);

var AppCrudAuditCompanyTypeRoutes={
			'app.crud.audit_company_type': 
            	{url: '/audit_company_type', controller: 'AuditCompanyTypeController'
            	,resolve:["bm.crud.audit_company_type"]
            	,data : { title: 'Audit Company Type' }
                ,templateUrl: 'app/crud/AuditCompanyType/content/AuditCompanyTypeList.php'
             	}	
            
			,'app.crud.audit_company_typeEdit': 
            	{url: '/audit_company_type/{audit_company_type_id}'
            	,controller: 'AuditCompanyTypeController'
            	,resolve: 
                	["bm.crud.audit_company_type"]
            	,data : { title: 'Audit Company Type' }
                ,templateUrl: 'app/crud/AuditCompanyType/content/AuditCompanyTypeEdit.php'}

			};
  addRoutesToApp(AppCrudAuditCompanyTypeRoutes);