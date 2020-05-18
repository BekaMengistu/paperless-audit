<?php include("ui.blocks.html"); ?>
<div class="app-layout text-{{app.Manager.UIManager.activeColorTheme.primary}}-hover">
	<div ng-include="'_bmpage-header.html'"></div>

	
	<div class="app-body-inner-2">
		<div class="row-col row-col-xs">
			<div  ngs-init="_width=$state.current.data.'Width']" class="section col-sm-12 col-md-3 {{$state.current.data.sidebarClass}}" >
				<div class="row-col section-inner {{col.innerClass}}" >
					<div class="col-header" ng-if="$state.current.data.sidebarHeader" ng-include="$state.current.data.sidebarHeader"></div>

					<div class="col-header" ng-if="!$state.current.data.sidebarHeader && $state.current.data.sidebarTitle" ng-bind-html="$state.current.data.sidebarTitle"></div>
					<div class="col-header" ng-if="!$state.current.data.sidebarHeader && !$state.current.data.sidebarTitle" ng-include="'_entity.list.query.html'"></div>
					
					
					<div class="row-row">
						<div class="row-body scrollable p-t-lg">
							<div class="row-inner">
								<div>
									<div class="content-inner" ng-if="!$state.current.data.sidebarBody" ng-include="'_sidebar_entity_list.html'"></div>
									<div class="content-inner" ng-if="$state.current.data.sidebarBody" ng-include="$state.current.data.sidebarBody">
										{{col.name}} body
										<br/>
										{{$state.current.data[col.name]}}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div ng-if="col.footer" class="p-a-xs b-t text-center {{col.footer.class}}" ngs-include="template.listMenu">
						Column Menu
					</div>
				</div>
			</div>
			
			<div  ngs-init="_width=$state.current.data.'Width']" class="section col-sm-12 col-md-9 {{$state.current.data.mainClass}}" >
				<div class="row-col section-inner {{col.innerClass}}" >
					<div class="col-header" ng-if="$state.current.data.mainHeader" ng-include="$state.current.data.mainHeader">
					</div>

					<div class="col-header" ng-if="!$state.current.data.mainHeader" ng-bind-html="$state.current.data.mainTitle">
					</div>
					<div class="row-row">
						<div class="row-body scrollable p-t-lg">
							<div class="row-inner">
								<div>
									<div class="content-inner" ng-if="!$state.current.data.mainBody" ng-include="'_bmui-view.html'"></div>
									<div class="content-inner" ng-if="$state.current.data.mainBody" ng-include="$state.current.data.mainBody">
										{{col.name}} body
										<br/>
										{{$state.current.data[col.name]}}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div ng-if="col.footer" class="p-a-xs b-t text-center {{col.footer.class}}" ngs-include="template.listMenu">
						Column Menu
					</div>
				</div>
			</div>

			

		</div>
	</div>
</div>
