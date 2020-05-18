<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/FormValue.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","form_value",array("ui-sref"=>"app.crud.form_value","label"=>"Form Value"));


?>