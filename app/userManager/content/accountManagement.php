<div class="row row-sm">
	<div class="col-md-4">
    </div>
	<div class="col-md-4 p-t">
    
<div class="box">
    <div class="box-header light-blue-200">

        <h2>Change Password</h2>
        <small>Set a new password</small>
    </div>
    <form name="chagePassowrdForm" ng-submit="changePassword()">
    <div class="box-body ">
        
            <div class="row row-sm">
                <div class="md-form-group">
                    <input type='password' class='md-input' name='txtpassword' ng-model='editedUser.oldPassword' placeholder="Type your current password" 
                        ng-model-options="{updateOn:'blur'}" 
                        bm-validation-error="editedUser.oldPassword != editedUser.password ? 'Invalid Password' : ''" required>
                    <label>Current Password</label>
                </div>
                <div class="md-form-group">
                    <input  type='password' class='md-input' name='txtNewPassword' pattern=".{3,}" ng-model='editedUser.newPassword' required>
                    <label>New Password</label>
                </div>
                <div class="md-form-group">
                    <input type='password' class='md-input' name='txtNewPassword2' ng-model='editedUser.newPassword2' 
                    	bm-validation-error="editedUser.newPassword != editedUser.newPassword2 ? 'Passwords dont match' : ''" required>
                    <label>Retype Password</label>
                </div>
            </div>
            <div class="p-a">
                {{editedUser.changePasswordMessage}}
            </div>
        
    </div>
    <div class="box-footer dker">
        <div class="pull-right">
            <button type="submit" class="btn btn-primary" ngs-disabled="chagePassowrdForm.$invalid" ngs-click="changePassword()">Apply</button>
        </div>
    	<div style="clear:both;"></div>
    </div>
    </form>
</div>
</div>
</div>