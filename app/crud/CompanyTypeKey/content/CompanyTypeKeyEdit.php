
<div class="padding" bm-ui-permission="app.crud.company_type_key.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{company_type_keyManager.formData.detail.headerStyle}} non-select">
            <h2>{{company_type_keyManager.formData.detail.title}}</h2>
            <small>{{company_type_keyManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="company_type_keyManager.saveItem(company_type_keyManager.editedCompanyTypeKey)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="company_type_keyManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtgrouping_code' ng-model='company_type_keyManager.editedCompanyTypeKey.grouping_code' required><label class='non-select'>Grouping Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txtallowed' ng-model='company_type_keyManager.editedCompanyTypeKey.allowed' required><label class='non-select'>Allowed</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtaudit_company_type_id' ng-model='company_type_keyManager.editedCompanyTypeKey.audit_company_type_id' required><label class='non-select'>Audit Company Type Id</label></div>
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
            
        	    		<input type="text" class="form-control" id="txtGroupingCode" ng-model="editedCompanyTypeKey.grouping_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditCompanyTypeId" class="col-sm-4 control-label">Audit Company Type Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditCompanyTypeId" ng-model="editedCompanyTypeKey.audit_company_type_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAllowed" class="col-sm-4 control-label">Allowed</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAllowed" ng-model="editedCompanyTypeKey.allowed">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->