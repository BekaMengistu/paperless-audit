<div class="padding">
    <div class="box">
        <div class="box-header dker">
            <div class="pull-right">
                <button class="btn btn-primary" ng-click="saveUser()"><i class="fa fa-floppy-o"></i></button>
                <a class="btn btn-default" ui-sref="app.database.User"><i class="fa fa-arrow-left"></i></a>
            </div>
            <h2>User</h2>
            <small>Here you can edit User</small>
        </div>
        <div class="box-body ">
            <form ui-jp="parsley">
                <div class="row row-sm">
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input type="text" style="width:50%; display:inline;" size="8" class="md-input" ng-model="editedUser.profile_picture" />
                            <div class="form-file">
                                <span class="avatar w-96"> <img ng-src="files/uploads/{{editedUser.profile_picture}}" class="img-circle"> </span>
                                <input type="file" nv-file-select="" uploader="uploader">
                                <button class="btn white">Upload new picture</button>
                            </div>
                            <label>Profile Picture</label>
                        </div>
                        <div class="md-form-group">
                            <input type='password' class='md-input' id='txtpassword' ng-model='editedUser.password' required>
                            <label>Password</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtemail' ng-model='editedUser.email' required>
                            <label>Email</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txtuser_name' ng-model='editedUser.user_name' required>
                            <label>User Name</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtfull_name' ng-model='editedUser.full_name' required>
                            <label>Full Name</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txttelephone_no' ng-model='editedUser.telephone_no' required>
                            <label>Telephone No</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
