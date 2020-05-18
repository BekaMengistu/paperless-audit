<div ng-if="userChecked">
    <div ng-if="!app.authentication.appAuthenticated">
        <?php include("../views/registerApp.html");?>
    </div>
    <div ng-if="app.authentication.appAuthenticated && !app.loginUser.user_id" ngs-if="!app.loginUser.user_type">
        {{app.loginUser}}
        <?php include("../views/signin.html");?>
    </div>
</div>

<div ng-if="app.loginUser.user_id && app.authentication.appAuthenticated" class="{{!app.authentication.appAuthenticated?'blur':''}}">
<!-- aside -->
<div id="aside" class="app-aside modal fade folded md show-text nav-dropdown" ng-class="{'folded': app.setting.folded}" ng-show="app.loginUser.user_type">
    <!-- fluid app aside -->
    <div class="left navside dark dk" layout="column">
        <div class="navbar no-radius">
            <?php include("../views/blocks/navbar.brand.html");?>
        </div>
        <div flex class="hide-scroll">
            <nav class="scroll nav-active-{{app.setting.theme.primary}}">
                <div ui-include="'appNavigation2.php'">
                </div>
                <?php //include("..//..//views/appNavigation2.php");?>
            </nav>
        </div>
        <div flex-no-shrink class="b-t">
            <?php include("../views/blocks/aside.top.0.html");?>
            <div uis-include="'core/views/views/blocks/aside.top.0.html'">
            </div>
        </div>
    </div>
</div>
<!-- / --> 

<!-- content -->
<div id="content" class="app-content box-shadow-z0" role="main">
    <div class="app-header white box-shadow" ng-show="app.loginUser.user_type">
        <?php include("../views/blocks/header.html");?>
        <div uis-include="'apps/bootstrap/views/blocks/header.html'">
        </div>
    </div>
    <div class="app-footer" ng-class="{'hide': $state.current.data.hideFooter}" ng-show="app.loginUser.user_type">
        <div ui-include="'core/views/views/blocks/footer.html'">
        </div>
    </div>
    <div class="app-body" ng-if="app.loginUser.user_type">
        <div ui-view classs="app-body" id="view">
        </div>
    </div>
    <div ng-show="app.status.working" style="position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,0.2); z-index:2000;" class="text-2x">
    	<div style="position:absolute;left:0;right:0;top:45%;height:100px;text-align:center;" class="text-2x">
        	<i class="fa  fa-circle-o-notch fa-spin text-muted"></i>
        </div>
    	<div style="display:none;position:absolute;top:50%;left:0;right:0;height:100px;text-align:center;">
        	<img src="assets/images/loading2.gif" style="height:100%"/>
        </div>
    </div>
</div>
<!-- /content -->

<div ng-show="app.loginUser.user_type">
    <!-- theme switcher
  <div id="switcher">
    <div ui-include="'core/views/views/blocks/switcher.html'"></div>
  </div> 
  --> 
    <!-- / --> 
    
    <!-- Message Viewer -->
    <div id="messages">
        <div uis-include="'apps/bootstrap/messaging/messageListModal.php'">
        </div>
    </div>
    <!-- / --> 
    <!-- Documents Viewer -->
    <div id="documents">
        <div uis-include="'apps/bootstrap/documents/documentsListModal.php'">
        </div>
    </div>
    <div id="documents">
        <div uis-include="'apps/bootstrap/tasks/popover-task-create.php'">
        </div>
    </div>
    <!-- Documents Viewer -->
    <div id="uploads">
        <div uis-include="'apps/bootstrap/documents/uploadList.php'">
        </div>
    </div>
    <!-- / 
    <div style="position:fixed;z-index:1000;right:200px;bottom:0px;">
	
	<div style="text-align:center">
    	<span class="label info pos-rlt m-r-xs"><b class="arrow bottom b-info pull-in"></b>{{uploadManager.uploader.queue.length }}</span>
    		<br/>
			<a  ng-click="uploadManager.showUploads()" class="md-btn md-fab m-b-sm white " style="font-size:1.4em;"><i class="fa fa-cloud-upload"></i></a>
	</div>
    
</div>
-->
</div>

</div>
