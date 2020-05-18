<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/RolePermission.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","role_permission",array("ui-sref"=>"app.crud.role_permission","label"=>"Role Permission"));


?>