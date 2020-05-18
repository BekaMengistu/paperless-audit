<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/User.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","user",array("ui-sref"=>"app.crud.user","label"=>"User"));


?>