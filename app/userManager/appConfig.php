<?php
ApplicationEngine::registerScripts($modulePath,array("content/user.router.data.js","directive.bm.ui.permission.js","directive.bm.ui.permission-v2.js"));

ApplicationEngine::registerMenu("pos4","app.user",array("ui-sref"=>"app.user","label"=>"User","icon"=>"fa-user"));

ApplicationEngine::registerSubMenu("app.user","manage_users",array("ui-sref"=>"app.user.manage_users","label"=>"Manage","icon"=>"fa-wrench"));

ApplicationEngine::registerSubMenu("app.user","permission",array("ui-sref"=>"app.user.permission","label"=>"Permission","icon"=>"fa-unlock"));

ApplicationEngine::registerSubMenu("app.user","signin_log",array("ui-sref"=>"app.user.signin_log","label"=>"Login Attempts","icon"=>"fa-list"));

?>