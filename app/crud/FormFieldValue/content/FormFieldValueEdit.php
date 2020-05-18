
<div class="padding" bm-ui-permission="app.crud.form_field_value.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{form_field_valueManager.formData.detail.headerStyle}} non-select">
            <h2>{{form_field_valueManager.formData.detail.title}}</h2>
            <small>{{form_field_valueManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="form_field_valueManager.saveItem(form_field_valueManager.editedFormFieldValue)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="form_field_valueManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtform_value_id' ng-model='form_field_valueManager.editedFormFieldValue.form_value_id' required><label class='non-select'>Form Value Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtfield_value' ng-model='form_field_valueManager.editedFormFieldValue.field_value' required><label class='non-select'>Field Value</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtform_field_template_id' ng-model='form_field_valueManager.editedFormFieldValue.form_field_template_id' required><label class='non-select'>Form Field Template Id</label></div>
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
      <label for="txtFormValueId" class="col-sm-4 control-label">Form Value Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtFormValueId" ng-model="editedFormFieldValue.form_value_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtFormFieldTemplateId" class="col-sm-4 control-label">Form Field Template Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtFormFieldTemplateId" ng-model="editedFormFieldValue.form_field_template_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtFieldValue" class="col-sm-4 control-label">Field Value</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtFieldValue" ng-model="editedFormFieldValue.field_value">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->