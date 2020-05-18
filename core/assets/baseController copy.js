var applicationLookups={};

var applicationRoutes={};

var coreDependencies=[
		{
              name: 'mgcrea.ngStrap',
              module: true,
              serie: true,
              files: [
                  'libs/angular-motion/dist/angular-motion.min.css',
                  'libs/bootstrap-additions/dist/bootstrap-additions.min.css',
                  'libs/angular/angular-strap/dist/angular-strap.js',
                  'libs/angular/angular-strap/dist/angular-strap.tpl.js'
              ]
          },
          {
              name: 'bm.validation.error',
              module: true,
              serie: true,
              files: [
                  'app/helpers/bm.validation.error.js'
              ]
          },
          {
              name: 'ui.tree.grid',
              module: true,
              serie: true,
              files: [
                  'libs/tree-grid-directive/src/tree-grid-directive.js',
                  'libs/tree-grid-directive/src/treeGrid.css'
              ]
          },
          {
              name: 'ui.bootstrap',
              module: true,
              serie: true,
              files: [
                  'libs/angular/angular-bootstrap/ui-bootstrap-tpls.min.js',
                  'libs/angular/angular-bootstrap/ui-bootstrap-tpls.js'
              ]
          },
          {
              name: 'ui.select',
              module: true,
              files: [
                  'libs/angular/angular-ui-select/dist/select.min.js',
                  'libs/angular/angular-ui-select/dist/select.min.css'
              ]
          },
          {
              name: 'vr.directives.slider',
              module: true,
              files: [
                  'libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
                  'libs/angular/venturocket-angular-slider/angular-slider.css'
              ]
          },
          {
              name: 'angularBootstrapNavTree',
              module: true,
              files: [
                  'libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                  'libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
              ]
          },
          {
              name: 'angularFileUpload',
              module: true,
              files: [
                  'libs/angular/angular-file-upload/angular-file-upload.js'
              ]
          },
          {
              name: 'ngImgCrop',
              module: true,
              files: [
                  'libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
                  'libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
              ]
          },
          {
              name: 'smart-table',
              module: true,
              files: [
                  'libs/angular/angular-smart-table/dist/smart-table.min.js'
              ]
          },
          {
              name: 'ui.map',
              module: true,
              files: [
                  'libs/angular/angular-ui-map/ui-map.js'
              ]
          },
          {
              name: 'ui.grid',
              module: true,
              files: [
                  'libs/angular/angular-ui-grid/ui-grid.min.js',
                  'libs/angular/angular-ui-grid/ui-grid.min.css',
                  'libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
              ]
          },
          {
              name: 'xeditable',
              module: true,
              files: [
                  'libs/angular/angular-xeditable/dist/js/xeditable.min.js',
                  'libs/angular/angular-xeditable/dist/css/xeditable.css'
              ]
          },
          {
              name: 'smart-table',
              module: true,
              files: [
                  'libs/angular/angular-smart-table/dist/smart-table.min.js'
              ]
          },
          {
              name:'ui.calendar',
              module: true,
              files: ['libs/angular/angular-ui-calendar/src/calendar.js']
          },
          {
              name:'summernote',
              module: true,
              files: [
                'libs/jquery/summernote/dist/summernote.css',
                'libs/jquery/summernote/dist/summernote.js',
                'libs/angular/angular-summernote/dist/angular-summernote.js'
              ]
          },
          {
              name: 'dataTable',
              module: false,
              files: [
                  'libs/jquery/datatables/media/js/jquery.dataTables.min.js',
                  'libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                  'libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'
              ]
          },
          {
              name: 'footable',
              module: false,
              files: [
                  'libs/jquery/footable/dist/footable.all.min.js',
                  'libs/jquery/footable/css/footable.core.css'
              ]
          },
          {
              name: 'easyPieChart',
              module: false,
              files: [
                  'libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
              ]
          },
          {
              name: 'sparkline',
              module: false,
              files: [
                  'libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'
              ]
          },
          {
              name: 'plot',
              module: false,
              files: [
                  'libs/jquery/flot/jquery.flot.js',
                  'libs/jquery/flot/jquery.flot.resize.js',
                  'libs/jquery/flot/jquery.flot.pie.js',
                  'libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                  'libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
                  'libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'
              ]
          },
          {
              name: 'vectorMap',
              module: false,
              files: [
                  'libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
                  'libs/jquery/bower-jvectormap/jquery-jvectormap.css', 
                  'libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                  'libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'
              ]
          },
          {
              name: 'moment',
              module: false,
              files: [
                  'libs/js/moment/moment.js'
              ]
          },
          {
              name: 'fullcalendar',
              module: false,
              files: [
                  'libs/jquery/moment/moment.js',
                  'libs/jquery/fullcalendar/dist/fullcalendar.min.js',
                  'libs/jquery/fullcalendar/dist/fullcalendar.css',
                  'libs/jquery/fullcalendar/dist/fullcalendar.theme.css'
              ]
          },
          {
              name: 'sortable',
              module: false,
              files: [
                  'libs/jquery/html.sortable/dist/html.sortable.min.js'
              ]
          },
          {
              name: 'nestable',
              module: false,
              files: [
                  '../libs/jquery/nestable/jquery.nestable.css',
                  '../libs/jquery/nestable/jquery.nestable.js'
              ]
          },
          {
              name: 'chart',
              module: false,
              files: [
                  'libs/js/echarts/build/dist/echarts-all.js',
                  'libs/js/echarts/build/dist/theme.js',
                  'libs/js/echarts/build/dist/jquery.echarts.js'
              ]
          }];

