var bmCrudAuditFindingDependencies={
			"bm.crud.audit_finding":[
						'app/crud/AuditFinding/content/AuditFindingController.js'
               			,'app/crud/AuditFinding/content/AuditFinding.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditFindingDependencies);

var AppCrudAuditFindingRoutes={
			'app.crud.audit_finding': 
            	{url: '/audit_finding', controller: 'AuditFindingController'
            	,resolve:["bm.crud.audit_finding"]
            	,data : { title: 'Audit Finding' }
                ,templateUrl: 'app/crud/AuditFinding/content/AuditFindingList.php'
             	}	
            
			,'app.crud.audit_findingEdit': 
            	{url: '/audit_finding/{audit_finding_id}'
            	,controller: 'AuditFindingController'
            	,resolve: 
                	["bm.crud.audit_finding"]
            	,data : { title: 'Audit Finding' }
                ,templateUrl: 'app/crud/AuditFinding/content/AuditFindingEdit.php'}

			};
  addRoutesToApp(AppCrudAuditFindingRoutes);