<div class="padding" bm-ui-permission="app.replication.allowed_hosts" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{replication_allowed_hostsManager.detailEditor.headerStyle}} non-select">
            <h2>{{replication_allowed_hostsManager.detailEditor.title}}</h2>
            <small>{{replication_allowed_hostsManager.detailEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="replication_allowed_hostsManager.saveItem(replication_allowed_hostsManager.editedItem)" class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <a uib-tooltip="To List" ui-sref="{{replication_allowed_hostsManager.listEditor.url}}" class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></a>
            &nbsp; &nbsp; &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6">
                        <div class="md-form-group"> <input class='md-input' id='txthost_id' ng-model='replication_allowed_hostsManager.editedItem.host_id' required><label class='non-select'>Host Id</label></div>
                        
                        <div class="md-form-group"> <input class='md-input' id='txthost_description' ng-model='replication_allowed_hostsManager.editedItem.host_description' required><label class='non-select'>Host Description</label></div>
                        
                        
                        <div class="md-form-group"> <input class='md-input'  ng-model='replication_allowed_hostsManager.editedItem.allowedBool' type="checkbox" ng-change="replication_allowed_hostsManager.editedItem.allowed=replication_allowed_hostsManager.editedItem.allowedBool?1:0" required><label class='non-select'>Allowed</label></div>

                        <!--
                        <div class="md-form-group"> <input class='md-input' id='txtallowed' ng-model='replication_allowed_hostsManager.editedItem.allowed' required><label class='non-select'>Allowed</label></div>
                        -->
                        
                    </div>
                    <div class="col-sm-6">
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
