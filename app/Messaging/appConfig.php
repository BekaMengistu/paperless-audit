<?php
ApplicationEngine::registerScripts($modulePath,array("content/messaging.router.data.js"));
ApplicationEngine::registerMenu("pos3","Messaging",array("ui-sref"=>"app.messaging.detail({discussion_id:'list'})","label"=>"Message","icon"=>"fa-envelope-o"));
?>