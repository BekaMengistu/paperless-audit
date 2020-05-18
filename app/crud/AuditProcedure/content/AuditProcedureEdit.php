
<div class="padding" bm-ui-permission="app.crud.audit_procedure.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_procedureManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_procedureManager.formData.detail.title}}</h2>
            <small>{{audit_procedureManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_procedureManager.saveItem(audit_procedureManager.editedAuditProcedure)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_procedureManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtref' ng-model='audit_procedureManager.editedAuditProcedure.ref' required><label class='non-select'>Ref</label></div>
<div class="md-form-group"> <input class='md-input' id='txtobjectives' ng-model='audit_procedureManager.editedAuditProcedure.objectives' required><label class='non-select'>Objectives</label></div>
<div class="md-form-group"> <input class='md-input' id='txtpriority' ng-model='audit_procedureManager.editedAuditProcedure.priority' required><label class='non-select'>Priority</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='audit_procedureManager.editedAuditProcedure.description' required><label class='non-select'>Description</label></div>
<div class="md-form-group"> <input class='md-input' id='txtgrouping_code' ng-model='audit_procedureManager.editedAuditProcedure.grouping_code' required><label class='non-select'>Grouping Code</label></div>
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
      <label for="txtRef" class="col-sm-4 control-label">Ref</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtRef" ng-model="editedAuditProcedure.ref">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedAuditProcedure.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtObjectives" class="col-sm-4 control-label">Objectives</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtObjectives" ng-model="editedAuditProcedure.objectives">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtGroupingCode" class="col-sm-4 control-label">Grouping Code</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtGroupingCode" ng-model="editedAuditProcedure.grouping_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtPriority" class="col-sm-4 control-label">Priority</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtPriority" ng-model="editedAuditProcedure.priority">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->