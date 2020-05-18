var bmToolsReplicationDependencies={
			"bm.tools.replication":[
						//'app/crud/crud.services.js'
                        //,'app/crud/dataManagementHelpers/crud.manager.js'
                        //,'app/crud/crud.managers2.js'
                        'app/dbReplication/content/ReplicationController.js'
						
						]
					};
					
addDependencyToApp(bmToolsReplicationDependencies);

toolReplicationRoutes={
			'app.tools':
				{
					url: '/tools'
					,data : { title: 'Tools'}
					,template:"<div ui-view></div>"
					//,templateUrl: 'app/crud/Customer/content/CustomerList.php'
					,resolve: ["bm.tools"]
					//,controller: 'CustomerAppController'
				}
			,'app.tools.replication':
				{
					url: '/replication'
					,data : { title: 'Tools:Replication',onLoad:"replicationOnPageLoad"}
					//,template:"TOOLs<div ui-view></div>"
					,templateUrl: 'app/dbReplication/content/ReplicationServerList.php'
					,resolve: ["bm.tools.replication"]
					,controller: 'ReplicationController'
				}	
			};	

					
  addRoutesToApp(toolReplicationRoutes);

var replicationRoutes={
			'app.replication':
				{
					url: '/replication'
					,data : { title: 'Replication'}
					,template:'<div ui-view bm-ui-permission="app.replication" login-user="app.loginUser"></div>'
					//,templateUrl: 'app/crud/Customer/content/CustomerList.php'
					,resolve: ["bm.tools.replication"]
					//,controller: 'CustomerAppController'
				}
			,'app.replication.sync':
				{
					url: '/sync'
					,data : { title: 'Replication: Sync',onLoad:"replicationOnPageLoad"}
					//,template:"TOOLs<div ui-view></div>"
					,templateUrl: 'app/dbReplication/content/ReplicationServerList.php'
					,resolve: ["bm.tools.replication"]
					,controller: 'ReplicationController'
				}
			,'app.replication.allowed_hosts':
				{
					url: '/allowed_hosts'
					,data : { title: 'Replication: Allowed Hosts',onLoad:"ReplicationAllowedHostsControllerOnPageLoad"}
					//,template:"TOOLs<div ui-view></div>"
					,templateUrl: 'app/dbReplication/ReplicationAllowedHosts/content/ReplicationAllowedHostsList.php'
					,resolve: ["bm.tools.replication"]
					,controller: 'ReplicationAllowedHostsController'
				}
            ,'app.replication.allowed_hostsEdit':
                {
					url: '/allowed_hosts/{replication_allowed_hosts_id}'
					,data : { title: 'Replication: Allowed Hosts',onLoad:"ReplicationAllowedHostsControllerOnPageLoad"}
					//,template:"TOOLs<div ui-view></div>"
					,templateUrl: 'app/dbReplication/ReplicationAllowedHosts/content/ReplicationAllowedHostsEdit.php'
					,resolve: ["bm.tools.replication"]
					,controller: 'ReplicationAllowedHostsController'
				}
    
            
			};	
addRoutesToApp(replicationRoutes);