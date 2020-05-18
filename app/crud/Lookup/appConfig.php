<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/Lookup.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","lookup",array("ui-sref"=>"app.crud.lookup","label"=>"Lookup"));


?>