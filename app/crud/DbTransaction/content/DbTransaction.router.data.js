var bmCrudDbTransactionDependencies={
			"bm.crud.db_transaction":[
						'app/crud/DbTransaction/content/DbTransactionController.js'
            //,'app/crud/DbTransaction/content/DbTransaction.Services.js'
						]};
					
addDependencyToApp(bmCrudDbTransactionDependencies);

var AppCrudDbTransactionRoutes={
			'app.crud.db_transaction': 
            	{url: '/db_transaction', controller: 'DbTransactionController'
            	,resolve:["bm.crud.db_transaction"]
            	,data : { title: 'Db Transaction' }
                ,templateUrl: 'app/crud/DbTransaction/content/DbTransactionList.php'
             	}	
            
			,'app.crud.db_transactionEdit': 
            	{url: '/db_transaction/{db_transaction}'
            	,controller: 'DbTransactionController'
            	,resolve: 
                	["bm.crud.db_transaction"]
            	,data : { title: 'Db Transaction' }
                ,templateUrl: 'app/crud/DbTransaction/content/DbTransactionEdit.php'}

			};
  addRoutesToApp(AppCrudDbTransactionRoutes);