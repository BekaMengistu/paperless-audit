var bmCrudAuditTransactionDependencies={
			"bm.crud.audit_transaction":[
						'app/crud/AuditTransaction/content/AuditTransactionController.js'
               			,'app/crud/AuditTransaction/content/AuditTransaction.Services.js'
						]};
					
addDependencyToApp(bmCrudAuditTransactionDependencies);

var AppCrudAuditTransactionRoutes={
			'app.crud.audit_transaction': 
            	{url: '/audit_transaction', controller: 'AuditTransactionController'
            	,resolve:["bm.crud.audit_transaction"]
            	,data : { title: 'Audit Transaction' }
                ,templateUrl: 'app/crud/AuditTransaction/content/AuditTransactionList.php'
             	}	
            
			,'app.crud.audit_transactionEdit': 
            	{url: '/audit_transaction/{audit_transaction_id}'
            	,controller: 'AuditTransactionController'
            	,resolve: 
                	["bm.crud.audit_transaction"]
            	,data : { title: 'Audit Transaction' }
                ,templateUrl: 'app/crud/AuditTransaction/content/AuditTransactionEdit.php'}

			};
  addRoutesToApp(AppCrudAuditTransactionRoutes);