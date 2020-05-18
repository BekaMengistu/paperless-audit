
<div class="padding permission-{{app.loginUser.permissions['app.user.permission']}}">
    <div class="row nos-gutter">
        <!--Roles-->
        <div class="col-md-4">
            Roles <br/>
            <button type="button" class="btn btn-sm white ng-scope" ng-click="onEditRole()"  title="Add Role" data-content="Hello Popover<br />This is a multiline message!" data-template-url="app/UserManager/content/permission/popoverEditRole.html" data-animation="am-flip-x"  bs-popover="">Add Role </button>
            <div class="list-group mb" >
                <div href="" class="list-group-item " ng-repeat="role in roleList"  
                	ng-click="selectRole(role)"
                    ng-class={'active':selectedRole.app_role_id==role.app_role_id}>
                    <div class="pull-right">
                        <button class="btn btn-default" ng-click="onEditRole(role)" 
                        	data-template-url="app/userManager/content/permission/popoverEditRole.html" data-animation="am-flip-x"  bs-popover=""> <i class="fa fa-pencil"></i> </button>
                    </div>
                    <a href="">
                    <div class="list-left">
                        <span class="w-40 circle accent avatar"><span>{{role.app_role_id}}</span></span>
                    </div>
                    <div class="list-body">
                        <span usi-sref="app.user.manage_users.detail({id:item.user_id})" class="_500">{{role.name}}</span> <small class="block text-muted">&nbsp;{{role.description}}</small>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        
        <!--Permissions-->
        <div class="col-md-6">
            Permissions {{app.loginUser.newPermissions.length}} <br/>
            <button type="button" class="btn btn-sm white ng-scope" ng-click="onEditPermission()"  title="Add Permission" data-template-url="app/userManager/content/permission/popoverEditPermission.html" data-animation="am-flip-x"  bs-popover="">Add Permission </button>
            <div class="box">
                <div class="box-body">
                    <div  ng-include ="'app/userManager/content/permission/permissionTree.html'" ngs-include-replace>
                    </div>
                    
                    
                    <div class="list-group" style="display:none;">
                <div class="list-group-item " ng-repeat="permission in permissionList" ngs-class={'active':editedUser.user_id==item.user_id}>
                	<div class="pull-right" style="position:relative;">
                    	<button class="btn btn-default"   ng-click="onEditPermission(permission)" 
                        	data-template-url="app/UserManager/content/permission/popoverEditPermission.html" data-animation="am-flip-y"  bs-popover="" title="Edit">
                            <i class="fa fa-pencil"></i>
                        </button>
                        </div>
                        
                    <a href="" class="list-left" ng-click="toggleRolePermission(selectedRole.permissions[permission.name])">
                    	<span class="w-40 circle purple"><i ng-show="selectedRole.permissions[permission.name].allowed=='1'" class="fa fa-check"></i></span>
                    </a>
                    <div class="list-body">
                        <a usi-sref="app.user.manage_users.detail({id:item.user_id})" class="_500">{{permission.name}}</a> 
                        	<small class="block text-muted">&nbsp;{{permission.description}} | 
                            {{selectedRole.permissions[permission.name].role_permission_id}}<!---->
                            </small>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
</div>
