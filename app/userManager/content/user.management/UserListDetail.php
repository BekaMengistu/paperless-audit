
<div class="row-col permission-{{app.loginUser.permissions['app.user.manage']}}" >
    <div class="col-sm w-xxl w-auto-xs light lt bg-auto">
    	<div class="box light lt bg-auto">
    	
            <a ui-sref="app.user.manage_users.detail({user_id:0})" class="btn btn-default">New</a>
            List of users
            <!--{{userManager.usersList}}-->
            </div>
            
			<?php include("UserListSide.php")?>
     </div>
    <div class="col-sm">
    	<div ui-view>
            </div>
    </div>
</div>
