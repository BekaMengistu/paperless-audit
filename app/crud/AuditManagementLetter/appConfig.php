<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditManagementLetter.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_management_letter",array("ui-sref"=>"app.crud.audit_management_letter","label"=>"Audit Management Letter"));


?>