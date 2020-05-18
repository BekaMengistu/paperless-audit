<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/DiscussionMessage.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","discussion_message",array("ui-sref"=>"app.crud.discussion_message","label"=>"Discussion Message"));


?>