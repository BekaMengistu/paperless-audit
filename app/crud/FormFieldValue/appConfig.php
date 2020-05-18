<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/FormFieldValue.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","form_field_value",array("ui-sref"=>"app.crud.form_field_value","label"=>"Form Field Value"));


?>