var applicationDependencies=[];

function inherit(dest,src)
{
	for(var i in src)
	{
		var srcVal=src[i];
		var destVal=dest[i];
		
		if(typeof(destVal)=="object" && typeof(srcVal)=="object")
		{
			inherit(destVal,srcVal)
		}
		else
		{
			dest[i]=src[i];
		}
		
		
	}
	return dest;
	//if(typeof(
}

function buildHash(data,sufix,id)
{
	sufix=typeof(sufix)!="undefined"?sufix:"item";
	id=id?id:"id";
	
	var hash={};
	for(var i in data)
	{
		var item=data[i];
		hash[sufix+item[id]]=item;
	}
	return hash;
}
var applicationDependenciesHash=buildHash(coreDependencies,"dep.","name")

function addDependencyToApp(deps)
{
	for(var i in deps)
	{
		var depFiles=deps[i];
		var dependencyItem=applicationDependenciesHash["dep."+i];
		if(!dependencyItem)
		{
			dependencyItem={name: i,module: true,serie: true,files: []}
			applicationDependenciesHash["dep."+i]=dependencyItem;
        }
		for(var j in depFiles)
		{
			dependencyItem.files.push(depFiles[j]);
		}
	}
}
function buildDependencyArray()
{
	for(var i in applicationDependenciesHash)
	{
		applicationDependencies.push(applicationDependenciesHash[i]);
	}
}
function addRoutesToApp(rd)
{
	for(var i in rd)
	{
		applicationRoutes[i]=rd[i];
	}
}

function baseController($scope,$timeout,userService,AppService)
{
	
	
	$scope.getNumberValue=function(v)
	{
        if(!v){return 0;}
		v=v.replace(",","");
			return (v/1)?(v/1):0;
	}
			
	$scope.appSettings={
		time:moment(new Date()).format()
		,appName:"CaseManager",appMessage:"Welcome to Case Manager: A software",copyright:"2016 © Beka Mengistu",templateHome:"assets/tpl/"
	,userImagesPath:"assets/images/"
	,companyImagesPath:"assets/images/customers/"
	};
	$scope.loginUser="";
	$scope.uploadManager={uploader:{},showUploads:function(){$("#modalUploads").modal("show");}
			,hideUploads:function(){$("#modalUploads").modal("hide");}
			}
	$scope.onPageLoad=function()
	{
		$scope.appSettings.time=new Date();
		$scope.authenticateApp();
		userService.getLoginUser()
		.then(function(sr){$scope.app.loginUser=sr;console.log(sr);} );
	}
	$scope.authenticateApp=function()
	{
		return AppService.authenticateApp()
		.then(function(sr){return $scope.app.authentication=sr;console.log(sr);} );
	}
	$scope.signIn=function()
	{
		console.log("signIn",$scope.app.user);
		userService.signIn($scope.app.user)
		.then(function(si) {
			$scope.app.user=si;
			if(si.user_type)
			{
				$scope.onPageLoad();
				//$scope.app.loginUser=si;
				
			}
		});
	}
	$scope.logout=function()
	{
		//return $scope.app.loginUser.permissions=[];
		console.log("logout",$scope.app.user);
		userService.logout()
		.then(function(si) {
			
				$scope.app.loginUser=si;
				console.log("logout",$scope.app.loginUser);
				});
	}
	bootstrapMessagingController($scope,$timeout,userService);
	bootstrapDocumentsController($scope,$timeout,userService);
}
function createAppTaskManager()
{
	//$scope.app.ta
	//modalNewTask
}
function bootstrapMessagingController($scope,$timeout,userService)
{
	$scope.messaging={messages:[],newMessage:{}};
	$scope.messaging.loadMessages=function()
	{
		console.log("messaging.loadMessages",$scope.messaging.messages);
		return userService.getLoginUser()
		.then(function(sr){
			var messages=[
			{sender:1,title:"Welcome to the app.","body":"Welcome to the app. Enjoy"}
			,{sender:2,title:"Notice to new users.","body":"Hi user. change your password"}
			]
			$scope.messaging.messages=messages;
			
			return sr;
		});
	}
	$scope.messaging.showMessages=function()
	{
		console.log("messaging.showMessages",$scope.messaging.messages);
		$scope.messaging.loadMessages()
		.then(function(){
		$("#modalMessages").modal("show");
		});
	}
}

function bootstrapDocumentsController($scope,$timeout,userService)
{
	$scope.documentManager={documents:[]};
	$scope.documentManager.loadDocuments=function()
	{
		console.log("documentManager.loadDocuments",$scope.documentManager.documents);
		return userService.getLoginUser()
		.then(function(sr){
			var docs=[
			{uploader:1,title:"Getting Started Guide.","tags":"Manual,help",path:"docs/gettingstarted.pdf"}
			,{uploader:2,title:"Terms and conditions.","tags":"Manual,help",path:"docs/gettingstarted.pdf"}
			]
			$scope.documentManager.documents=docs;
			
			return sr;
		});
	}
	$scope.documentManager.showDocuments=function()
	{
		console.log("documentManager.showDocuments");
		$scope.documentManager.loadDocuments()
		.then(function(){
		$("#modalDocuments").modal("show");
		});
	}
}