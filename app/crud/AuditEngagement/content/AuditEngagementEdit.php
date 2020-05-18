
<div class="padding" bm-ui-permission="app.crud.audit_engagement.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_engagementManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_engagementManager.formData.detail.title}}</h2>
            <small>{{audit_engagementManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_engagementManager.saveItem(audit_engagementManager.editedAuditEngagement)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_engagementManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtcustomer_id' ng-model='audit_engagementManager.editedAuditEngagement.customer_id' required><label class='non-select'>Customer Id</label></div>
<div class="md-form-group"> <input type="text"  size="8" class="md-input" 
                  ng-model="audit_engagementManager.editedAuditEngagement.schedules_date" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
             
            <label class='non-select'>Schedules Date</label></div>
<div class="md-form-group"> <input class='md-input' id='txtclosing_date_ec' ng-model='audit_engagementManager.editedAuditEngagement.closing_date_ec' required><label class='non-select'>Closing Date Ec</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaudit_completion_time' ng-model='audit_engagementManager.editedAuditEngagement.audit_completion_time' required><label class='non-select'>Audit Completion Time</label></div>
<div class="md-form-group"> <input class='md-input' id='txtclient_contact_phone' ng-model='audit_engagementManager.editedAuditEngagement.client_contact_phone' required><label class='non-select'>Client Contact Phone</label></div>
<div class="md-form-group"> <input class='md-input' id='txtopinion' ng-model='audit_engagementManager.editedAuditEngagement.opinion' required><label class='non-select'>Opinion</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdocument_id' ng-model='audit_engagementManager.editedAuditEngagement.document_id' required><label class='non-select'>Document Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaudit_status' ng-model='audit_engagementManager.editedAuditEngagement.audit_status' required><label class='non-select'>Audit Status</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtcompany_type' ng-model='audit_engagementManager.editedAuditEngagement.company_type' required><label class='non-select'>Company Type</label></div>
<div class="md-form-group"> <input type="text"  size="8" class="md-input" 
                  ng-model="audit_engagementManager.editedAuditEngagement.closing_date" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
             
            <label class='non-select'>Closing Date</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaudit_fee' ng-model='audit_engagementManager.editedAuditEngagement.audit_fee' required><label class='non-select'>Audit Fee</label></div>
<div class="md-form-group"> <input class='md-input' id='txtclient_contact_person' ng-model='audit_engagementManager.editedAuditEngagement.client_contact_person' required><label class='non-select'>Client Contact Person</label></div>
<div class="md-form-group"> <input class='md-input' id='txtverification_code' ng-model='audit_engagementManager.editedAuditEngagement.verification_code' required><label class='non-select'>Verification Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txtform_value_id' ng-model='audit_engagementManager.editedAuditEngagement.form_value_id' required><label class='non-select'>Form Value Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtassignee' ng-model='audit_engagementManager.editedAuditEngagement.assignee' required><label class='non-select'>Assignee</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='audit_engagementManager.editedAuditEngagement.archived' required><label class='non-select'>Archived</label></div>
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
      <label for="txtCustomerId" class="col-sm-4 control-label">Customer Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCustomerId" ng-model="editedAuditEngagement.customer_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCompanyType" class="col-sm-4 control-label">Company Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCompanyType" ng-model="editedAuditEngagement.company_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtSchedulesDate" class="col-sm-4 control-label">Schedules Date</label>
        <div class="col-sm-7">
            
        	            <div class="form-group col-sm-12">
            <input type="text" size="8" class="form-control" 
              ng-model="editedAuditEngagement.schedules_date" 
              data-autoclose="1" 
              placeholder="Date"
              data-icon-left="fa fa-chevron-left" 
              data-icon-right="fa fa-chevron-right" 
              bs-datepicker>
            </div>
                    
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtClosingDate" class="col-sm-4 control-label">Closing Date</label>
        <div class="col-sm-7">
            
        	            <div class="form-group col-sm-12">
            <input type="text" size="8" class="form-control" 
              ng-model="editedAuditEngagement.closing_date" 
              data-autoclose="1" 
              placeholder="Date"
              data-icon-left="fa fa-chevron-left" 
              data-icon-right="fa fa-chevron-right" 
              bs-datepicker>
            </div>
                    
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtClosingDateEc" class="col-sm-4 control-label">Closing Date Ec</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtClosingDateEc" ng-model="editedAuditEngagement.closing_date_ec">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditFee" class="col-sm-4 control-label">Audit Fee</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditFee" ng-model="editedAuditEngagement.audit_fee">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditCompletionTime" class="col-sm-4 control-label">Audit Completion Time</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditCompletionTime" ng-model="editedAuditEngagement.audit_completion_time">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtClientContactPerson" class="col-sm-4 control-label">Client Contact Person</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtClientContactPerson" ng-model="editedAuditEngagement.client_contact_person">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtClientContactPhone" class="col-sm-4 control-label">Client Contact Phone</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtClientContactPhone" ng-model="editedAuditEngagement.client_contact_phone">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtVerificationCode" class="col-sm-4 control-label">Verification Code</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtVerificationCode" ng-model="editedAuditEngagement.verification_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtOpinion" class="col-sm-4 control-label">Opinion</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtOpinion" ng-model="editedAuditEngagement.opinion">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtFormValueId" class="col-sm-4 control-label">Form Value Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtFormValueId" ng-model="editedAuditEngagement.form_value_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDocumentId" class="col-sm-4 control-label">Document Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDocumentId" ng-model="editedAuditEngagement.document_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAssignee" class="col-sm-4 control-label">Assignee</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAssignee" ng-model="editedAuditEngagement.assignee">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditStatus" class="col-sm-4 control-label">Audit Status</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditStatus" ng-model="editedAuditEngagement.audit_status">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedAuditEngagement.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->