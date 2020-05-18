<div bm-ui-permission="app.replication" login-user="app.loginUser" ng-controller="ReplicationToolbarController">
    <ul class="nav navbar-nav text-center pull-right" style="padding-right:18px;">


        <li class="nav-item dropdown">
            <a class="nav-link" href data-toggle="dropdown">
                <i class="fa fa-cloud text-md " ng-class="'text-'+ toolbar_replication_serverManager.statusStyles[toolbar_replication_serverManager.serversStatus]">&nbsp; </i>
                <!--{{replication_serverManager.serversStatus}}-->
                <!--<span class="label label-sm up info">{{toolbar_replication_serverManager.onlineItems}}/{{toolbar_replication_serverManager.itemsCount}} 
               </span>-->
                <span ng-if="toolbar_replication_serverManager.syncStatus.recordsCount.total" class="label label-sm up warn">{{toolbar_replication_serverManager.syncStatus.recordsCount.total}}</span>
            </a>
            <div class="dropdown-menu pull-right dropdown-menu-scale ng-scope">
                <a class="dropdown-item" ui-sref="app.replication.sync">Sync</a>
                <div class="dropdown-divider"></div>

                <a class="dropdown-item" ng-repeat="item in toolbar_replication_serverManager.items track by $index" ng-class="item.forSync.status=='online'?'':'text-muted'">
                    <span>{{item.server_address}} </span>
                    <span class="label primary m-l-xs"><i class="fa fa-arrow-up"></i>{{item.forSync.up.records}}</span>
                    <span class="label primary m-l-xs"><i class="fa fa-arrow-down"></i>{{item.forSync.down.records}}</span>
                </a>

            </div>
        </li>


    </ul>
</div>
