<?php
$crudMenu=ApplicationEngine::registerMenu("pos2","app.crud"
                                            ,array("ui-sref"=>"app.crud","label"=>"Data","icon"=>"fa-database","submenu_class"=>"nav-mega nav-mega-3"));
ApplicationEngine::registerScripts($modulePath,array("crud.router.data.js"
				,"dataManagementHelpers/dataImportExportService.js"
                                                                                 
				,"dataManagementHelpers/lookupService.js"
                ,'crud.services.js'
                ,'dataManagementHelpers/crud.manager.js'
                 ,'crud.managers2.js'));

ApplicationEngine::parseFolder(dirname(__FILE__));
?>
