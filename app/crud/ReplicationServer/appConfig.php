<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/replication.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","replication_server",array("ui-sref"=>"app.crud.replication_server","label"=>"Replication Server"));


?>