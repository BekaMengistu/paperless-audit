
  <div class="item">
    <div class="item-bg">
      <img ng-src="files/uploads/{{editedUser.profile_picture}}" class="blur opacity-3">
    </div>
    <div class="p-a-md">
    	<form editable-form name="editableForm" onaftersave="userManager.saveItem(editedUser)" oncancel="onCancelEdit()">
      <div class="row m-t">
        <div class="col-sm-7">
          <div href class="pull-left m-r-md">
                        <span class="avatar w-128"> <img ng-src="files/uploads/{{editedUser.profile_picture}}"> <i class="{{editedUser.status}} b-white bottom"></i> </span>
                        <div class="form-files" ng-show="editableForm.$visible" style="width:128px;height:128px; margin-top:-128px;position:relative; cursor:help;">
                            <input type="file" style="width:128px;height:128px;cursor:pointer;opacity:0;" nv-file-select="" uploader="uploader">
                        </div>
                    </div>
          <div class="clear m-b">
            <h3 class="m-a-0 m-b-xs">
            	<span editable-text="editedUser.full_name">{{ editedUser.full_name|| 'empty' }}</span>
            </h3>
            <p class="m-b">
            	<i class="fa fa-map-marker m-r-xs"></i>
                <a editable-text="editedUser.address">{{ editedUser.address || 'empty' }}</a>
            </p>
            <div class="m-b"><i class="fa fa-at"></i> <a editable-email="editedUser.email">{{ editedUser.email || 'empty' }}</a></div>
            <div class="m-b"><i class="fa fa-phone"></i> <a editable-text="editedUser.telephone_no">{{ editedUser.telephone_no || 'empty' }}</a></div>
            
          </div>
        </div>
        <div class="col-sm-5">
          <p class="text-md profile-status">Status: <a editable-select="editedUser.status" e-ng-options="s.value as s.text for s in statuses">{{ editedUser.status || 'empty' }}</a></p>
          
        </div>
      </div>
      <div class="row">
      			
                <div class="col-sm-9 col-sm-offset-3">
                  <button type="button" class="btn white" ng-click="editableForm.$show()" ng-show="!editableForm.$visible">
                    Edit
                  </button>
                  <!-- buttons to submit / cancel form -->
                  <span ng-show="editableForm.$visible">
                    <button type="submit" class="btn btn-primary" ng-disabled="editableForm.$waiting">
                      Save
                    </button>
                    <button type="button" class="btn white" ng-disabled="editableForm.$waiting" ng-click="editableForm.$cancel()">
                      Cancel
                    </button>
                  </span>
                </div>
              </div>
      	</form>
    </div>
  </div>


  
  <div class="dker p-x">
    <div class="row">
    	<!--User Summary-->
      <div class="col-sm-6 push-sm-6">
        <div class="p-y text-center text-sm-right">
          <a href class="inline p-x text-center">
            <span class="h4 block m-a-0">2k</span>
            <small class="text-xs text-muted">Followers</small>
          </a>
          <a href class="inline p-x b-l b-r text-center">
            <span class="h4 block m-a-0">250</span>
            <small class="text-xs text-muted">Following</small>
          </a>
          <a href class="inline p-x text-center">
            <span class="h4 block m-a-0">89</span>
            <small class="text-xs text-muted">Activities</small>
          </a>
        </div>
      </div>
      <!--/User Summary-->
      <!--User Menu-->
      <div class="col-sm-6 pull-sm-6">
        <div class="p-y-md clearfix nav-active-{{app.setting.theme.primary}}">
          <ul class="nav nav-pills nav-sm">
            <li class="nav-item" ui-sref-active="active">
              <a class="nav-link" ui-sref="app.user.profile.home">Home</a>
            </li>
            <li class="nav-item" ui-sref-active="active">
              <a class="nav-link" ui-sref="app.user.profile.account_management">Account Management</a>
            </li>
            <!--
            <li class="nav-item">
              <a class="nav-link" ui-sref="app.profile.tasks" data-toggle="tab" data-target="#tab_2">Tasks</a>
            </li>
            -->
            <li class="nav-item" ui-sref-active="active">
              <a class="nav-link" ui-sref="app.user.profile.messages">Messages</a>
            </li>
            <li class="nav-item" ui-sref-active="active">
              <a class="nav-link" ui-sref="app.user.profile.documents">Documents</a>
            </li>
          </ul>
        </div>
      </div>
      <!--/User Menu-->
            
    </div>
  </div>
    <div class="paddings" ui-view>
 	</div>

</div>