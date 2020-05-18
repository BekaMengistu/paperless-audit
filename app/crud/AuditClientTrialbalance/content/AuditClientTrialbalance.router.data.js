var bmCrudAuditClientTrialbalanceDependencies={
			"bm.crud.audit_client_trialbalance":[
						'app/crud/AuditClientTrialbalance/content/AuditClientTrialbalanceController.js'
               			,'app/crud/AuditClientTrialbalance/content/AuditClientTrialbalance.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditClientTrialbalanceDependencies);

var AppCrudAuditClientTrialbalanceRoutes={
			'app.crud.audit_client_trialbalance': 
            	{url: '/audit_client_trialbalance', controller: 'AuditClientTrialbalanceController'
            	,resolve:["bm.crud.audit_client_trialbalance"]
            	,data : { title: 'Audit Client Trialbalance' }
                ,templateUrl: 'app/crud/AuditClientTrialbalance/content/AuditClientTrialbalanceList.php'
             	}	
            
			,'app.crud.audit_client_trialbalanceEdit': 
            	{url: '/audit_client_trialbalance/{audit_client_trialbalance_id}'
            	,controller: 'AuditClientTrialbalanceController'
            	,resolve: 
                	["bm.crud.audit_client_trialbalance"]
            	,data : { title: 'Audit Client Trialbalance' }
                ,templateUrl: 'app/crud/AuditClientTrialbalance/content/AuditClientTrialbalanceEdit.php'}

			};
  addRoutesToApp(AppCrudAuditClientTrialbalanceRoutes);