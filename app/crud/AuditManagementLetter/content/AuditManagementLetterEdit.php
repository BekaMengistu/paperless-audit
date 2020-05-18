
<div class="padding" bm-ui-permission="app.crud.audit_management_letter.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_management_letterManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_management_letterManager.formData.detail.title}}</h2>
            <small>{{audit_management_letterManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_management_letterManager.saveItem(audit_management_letterManager.editedAuditManagementLetter)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_management_letterManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtaudit_id' ng-model='audit_management_letterManager.editedAuditManagementLetter.audit_id' required><label class='non-select'>Audit Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaudited_item_id' ng-model='audit_management_letterManager.editedAuditManagementLetter.audited_item_id' required><label class='non-select'>Audited Item Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtcontent' ng-model='audit_management_letterManager.editedAuditManagementLetter.content' required><label class='non-select'>Content</label></div>
<div class="md-form-group"> <input class='md-input' id='txtqualification_point' ng-model='audit_management_letterManager.editedAuditManagementLetter.qualification_point' required><label class='non-select'>Qualification Point</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtaudit_procedure_id' ng-model='audit_management_letterManager.editedAuditManagementLetter.audit_procedure_id' required><label class='non-select'>Audit Procedure Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaudited_item_type' ng-model='audit_management_letterManager.editedAuditManagementLetter.audited_item_type' required><label class='non-select'>Audited Item Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtresponse' ng-model='audit_management_letterManager.editedAuditManagementLetter.response' required><label class='non-select'>Response</label></div>
<div class="md-form-group"> <input class='md-input' id='txtuser_id' ng-model='audit_management_letterManager.editedAuditManagementLetter.user_id' required><label class='non-select'>User Id</label></div>
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
      <label for="txtAuditId" class="col-sm-4 control-label">Audit Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditId" ng-model="editedAuditManagementLetter.audit_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditProcedureId" class="col-sm-4 control-label">Audit Procedure Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditProcedureId" ng-model="editedAuditManagementLetter.audit_procedure_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditedItemId" class="col-sm-4 control-label">Audited Item Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditedItemId" ng-model="editedAuditManagementLetter.audited_item_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditedItemType" class="col-sm-4 control-label">Audited Item Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditedItemType" ng-model="editedAuditManagementLetter.audited_item_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtContent" class="col-sm-4 control-label">Content</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtContent" ng-model="editedAuditManagementLetter.content">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtResponse" class="col-sm-4 control-label">Response</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtResponse" ng-model="editedAuditManagementLetter.response">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtQualificationPoint" class="col-sm-4 control-label">Qualification Point</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtQualificationPoint" ng-model="editedAuditManagementLetter.qualification_point">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtUserId" class="col-sm-4 control-label">User Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUserId" ng-model="editedAuditManagementLetter.user_id">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->