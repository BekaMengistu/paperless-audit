
<div class="padding" bm-ui-permission="app.crud.signin_log.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{signin_logManager.detailEditor.headerStyle}} non-select">
            <h2>{{signin_logManager.detailEditor.title}}</h2>
            <small>{{signin_logManager.detailEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="signin_logManager.saveItem(signin_logManager.editedItem)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
						<a uib-tooltip="To List" ui-sref="{{signin_logManager.listEditor.url}}" class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></a>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtaccess_time' ng-model='signin_logManager.editedItem.access_time' required><label class='non-select'>Access Time</label></div>
<div class="md-form-group"> <input class='md-input' id='txtuser_name' ng-model='signin_logManager.editedItem.user_name' required><label class='non-select'>User Name</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtip_address' ng-model='signin_logManager.editedItem.ip_address' required><label class='non-select'>Ip Address</label></div>
<div class="md-form-group"> <input class='md-input' id='txtstatus' ng-model='signin_logManager.editedItem.status' required><label class='non-select'>Status</label></div>
</div>
                </div>
            </form>
        </div>
    </div>
</div>

