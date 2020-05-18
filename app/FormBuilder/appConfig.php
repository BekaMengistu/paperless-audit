<?php
ApplicationEngine::registerScripts($modulePath,array("content/formbuilder.router.data.js"));
ApplicationEngine::registerSubMenu("app.tools","formbuilder2",array("ui-sref"=>"app.tools.form","label"=>"Forms"));

?>