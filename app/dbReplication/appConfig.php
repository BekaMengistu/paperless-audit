<?php
ApplicationEngine::registerScripts($modulePath,array("content/replication.router.data.js","content/ReplicationController.js"));
/*ApplicationEngine::registerMenu("pos3","app.tools",array("ui-sref"=>"app.tools","label"=>"Tools","icon"=>"fa-magic"));

ApplicationEngine::registerSubMenu("app.tools","db_replication",array("ui-sref"=>"app.tools.replication","label"=>"Replication"));
*/

ApplicationEngine::registerMenu("pos3","app.replication",array("ui-sref"=>"app.replication","label"=>"Replication","icon"=>"fa-cloud"));

ApplicationEngine::registerSubMenu("app.replication","sync",array("ui-sref"=>"app.replication.sync","label"=>"Syncronize"));

ApplicationEngine::registerSubMenu("app.replication","allowed_hosts",array("ui-sref"=>"app.replication.allowed_hosts","label"=>"Allowed Hosts"));

?>