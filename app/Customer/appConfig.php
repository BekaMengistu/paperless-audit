<?php
ApplicationEngine::registerScripts($modulePath,array("content/customer.router.data.js"));
ApplicationEngine::registerMenu("pos1","1000customer",array("ui-sref"=>"app.customer.list","label"=>"Customer","icon"=>"fa-users"));
?>