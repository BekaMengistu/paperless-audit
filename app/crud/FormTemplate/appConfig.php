<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/FormTemplate.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","form_template",array("ui-sref"=>"app.crud.form_template","label"=>"Form Template"));


?>