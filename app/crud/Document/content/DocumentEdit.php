
<div class="padding" bm-ui-permission="app.crud.document.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{documentManager.formData.detail.headerStyle}} non-select">
            <h2>{{documentManager.formData.detail.title}}</h2>
            <small>{{documentManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="documentManager.saveItem(documentManager.editedDocument)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="documentManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdocument_name' ng-model='documentManager.editedDocument.document_name' required><label class='non-select'>Document Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdocument_category_id' ng-model='documentManager.editedDocument.document_category_id' required><label class='non-select'>Document Category Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdocument_path' ng-model='documentManager.editedDocument.document_path' required><label class='non-select'>Document Path</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_id' ng-model='documentManager.editedDocument.parent_id' required><label class='non-select'>Parent Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtfolder_id' ng-model='documentManager.editedDocument.folder_id' required><label class='non-select'>Folder Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtpermission' ng-model='documentManager.editedDocument.permission' required><label class='non-select'>Permission</label></div>
<div class="md-form-group"> <input class='md-input' id='txtupload_type' ng-model='documentManager.editedDocument.upload_type' required><label class='non-select'>Upload Type</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='documentManager.editedDocument.description' required><label class='non-select'>Description</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_type' ng-model='documentManager.editedDocument.parent_type' required><label class='non-select'>Parent Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txttags' ng-model='documentManager.editedDocument.tags' required><label class='non-select'>Tags</label></div>
<div class="md-form-group"> <input class='md-input' id='txtisTemplate' ng-model='documentManager.editedDocument.isTemplate' required><label class='non-select'>IsTemplate</label></div>
<div class="md-form-group"> <input class='md-input' id='txtsystem_name' ng-model='documentManager.editedDocument.system_name' required><label class='non-select'>System Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtmime_type' ng-model='documentManager.editedDocument.mime_type' required><label class='non-select'>Mime Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='documentManager.editedDocument.archived' required><label class='non-select'>Archived</label></div>
</div>
                </div>
            </form>
        </div>
    </div>
</div>

<!--
<form class="form-horizontal" role="form" style="margin:10px;">
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDocumentName" class="col-sm-4 control-label">Document Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDocumentName" ng-model="editedDocument.document_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedDocument.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDocumentCategoryId" class="col-sm-4 control-label">Document Category Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDocumentCategoryId" ng-model="editedDocument.document_category_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentType" class="col-sm-4 control-label">Parent Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentType" ng-model="editedDocument.parent_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDocumentPath" class="col-sm-4 control-label">Document Path</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDocumentPath" ng-model="editedDocument.document_path">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtTags" class="col-sm-4 control-label">Tags</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtTags" ng-model="editedDocument.tags">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentId" class="col-sm-4 control-label">Parent Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentId" ng-model="editedDocument.parent_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtIsTemplate" class="col-sm-4 control-label">IsTemplate</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtIsTemplate" ng-model="editedDocument.isTemplate">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtFolderId" class="col-sm-4 control-label">Folder Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtFolderId" ng-model="editedDocument.folder_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtSystemName" class="col-sm-4 control-label">System Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtSystemName" ng-model="editedDocument.system_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtPermission" class="col-sm-4 control-label">Permission</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtPermission" ng-model="editedDocument.permission">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtMimeType" class="col-sm-4 control-label">Mime Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtMimeType" ng-model="editedDocument.mime_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtUploadType" class="col-sm-4 control-label">Upload Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUploadType" ng-model="editedDocument.upload_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedDocument.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->