<!--
<abn-tree 
              tree-data         = "treeManager.tree" 
              tree-control      = "my_tree" 
              on-select         = "my_tree_handler(branch)" 
              expand-level      = "2" 
              initial-selection = "Documents"
              icon-leaf         = "fa fa-file fa-fw m-r-xs text-muted"
              icon-expand       = "fa fa-folder-o fa-fw m-r-xs"
              icon-collapse     = "fa fa-folder-open-o fa-fw m-r-xs"
              >
            </abn-tree>
   -->         

<div class="padding">
<div class="box">
<input class="input-sm pull-right" type="text" data-ng-model="filterString"	placeholder="Filter" />
	<tree-grid tree-data="treeManager.tree" tree-control="my_tree" col-defs="col_defs" expand-on="expandingProperty" on-select="my_tree_handler(branch)" expandss-level="2" icon-leaf= "glyphicon glyphicon-globe"></tree-grid>
</div>


<!--
	<table class="table table-hover">
    	<thead>
        	<tr>
            	<th>Name</th>
                <th>Description</th>
                <th>Tags</th>
            </tr>
         </thead>
         <tbody ng-repeat="item in treeManager.tree">
         	<tr>
            	<td>{{item.label}}</td>
                <td>{{item.data.description}}</td>
                <td>{{item.data.tags}}</td>
            </tr>

                <tbody ng-repeat="item2 in item.children">
                    <tr>
                        <td> &nbsp; &nbsp; {{item2.label}}</td>
                        <td>{{item2.data.description}}</td>
                        <td>{{item2.data.tags}}</td>
                    </tr>
                 </tbody>

            
         </tbody>
         </tbody>
    </table>

-->

	<div class="box">
    	<div class="box-header {{documentManager.formData.list.headerStyle}}">
			
            <div class="pull-right">
            	<button uib-tooltip="Create New Document" 
                	ng-click="documentManager.createItem()" class="btn btn-default">New</button>
                
              Search: <input id="filter_Document" type="text" class="form-control input-sm w-auto inline m-r"/>
            </div> 
            
			<h2>{{documentManager.documentsList.length}} {{documentManager.formData.list.title}}</h2>
			<small>{{documentManager.formData.list.subTitle}}</small>
        </div>
        <div class="box-body">
                   
		<div class="table-responsive">
		<table class="table m-b-none" ui-jp="footable" data-filter="#filter_Document" data-page-size="5">
        <thead>
          <tr>
          	<td></td>
            <td style="width:150px;"></td> 
            
    <th >Document Name</th><th >Description</th><th >Document Category Id</th><th >Parent Type</th><th >Document Path</th><th >Tags</th><th >Parent Id</th><th >IsTemplate</th><th >Folder Id</th><th >Mime Type</th><th >Archived</th>    
    </tr>
    </thead>
        <tbody>
    <tr ng-repeat="item in documentManager.documentsList">
    	
 		<td></td>
        <td>
         	<button uib-tooltip="Edit" class="btn btn-info btn-xs"  
            	ng-click="documentManager.editItem(item.document_id)">
                	<i class="fa fa-pencil"></i>
            </button>
        	
            <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
            	ng-click="documentManager.deleteItem(item.document_id)">
            		<i class="fa fa-trash-o"></i>
            </button>
        </td>

        <td>{{item.document_name}}</td><td>{{item.description}}</td><td>{{item.document_category_id}}</td><td>{{item.parent_type}}</td><td><a href='files/uploads/{{item.document_path}}'>View</a></td><td>{{item.tags}}</td><td>{{item.parent_id}}</td><td>{{item.isTemplate}}</td><td>{{item.folder_id}}</td><td>{{item.mime_type}}</td><td>{{item.archived}}</td>        
        
    </tr>
    </tbody>
        <tfoot class="hide-if-no-paging">
          <tr>
              <td colspan="5" class="text-center">
                  <ul class="pagination"></ul>
              </td>
          </tr>
        </tfoot>
    
</table>
</div>
		</div>

  </div>
</div>



