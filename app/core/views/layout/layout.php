<div ng-if="!app.loginUser.user_type">
    <?php include("../signin.html");?>
</div>
<div ng-if="!app.authentication.appAuthenticated">
	<div styles="position:fixed;top:0;left:0;right:0;bottom:0;z-index:1200; background-color: rgba(168, 138, 221,0.8);" class="blur"></div>
</div>

<div ng-if="app.loginUser.user_type" ngs-if="app.authentication.appAuthenticated && app.loginUser.user_type">
<!-- aside -->
<div id="aside" class="app-aside modal fade folded md show-text nav-dropdown" ng-class="{'folded': app.setting.folded}" ng-show="app.loginUser.user_type">
    <!-- fluid app aside -->
    <div class="left navside accents dark dks" layout="column">
        <div class="navbar dker no-radius">
            <?php include("../blocks/navbar.brand.html");?>
        </div>
        <div flex class="hide-scroll">
            <nav class="scroll nav-active-{{app.setting.theme.primary}}">
								<!--Side Menu-->
                <div ui-include="'appNavigation.php2'">
                </div>
            </nav>
        </div>
        <div flex-no-shrink class="b-t">
            <?php include("../blocks/aside.top.0.html");?>
            <div uis-include="'core/views/views/blocks/aside.top.0.html'">
            </div>
        </div>
    </div>
</div>
<!-- / --> 

<!-- content -->
<div id="content" class="app-content box-shadow-z0" role="main">
    <div class="app-header white box-shadow" ng-show="app.loginUser.user_type">
        <?php include("../blocks/header.html");?>
        <div uis-include="'apps/bootstrap/views/blocks/header.html'">
        </div>
    </div>
    <div class="app-footer" ng-class="{'hide': !$state.current.data.showFooter}" ng-show="app.loginUser.user_type">
        <div ui-include="'app/core/views/views/blocks/footer.html'">
        </div>
    </div>
    <div class="app-body" ng-if="app.loginUser.user_type">
        <div ui-view classs="app-body" id="view">
        </div>
    </div>
</div>
<!-- /content -->

<div ng-show="app.loginUser.user_type">
    <!-- theme switcher --> 
  <div id="switcher">
    <div ui-include="'app/core/views/blocks/switcher.html'"></div>
  </div> 
 
    <!-- / --> 
    
    <!-- Message Viewer 
    <div id="messages">
        <div uis-include="'apps/bootstrap/messaging/messageListModal.php'">
        </div>
    </div>-->
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
    
		<div ng-show="$state.current.data.showHookWindow" style="position:fixed;bottom:0;right:20px;height:auto;width:300px;background-color:#F8F8F8;">ERP<br/>
			Module: {{$state.current.data.module}}<br/>
			View:{{$state.current.data.viewName}}<br/>
			state:{{$state.current.name}}<br/>
			
			Hooks:{{app.Manager.HooksManager.hooks}}
			
		</div>
</div>

</div>
