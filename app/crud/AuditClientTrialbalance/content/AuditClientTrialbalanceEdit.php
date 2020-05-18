
<div class="padding" bm-ui-permission="app.crud.audit_client_trialbalance.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_client_trialbalanceManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_client_trialbalanceManager.formData.detail.title}}</h2>
            <small>{{audit_client_trialbalanceManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_client_trialbalanceManager.saveItem(audit_client_trialbalanceManager.editedAuditClientTrialbalance)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_client_trialbalanceManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txtaudit_engagement_id' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.audit_engagement_id' required>
                            <label class='non-select'>Audit Engagement Id</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtaccount_description' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.account_description' required>
                            <label class='non-select'>Account Description</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtcredit' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.credit' required>
                            <label class='non-select'>Credit</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtcurrent_balance' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.current_balance' required>
                            <label class='non-select'>Current Balance</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtparent_code' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.parent_code' required>
                            <label class='non-select'>Parent Code</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txtaccount_id' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.account_id' required>
                            <label class='non-select'>Account Id</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtdebit' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.debit' required>
                            <label class='non-select'>Debit</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtaccount_type' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.account_type' required>
                            <label class='non-select'>Account Type</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtlast_fye_balance' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.last_fye_balance' required>
                            <label class='non-select'>Last Fye Balance</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtmapping_checked' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.mapping_checked' required>
                            <label class='non-select'>Mapping Checked</label>
                        </div>
                    </div>
                </div>
                <div classs="row">
                	<div class="md-form-group">
                            <textarea class='md-input' id='txtaudit_extra' ng-model='audit_client_trialbalanceManager.editedAuditClientTrialbalance.extra'></textarea>
                            <label class='non-select'>Extra</label>
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
      <label for="txtAuditEngagementId" class="col-sm-4 control-label">Audit Engagement Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditEngagementId" ng-model="editedAuditClientTrialbalance.audit_engagement_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAccountId" class="col-sm-4 control-label">Account Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAccountId" ng-model="editedAuditClientTrialbalance.account_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAccountDescription" class="col-sm-4 control-label">Account Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAccountDescription" ng-model="editedAuditClientTrialbalance.account_description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDebit" class="col-sm-4 control-label">Debit</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDebit" ng-model="editedAuditClientTrialbalance.debit">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCredit" class="col-sm-4 control-label">Credit</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCredit" ng-model="editedAuditClientTrialbalance.credit">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAccountType" class="col-sm-4 control-label">Account Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAccountType" ng-model="editedAuditClientTrialbalance.account_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCurrentBalance" class="col-sm-4 control-label">Current Balance</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCurrentBalance" ng-model="editedAuditClientTrialbalance.current_balance">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtLastFyeBalance" class="col-sm-4 control-label">Last Fye Balance</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtLastFyeBalance" ng-model="editedAuditClientTrialbalance.last_fye_balance">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentCode" class="col-sm-4 control-label">Parent Code</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentCode" ng-model="editedAuditClientTrialbalance.parent_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtMappingChecked" class="col-sm-4 control-label">Mapping Checked</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtMappingChecked" ng-model="editedAuditClientTrialbalance.mapping_checked">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->