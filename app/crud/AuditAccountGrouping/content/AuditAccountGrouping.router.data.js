var bmCrudAuditAccountGroupingDependencies={
			"bm.crud.audit_account_grouping":[
						'app/crud/AuditAccountGrouping/content/AuditAccountGroupingController.js'
               			,'app/crud/AuditAccountGrouping/content/AuditAccountGrouping.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditAccountGroupingDependencies);

var AppCrudAuditAccountGroupingRoutes={
			'app.crud.audit_account_grouping': 
            	{url: '/audit_account_grouping', controller: 'AuditAccountGroupingController'
            	,resolve:["bm.crud.audit_account_grouping"]
            	,data : { title: 'Audit Account Grouping' }
                ,templateUrl: 'app/crud/AuditAccountGrouping/content/AuditAccountGroupingList.php'
             	}	
            
			,'app.crud.audit_account_groupingEdit': 
            	{url: '/audit_account_grouping/{audit_account_grouping_id}'
            	,controller: 'AuditAccountGroupingController'
            	,resolve: 
                	["bm.crud.audit_account_grouping"]
            	,data : { title: 'Audit Account Grouping' }
                ,templateUrl: 'app/crud/AuditAccountGrouping/content/AuditAccountGroupingEdit.php'}

			};
  addRoutesToApp(AppCrudAuditAccountGroupingRoutes);