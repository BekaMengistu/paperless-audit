var AppCrudAuditEngagementRoutes={
			'app.crud.audit_engagement': 
            	{url: '/audit_engagement', controller: 'AuditEngagementController'
            	,resolve: 
                	['app/crud/AuditEngagement/content/AuditEngagementController.js'
               		,'app/crud/AuditEngagement/content/AuditEngagement.Services.js' ]
            	,data : { title: 'Audit Engagement' }
                ,templateUrl: 'app/crud/AuditEngagement/content/AuditEngagementList.php'
             	}	
            
			,'app.crud.audit_engagementEdit': 
            	{url: '/audit_engagement/{audit_engagement_id}'
            	,controller: 'AuditEngagementController'
            	,resolve: 
                	['app/crud/AuditEngagement/content/AuditEngagementController.js'
               		,'app/crud/AuditEngagement/content/AuditEngagement.Services.js' ]
            	,data : { title: 'Audit Engagement' }
                ,templateUrl: 'app/crud/AuditEngagement/content/AuditEngagementEdit.php'}

			};
  addRoutesToApp(AppCrudAuditEngagementRoutes);