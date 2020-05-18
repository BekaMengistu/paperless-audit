<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditFinding.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_finding",array("ui-sref"=>"app.crud.audit_finding","label"=>"Audit Finding"));


?>