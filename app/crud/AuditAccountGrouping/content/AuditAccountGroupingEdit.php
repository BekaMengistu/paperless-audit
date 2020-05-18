
<div class="padding" bm-ui-permission="app.crud.audit_account_grouping.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_account_groupingManager.detailEditor.headerStyle}} non-select">
            <h2>{{audit_account_groupingManager.detailEditor.title}}</h2>
            <small>{{audit_account_groupingManager.detailEditor.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_account_groupingManager.saveItem(audit_account_groupingManager.editedItem)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
						<a uib-tooltip="To List" ui-sref="{{audit_account_groupingManager.listEditor.url}}" class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></a>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtgrouping_code' ng-model='audit_account_groupingManager.editedItem.grouping_code' required><label class='non-select'>Grouping Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='audit_account_groupingManager.editedItem.description' required><label class='non-select'>Description</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaccount_type' ng-model='audit_account_groupingManager.editedItem.account_type' required><label class='non-select'>Account Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtsystem_name' ng-model='audit_account_groupingManager.editedItem.system_name' required><label class='non-select'>System Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtnormal_balance' ng-model='audit_account_groupingManager.editedItem.normal_balance' required><label class='non-select'>Normal Balance</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='audit_account_groupingManager.editedItem.archived' required><label class='non-select'>Archived</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtgrouping_name' ng-model='audit_account_groupingManager.editedItem.grouping_name' required><label class='non-select'>Grouping Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_code' ng-model='audit_account_groupingManager.editedItem.parent_code' required><label class='non-select'>Parent Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txtmapping_hint' ng-model='audit_account_groupingManager.editedItem.mapping_hint' required><label class='non-select'>Mapping Hint</label></div>
<div class="md-form-group"> <input class='md-input' id='txtreport_label' ng-model='audit_account_groupingManager.editedItem.report_label' required><label class='non-select'>Report Label</label></div>
<div class="md-form-group"> <input class='md-input' id='txtreport_note_name' ng-model='audit_account_groupingManager.editedItem.report_note_name' required><label class='non-select'>Report Note Name</label></div>
</div>
                </div>
            </form>
        </div>
    </div>
</div>

