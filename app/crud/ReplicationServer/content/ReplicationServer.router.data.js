var bmCrudReplicationServerDependencies={
			"bm.crud.replication_server":[
						'app/crud/crud.services.js'
                        ,'app/crud/dataManagementHelpers/crud.manager.js'
                        ,'app/crud/crud.managers2.js'
                        ,'app/crud/ReplicationServer/content/ReplicationServerController.js'
						]};
					
addDependencyToApp(bmCrudReplicationServerDependencies);

var AppCrudReplicationServerRoutes={
			'app.crud.replication_server': 
            	{url: '/replication_server', controller: 'ReplicationServerController'
            	,resolve:["bm.crud.replication_server"]
            	,data : { title: 'Replication Server' }
                ,templateUrl: 'app/crud/ReplicationServer/content/ReplicationServerList.php'
             	}	
            
			,'app.crud.replication_serverEdit': 
            	{url: '/replication_server/{replication_server_id}'
            	,controller: 'ReplicationServerController'
            	,resolve: 
                	["bm.crud.replication_server"]
            	,data : { title: 'Replication Server' }
                ,templateUrl: 'app/crud/ReplicationServer/content/ReplicationServerEdit.php'}

			};
  addRoutesToApp(AppCrudReplicationServerRoutes);