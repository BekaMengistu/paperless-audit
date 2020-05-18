var bmCrudCustomerDependencies={
			"bm.crud.customer":[
						'app/crud/Customer/content/CustomerController.js'
               			,'app/crud/Customer/content/Customer.Services.js'
						]};
					
addDependencyToApp(bmCrudCustomerDependencies);

var AppCrudCustomerRoutes={
			'app.crud.customer': 
            	{url: '/customer', controller: 'CustomerController'
            	,resolve:["bm.crud.customer"]
            	,data : { title: 'Customer' }
                ,templateUrl: 'app/crud/Customer/content/CustomerList.php'
             	}	
            
			,'app.crud.customerEdit': 
            	{url: '/customer/{customer_id}'
            	,controller: 'CustomerController'
            	,resolve: 
                	["bm.crud.customer"]
            	,data : { title: 'Customer' }
                ,templateUrl: 'app/crud/Customer/content/CustomerEdit.php'}

			};
  addRoutesToApp(AppCrudCustomerRoutes);