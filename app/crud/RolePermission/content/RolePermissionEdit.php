
<div class="padding" bm-ui-permission="app.crud.role_permission.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{role_permissionManager.formData.detail.headerStyle}} non-select">
            <h2>{{role_permissionManager.formData.detail.title}}</h2>
            <small>{{role_permissionManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="role_permissionManager.saveItem(role_permissionManager.editedRolePermission)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="role_permissionManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtapp_role_id' ng-model='role_permissionManager.editedRolePermission.app_role_id' required><label class='non-select'>App Role Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtapp_permission_name' ng-model='role_permissionManager.editedRolePermission.app_permission_name' required><label class='non-select'>App Permission Name</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtapp_permission_id' ng-model='role_permissionManager.editedRolePermission.app_permission_id' required><label class='non-select'>App Permission Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtallowed' ng-model='role_permissionManager.editedRolePermission.allowed' required><label class='non-select'>Allowed</label></div>
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
      <label for="txtAppRoleId" class="col-sm-4 control-label">App Role Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAppRoleId" ng-model="editedRolePermission.app_role_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAppPermissionId" class="col-sm-4 control-label">App Permission Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAppPermissionId" ng-model="editedRolePermission.app_permission_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAppPermissionName" class="col-sm-4 control-label">App Permission Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAppPermissionName" ng-model="editedRolePermission.app_permission_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAllowed" class="col-sm-4 control-label">Allowed</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAllowed" ng-model="editedRolePermission.allowed">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->