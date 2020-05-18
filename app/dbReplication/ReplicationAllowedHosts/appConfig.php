<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/ReplicationAllowedHosts.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","replication_allowed_hosts",array("ui-sref"=>"app.crud.replication_allowed_hosts","label"=>"Replication Allowed Hosts"));


?>