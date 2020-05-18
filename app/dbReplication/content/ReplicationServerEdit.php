
<div class="padding" bm-ui-permission="app.crud.replication_server.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{replication_serverManager.detailEditor.headerStyle}} non-select">
            <h2>{{replication_serverManager.detailEditor.title}}</h2>
            <small>{{replication_serverManager.detailEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="replication_serverManager.saveItem(replication_serverManager.editedItem)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
						<a uib-tooltip="To List" ui-sref="{{replication_serverManager.listEditor.url}}" class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></a>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtserver_address' ng-model='replication_serverManager.editedItem.server_address' required><label class='non-select'>Server Address</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdown_index' ng-model='replication_serverManager.editedItem.down_index' required><label class='non-select'>Down Index</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtup_index' ng-model='replication_serverManager.editedItem.up_index' required><label class='non-select'>Up Index</label></div>
</div>
                </div>
            </form>
        </div>
    </div>
</div>

