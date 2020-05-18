<?php include("ui.blocks.html"); ?>
<div class="app-layout text-{{app.Manager.UIManager.activeColorTheme.primary}}-hover">
	<div ng-include="'_bmpage-header.html'"></div>
	
	<div class="app-body-inner-2">
		<div class="row-col row-col-xs">
			<div ng-repeat="col in $state.current.data.cols" class="section col-sm-12 col-md-{{$state.current.data[col + 'Width']}} {{$state.current.data[col +'Class']}}" >
				<div class="row-col section-inner {{col.innerClass}}" >
					<div class="col-header" ng-if="$state.current.data[col + 'Header']" ng-include="$state.current.data[col + 'Header']">
					</div>

					<div class="col-header" ng-if="!$state.current.data[col + 'Header']" ng-bind-html="$state.current.data[col+ 'Title']">
					</div>
					<div class="row-row">
						<div class="row-body scrollable p-t-lg">
							<div class="row-inner">
								<div>
									<div class="content-inner {{col.content.color}}" ng-include="$state.current.data[col + 'Body']">
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
