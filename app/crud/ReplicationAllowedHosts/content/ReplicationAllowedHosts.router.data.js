var bmCrudReplicationAllowedHostsDependencies={
			"bm.crud.replication_allowed_hosts":[
						'app/crud/ReplicationAllowedHosts/content/ReplicationAllowedHostsController.js'
            //,'app/crud/ReplicationAllowedHosts/content/ReplicationAllowedHosts.Services.js'
						]};
					
addDependencyToApp(bmCrudReplicationAllowedHostsDependencies);

var AppCrudReplicationAllowedHostsRoutes={
			'app.crud.replication_allowed_hosts': 
            	{url: '/replication_allowed_hosts', controller: 'ReplicationAllowedHostsController'
            	,resolve:["bm.crud.replication_allowed_hosts"]
            	,data : { title: 'Replication Allowed Hosts' }
                ,templateUrl: 'app/crud/ReplicationAllowedHosts/content/ReplicationAllowedHostsList.php'
             	}	
            
			,'app.crud.replication_allowed_hostsEdit': 
            	{url: '/replication_allowed_hosts/{replication_allowed_hosts_id}'
            	,controller: 'ReplicationAllowedHostsController'
            	,resolve: 
                	["bm.crud.replication_allowed_hosts"]
            	,data : { title: 'Replication Allowed Hosts' }
                ,templateUrl: 'app/crud/ReplicationAllowedHosts/content/ReplicationAllowedHostsEdit.php'}

			};
  addRoutesToApp(AppCrudReplicationAllowedHostsRoutes);