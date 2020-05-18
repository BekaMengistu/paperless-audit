<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/Discussion.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","discussion",array("ui-sref"=>"app.crud.discussion","label"=>"Discussion"));


?>