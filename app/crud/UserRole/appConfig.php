<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/UserRole.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","user_role",array("ui-sref"=>"app.crud.user_role","label"=>"User Role"));


?>