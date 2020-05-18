
<div class="padding" bm-ui-permission="app.crud.form_template.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{form_templateManager.formData.detail.headerStyle}} non-select">
            <h2>{{form_templateManager.formData.detail.title}}</h2>
            <small>{{form_templateManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="form_templateManager.saveItem(form_templateManager.editedFormTemplate)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="form_templateManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtname' ng-model='form_templateManager.editedFormTemplate.name' required><label class='non-select'>Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtlabel' ng-model='form_templateManager.editedFormTemplate.label' required><label class='non-select'>Label</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='form_templateManager.editedFormTemplate.description' required><label class='non-select'>Description</label></div>
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
      <label for="txtName" class="col-sm-4 control-label">Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtName" ng-model="editedFormTemplate.name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedFormTemplate.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtLabel" class="col-sm-4 control-label">Label</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtLabel" ng-model="editedFormTemplate.label">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->