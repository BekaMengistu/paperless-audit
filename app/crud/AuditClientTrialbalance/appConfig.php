<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditClientTrialbalance.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_client_trialbalance",array("ui-sref"=>"app.crud.audit_client_trialbalance","label"=>"Audit Client Trialbalance"));


?>