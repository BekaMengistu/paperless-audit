Users
<div class="list-group" >
    <div class="list-group-item " ng-repeat="item in userManager.usersList" ng-class={'active':selectedUser.user_id==item.user_id}>
        <div class="list-left">
            <img ng-src="files/uploads/{{item.profile_picture}}" class="w-40 circle">
        </div>
        <div class="list-body">
            <a ng-sclick="userManager.editItem(item.user_id)" href ui-sref="app.user.manage_users.detail({user_id:item.user_id})" class="_500">{{item.full_name}}: {{item.user_name}}</a> <small class="block text-muted">&nbsp;{{item.email}}</small>
        </div>
    </div>
</div>
