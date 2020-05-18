<?php
ApplicationEngine::registerScripts($modulePath,array("content/audit.router.data.js"));
ApplicationEngine::registerMenu("pos1","app.audit",array("ui-sref"=>"app.audit","label"=>"Audit","icon"=>"fa-search"));

ApplicationEngine::registerSubMenu("app.audit","list",array("ui-sref"=>"app.audit.list","label"=>"Engagements","icon"=>"fa-list"));

ApplicationEngine::registerSubMenu("app.audit","setup",array("ui-sref"=>"app.audit.setup","label"=>"Setup","icon"=>"fa-cogs"));

?>