
<div class="padding" bm-ui-permission="app.crud.audit_company_type.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_company_typeManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_company_typeManager.formData.detail.title}}</h2>
            <small>{{audit_company_typeManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_company_typeManager.saveItem(audit_company_typeManager.editedAuditCompanyType)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_company_typeManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtcompany_type_code' ng-model='audit_company_typeManager.editedAuditCompanyType.company_type_code' required><label class='non-select'>Company Type Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='audit_company_typeManager.editedAuditCompanyType.description' required><label class='non-select'>Description</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtname' ng-model='audit_company_typeManager.editedAuditCompanyType.name' required><label class='non-select'>Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtreport_template' ng-model='audit_company_typeManager.editedAuditCompanyType.report_template' required><label class='non-select'>Report Template</label></div>
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
      <label for="txtCompanyTypeCode" class="col-sm-4 control-label">Company Type Code</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCompanyTypeCode" ng-model="editedAuditCompanyType.company_type_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtName" class="col-sm-4 control-label">Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtName" ng-model="editedAuditCompanyType.name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedAuditCompanyType.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtReportTemplate" class="col-sm-4 control-label">Report Template</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtReportTemplate" ng-model="editedAuditCompanyType.report_template">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->