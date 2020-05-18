<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/SigninLog.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","signin_log",array("ui-sref"=>"app.crud.signin_log","label"=>"Signin Log"));


?>