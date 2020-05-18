<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditProcedure.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_procedure",array("ui-sref"=>"app.crud.audit_procedure","label"=>"Audit Procedure"));


?>