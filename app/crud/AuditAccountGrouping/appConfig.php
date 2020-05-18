<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditAccountGrouping.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_account_grouping",array("ui-sref"=>"app.crud.audit_account_grouping","label"=>"Audit Account Grouping"));


?>