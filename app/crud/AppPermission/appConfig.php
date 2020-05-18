<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AppPermission.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","app_permission",array("ui-sref"=>"app.crud.app_permission","label"=>"App Permission"));


?>