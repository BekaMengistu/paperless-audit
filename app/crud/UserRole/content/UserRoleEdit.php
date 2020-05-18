
<div class="padding" bm-ui-permission="app.crud.user_role.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{user_roleManager.formData.detail.headerStyle}} non-select">
            <h2>{{user_roleManager.formData.detail.title}}</h2>
            <small>{{user_roleManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="user_roleManager.saveItem(user_roleManager.editedUserRole)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="user_roleManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtuser_id' ng-model='user_roleManager.editedUserRole.user_id' required><label class='non-select'>User Id</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtapp_role_id' ng-model='user_roleManager.editedUserRole.app_role_id' required><label class='non-select'>App Role Id</label></div>
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
      <label for="txtUserId" class="col-sm-4 control-label">User Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUserId" ng-model="editedUserRole.user_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAppRoleId" class="col-sm-4 control-label">App Role Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAppRoleId" ng-model="editedUserRole.app_role_id">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->