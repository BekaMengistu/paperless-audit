
<div class="padding" bm-ui-permission="app.crud.form_field_template.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{form_field_templateManager.formData.detail.headerStyle}} non-select">
            <h2>{{form_field_templateManager.formData.detail.title}}</h2>
            <small>{{form_field_templateManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="form_field_templateManager.saveItem(form_field_templateManager.editedFormFieldTemplate)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="form_field_templateManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtform_template_id' ng-model='form_field_templateManager.editedFormFieldTemplate.form_template_id' required><label class='non-select'>Form Template Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtlabel' ng-model='form_field_templateManager.editedFormFieldTemplate.label' required><label class='non-select'>Label</label></div>
<div class="md-form-group"> <input class='md-input' id='txtrequired' ng-model='form_field_templateManager.editedFormFieldTemplate.required' required><label class='non-select'>Required</label></div>
<div class="md-form-group"> <input class='md-input' id='txtplaceholder' ng-model='form_field_templateManager.editedFormFieldTemplate.placeholder' required><label class='non-select'>Placeholder</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_type' ng-model='form_field_templateManager.editedFormFieldTemplate.parent_type' required><label class='non-select'>Parent Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtlookup_id' ng-model='form_field_templateManager.editedFormFieldTemplate.lookup_id' required><label class='non-select'>Lookup Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtsection_id' ng-model='form_field_templateManager.editedFormFieldTemplate.section_id' required><label class='non-select'>Section Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='form_field_templateManager.editedFormFieldTemplate.archived' required><label class='non-select'>Archived</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtname' ng-model='form_field_templateManager.editedFormFieldTemplate.name' required><label class='non-select'>Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdata_type' ng-model='form_field_templateManager.editedFormFieldTemplate.data_type' required><label class='non-select'>Data Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdefault_value' ng-model='form_field_templateManager.editedFormFieldTemplate.default_value' required><label class='non-select'>Default Value</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_id' ng-model='form_field_templateManager.editedFormFieldTemplate.parent_id' required><label class='non-select'>Parent Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtrepeating' ng-model='form_field_templateManager.editedFormFieldTemplate.repeating' required><label class='non-select'>Repeating</label></div>
<div class="md-form-group"> <input class='md-input' id='txtwidth' ng-model='form_field_templateManager.editedFormFieldTemplate.width' required><label class='non-select'>Width</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdisplay_order' ng-model='form_field_templateManager.editedFormFieldTemplate.display_order' required><label class='non-select'>Display Order</label></div>
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
      <label for="txtFormTemplateId" class="col-sm-4 control-label">Form Template Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtFormTemplateId" ng-model="editedFormFieldTemplate.form_template_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtName" class="col-sm-4 control-label">Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtName" ng-model="editedFormFieldTemplate.name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtLabel" class="col-sm-4 control-label">Label</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtLabel" ng-model="editedFormFieldTemplate.label">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDataType" class="col-sm-4 control-label">Data Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDataType" ng-model="editedFormFieldTemplate.data_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtRequired" class="col-sm-4 control-label">Required</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtRequired" ng-model="editedFormFieldTemplate.required">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDefaultValue" class="col-sm-4 control-label">Default Value</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDefaultValue" ng-model="editedFormFieldTemplate.default_value">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtPlaceholder" class="col-sm-4 control-label">Placeholder</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtPlaceholder" ng-model="editedFormFieldTemplate.placeholder">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentId" class="col-sm-4 control-label">Parent Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentId" ng-model="editedFormFieldTemplate.parent_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentType" class="col-sm-4 control-label">Parent Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentType" ng-model="editedFormFieldTemplate.parent_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtRepeating" class="col-sm-4 control-label">Repeating</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtRepeating" ng-model="editedFormFieldTemplate.repeating">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtLookupId" class="col-sm-4 control-label">Lookup Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtLookupId" ng-model="editedFormFieldTemplate.lookup_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtWidth" class="col-sm-4 control-label">Width</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtWidth" ng-model="editedFormFieldTemplate.width">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtSectionId" class="col-sm-4 control-label">Section Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtSectionId" ng-model="editedFormFieldTemplate.section_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDisplayOrder" class="col-sm-4 control-label">Display Order</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDisplayOrder" ng-model="editedFormFieldTemplate.display_order">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedFormFieldTemplate.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->