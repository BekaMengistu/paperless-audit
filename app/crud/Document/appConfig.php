<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/Document.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","document",array("ui-sref"=>"app.crud.document","label"=>"Document"));


?>