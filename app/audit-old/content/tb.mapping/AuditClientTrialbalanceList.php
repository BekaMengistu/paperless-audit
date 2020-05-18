<style>
	.select-small .form-control {padding:3px 3px 3px 3px !important;}
	.select-small .span ,.select-small button {overflow:hidden;}
</style>
<div class="padding" bm-ui-permission="app.crud.audit_client_trialbalance" login-user="app.loginUser">
    <div ng-if="audit_client_trialbalanceManager.dataImportManager.windowVisible">
        <span  ng-include="audit_client_trialbalanceManager.dataImportManager.importOptions.templatePath" ></span>
    </div>
    <div class="box">
        <div class="box-header {{audit_client_trialbalanceManager.formData.list.headerStyle}}">
            <h2>{{audit_client_trialbalanceManager.formData.list.title}} [{{audit_client_trialbalanceManager.audit_client_trialbalancesList.length}}]</h2>
            <small>{{audit_client_trialbalanceManager.formData.list.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_AuditClientTrialbalance" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                
                <li class="nav-item inline dropdown"> <a class="nav-link" data-toggle="dropdown" aria-expanded="false"> <i class="fa fa-bars"></i> </a>
                    <div class="dropdown-menu pull-right">
                        <a class="dropdown-item" href=""><i class="fa fa-refresh"></i> Refresh</a>
                        <div class="dropdown-divider">
                        </div>
                        <div class="dropdown-item dropdown-submenu">
                            <a tabindex="-1" href=""><i class="fa fa-cloud-download"></i> Export</a>
                            <div class="dropdown-menu pull-left" role="menu">
                                <a class="dropdown-item" href=""><i class="fa  fa-file-excel-o"></i> Excel</a> <a class="dropdown-item" href=""><i class="fa  fa-file-word-o"></i> Word</a> <a class="dropdown-item" href=""><i class="fa  fa-file-pdf-o"></i> PDF</a>
                            </div>
                        </div>
                        <div class="dropdown-item dropdown-submenu">
                            <a tabindex="-1" href=""><i class="fa fa-cloud-upload"></i> Import</a>
                            <div class="dropdown-menu pull-left" role="menu">
                                <a class="dropdown-item" href="" ng-click="dataImportManager.showImportWindow('Excel')"><i class="fa  fa-file-excel-o"></i> Excel</a> <a class="dropdown-item" href=""><i class="fa  fa-file-word-o"></i> Word</a> <a class="dropdown-item" href=""><i class="fa  fa-file-pdf-o"></i> PDF</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            &nbsp;
        </div>
        <div class="box-body">
        	<button style="displays:none;" class="btn btn-default" ng-click="saveAll(0)">Save</button>
            <div class="table-responsive">
                <table class="table m-b-none"  data-filter="#filter_AuditClientTrialbalance" data-page-size="5">
                    <thead>
                        <tr>
                        	<th style="width:20px;"></th>
                            <th style="width:200px;">Grouping</th>
                            <th >Acct Id</th>
                            <th >Acct Desc</th>
                            <th >Acct Type</th>
                            <th >Debit</th>
                            <th >Credit</th>
                            <th >Balance</th>
                            <th >Last Fye Balance</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in audit_client_trialbalanceManager.audit_client_trialbalancesList track by $index">
                            <td>
                            <i ng-show="item.busy" class="fa fa-spin  fa-circle-o-notch"></i>
                            </td>
                            <td>
                            <!--
                            <ui-select styles="border:solid 1px #0F9;" ng-model="item.parent" theme="bootstrap"  style="width: 250px;" title="Choose a Grouping" ng-change="groupingMapChanged(item)">
    						<ui-select-match placeholder="Type Grouping Key">{{$select.selected.grouping_name}}</ui-select-match>
                            <ui-select-choices repeat="k in validGrouping | filter: $select.search">
                              <span ng-bind-html="k.grouping_name | highlight: $select.search"></span>
                            </ui-select-choices>
                         </ui-select>
                         		 -->
                            	<div class="input-group input-group-sm select-small" >
                                    <ui-select ng-model="item.parent" theme="bootstrap" style="width:150px;" ng-change="groupingMapChanged(item)">
                                        <ui-select-match class="ui-select-match" placeholder="Select from the list...">{{$select.selected.grouping_name}}</ui-select-match>
                                        <ui-select-choices class="ui-select-choices" repeat="gp in validGrouping | filter: $select.search"> <span ng-bind-html="gp.grouping_name | highlight: $select.search"></span> <small ng-bind-html="item.email | highlight: $select.search"></small> </ui-select-choices>
                                    </ui-select>
                                    <span class="input-group-btn">
                                    <button ng-click="item.parent = undefined;groupingMapChanged(item);" class="btn white"> <span class="fa fa-remove"></span> </button>
                                    </span>
                                </div>
                               
                            </td>
                            <td>{{item.account_id}}</td>
                            <td>{{item.account_description}}</td>
                            <td>{{item.account_type}}</td>
                            <td>{{item.debit}}</td>
                            <td>{{item.credit}}</td>
                            <td>{{item.current_balance}}</td>
                            <td>{{item.last_fye_balance}}</td>
                            
                            <td><span class="footable-toggle"></span><label class="ui-check m-a-0">
                                    <input type="checkbox" ng-model="item.mapping_checked">
                                    <i class="dark-white"></i></label>{{item.mapping_checked}}</td>
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
