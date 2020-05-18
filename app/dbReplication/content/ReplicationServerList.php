<div class="padding" bm-ui-permission="app.replication.sync" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{replication_serverManager.listEditor.headerStyle}} non-select">
            <h2>{{replication_serverManager.listEditor.title}}</h2>
            <small>{{replication_serverManager.listEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav">
                <li class="nav-item inline">
                    <input id="filter_ReplicationServer" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r" />
                </li>
               
            </ul>
            &nbsp;
        </div>
        <div class="box-body">
            <div class="table-responsive">
                <table class="table m-b-none table-condenced non-select" ui-jp="footable" data-filter="#filter_ReplicationServer" data-page-size="5">
                    <thead>
                        <tr>
                            <td style="widths:170px !important;"></td>

                            <th>Server Address</th>
                            <td><i class="fa fa-cloud-upload"></i> Up</td>
                            <td><i class="fa fa-cloud-download"></i> Down</td>
                            <th>Up Index</th>
                            <th>Down Index</th>
                            <td>Allowed</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target hover-shadow" ng-repeat="item in replication_serverManager.items track by $index">
                            <td><span class="hovers-show">

                                    <button uib-tooltip="Query Status" class="btn btn-info " ng-click="replication_serverManager.countRecordsForSync($index,true)">
                                        <i class="fa  fa-question"></i> </button>

                                </span>
                            </td>

                            <td>{{item.server_address}}</td>
                            <td>
                                <button  ng-disabled="item.forSync.status=='offline' || !item.forSync.allowed" uib-tooltip="Synchronise UP" 
                                        class="btn {{item.forSync.status=='offline'?'warning':'btn-info'}}" 
                                        ng-click="replication_serverManager.toggleSync($index,'syncUp')">
                                    <i class="fa fa-{{item.syncUp_started?'pause':'play'}}"></i> &nbsp;
                                    <span class="label rounded dark pos-rlt text-sm m-r-xs">
                                        <b class="arrow left b-dark pull-in"></b>
                                        {{item.forSync.up.records}}
                                    </span>

                                </button>

                            </td>

                            <td>
                                <button ng-disabled="item.forSync.status=='offline' || !item.forSync.allowed" uib-tooltip="Synchronise Down" 
                                        class="btn {{item.forSync.status=='offline'?'warning':'btn-info'}}" 
                                        ng-click="replication_serverManager.toggleSync($index,'syncDown')">
                                    <i class="fa fa-{{item.syncDown_started?'pause':'play'}}"></i> &nbsp;
                                    <span class="label rounded dark pos-rlt text-sm m-r-xs">
                                        <b class="arrow left b-dark pull-in"></b>
                                        {{item.forSync.down.records}}
                                        {{item.forSync.status=='offline'?'!':''}}
                                    </span>

                                </button>
                            </td>

                            <td>{{item.up_index}}</td>
                            <td>{{item.down_index}}</td>
                            <td>
                                <input ng-model="item.forSync.allowed" type="checkbox"/>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="hide-if-no-paging">
                        <tr>
                            <td colspan="5" class="text-center">
                                <ul class="pagination">
                                </ul>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
