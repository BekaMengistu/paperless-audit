var bmCrudAuditManagementLetterDependencies={
			"bm.crud.audit_management_letter":[
						'app/crud/AuditManagementLetter/content/AuditManagementLetterController.js'
               			,'app/crud/AuditManagementLetter/content/AuditManagementLetter.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditManagementLetterDependencies);

var AppCrudAuditManagementLetterRoutes={
			'app.crud.audit_management_letter': 
            	{url: '/audit_management_letter', controller: 'AuditManagementLetterController'
            	,resolve:["bm.crud.audit_management_letter"]
            	,data : { title: 'Audit Management Letter' }
                ,templateUrl: 'app/crud/AuditManagementLetter/content/AuditManagementLetterList.php'
             	}	
            
			,'app.crud.audit_management_letterEdit': 
            	{url: '/audit_management_letter/{audit_management_letter_id}'
            	,controller: 'AuditManagementLetterController'
            	,resolve: 
                	["bm.crud.audit_management_letter"]
            	,data : { title: 'Audit Management Letter' }
                ,templateUrl: 'app/crud/AuditManagementLetter/content/AuditManagementLetterEdit.php'}

			};
  addRoutesToApp(AppCrudAuditManagementLetterRoutes);