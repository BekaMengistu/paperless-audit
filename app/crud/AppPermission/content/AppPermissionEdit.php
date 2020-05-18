
<div class="padding" bm-ui-permission="app.crud.app_permission.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{app_permissionManager.formData.detail.headerStyle}} non-select">
            <h2>{{app_permissionManager.formData.detail.title}}</h2>
            <small>{{app_permissionManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="app_permissionManager.saveItem(app_permissionManager.editedAppPermission)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="app_permissionManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtname' ng-model='app_permissionManager.editedAppPermission.name' required><label class='non-select'>Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent' ng-model='app_permissionManager.editedAppPermission.parent' required><label class='non-select'>Parent</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='app_permissionManager.editedAppPermission.description' required><label class='non-select'>Description</label></div>
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
            
        	    		<input type="text" class="form-control" id="txtName" ng-model="editedAppPermission.name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedAppPermission.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParent" class="col-sm-4 control-label">Parent</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParent" ng-model="editedAppPermission.parent">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->