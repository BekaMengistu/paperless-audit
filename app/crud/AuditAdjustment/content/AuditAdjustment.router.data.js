var bmCrudAuditAdjustmentDependencies={
			"bm.crud.audit_adjustment":[
						'app/crud/AuditAdjustment/content/AuditAdjustmentController.js'
               			,'app/crud/AuditAdjustment/content/AuditAdjustment.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditAdjustmentDependencies);

var AppCrudAuditAdjustmentRoutes={
			'app.crud.audit_adjustment': 
            	{url: '/audit_adjustment', controller: 'AuditAdjustmentController'
            	,resolve:["bm.crud.audit_adjustment"]
            	,data : { title: 'Audit Adjustment' }
                ,templateUrl: 'app/crud/AuditAdjustment/content/AuditAdjustmentList.php'
             	}	
            
			,'app.crud.audit_adjustmentEdit': 
            	{url: '/audit_adjustment/{audit_adjustment_id}'
            	,controller: 'AuditAdjustmentController'
            	,resolve: 
                	["bm.crud.audit_adjustment"]
            	,data : { title: 'Audit Adjustment' }
                ,templateUrl: 'app/crud/AuditAdjustment/content/AuditAdjustmentEdit.php'}

			};
  addRoutesToApp(AppCrudAuditAdjustmentRoutes);