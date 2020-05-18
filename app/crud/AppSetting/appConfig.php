<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AppSetting.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","app_setting",array("ui-sref"=>"app.crud.app_setting","label"=>"App Setting"));


?>