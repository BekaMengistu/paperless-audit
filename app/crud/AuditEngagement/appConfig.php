<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/AuditEngagement.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","audit_engagement",array("ui-sref"=>"app.crud.audit_engagement","label"=>"Audit Engagement"));


?>