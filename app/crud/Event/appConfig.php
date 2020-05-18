<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/Event.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","event",array("ui-sref"=>"app.crud.event","label"=>"Event"));


?>