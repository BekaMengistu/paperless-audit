
<div class="padding" bm-ui-permission="app.crud.audit_engagement" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{audit_engagementManager.formData.list.headerStyle}} non-select">
            <h2>{{audit_engagementManager.formData.list.title}}</h2>
            <small>{{audit_engagementManager.formData.list.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_AuditEngagement" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                <li class="nav-item inline">
                    <button uib-tooltip="New" ng-click="audit_engagementManager.createItem()" 
                    	class="btn btn-default btn-xs"> &nbsp;<i class="fa fa-plus"></i>&nbsp; </button>
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
            <div class="table-responsive">
                <table class="table m-b-none table-condenced non-select" ui-jp="footable" data-filter="#filter_AuditEngagement" data-page-size="5">
                    <thead>
                        <tr>
                            <td style="width:150px !important;"></td>
                            <th >Customer Id</th>
<th >Company Type</th>
<th >Schedules Date</th>
<th >Closing Date</th>
<th >Closing Date Ec</th>
<th >Audit Fee</th>
<th >Audit Completion Time</th>
<th >Client Contact Person</th>
<th >Client Contact Phone</th>
<th >Verification Code</th>
<th >Opinion</th>
<th >Form Value Id</th>
<th >Document Id</th>
<th >Assignee</th>
<th >Audit Status</th>
<th >Archived</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target hover-shadow" ng-repeat="item in audit_engagementManager.audit_engagementsList track by $index">
                            <td><span class="hover-show">
                                <button uib-tooltip="Edit" class="btn btn-info btn-xs"  
            	ng-click="audit_engagementManager.editItem(item.audit_engagement_id)"> <i class="fa fa-pencil"></i> </button>
                                <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
            	ng-click="audit_engagementManager.deleteItem(item.audit_engagement_id)"> <i class="fa fa-trash-o"></i> </button>
                                </span></td>
                            <td>{{item.customer_id}}</td>
<td>{{item.company_type}}</td>
<td>{{item.schedules_date}}</td>
<td>{{item.closing_date}}</td>
<td>{{item.closing_date_ec}}</td>
<td>{{item.audit_fee}}</td>
<td>{{item.audit_completion_time}}</td>
<td>{{item.client_contact_person}}</td>
<td>{{item.client_contact_phone}}</td>
<td>{{item.verification_code}}</td>
<td>{{item.opinion}}</td>
<td>{{item.form_value_id}}</td>
<td>{{item.document_id}}</td>
<td>{{item.assignee}}</td>
<td>{{item.audit_status}}</td>
<td>{{item.archived}}</td>
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
