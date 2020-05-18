
<div class="padding" bm-ui-permission="app.crud.db_transaction.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{db_transactionManager.detailEditor.headerStyle}} non-select">
            <h2>{{db_transactionManager.detailEditor.title}}</h2>
            <small>{{db_transactionManager.detailEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="db_transactionManager.saveItem(db_transactionManager.editedItem)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
						<a uib-tooltip="To List" ui-sref="{{db_transactionManager.listEditor.url}}" class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></a>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txttable_name' ng-model='db_transactionManager.editedItem.table_name' required><label class='non-select'>Table Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtjson_data' ng-model='db_transactionManager.editedItem.json_data' required><label class='non-select'>Json Data</label></div>
<div class="md-form-group"> <input class='md-input' id='txtmodify_time' ng-model='db_transactionManager.editedItem.modify_time' required><label class='non-select'>Modify Time</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txttable_id' ng-model='db_transactionManager.editedItem.table_id' required><label class='non-select'>Table Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtuser_id' ng-model='db_transactionManager.editedItem.user_id' required><label class='non-select'>User Id</label></div>
</div>
                </div>
            </form>
        </div>
    </div>
</div>

