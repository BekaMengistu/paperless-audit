<?php
ApplicationEngine::registerScripts($modulePath,array("content/router.data.js","content/ReferenceController.js"));

ApplicationEngine::registerMenu("pos3","app.references",array("ui-sref"=>"app.references","label"=>"References","icon"=>"fa-book"));

?>