  <style>
  	.doc-editor .detail-viewer {display:none;}
	.doc-viewer .editor {display:none;}
	.debug-false .debug {display:none;}
  </style>
  <div class="row-col debug-false">
    <div class="col-sm-1 col-md-3">
      <div class="p-a">
          <span ng-if="doing_async">...loading...</span>
          <div>
            <abn-tree 
              tree-data         = "my_data" 
              tree-control      = "my_tree" 
              on-select         = "my_tree_handler(branch)" 
              expand-level      = "2" 
              initial-selection = "Documents"
              icon-leaf         = "fa fa-file fa-fw m-r-xs text-muted"
              icon-expand       = "fa fa-folder-o fa-fw m-r-xs"
              icon-collapse     = "fa fa-folder-open-o fa-fw m-r-xs"
              >
            </abn-tree>
            
            
      </div>
      <div style="display:none;">
      	<div ng-repeat="doc in docsHash" ng-click="selectTreeBranch(doc.digital_document_id)" ng-show="doc.is_archived!='1'">
			{{doc.document_name}}
		</div>
      </div>
    </div>
    </div>
    <div class="col-sm-12 col-md-9">
    
      <div class="p-a pos-rlt">
        <div>
        	<?php include("partials/DigitalDocumentDetail.php")?>
        </div>
        <div>
        	<?php //include("partials/sortable.php")?>
        </div>
        
      </div>
    </div>
  </div>
  </div>

