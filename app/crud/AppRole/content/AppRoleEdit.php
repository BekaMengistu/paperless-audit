
<div class="padding" bm-ui-permission="app.crud.app_role.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{app_roleManager.formData.detail.headerStyle}} non-select">
            <h2>{{app_roleManager.formData.detail.title}}</h2>
            <small>{{app_roleManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="app_roleManager.saveItem(app_roleManager.editedAppRole)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="app_roleManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtname' ng-model='app_roleManager.editedAppRole.name' required><label class='non-select'>Name</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='app_roleManager.editedAppRole.description' required><label class='non-select'>Description</label></div>
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
            
        	    		<input type="text" class="form-control" id="txtName" ng-model="editedAppRole.name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedAppRole.description">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->