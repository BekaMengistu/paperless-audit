<!DOCTYPE html>
<html lang="en" ng-app="app" ng-controller="AppCtrl">
<head>
  <meta charset="utf-8" />
  <title>{{app.name}}:{{$state.current.data.title}}</title>
 <meta name="description" content="Admin, Dashboard, Bootstrap, Bootstrap 4, Angular, AngularJS" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- for ios 7 style, multi-resolution icon of 152x152 -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-barstyle" content="black-translucent">
  <link rel="apple-touch-icon" href="assets/img/company-favicon.png">
  <meta name="apple-mobile-web-app-title" content="Flatkit">
  <!-- for Chrome on Android, multi-resolution icon of 196x196 -->
  <meta name="mobile-web-app-capable" content="yes">
  <!--<link rel="shortcut icon" sizes="196x196" href="libs/styles/images/logo.png">-->
	<link rel="SHORTCUT ICON" href="assets/img/company-favicon.png">

	<?php include("header.php");?>
 <link rel="stylesheet" href="libs/styles/app.css" type="text/css" />
 <link rel="stylesheet" href="assets/css/main.css" type="text/css" />
 
</head>
<body  ng-app="app"  class="{{app.setting.bg}}" ng-class="{'container': app.setting.boxed, 'ie': isIE,'smart': isSmart}">
	<div id="scriptContainer"></div>
  <div class="app  app-body "  ui-view></div>
  
  <?php include("footer.php");
  include("appEngine.php");
  ?>
		
    <script src="core/assets/app.js"></script>
		<script src="app/core/core.services.js"></script>
    <script src="app/helpers/helper.tree.js"></script>
    <script src="core/assets/baseController.js"></script>
  	<script src="core/assets/core.router.data.js"></script>
	<script src="core/assets/config.js"></script>
 
 
      
    <script src="scripts/services.js"></script>
    <script src="libs/angular-include-replace.js"></script>
    <!--<script src="apps/directives/directive.bm.ui.permission.js"></script>-->
	<?php
	foreach(ApplicationEngine::$scripts as $scrpt)
 	{
	 $isfile=is_file($scrpt);
	 if($isfile)
	 {
	 echo("<script src='".$scrpt."'></script>");
	 }
	}
 ?>
	
  <!--
  	<script src="apps/cruds/crud.router.data.js"></script>
  	<script src="apps/sampleApps/sampleApp.router.data.js"></script>
	<script src="apps/myApps/Customer/ClientController.js"></script>
  	  
    
  	<script src="core/assets/config.lazyloads.js"></script>-->
    <script src="core/assets/config.lazyload.dynamic.js"></script>
    <script src="core/assets/config.router.js?"></script>

  
  
  <script src="core/assets/app.ctrl.js"></script>
<?php include("footer2.php");?>
</body>
</html>
