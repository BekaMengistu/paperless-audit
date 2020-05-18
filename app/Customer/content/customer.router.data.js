var bmCustomerDependencies={
			"bm.customer":[
						'app/Customer/content/Customer.services.js'
						,'app/Customer/content/CustomerController.js'
						,'app/crud/AuditCompanyType/content/AuditCompanyType.services.js'
						]
					};
					
addDependencyToApp(bmCustomerDependencies);

customerRoutes={
			'app.customer':
				{
					url: '/customer'
					,data : { title: 'Customer'}
					,template:"<div ui-view></div>"
					//,templateUrl: 'app/crud/Customer/content/CustomerList.php'
					,resolve: ["bm.customer"]
					,controller: 'CustomerAppController'
				}
			,'app.customer.list': 
            	{url: '/list'
            	,controller: 'CustomerController'
            	,resolve: ["bm.customer"]
            	,data : { title: 'Customer List' }
				,templateUrl: 'app/Customer/content/CustomerList.php'
				}	
				
			,'app.customer.detail': 
            	{url: '/{customer_id}'
            	,controller: 'CustomerController'
            	,resolve: ["bm.customer"]
            	,data : { title: 'Customer' }
				,templateUrl: 'app/Customer/content/Customer.detail.php'}	
				
			,'app.customer.detail.edit': 
            	{url: '/edit'
            	,controller2: 'CustomerController'
            	,resolve: ["bm.customer",'bm.validation.error']
            	,data : { title: 'Customer Detail',showSave:true }
				,templateUrl: 'app/Customer/content/CustomerEdit.php'}	
				
			,'app.customer.detail.documents': 
            	{url: '/documents'
            	,controller: 'CustomerDocumentController'
            	,resolve: ["bm.customer","bm.document"]
            	,data : { title: 'Customer Documents' }
				,templates: 'Customer Documents'
				,templateUrl: 'app/Customer/content/customer.document.html'
				}
			,'app.customer.detail.audits': 
            	{url: '/audits'
            	,controller: 'CustomerAuditController'
            	,resolve: ["bm.customer","bm.audit"]
            	,data : { title: 'Customer Audits' }
				,templates: 'Customer Audits'
				,templateUrl: 'app/audit/content/audit.list.html'
				}		
				
			,'app.customerdetail.taskEdit': 
            	{url: '/task/{task_id}'
            	,controller: 'CustomerTaskController'
            	,resolve: ['app/crud/Customer/content/Customer.services.js','app/crud/Task/content/Task.services.js','app/customer/content/CustomerController.js']
            	,data : { title: 'Customer Tasks' },templateUrl: 'app/crud/Task/content/TaskEdit.php'}	
			,'app.customerdetail.document': 
            	{url: '/document'
            	,controller: 'CustomerDocumentController'
            	,resolve: ['app/crud/Customer/content/Customer.services.js','app/crud/Document/content/Document.services.js','app/customer/content/CustomerController.js']
            	,data : { title: 'Customer Documents' },templateUrl: 'app/crud/document/content/DocumentList.php'}	
			
			
			};	
					
   addRoutesToApp(customerRoutes);