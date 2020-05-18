var bmCrudAuditProcedureDependencies={
			"bm.crud.audit_procedure":[
						'app/crud/AuditProcedure/content/AuditProcedureController.js'
               			,'app/crud/AuditProcedure/content/AuditProcedure.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditProcedureDependencies);

var AppCrudAuditProcedureRoutes={
			'app.crud.audit_procedure': 
            	{url: '/audit_procedure', controller: 'AuditProcedureController'
            	,resolve:["bm.crud.audit_procedure"]
            	,data : { title: 'Audit Procedure' }
                ,templateUrl: 'app/crud/AuditProcedure/content/AuditProcedureList.php'
             	}	
            
			,'app.crud.audit_procedureEdit': 
            	{url: '/audit_procedure/{audit_procedure_id}'
            	,controller: 'AuditProcedureController'
            	,resolve: 
                	["bm.crud.audit_procedure"]
            	,data : { title: 'Audit Procedure' }
                ,templateUrl: 'app/crud/AuditProcedure/content/AuditProcedureEdit.php'}

			};
  addRoutesToApp(AppCrudAuditProcedureRoutes);