
<div class="padding" bm-ui-permission="app.crud.customer" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{customerManager.formData.list.headerStyle}} non-select">
            <h2>{{customerManager.formData.list.title}}</h2>
            <small>{{customerManager.formData.list.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_Customer" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                <li class="nav-item inline">
                    <button uib-tooltip="New" ng-click="customerManager.createItem()" 
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
                <table class="table m-b-none table-condenced non-select" ui-jp="footable" data-filter="#filter_Customer" data-page-size="5">
                    <thead>
                        <tr>
                            <td style="width:150px !important;"></td>
                            <td ></td>
<th >Customer Name</th>
<th >Telephone No</th>
<th >Email</th>
<th >Company Type</th>
<th >Establishment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target hover-shadow" ng-repeat="item in customerManager.customersList track by $index">
                            <td><span class="hover-show">
                                <button uib-tooltip="Edit" class="btn btn-info btn-xs"  
            	ng-click="customerManager.editItem(item.customer_id)"> <i class="fa fa-pencil"></i> </button>
                                <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
            	ng-click="customerManager.deleteItem(item.customer_id)"> <i class="fa fa-trash-o"></i> </button>
                                </span></td>
                            <td class='sl-left'><img ng-src='files/uploads/{{item.logo}}' class='w-40 circle' ></td>
<td>{{item.customer_name}}</td>
<td>{{item.telephone_no}}</td>
<td>{{item.email}}</td>
<td>{{item.company_type}}</td>
<td>{{item.establishment}}</td>
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
