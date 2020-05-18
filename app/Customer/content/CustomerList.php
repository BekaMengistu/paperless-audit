<div class="padding">
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
                <li class="nav-item inline dropdown"  bm-ui-permission="app.customer.viewlist" login-user="app.loginUser"> 
                 <a class="nav-link" data-toggle="dropdown" aria-expanded="false"> <i class="fa fa-bars"></i> </a>
                    <div class="dropdown-menu pull-right">
                        <a class="dropdown-item" href=""><i class="fa fa-refresh"></i> Refresh</a>
                        <div class="dropdown-divider">
                        </div>
                        <div class="dropdown-item dropdown-submenu" bm-ui-permission="app.customer.export" login-user="app.loginUser">
                            <a tabindex="-1" href="" ><i class="fa fa-cloud-download"></i> Export</a>
                            <div class="dropdown-menu pull-left" role="menu">
                                <a class="dropdown-item" ng-click="exportToExcel()"><i class="fa  fa-file-excel-o"></i> Excel</a> 
															<!--	<a class="dropdown-item" href=""><i class="fa  fa-file-word-o"></i> Word</a> 
																<a class="dropdown-item" href=""><i class="fa  fa-file-pdf-o"></i> PDF</a>-->
                            </div>
                        </div>
                        <div class="dropdown-item dropdown-submenu" bm-ui-permission="app.customer.import" login-user="app.loginUser">
                            <a tabindex="-1" href="" ><i class="fa fa-cloud-upload"></i> Import</a>
                            <div class="dropdown-menu pull-left" role="menu">
                                <a class="dropdown-item" href="" ng-click="dataImportManager.showImportWindow('Excel')"><i class="fa  fa-file-excel-o"></i> Excel</a> 
																<!--<a class="dropdown-item" href=""><i class="fa  fa-file-word-o"></i> Word</a> 
																<a class="dropdown-item" href=""><i class="fa  fa-file-pdf-o"></i> PDF</a>-->
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            &nbsp;
        </div>
        <div class="boxs-body">
            <div class="tables-responsive"  bm-ui-permission="app.customer.viewlist" login-user="app.loginUser">
                <table class="tables m-b-none table-condensed" ui-jp="footable" data-filter="#filter_Customer" data-page-size="5">
                    <thead>
                        <tr style="line-height:2.5em;" class="b-b">
                            <td style="width:90px !important;"></td>
                            <td style="width:60px !important;"></td>
                            <th >Name</th>
                            <th >Tel.</th>
                            <th >Email</th>
				            <th>TIN</th>
                            <th>VAT</th>
                            <th >Company Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="item in customerManager.customersList track by $index" ng-init="item.logo=item.logo?item.logo:'habtamu-logo-final.svg	'" class="hover-shadow hover-target">
                           
                            <td  class="p-l-sm">
                            	<span class="hover-show">
                            	<button uib-tooltip="Edit" class="btn btn-info btn-xs" ng-click="customerManager.editItem(item.customer_id)"> 
                                	<i class="fa fa-pencil"></i> 
                                </button>
                                <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" ng-click="customerManager.deleteItem(item.customer_id)"> 
                                	<i class="fa fa-trash-o"></i> 
                                 </button>
                                 </span>
                            </td>
                            <td style="width:60px !important;"><img ng-src='files/uploads/{{item.logo}}' class='w-32 circle' ></td>
                            <td>{{item.customer_name}}</td>
                            <td>{{item.telephone_no}}</td>
                            <td>{{item.email}}</td>
				            <td>{{item.tin}}</td>
                            <td>{{item.vat_reg_no}}</td>
                            <td>{{companyTypesHash["item"+item.company_type].company_type_code}}</td>
                            
                        </tr>
                    </tbody>
                    <tfoot class="hide-if-no-paging">
                        <tr>
                            <td colspan="7" class="text-center"><ul class="pagination">
                                </ul></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
