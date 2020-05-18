<style>
	.client-tab-nav .active {color:{{app.setting.theme.primary}}; }
</style>

<div class="row no-gutter client-tab-nav  text-{{app.setting.theme.primary}}-hover">
    <div class="col-xs-3  b-b21"  ng-class="{active:$state.includes('app.customerdetail.edit')}" ng-click="selectTab('Detail')">
        <a class="p-a-xs block text-center" ui-sref="app.customerdetail.edit"> 
        	<i class="material-icons md-24 text-muted m-v-sm">&#xe7fd;</i> <span class="block">Detail</span> 
        </a>
    </div>
    <div class="col-xs-3 b-b21" ng-class="{active:($state.includes('app.customerdetail.task')||$state.includes('app.customerdetail.taskEdit'))}" ng-click="selectTab('Tasks')">
        <a class="p-a-xs block text-center"  ui-sref="app.customerdetail.task"> 
        `	<i class="material-icons md-24 text-muted m-v-sm">&#xe85d;</i> <span class="block">Tasks</span> 
        </a>
    </div>
    <div class="col-xs-3 b-b21" ng-class="{'activeTab': activeTab=='Documents'}" ng-click="selectTab('Documents')">
        <a class="p-a-xs block text-center " ui-sref="app.customerdetail.document"> 
        `	<i class="material-icons md-24 text-muted m-v-sm">&#xe2c7;</i> <span class="block">Documents</span> 
        </a>
    </div>
    <div class="col-xs-3  b-b21" ng-class="{'activeTab': activeTab=='Chat'}" ng-click="selectTab('Chat')">
        <a class="p-a-xs block text-center" href>  
        	<i class="material-icons md-24 text-muted m-v-sm">&#xe0b7;</i> <span class="block">Chat</span> 
        </a>
    </div>
</div>
