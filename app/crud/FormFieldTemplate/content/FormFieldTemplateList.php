
<div class="padding" bm-ui-permission="app.crud.form_field_template" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{form_field_templateManager.formData.list.headerStyle}} non-select">
            <h2>{{form_field_templateManager.formData.list.title}}</h2>
            <small>{{form_field_templateManager.formData.list.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_FormFieldTemplate" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                <li class="nav-item inline">
                    <button uib-tooltip="New" ng-click="form_field_templateManager.createItem()" 
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
                <table class="table m-b-none table-condenced non-select" ui-jp="footable" data-filter="#filter_FormFieldTemplate" data-page-size="5">
                    <thead>
                        <tr>
                            <td style="width:150px !important;"></td>
                            <th >Form Template Id</th>
<th >Name</th>
<th >Label</th>
<th >Data Type</th>
<th >Required</th>
<th >Default Value</th>
<th >Placeholder</th>
<th >Parent Id</th>
<th >Parent Type</th>
<th >Repeating</th>
<th >Lookup Id</th>
<th >Width</th>
<th >Section Id</th>
<th >Display Order</th>
<th >Archived</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target hover-shadow" ng-repeat="item in form_field_templateManager.form_field_templatesList track by $index">
                            <td><span class="hover-show">
                                <button uib-tooltip="Edit" class="btn btn-info btn-xs"  
            	ng-click="form_field_templateManager.editItem(item.form_field_template_id)"> <i class="fa fa-pencil"></i> </button>
                                <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
            	ng-click="form_field_templateManager.deleteItem(item.form_field_template_id)"> <i class="fa fa-trash-o"></i> </button>
                                </span></td>
                            <td>{{item.form_template_id}}</td>
<td>{{item.name}}</td>
<td>{{item.label}}</td>
<td>{{item.data_type}}</td>
<td>{{item.required}}</td>
<td>{{item.default_value}}</td>
<td>{{item.placeholder}}</td>
<td>{{item.parent_id}}</td>
<td>{{item.parent_type}}</td>
<td>{{item.repeating}}</td>
<td>{{item.lookup_id}}</td>
<td>{{item.width}}</td>
<td>{{item.section_id}}</td>
<td>{{item.display_order}}</td>
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
