<div class="padding">
    <div class="box">
        <div class="box-body ">
            <div class="pull-right">
                <button class="btn btn-primary" ng-click="userManager.saveItem(userManager.editedUser)"><i class="fa fa-floppy-o"></i></button>
                <a class="btn btn-default" ui-sref="app.users"><i class="fa fa-arrow-left"></i></a>
            </div>
            <form ui-jps>
                <div class="row row-sm">
                    <div class="col-md-4">
                        <div class="form-file" style="text-align:center;">
                            <img ng-src="files/uploads/{{userManager.editedUser.profile_picture}}" class="w-128 circle" style="height:128px; width:128px; border:solid 3px #BBB;">
                            <div class="form-files"  style="width:128px;height:128px; margin:auto; margin-top:-128px;position:relative; cursor:help;borders:solid 1px #000;border-radius:50%;">
                                <input type="file" style="width:128px;height:128px;cursor:pointer;opacity:0.0; borders:solid 1px #C30;position:absolute;left:0;"  nv-file-select="" uploader="uploader">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="md-form-group">
                            <input class='md-input' id='txtuser_name' ng-model='userManager.editedUser.user_name' required>
                            <label>User Name</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtfull_name' ng-model='userManager.editedUser.full_name' required>
                            <label>Full Name</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txtemail' ng-model='userManager.editedUser.email' required>
                            <label>Email</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txttelephone_no' ng-model='userManager.editedUser.telephone_no' required>
                            <label>Telephone No</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                     <div class="md-form-group">
                            <input class='md-input' id='txtuser_type' ng-model='userManager.editedUser.user_type' required>
                            <label>User Type</label>
                        </div>
                     </div>
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txtaddress' ng-model='userManager.editedUser.address' required>
                            <label>Address</label>
                        </div>
                    </div>
                    
                    <div class="col-sm-6" ng-hide="userManager.editedUser.user_id" >
                        <div class="md-form-group">
                            <input type='password' class='md-input'  ng-model='userManager.editedUser.clean_password'>
                            <label>Password</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row m-t" ng-if="userManager.editedUser.user_id">
                    <label class="col-sm-3 form-control-label">Roles</label>
                    <div class="col-sm-6">
                    	
                    
                    	
                        <ui-select multiple ng-model="userManager.editedUser.userRole" theme="bootstrap"
            on-remove="onRoleRemoveCallback($item,$model)" on-select="onRoleAddCallback($item, $model)"
            >
                            <ui-select-match class="ui-select-match" placeholder="Select role...">{{$item.name}} &lt;{{$item.description}}&gt;</ui-select-match>
                            <ui-select-choices class="ui-select-choices"  repeat="role in rolesList">
                                <div ng-bind-html="role.name | highlight: $select.search">
                                </div>
                                <small> <span ng-bind-html="role.description | highlight: $select.search"></span> </small> </ui-select-choices>
                        </ui-select>
                    <!--    
                    {{userManager.editedUser.userRole}}
                    -->
                    </div>
                </div>
                <!--
             
               {{rolesList}}  
               -->
            </form>
        </div>
    </div>
</div>
