<style>
    .form-save {display: none;}
</style>

<div class="box">
    <div class="box-header dker">
        <h2>Basic Info</h2>
    </div>
    <div class="box-body ">
        <form>
        	<div class="row">
            	<div class="col-md-4">
                	<div class="md-form-group">
                        <input class='md-input' readonly="readonly" ng-model='auditManager.currentAudit.customer.customer_name'>
                        <label>Client</label>
                    </div>
                </div>
            	<div class="col-md-4">
                	<div class="md-form-group" bm-ui-permission="app.audit.company_type" login-user="app.loginUser">
                        <select class='md-input' ng-model="auditManager.currentAudit.engagementInfo.company_type" 
                        	ng-options="opt.audit_company_type_id as opt.name for opt in companyTypesLookup">
                        </select>
                        <label>Company Type</label>
                    </div>
                </div>
                <div class="col-md-4">
                	<div class="md-form-group" bm-ui-permission="app.audit.audit_standard" login-user="app.loginUser">
                        <select class='md-input' placeholder="Select Value" ng-model="auditManager.currentAudit.engagementInfo.audit_standard" ng-options="opt.name as opt.description for opt in customLookups.audit_standard"></select>
                        
                        <label>Audit Standard</label>
                        
                    </div>
                </div>
                
            </div>
            
            <div class="field-category">Dates</div>
            <div class="row">
            	<div class="col-md-4">
                <div class="md-form-group">
                        <input type="text" size="8" style="width: 60%; display: inline;" class="md-input" 
                  ng-model="auditManager.currentAudit.engagementInfo.schedules_date" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                  		<div style="display:inline;width:35%;text-align:right;">
                        	<button class="btn btn-default btn-sm" ng-click="setTodayDate('schedules_date')">Today</button>
                        </div>
                        <label>Schedules Date</label>
                  </div>      
                	
                </div>
            	<div class="col-md-4">
                <div class="md-form-group">
                        <input type="text" size="8" class="md-input" 
                  ng-model="auditManager.currentAudit.engagementInfo.closing_date" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                        <label>Closing Date</label>
                    </div>
                </div>
                <div class="col-md-4">
               <div class="md-form-group">
                        <select class='md-input' placeholder="Select" ng-model="auditManager.currentAudit.engagementInfo.closing_date_ec" 
                        	ng-options="opt.description as opt.name for opt in customLookups.year_ec">
                        </select>
                        <label>Closing Date Ec</label>
                    </div>
                </div>
                
            </div>
            
            
            
            <div class="field-category">Contact</div>        
            <div class="row">
            	<div class="col-md-4">
               	 	<div class="md-form-group">
                        <input class='md-input' ng-model='auditManager.currentAudit.engagementInfo.client_contact_person'>
                        <label>Contact Person</label>
                    </div>
                </div>
            	<div class="col-md-4">
                	<div class="md-form-group">
                        <input class='md-input' ng-model='auditManager.currentAudit.engagementInfo.client_contact_phone'>
                        <label>Telephone</label>
                    </div>
                </div>
                <div class="col-md-4">
                	<div class="md-form-group">
                        <input class='md-input' ng-model='auditManager.currentAudit.engagementInfo.contact_email'>
                        <label>Email</label>
                    </div>
                </div>
                
            </div>
            <div class="field-category ng-binding">Contract</div>
            <div class="row">
            	<div class="col-md-4">
                	<div class="md-form-group">
                        <input class='md-input' ng-model='auditManager.currentAudit.engagementInfo.audit_completion_time'>
                        <label>Completion Time</label>
                    </div>
                </div>
            	<div class="col-md-4">
                	<div class="md-form-group">
                        <input types="number" class='md-input' ng-model='auditManager.currentAudit.engagementInfo.audit_fee'>
                        <label>Audit Fee</label>
                    </div>
                </div>
                <div class="col-md-4">
                	<div class="md-form-group">
                        <input types="number" class='md-input' ng-model='auditManager.currentAudit.engagementInfo.employee_count'>
                        <label>No. of Employees</label>
                    </div>
                </div>
                
            </div>
            <div class="field-category ng-binding">Other</div>
            <div class="row">
            	<div class="col-md-4">
                	<div class="md-form-group" style="display:none;">
                        <input class='md-input' ng-model='auditManager.currentAudit.engagementInfo.assignee' required>
                        <label>Assignee</label>
                    </div>
                    <div class="md-form-group" bm-ui-permission="app.audit.can_qualify" login-user="app.loginUser" >
                        <select class='md-input'   ng-model="auditManager.currentAudit.engagementInfo.opinion" ng-options="opt.value as opt.label for opt in auditOpinionLookup">
                        </select>
                        <label>Opinion</label>
                    </div>
                    
                </div>
            	<div class="col-md-4">
                	<div class="md-form-group">
                        <select class='md-input' disableds="disabled"  ng-model="auditManager.currentAudit.engagementInfo.audit_status" ng-options="opt.value as opt.label for opt in auditStatusLookup">
                        </select>
                        <label>Audit Status</label>
                    </div>
                </div>
                <div class="col-md-4">
                <div class="md-form-group">
                        <input class='md-input' ng-model='auditManager.currentAudit.engagementInfo.verification_code' readonly="readonly">
                        <label>Verification Code</label>
                    </div>
                </div>
                
            </div>
            
  
        </form>
    </div>
</div>
