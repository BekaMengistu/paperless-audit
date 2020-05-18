<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/FormFieldTemplate.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","form_field_template",array("ui-sref"=>"app.crud.form_field_template","label"=>"Form Field Template"));


?>