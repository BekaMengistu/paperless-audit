<?php
/**
 * The base configurations of the Book Manager.
 *
 * This file has the following configurations: MySQL settings.
 *
 */

ApplicationEngine::registerScripts($modulePath,array("content/CompanyTypeKey.router.data.js"));
ApplicationEngine::registerSubMenu("app.crud","company_type_key",array("ui-sref"=>"app.crud.company_type_key","label"=>"Company Type Key"));


?>