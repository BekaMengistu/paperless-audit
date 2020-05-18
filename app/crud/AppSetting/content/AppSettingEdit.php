
<div class="padding" bm-ui-permission="app.crud.app_setting.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{app_settingManager.formData.detail.headerStyle}} non-select">
            <h2>{{app_settingManager.formData.detail.title}}</h2>
            <small>{{app_settingManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="app_settingManager.saveItem(app_settingManager.editedAppSetting)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="app_settingManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtapp_name' ng-model='app_settingManager.editedAppSetting.app_name' required><label class='non-select'>App Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtsetting_value' ng-model='app_settingManager.editedAppSetting.setting_value' required><label class='non-select'>Setting Value</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtsetting_name' ng-model='app_settingManager.editedAppSetting.setting_name' required><label class='non-select'>Setting Name</label></div>
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
      <label for="txtAppName" class="col-sm-4 control-label">App Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAppName" ng-model="editedAppSetting.app_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtSettingName" class="col-sm-4 control-label">Setting Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtSettingName" ng-model="editedAppSetting.setting_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtSettingValue" class="col-sm-4 control-label">Setting Value</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtSettingValue" ng-model="editedAppSetting.setting_value">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->