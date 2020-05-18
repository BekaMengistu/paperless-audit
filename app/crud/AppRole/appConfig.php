<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AppRole.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","app_role",array("ui-sref"=>"app.crud.app_role","label"=>"App Role"));


?>