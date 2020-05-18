<?php
ApplicationEngine::registerScripts($modulePath,array("content/router.data.js"));
ApplicationEngine::registerMenu("pos3","app.tools",array("ui-sref"=>"app.tools","label"=>"Tools","icon"=>"fa-magic"));

//ApplicationEngine::registerScripts($modulePath,array("content/WebContent.router.data.js"));
ApplicationEngine::registerSubMenu("app.tools","report_tools",array("ui-sref"=>"app.tools.report_tools","label"=>"Report Tools"));

?>