
<div class="padding" bm-ui-permission="app.crud.audit_account_grouping.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_account_groupingManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_account_groupingManager.formData.detail.title}}</h2>
            <small>{{audit_account_groupingManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_account_groupingManager.saveItem(audit_account_groupingManager.editedAuditAccountGrouping)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_account_groupingManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtgrouping_code' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.grouping_code' required><label class='non-select'>Grouping Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.description' required><label class='non-select'>Description</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaccount_type' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.account_type' required><label class='non-select'>Account Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtsystem_name' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.system_name' required><label class='non-select'>System Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtnormal_balance' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.normal_balance' required><label class='non-select'>Normal Balance</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.archived' required><label class='non-select'>Archived</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtgrouping_name' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.grouping_name' required><label class='non-select'>Grouping Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_code' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.parent_code' required><label class='non-select'>Parent Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txtmapping_hint' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.mapping_hint' required><label class='non-select'>Mapping Hint</label></div>
<div class="md-form-group"> <input class='md-input' id='txtreport_label' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.report_label' required><label class='non-select'>Report Label</label></div>
<div class="md-form-group"> <input class='md-input' id='txtreport_note_name' ng-model='audit_account_groupingManager.editedAuditAccountGrouping.report_note_name' required><label class='non-select'>Report Note Name</label></div>
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
      <label for="txtGroupingCode" class="col-sm-4 control-label">Grouping Code</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtGroupingCode" ng-model="editedAuditAccountGrouping.grouping_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtGroupingName" class="col-sm-4 control-label">Grouping Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtGroupingName" ng-model="editedAuditAccountGrouping.grouping_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedAuditAccountGrouping.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentCode" class="col-sm-4 control-label">Parent Code</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentCode" ng-model="editedAuditAccountGrouping.parent_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAccountType" class="col-sm-4 control-label">Account Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAccountType" ng-model="editedAuditAccountGrouping.account_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtMappingHint" class="col-sm-4 control-label">Mapping Hint</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtMappingHint" ng-model="editedAuditAccountGrouping.mapping_hint">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtSystemName" class="col-sm-4 control-label">System Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtSystemName" ng-model="editedAuditAccountGrouping.system_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtReportLabel" class="col-sm-4 control-label">Report Label</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtReportLabel" ng-model="editedAuditAccountGrouping.report_label">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtNormalBalance" class="col-sm-4 control-label">Normal Balance</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtNormalBalance" ng-model="editedAuditAccountGrouping.normal_balance">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtReportNoteName" class="col-sm-4 control-label">Report Note Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtReportNoteName" ng-model="editedAuditAccountGrouping.report_note_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedAuditAccountGrouping.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->