
<div class="padding" bm-ui-permission="app.crud.document" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{documentManager.formData.list.headerStyle}} non-select">
            <h2>{{documentManager.formData.list.title}}</h2>
            <small>{{documentManager.formData.list.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_Document" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                <li class="nav-item inline">
                    <button uib-tooltip="New" ng-click="documentManager.createItem()" 
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
                <table class="table m-b-none table-condenced non-select" ui-jp="footable" data-filter="#filter_Document" data-page-size="5">
                    <thead>
                        <tr>
                            <td style="width:150px !important;"></td>
                            <th >Document Name</th>
<th >Description</th>
<th >Document Category Id</th>
<th >Parent Type</th>
<th >Document Path</th>
<th >Tags</th>
<th >Parent Id</th>
<th >IsTemplate</th>
<th >Folder Id</th>
<th >System Name</th>
<th >Permission</th>
<th >Mime Type</th>
<th >Upload Type</th>
<th >Archived</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target hover-shadow" ng-repeat="item in documentManager.documentsList track by $index">
                            <td><span class="hover-show">
                                <button uib-tooltip="Edit" class="btn btn-info btn-xs"  
            	ng-click="documentManager.editItem(item.document_id)"> <i class="fa fa-pencil"></i> </button>
                                <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
            	ng-click="documentManager.deleteItem(item.document_id)"> <i class="fa fa-trash-o"></i> </button>
                                </span></td>
                            <td>{{item.document_name}}</td>
<td>{{item.description}}</td>
<td>{{item.document_category_id}}</td>
<td>{{item.parent_type}}</td>
<td><a href='files/uploads/{{item.document_path}}'>View</a></td>
<td>{{item.tags}}</td>
<td>{{item.parent_id}}</td>
<td>{{item.isTemplate}}</td>
<td>{{item.folder_id}}</td>
<td>{{item.system_name}}</td>
<td>{{item.permission}}</td>
<td>{{item.mime_type}}</td>
<td>{{item.upload_type}}</td>
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
