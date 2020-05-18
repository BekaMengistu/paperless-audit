
<div class="padding" bm-ui-permission="app.replication.allowed_hosts" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{replication_allowed_hostsManager.listEditor.headerStyle}} non-select">
            <h2>{{replication_allowed_hostsManager.listEditor.title}}</h2>
            <small>{{replication_allowed_hostsManager.listEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_ReplicationAllowedHosts" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                <li class="nav-item inline">
                    <button uib-tooltip="New" ng-click="replication_allowed_hostsManager.createItem()" 
                    	class="btn btn-default btn-xs"> &nbsp;<i class="fa fa-plus"></i>&nbsp; </button>
                </li>
            </ul>
            &nbsp;
        </div>
        <div class="box-body">
            <div class="table-responsive">
                <table class="table m-b-none table-condenced non-select" ui-jp="footable" data-filter="#filter_ReplicationAllowedHosts" data-page-size="5">
                    <thead>
                        <tr>
                            <td style="width:150px !important;"></td>
                            <th >Host Name</th>
<th >Host Description</th>
<th >Allowed?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target hover-shadow" ng-repeat="item in replication_allowed_hostsManager.items track by $index">
                            <td><span class="hover-show">
                                <button uib-tooltip="Edit" class="btn btn-info btn-xs"  
            	ng-click="replication_allowed_hostsManager.editItem(item.replication_allowed_hosts_id)"> <i class="fa fa-pencil"></i> </button>
                                <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
            	ng-click="replication_allowed_hostsManager.deleteItem(item.replication_allowed_hosts_id)"> <i class="fa fa-trash-o"></i> </button>
                                </span></td>
                            <td>{{item.host_id}}</td>
<td>{{item.host_description}}</td>
<td><i class="fa fa-{{item.allowed==1?'check':'square-o'}}"></i></td>
                        </tr>
                    </tbody>
                    <tfoot class="hide-if-no-paging">
                        <tr>
                            <td colspan="5" class="text-center"><ul class="pagination">
                                </ul></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
