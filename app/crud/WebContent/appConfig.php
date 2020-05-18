<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/WebContent.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","web_content",array("ui-sref"=>"app.crud.web_content","label"=>"Web Content"));


?>