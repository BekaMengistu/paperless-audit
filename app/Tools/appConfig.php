<?php
ApplicationEngine::registerScripts($modulePath,array("content/tools.router.data.js"));
ApplicationEngine::registerMenu("pos3","app.tools",array("ui-sref"=>"app.tools","label"=>"Tools","icon"=>"fa-magic"));

//ApplicationEngine::registerScripts($modulePath,array("content/WebContent.router.data.js"));
ApplicationEngine::registerSubMenu("app.tools","web_content",array("ui-sref"=>"app.tools.web_content","label"=>"Web Content"));
ApplicationEngine::parseFolder(dirname(__FILE__));

?>