<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditAdjustment.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_adjustment",array("ui-sref"=>"app.crud.audit_adjustment","label"=>"Audit Adjustment"));


?>