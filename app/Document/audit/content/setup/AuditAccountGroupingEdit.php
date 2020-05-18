
<div class="box" bm-ui-permission="app.crud.audit_account_grouping.edit" login-user="app.loginUser">
    <div class="box-header dker non-select">
        <h2>{{editedNode.label}}</h2>
        <small>{{editedNode.data.grouping_code}}</small>
    </div>
    <div class="box-tool">
        <button uib-tooltip="Save" ng-click="saveItem(editedNode.data)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
        &nbsp;
        &nbsp;  &nbsp;
    </div>
    <div class="box-body ">
        <form>
            <div class="row row-sm">
                <div class="col-sm-6">
                    <div class="md-form-group">
                        <input class='md-input' id='txtgrouping_code' ng-model='editedNode.data.grouping_code' required>
                        <label class='non-select'>Grouping Code</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtdescription' ng-model='editedNode.data.description' required>
                        <label class='non-select'>Description</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtaccount_type' ng-model='editedNode.data.account_type' required>
                        <label class='non-select'>Account Type</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtsystem_name' ng-model='editedNode.data.system_name' required>
                        <label class='non-select'>System Name</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtnormal_balance' ng-model='editedNode.data.normal_balance' required>
                        <label class='non-select'>Normal Balance</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtarchived' ng-model='editedNode.data.archived' required>
                        <label class='non-select'>Archived</label>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="md-form-group">
                        <input class='md-input' id='txtgrouping_name' ng-model='editedNode.data.grouping_name' required>
                        <label class='non-select'>Grouping Name</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtparent_code' ng-model='editedNode.data.parent_code' required>
                        <label class='non-select'>Parent Code</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtmapping_hint' ng-model='editedNode.data.mapping_hint' required>
                        <label class='non-select'>Mapping Hint</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtreport_label' ng-model='editedNode.data.report_label' required>
                        <label class='non-select'>Report Label</label>
                    </div>
                    <div class="md-form-group">
                        <input class='md-input' id='txtreport_note_name' ng-model='editedNode.data.report_note_name' required>
                        <label class='non-select'>Report Note Name</label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
