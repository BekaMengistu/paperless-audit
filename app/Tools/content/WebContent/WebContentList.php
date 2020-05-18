
<div class="padding" bm-ui-permission="app.tools.web_content" login-user="app.loginUser">
    <div ng-if="dataImportManager.windowVisible">
        <span ng-include="dataImportManager.importOptions.templatePath"></span>
    </div>
    <div class="box">
        <div class="box-header {{web_contentManager.formData.list.headerStyle}} non-select">
            <h2>{{web_contentManager.formData.list.title}}</h2>
            <small>{{web_contentManager.formData.list.subTitle}}</small>
        </div>
        <div class="box-tool">
            <ul class="nav" >
                <li class="nav-item inline">
                    <input id="filter_WebContent" type="text" placeholder="Search" class="form-control input-sm w-auto inline m-r"/>
                </li>
                <li class="nav-item inline">
                    <button uib-tooltip="New" ng-click="web_contentManager.createItem()" 
                    	class="btn btn-default btn-xs"> &nbsp;<i class="fa fa-plus"></i>&nbsp; </button>
                </li>
                
            </ul>
            &nbsp;
        </div>
        <div class="box-body">
            <div class="table-responsive">
                <table class="table m-b-none table-condensed non-select" ui-jp="footable" data-filter="#filter_WebContent" data-page-size="10">
                    <thead>
                        <tr>
                            <td style="width:150px !important;"></td>
                            <th >Name</th>
                            <th >Category</th>
                            <th >Type</th>    
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover-target" ng-repeat="item in web_contentManager.web_contentsList track by $index">
                            <td><span class="hover-show">
                                <button uib-tooltip="Edit" class="btn btn-info btn-xs"  
            	ng-click="web_contentManager.editItem(item.web_content_id)"> <i class="fa fa-pencil"></i> </button>
                                <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
            	ng-click="web_contentManager.deleteItem(item.web_content_id)"> <i class="fa fa-trash-o"></i> </button>
                                </span></td>
                            <td>{{item.reference}}</td>
                            <td>{{item.category}}</td>
                            <td>{{item.content_type}}</td>
                        </tr>
                    </tbody>
                    <tfoot class="hide-if-no-paging">
                        <tr>
                            <td colspan="3" class="text-center"><ul class="pagination">
                                </ul></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
