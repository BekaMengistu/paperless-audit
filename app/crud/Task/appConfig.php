<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/Task.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","task",array("ui-sref"=>"app.crud.task","label"=>"Task"));


?>