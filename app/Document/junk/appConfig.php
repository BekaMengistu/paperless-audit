<?php
ApplicationEngine::registerScripts($modulePath,array("content/document.router.data.js"));
ApplicationEngine::registerMenu("pos1","1000Document",array("ui-sref"=>"app.document","label"=>"Document","icon"=>"fa-folder-o"));
?>