
<div class="padding" bm-ui-permission="app.crud.signin_log" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{signin_logManager.listEditor.headerStyle}} non-select">
            <h2>{{signin_logManager.listEditor.title}}</h2>
            <small>{{signin_logManager.listEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_SigninLog" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                
            </ul>
            &nbsp;
        </div>
        <div class="box-body">
            <div class="table-responsive">
                <table class="table m-b-none table-condenced non-select" ui-jp="footable" data-filter="#filter_SigninLog" data-page-size="5">
                    <thead>
                        <tr>
                            
                            <th >Access Time</th>
<th >Ip Address</th>
<th >User Name</th>
<th >Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target hover-shadow" ng-repeat="item in signin_logManager.items track by $index">
                            
                            <td>{{item.access_time|date}}</td>
<td>{{item.ip_address}}</td>
<td>{{item.user_name}}</td>
<td>{{item.status}}</td>
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
