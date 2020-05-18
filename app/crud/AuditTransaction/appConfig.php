<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditTransaction.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_transaction",array("ui-sref"=>"app.crud.audit_transaction","label"=>"Audit Transaction"));


?>