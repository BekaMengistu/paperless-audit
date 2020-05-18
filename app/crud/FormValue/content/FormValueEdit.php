
<div class="padding" bm-ui-permission="app.crud.form_value.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{form_valueManager.formData.detail.headerStyle}} non-select">
            <h2>{{form_valueManager.formData.detail.title}}</h2>
            <small>{{form_valueManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="form_valueManager.saveItem(form_valueManager.editedFormValue)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="form_valueManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtform_template_id' ng-model='form_valueManager.editedFormValue.form_template_id' required><label class='non-select'>Form Template Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='form_valueManager.editedFormValue.archived' required><label class='non-select'>Archived</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='form_valueManager.editedFormValue.description' required><label class='non-select'>Description</label></div>
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
            
        	    		<input type="text" class="form-control" id="txtFormTemplateId" ng-model="editedFormValue.form_template_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedFormValue.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedFormValue.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->