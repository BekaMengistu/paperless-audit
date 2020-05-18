  <!-- content -->
  <div id="content" class="app-content box-shadow-z0" role="main">
    <div class="app-header navbar-sm {{app.setting.headerNav.color}} boxs-shadow">
		
      <div ui-include="'app/core/views/blocks/header.4.html'"></div>
    </div>
		<div class="app-body">
			<div ui-view ng-class="{'container': app.setting.container}" id="view"></div>
		</div>

    <div class="dark dk pos-rlt" ng-class="{'hide': !$state.current.data.showFooter}">
      <div class="p-md" ng-class="{'container': app.setting.container}" >
        <div ui-include="'app/core/views/blocks/footer.1.html'"></div>
      </div>
    </div>
			<!-- theme switcher -->
			<div id="switcher">
				<div ui-include="'app/core/views/blocks/switcher.html'"></div>
			</div>
			<!-- /theme switcher -->
			<div ng-show="$state.current.data.showHookWindow" style="position:fixed;bottom:0;right:20px;height:auto;width:300px;background-color:#F8F8F8;">ERP<br/>
				Module: {{$state.current.data.module}}<br/>
				View:{{$state.current.data.viewName}}<br/>
				state:{{$state.current.name}}<br/>
				Hooks:{{app.Manager.HooksManager.hooks}}
			</div>
  </div>
  <!-- / -->
	<div ng-if="!app.loginUser.user_type" ui-include="'app/core/views/blocks/signin.html'"></div>


  