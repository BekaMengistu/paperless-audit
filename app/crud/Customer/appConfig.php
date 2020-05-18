<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/Customer.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","customer",array("ui-sref"=>"app.crud.customer","label"=>"Customer"));


?>