
<div class="padding" bm-ui-permission="app.crud.audit_finding.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_findingManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_findingManager.formData.detail.title}}</h2>
            <small>{{audit_findingManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_findingManager.saveItem(audit_findingManager.editedAuditFinding)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_findingManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtaudit_id' ng-model='audit_findingManager.editedAuditFinding.audit_id' required><label class='non-select'>Audit Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaudited_item_id' ng-model='audit_findingManager.editedAuditFinding.audited_item_id' required><label class='non-select'>Audited Item Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtnotes' ng-model='audit_findingManager.editedAuditFinding.notes' required><label class='non-select'>Notes</label></div>
<div class="md-form-group"> <input class='md-input' id='txtissues' ng-model='audit_findingManager.editedAuditFinding.issues' required><label class='non-select'>Issues</label></div>
<div class="md-form-group"> <input class='md-input' id='txtuser_id' ng-model='audit_findingManager.editedAuditFinding.user_id' required><label class='non-select'>User Id</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtaudit_procedure_id' ng-model='audit_findingManager.editedAuditFinding.audit_procedure_id' required><label class='non-select'>Audit Procedure Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaudited_item_type' ng-model='audit_findingManager.editedAuditFinding.audited_item_type' required><label class='non-select'>Audited Item Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtwork_done' ng-model='audit_findingManager.editedAuditFinding.work_done' required><label class='non-select'>Work Done</label></div>
<div class="md-form-group"> <input class='md-input' id='txtreview_notes' ng-model='audit_findingManager.editedAuditFinding.review_notes' required><label class='non-select'>Review Notes</label></div>
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
            
        	    		<input type="text" class="form-control" id="txtAuditId" ng-model="editedAuditFinding.audit_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditProcedureId" class="col-sm-4 control-label">Audit Procedure Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditProcedureId" ng-model="editedAuditFinding.audit_procedure_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditedItemId" class="col-sm-4 control-label">Audited Item Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditedItemId" ng-model="editedAuditFinding.audited_item_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditedItemType" class="col-sm-4 control-label">Audited Item Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditedItemType" ng-model="editedAuditFinding.audited_item_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtNotes" class="col-sm-4 control-label">Notes</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtNotes" ng-model="editedAuditFinding.notes">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtWorkDone" class="col-sm-4 control-label">Work Done</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtWorkDone" ng-model="editedAuditFinding.work_done">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtIssues" class="col-sm-4 control-label">Issues</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtIssues" ng-model="editedAuditFinding.issues">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtReviewNotes" class="col-sm-4 control-label">Review Notes</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtReviewNotes" ng-model="editedAuditFinding.review_notes">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtUserId" class="col-sm-4 control-label">User Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUserId" ng-model="editedAuditFinding.user_id">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->