<?php
// *************************************************************************
// *                                                                       *
// * restServer.php -  Crud Operations                                     *
// * Copyright (c) Beka Mengistu. All Rights Reserved                      *
// *                                                                       *
// *************************************************************************
// *                                                                       *
// * Email: bekalive@gmail.com                                             *
// * Tele: 	+251911608166									                                 *
// *                                                                       *
// *************************************************************************
// *                                                                       *
// * This software is furnished under a license and may be used and copied *
// * only  in  accordance  with  the  terms  of such  license and with the *
// * inclusion of the above copyright notice.                              *
// *                                                                       *
// *************************************************************************

require_once (dirname(__FILE__) . '/dataManagementHelpers/crudHelperApi.php'); 

class CrudServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
			$sa->mapRoute("get","/AppPermissionService/readAll/","CrudServiceAdapter::AppPermission_readAll"); 
    	$sa->mapRoute("get","/AppPermissionService/readDetailById/:id","CrudServiceAdapter::AppPermission_readDetailById"); 
   		$sa->mapRoute("delete","/AppPermissionService/delete/:id","CrudServiceAdapter::AppPermission_delete"); 
   	 	$sa->mapRoute("post","/AppPermissionService/save/","CrudServiceAdapter::AppPermission_save"); 
			$sa->mapRoute("post","/AppPermissionService/importExcel/","CrudServiceAdapter::AppPermission_importExcel"); 
    
			$sa->mapRoute("get","/AppRoleService/readAll/","CrudServiceAdapter::AppRole_readAll"); 
    	$sa->mapRoute("get","/AppRoleService/readDetailById/:id","CrudServiceAdapter::AppRole_readDetailById"); 
   		$sa->mapRoute("delete","/AppRoleService/delete/:id","CrudServiceAdapter::AppRole_delete"); 
   	 	$sa->mapRoute("post","/AppRoleService/save/","CrudServiceAdapter::AppRole_save"); 
			$sa->mapRoute("post","/AppRoleService/importExcel/","CrudServiceAdapter::AppRole_importExcel"); 
    
			$sa->mapRoute("get","/AppSettingService/readAll/","CrudServiceAdapter::AppSetting_readAll"); 
    	$sa->mapRoute("get","/AppSettingService/readDetailById/:id","CrudServiceAdapter::AppSetting_readDetailById"); 
   		$sa->mapRoute("delete","/AppSettingService/delete/:id","CrudServiceAdapter::AppSetting_delete"); 
   	 	$sa->mapRoute("post","/AppSettingService/save/","CrudServiceAdapter::AppSetting_save"); 
			$sa->mapRoute("post","/AppSettingService/importExcel/","CrudServiceAdapter::AppSetting_importExcel"); 
    
			$sa->mapRoute("get","/AuditAccountGroupingService/readAll/","CrudServiceAdapter::AuditAccountGrouping_readAll"); 
    	$sa->mapRoute("get","/AuditAccountGroupingService/readDetailById/:id","CrudServiceAdapter::AuditAccountGrouping_readDetailById"); 
   		$sa->mapRoute("delete","/AuditAccountGroupingService/delete/:id","CrudServiceAdapter::AuditAccountGrouping_delete"); 
   	 	$sa->mapRoute("post","/AuditAccountGroupingService/save/","CrudServiceAdapter::AuditAccountGrouping_save"); 
			$sa->mapRoute("post","/AuditAccountGroupingService/importExcel/","CrudServiceAdapter::AuditAccountGrouping_importExcel"); 
    
			$sa->mapRoute("get","/AuditAdjustmentService/readAll/","CrudServiceAdapter::AuditAdjustment_readAll"); 
    	$sa->mapRoute("get","/AuditAdjustmentService/readDetailById/:id","CrudServiceAdapter::AuditAdjustment_readDetailById"); 
   		$sa->mapRoute("delete","/AuditAdjustmentService/delete/:id","CrudServiceAdapter::AuditAdjustment_delete"); 
   	 	$sa->mapRoute("post","/AuditAdjustmentService/save/","CrudServiceAdapter::AuditAdjustment_save"); 
			$sa->mapRoute("post","/AuditAdjustmentService/importExcel/","CrudServiceAdapter::AuditAdjustment_importExcel"); 
    
			$sa->mapRoute("get","/AuditClientTrialbalanceService/readAll/","CrudServiceAdapter::AuditClientTrialbalance_readAll"); 
    	$sa->mapRoute("get","/AuditClientTrialbalanceService/readDetailById/:id","CrudServiceAdapter::AuditClientTrialbalance_readDetailById"); 
   		$sa->mapRoute("delete","/AuditClientTrialbalanceService/delete/:id","CrudServiceAdapter::AuditClientTrialbalance_delete"); 
   	 	$sa->mapRoute("post","/AuditClientTrialbalanceService/save/","CrudServiceAdapter::AuditClientTrialbalance_save"); 
			$sa->mapRoute("post","/AuditClientTrialbalanceService/importExcel/","CrudServiceAdapter::AuditClientTrialbalance_importExcel"); 
    
			$sa->mapRoute("get","/AuditCompanyTypeService/readAll/","CrudServiceAdapter::AuditCompanyType_readAll"); 
    	$sa->mapRoute("get","/AuditCompanyTypeService/readDetailById/:id","CrudServiceAdapter::AuditCompanyType_readDetailById"); 
   		$sa->mapRoute("delete","/AuditCompanyTypeService/delete/:id","CrudServiceAdapter::AuditCompanyType_delete"); 
   	 	$sa->mapRoute("post","/AuditCompanyTypeService/save/","CrudServiceAdapter::AuditCompanyType_save"); 
			$sa->mapRoute("post","/AuditCompanyTypeService/importExcel/","CrudServiceAdapter::AuditCompanyType_importExcel"); 
    
			$sa->mapRoute("get","/AuditEngagementService/readAll/","CrudServiceAdapter::AuditEngagement_readAll"); 
    	$sa->mapRoute("get","/AuditEngagementService/readDetailById/:id","CrudServiceAdapter::AuditEngagement_readDetailById"); 
   		$sa->mapRoute("delete","/AuditEngagementService/delete/:id","CrudServiceAdapter::AuditEngagement_delete"); 
   	 	$sa->mapRoute("post","/AuditEngagementService/save/","CrudServiceAdapter::AuditEngagement_save"); 
			$sa->mapRoute("post","/AuditEngagementService/importExcel/","CrudServiceAdapter::AuditEngagement_importExcel"); 
    
			$sa->mapRoute("get","/AuditFindingService/readAll/","CrudServiceAdapter::AuditFinding_readAll"); 
    	$sa->mapRoute("get","/AuditFindingService/readDetailById/:id","CrudServiceAdapter::AuditFinding_readDetailById"); 
   		$sa->mapRoute("delete","/AuditFindingService/delete/:id","CrudServiceAdapter::AuditFinding_delete"); 
   	 	$sa->mapRoute("post","/AuditFindingService/save/","CrudServiceAdapter::AuditFinding_save"); 
			$sa->mapRoute("post","/AuditFindingService/importExcel/","CrudServiceAdapter::AuditFinding_importExcel"); 
    
			$sa->mapRoute("get","/AuditManagementLetterService/readAll/","CrudServiceAdapter::AuditManagementLetter_readAll"); 
    	$sa->mapRoute("get","/AuditManagementLetterService/readDetailById/:id","CrudServiceAdapter::AuditManagementLetter_readDetailById"); 
   		$sa->mapRoute("delete","/AuditManagementLetterService/delete/:id","CrudServiceAdapter::AuditManagementLetter_delete"); 
   	 	$sa->mapRoute("post","/AuditManagementLetterService/save/","CrudServiceAdapter::AuditManagementLetter_save"); 
			$sa->mapRoute("post","/AuditManagementLetterService/importExcel/","CrudServiceAdapter::AuditManagementLetter_importExcel"); 
    
			$sa->mapRoute("get","/AuditProcedureService/readAll/","CrudServiceAdapter::AuditProcedure_readAll"); 
    	$sa->mapRoute("get","/AuditProcedureService/readDetailById/:id","CrudServiceAdapter::AuditProcedure_readDetailById"); 
   		$sa->mapRoute("delete","/AuditProcedureService/delete/:id","CrudServiceAdapter::AuditProcedure_delete"); 
   	 	$sa->mapRoute("post","/AuditProcedureService/save/","CrudServiceAdapter::AuditProcedure_save"); 
			$sa->mapRoute("post","/AuditProcedureService/importExcel/","CrudServiceAdapter::AuditProcedure_importExcel"); 
    
			$sa->mapRoute("get","/AuditTransactionService/readAll/","CrudServiceAdapter::AuditTransaction_readAll"); 
    	$sa->mapRoute("get","/AuditTransactionService/readDetailById/:id","CrudServiceAdapter::AuditTransaction_readDetailById"); 
   		$sa->mapRoute("delete","/AuditTransactionService/delete/:id","CrudServiceAdapter::AuditTransaction_delete"); 
   	 	$sa->mapRoute("post","/AuditTransactionService/save/","CrudServiceAdapter::AuditTransaction_save"); 
			$sa->mapRoute("post","/AuditTransactionService/importExcel/","CrudServiceAdapter::AuditTransaction_importExcel"); 
    
			$sa->mapRoute("get","/CompanyTypeKeyService/readAll/","CrudServiceAdapter::CompanyTypeKey_readAll"); 
    	$sa->mapRoute("get","/CompanyTypeKeyService/readDetailById/:id","CrudServiceAdapter::CompanyTypeKey_readDetailById"); 
   		$sa->mapRoute("delete","/CompanyTypeKeyService/delete/:id","CrudServiceAdapter::CompanyTypeKey_delete"); 
   	 	$sa->mapRoute("post","/CompanyTypeKeyService/save/","CrudServiceAdapter::CompanyTypeKey_save"); 
			$sa->mapRoute("post","/CompanyTypeKeyService/importExcel/","CrudServiceAdapter::CompanyTypeKey_importExcel"); 
    
			$sa->mapRoute("get","/CustomerService/readAll/","CrudServiceAdapter::Customer_readAll"); 
    	$sa->mapRoute("get","/CustomerService/readDetailById/:id","CrudServiceAdapter::Customer_readDetailById"); 
   		$sa->mapRoute("delete","/CustomerService/delete/:id","CrudServiceAdapter::Customer_delete"); 
   	 	$sa->mapRoute("post","/CustomerService/save/","CrudServiceAdapter::Customer_save"); 
			$sa->mapRoute("post","/CustomerService/importExcel/","CrudServiceAdapter::Customer_importExcel"); 
    
			$sa->mapRoute("get","/DbTransactionService/readAll/","CrudServiceAdapter::DbTransaction_readAll"); 
    	$sa->mapRoute("get","/DbTransactionService/readDetailById/:id","CrudServiceAdapter::DbTransaction_readDetailById"); 
   		$sa->mapRoute("delete","/DbTransactionService/delete/:id","CrudServiceAdapter::DbTransaction_delete"); 
   	 	$sa->mapRoute("post","/DbTransactionService/save/","CrudServiceAdapter::DbTransaction_save"); 
			$sa->mapRoute("post","/DbTransactionService/importExcel/","CrudServiceAdapter::DbTransaction_importExcel"); 
    
			$sa->mapRoute("get","/DiscussionService/readAll/","CrudServiceAdapter::Discussion_readAll"); 
    	$sa->mapRoute("get","/DiscussionService/readDetailById/:id","CrudServiceAdapter::Discussion_readDetailById"); 
   		$sa->mapRoute("delete","/DiscussionService/delete/:id","CrudServiceAdapter::Discussion_delete"); 
   	 	$sa->mapRoute("post","/DiscussionService/save/","CrudServiceAdapter::Discussion_save"); 
			$sa->mapRoute("post","/DiscussionService/importExcel/","CrudServiceAdapter::Discussion_importExcel"); 
    
			$sa->mapRoute("get","/DiscussionMessageService/readAll/","CrudServiceAdapter::DiscussionMessage_readAll"); 
    	$sa->mapRoute("get","/DiscussionMessageService/readDetailById/:id","CrudServiceAdapter::DiscussionMessage_readDetailById"); 
   		$sa->mapRoute("delete","/DiscussionMessageService/delete/:id","CrudServiceAdapter::DiscussionMessage_delete"); 
   	 	$sa->mapRoute("post","/DiscussionMessageService/save/","CrudServiceAdapter::DiscussionMessage_save"); 
			$sa->mapRoute("post","/DiscussionMessageService/importExcel/","CrudServiceAdapter::DiscussionMessage_importExcel"); 
    
			$sa->mapRoute("get","/DocumentService/readAll/","CrudServiceAdapter::Document_readAll"); 
    	$sa->mapRoute("get","/DocumentService/readDetailById/:id","CrudServiceAdapter::Document_readDetailById"); 
   		$sa->mapRoute("delete","/DocumentService/delete/:id","CrudServiceAdapter::Document_delete"); 
   	 	$sa->mapRoute("post","/DocumentService/save/","CrudServiceAdapter::Document_save"); 
			$sa->mapRoute("post","/DocumentService/importExcel/","CrudServiceAdapter::Document_importExcel"); 
    
			$sa->mapRoute("get","/EventService/readAll/","CrudServiceAdapter::Event_readAll"); 
    	$sa->mapRoute("get","/EventService/readDetailById/:id","CrudServiceAdapter::Event_readDetailById"); 
   		$sa->mapRoute("delete","/EventService/delete/:id","CrudServiceAdapter::Event_delete"); 
   	 	$sa->mapRoute("post","/EventService/save/","CrudServiceAdapter::Event_save"); 
			$sa->mapRoute("post","/EventService/importExcel/","CrudServiceAdapter::Event_importExcel"); 
    
			$sa->mapRoute("get","/FormFieldTemplateService/readAll/","CrudServiceAdapter::FormFieldTemplate_readAll"); 
    	$sa->mapRoute("get","/FormFieldTemplateService/readDetailById/:id","CrudServiceAdapter::FormFieldTemplate_readDetailById"); 
   		$sa->mapRoute("delete","/FormFieldTemplateService/delete/:id","CrudServiceAdapter::FormFieldTemplate_delete"); 
   	 	$sa->mapRoute("post","/FormFieldTemplateService/save/","CrudServiceAdapter::FormFieldTemplate_save"); 
			$sa->mapRoute("post","/FormFieldTemplateService/importExcel/","CrudServiceAdapter::FormFieldTemplate_importExcel"); 
    
			$sa->mapRoute("get","/FormFieldValueService/readAll/","CrudServiceAdapter::FormFieldValue_readAll"); 
    	$sa->mapRoute("get","/FormFieldValueService/readDetailById/:id","CrudServiceAdapter::FormFieldValue_readDetailById"); 
   		$sa->mapRoute("delete","/FormFieldValueService/delete/:id","CrudServiceAdapter::FormFieldValue_delete"); 
   	 	$sa->mapRoute("post","/FormFieldValueService/save/","CrudServiceAdapter::FormFieldValue_save"); 
			$sa->mapRoute("post","/FormFieldValueService/importExcel/","CrudServiceAdapter::FormFieldValue_importExcel"); 
    
			$sa->mapRoute("get","/FormTemplateService/readAll/","CrudServiceAdapter::FormTemplate_readAll"); 
    	$sa->mapRoute("get","/FormTemplateService/readDetailById/:id","CrudServiceAdapter::FormTemplate_readDetailById"); 
   		$sa->mapRoute("delete","/FormTemplateService/delete/:id","CrudServiceAdapter::FormTemplate_delete"); 
   	 	$sa->mapRoute("post","/FormTemplateService/save/","CrudServiceAdapter::FormTemplate_save"); 
			$sa->mapRoute("post","/FormTemplateService/importExcel/","CrudServiceAdapter::FormTemplate_importExcel"); 
    
			$sa->mapRoute("get","/FormValueService/readAll/","CrudServiceAdapter::FormValue_readAll"); 
    	$sa->mapRoute("get","/FormValueService/readDetailById/:id","CrudServiceAdapter::FormValue_readDetailById"); 
   		$sa->mapRoute("delete","/FormValueService/delete/:id","CrudServiceAdapter::FormValue_delete"); 
   	 	$sa->mapRoute("post","/FormValueService/save/","CrudServiceAdapter::FormValue_save"); 
			$sa->mapRoute("post","/FormValueService/importExcel/","CrudServiceAdapter::FormValue_importExcel"); 
    
			$sa->mapRoute("get","/LookupService/readAll/","CrudServiceAdapter::Lookup_readAll"); 
    	$sa->mapRoute("get","/LookupService/readDetailById/:id","CrudServiceAdapter::Lookup_readDetailById"); 
   		$sa->mapRoute("delete","/LookupService/delete/:id","CrudServiceAdapter::Lookup_delete"); 
   	 	$sa->mapRoute("post","/LookupService/save/","CrudServiceAdapter::Lookup_save"); 
			$sa->mapRoute("post","/LookupService/importExcel/","CrudServiceAdapter::Lookup_importExcel"); 
    
			$sa->mapRoute("get","/ReplicationAllowedHostsService/readAll/","CrudServiceAdapter::ReplicationAllowedHosts_readAll"); 
    	$sa->mapRoute("get","/ReplicationAllowedHostsService/readDetailById/:id","CrudServiceAdapter::ReplicationAllowedHosts_readDetailById"); 
   		$sa->mapRoute("delete","/ReplicationAllowedHostsService/delete/:id","CrudServiceAdapter::ReplicationAllowedHosts_delete"); 
   	 	$sa->mapRoute("post","/ReplicationAllowedHostsService/save/","CrudServiceAdapter::ReplicationAllowedHosts_save"); 
			$sa->mapRoute("post","/ReplicationAllowedHostsService/importExcel/","CrudServiceAdapter::ReplicationAllowedHosts_importExcel"); 
    
			$sa->mapRoute("get","/ReplicationServerService/readAll/","CrudServiceAdapter::ReplicationServer_readAll"); 
    	$sa->mapRoute("get","/ReplicationServerService/readDetailById/:id","CrudServiceAdapter::ReplicationServer_readDetailById"); 
   		$sa->mapRoute("delete","/ReplicationServerService/delete/:id","CrudServiceAdapter::ReplicationServer_delete"); 
   	 	$sa->mapRoute("post","/ReplicationServerService/save/","CrudServiceAdapter::ReplicationServer_save"); 
			$sa->mapRoute("post","/ReplicationServerService/importExcel/","CrudServiceAdapter::ReplicationServer_importExcel"); 
    
			$sa->mapRoute("get","/RolePermissionService/readAll/","CrudServiceAdapter::RolePermission_readAll"); 
    	$sa->mapRoute("get","/RolePermissionService/readDetailById/:id","CrudServiceAdapter::RolePermission_readDetailById"); 
   		$sa->mapRoute("delete","/RolePermissionService/delete/:id","CrudServiceAdapter::RolePermission_delete"); 
   	 	$sa->mapRoute("post","/RolePermissionService/save/","CrudServiceAdapter::RolePermission_save"); 
			$sa->mapRoute("post","/RolePermissionService/importExcel/","CrudServiceAdapter::RolePermission_importExcel"); 
    
			$sa->mapRoute("get","/SigninLogService/readAll/","CrudServiceAdapter::SigninLog_readAll"); 
    	$sa->mapRoute("get","/SigninLogService/readDetailById/:id","CrudServiceAdapter::SigninLog_readDetailById"); 
   		$sa->mapRoute("delete","/SigninLogService/delete/:id","CrudServiceAdapter::SigninLog_delete"); 
   	 	$sa->mapRoute("post","/SigninLogService/save/","CrudServiceAdapter::SigninLog_save"); 
			$sa->mapRoute("post","/SigninLogService/importExcel/","CrudServiceAdapter::SigninLog_importExcel"); 
    
			$sa->mapRoute("get","/TaskService/readAll/","CrudServiceAdapter::Task_readAll"); 
    	$sa->mapRoute("get","/TaskService/readDetailById/:id","CrudServiceAdapter::Task_readDetailById"); 
   		$sa->mapRoute("delete","/TaskService/delete/:id","CrudServiceAdapter::Task_delete"); 
   	 	$sa->mapRoute("post","/TaskService/save/","CrudServiceAdapter::Task_save"); 
			$sa->mapRoute("post","/TaskService/importExcel/","CrudServiceAdapter::Task_importExcel"); 
    
			$sa->mapRoute("get","/UserService/readAll/","CrudServiceAdapter::User_readAll"); 
    	$sa->mapRoute("get","/UserService/readDetailById/:id","CrudServiceAdapter::User_readDetailById"); 
   		$sa->mapRoute("delete","/UserService/delete/:id","CrudServiceAdapter::User_delete"); 
   	 	$sa->mapRoute("post","/UserService/save/","CrudServiceAdapter::User_save"); 
			$sa->mapRoute("post","/UserService/importExcel/","CrudServiceAdapter::User_importExcel"); 
    
			$sa->mapRoute("get","/UserRoleService/readAll/","CrudServiceAdapter::UserRole_readAll"); 
    	$sa->mapRoute("get","/UserRoleService/readDetailById/:id","CrudServiceAdapter::UserRole_readDetailById"); 
   		$sa->mapRoute("delete","/UserRoleService/delete/:id","CrudServiceAdapter::UserRole_delete"); 
   	 	$sa->mapRoute("post","/UserRoleService/save/","CrudServiceAdapter::UserRole_save"); 
			$sa->mapRoute("post","/UserRoleService/importExcel/","CrudServiceAdapter::UserRole_importExcel"); 
    
			$sa->mapRoute("get","/WebContentService/readAll/","CrudServiceAdapter::WebContent_readAll"); 
    	$sa->mapRoute("get","/WebContentService/readDetailById/:id","CrudServiceAdapter::WebContent_readDetailById"); 
   		$sa->mapRoute("delete","/WebContentService/delete/:id","CrudServiceAdapter::WebContent_delete"); 
   	 	$sa->mapRoute("post","/WebContentService/save/","CrudServiceAdapter::WebContent_save"); 
			$sa->mapRoute("post","/WebContentService/importExcel/","CrudServiceAdapter::WebContent_importExcel"); 
    
	}
    
	public static function registerQueries($dbQueries)
	{

		//*************************************************************** app_permission*************************************************************** 

		$dbQueries["readapp_permission"] = 
			"SELECT * FROM app_permission ORDER BY app_permission_id DESC";

		$dbQueries["readapp_permissionDetailById"] = 
			"SELECT * FROM app_permission WHERE app_permission_id = '#app_permission_id#' ";

		$dbQueries["deleteapp_permission"] = 
			"DELETE FROM app_permission WHERE app_permission_id = '#app_permission_id#' ";

		$dbQueries["addapp_permission"] = 
			"INSERT INTO app_permission 
		  (name,	description,	parent) VALUES 
		  ('#name#',	'#description#',	'#parent#')";

		$dbQueries["updateapp_permission"] = 
			"UPDATE app_permission SET  
		  name='#name#', description='#description#', parent='#parent#' WHERE app_permission_id='#app_permission_id#'";

		//*************************************************************** app_role*************************************************************** 

		$dbQueries["readapp_role"] = 
			"SELECT * FROM app_role ORDER BY app_role_id DESC";

		$dbQueries["readapp_roleDetailById"] = 
			"SELECT * FROM app_role WHERE app_role_id = '#app_role_id#' ";

		$dbQueries["deleteapp_role"] = 
			"DELETE FROM app_role WHERE app_role_id = '#app_role_id#' ";

		$dbQueries["addapp_role"] = 
			"INSERT INTO app_role 
		  (name,	description) VALUES 
		  ('#name#',	'#description#')";

		$dbQueries["updateapp_role"] = 
			"UPDATE app_role SET  
		  name='#name#', description='#description#' WHERE app_role_id='#app_role_id#'";

		//*************************************************************** app_setting*************************************************************** 

		$dbQueries["readapp_setting"] = 
			"SELECT * FROM app_setting ORDER BY app_setting_id DESC";

		$dbQueries["readapp_settingDetailById"] = 
			"SELECT * FROM app_setting WHERE app_setting_id = '#app_setting_id#' ";

		$dbQueries["deleteapp_setting"] = 
			"DELETE FROM app_setting WHERE app_setting_id = '#app_setting_id#' ";

		$dbQueries["addapp_setting"] = 
			"INSERT INTO app_setting 
		  (app_name,	setting_name,	setting_value) VALUES 
		  ('#app_name#',	'#setting_name#',	'#setting_value#')";

		$dbQueries["updateapp_setting"] = 
			"UPDATE app_setting SET  
		  app_name='#app_name#', setting_name='#setting_name#', setting_value='#setting_value#' WHERE app_setting_id='#app_setting_id#'";

		//*************************************************************** audit_account_grouping*************************************************************** 

		$dbQueries["readaudit_account_grouping"] = 
			"SELECT * FROM audit_account_grouping ORDER BY audit_account_grouping_id DESC";

		$dbQueries["readaudit_account_groupingDetailById"] = 
			"SELECT * FROM audit_account_grouping WHERE audit_account_grouping_id = '#audit_account_grouping_id#' ";

		$dbQueries["deleteaudit_account_grouping"] = 
			"DELETE FROM audit_account_grouping WHERE audit_account_grouping_id = '#audit_account_grouping_id#' ";

		$dbQueries["addaudit_account_grouping"] = 
			"INSERT INTO audit_account_grouping 
		  (grouping_code,	grouping_name,	description,	parent_code,	cash_flow_parent_code,	account_type,	mapping_hint,	system_name,	report_label,	normal_balance,	report_note_name,	second_parent,	third_parent,	archived) VALUES 
		  ('#grouping_code#',	'#grouping_name#',	'#description#',	'#parent_code#',	'#cash_flow_parent_code#',	'#account_type#',	'#mapping_hint#',	'#system_name#',	'#report_label#',	'#normal_balance#',	'#report_note_name#',	'#second_parent#',	'#third_parent#',	'#archived#')";

		$dbQueries["updateaudit_account_grouping"] = 
			"UPDATE audit_account_grouping SET  
		  grouping_code='#grouping_code#', grouping_name='#grouping_name#', description='#description#', parent_code='#parent_code#', cash_flow_parent_code='#cash_flow_parent_code#', account_type='#account_type#', mapping_hint='#mapping_hint#', system_name='#system_name#', report_label='#report_label#', normal_balance='#normal_balance#', report_note_name='#report_note_name#', second_parent='#second_parent#', third_parent='#third_parent#', archived='#archived#' WHERE audit_account_grouping_id='#audit_account_grouping_id#'";

		//*************************************************************** audit_adjustment*************************************************************** 

		$dbQueries["readaudit_adjustment"] = 
			"SELECT * FROM audit_adjustment ORDER BY audit_adjustment_id DESC";

		$dbQueries["readaudit_adjustmentDetailById"] = 
			"SELECT * FROM audit_adjustment WHERE audit_adjustment_id = '#audit_adjustment_id#' ";

		$dbQueries["deleteaudit_adjustment"] = 
			"DELETE FROM audit_adjustment WHERE audit_adjustment_id = '#audit_adjustment_id#' ";

		$dbQueries["addaudit_adjustment"] = 
			"INSERT INTO audit_adjustment 
		  (audit_adjustment_id,	audit_id,	account_id,	debit,	credit,	prior_debit,	priod_credit,	year2_debit,	year2_credit,	justification,	adjustment_type) VALUES 
		  ('#audit_adjustment_id#',	'#audit_id#',	'#account_id#',	'#debit#',	'#credit#',	'#prior_debit#',	'#priod_credit#',	'#year2_debit#',	'#year2_credit#',	'#justification#',	'#adjustment_type#')";

		$dbQueries["updateaudit_adjustment"] = 
			"UPDATE audit_adjustment SET  
		  audit_id='#audit_id#', account_id='#account_id#', debit='#debit#', credit='#credit#', prior_debit='#prior_debit#', priod_credit='#priod_credit#', year2_debit='#year2_debit#', year2_credit='#year2_credit#', justification='#justification#', adjustment_type='#adjustment_type#' WHERE audit_adjustment_id='#audit_adjustment_id#'";

		//*************************************************************** audit_client_trialbalance*************************************************************** 

		$dbQueries["readaudit_client_trialbalance"] = 
			"SELECT * FROM audit_client_trialbalance ORDER BY audit_client_trialbalance_id DESC";

		$dbQueries["readaudit_client_trialbalanceDetailById"] = 
			"SELECT * FROM audit_client_trialbalance WHERE audit_client_trialbalance_id = '#audit_client_trialbalance_id#' ";

		$dbQueries["deleteaudit_client_trialbalance"] = 
			"DELETE FROM audit_client_trialbalance WHERE audit_client_trialbalance_id = '#audit_client_trialbalance_id#' ";

		$dbQueries["addaudit_client_trialbalance"] = 
			"INSERT INTO audit_client_trialbalance 
		  (audit_client_trialbalance_id,	audit_engagement_id,	account_id,	account_description,	debit,	credit,	account_type,	current_balance,	last_fye_balance,	year2_balance,	year3_balance,	parent_code,	extra1,	extra,	mapping_checked,	is_default) VALUES 
		  ('#audit_client_trialbalance_id#',	'#audit_engagement_id#',	'#account_id#',	'#account_description#',	'#debit#',	'#credit#',	'#account_type#',	'#current_balance#',	'#last_fye_balance#',	'#year2_balance#',	'#year3_balance#',	'#parent_code#',	'#extra1#',	'#extra#',	'#mapping_checked#',	'#is_default#')";

		$dbQueries["updateaudit_client_trialbalance"] = 
			"UPDATE audit_client_trialbalance SET  
		  audit_engagement_id='#audit_engagement_id#', account_id='#account_id#', account_description='#account_description#', debit='#debit#', credit='#credit#', account_type='#account_type#', current_balance='#current_balance#', last_fye_balance='#last_fye_balance#', year2_balance='#year2_balance#', year3_balance='#year3_balance#', parent_code='#parent_code#', extra1='#extra1#', extra='#extra#', mapping_checked='#mapping_checked#', is_default='#is_default#' WHERE audit_client_trialbalance_id='#audit_client_trialbalance_id#'";

		//*************************************************************** audit_company_type*************************************************************** 

		$dbQueries["readaudit_company_type"] = 
			"SELECT * FROM audit_company_type ORDER BY audit_company_type_id DESC";

		$dbQueries["readaudit_company_typeDetailById"] = 
			"SELECT * FROM audit_company_type WHERE audit_company_type_id = '#audit_company_type_id#' ";

		$dbQueries["deleteaudit_company_type"] = 
			"DELETE FROM audit_company_type WHERE audit_company_type_id = '#audit_company_type_id#' ";

		$dbQueries["addaudit_company_type"] = 
			"INSERT INTO audit_company_type 
		  (company_type_code,	name,	description,	report_template,	profit_tax,	legal_reserve) VALUES 
		  ('#company_type_code#',	'#name#',	'#description#',	'#report_template#',	'#profit_tax#',	'#legal_reserve#')";

		$dbQueries["updateaudit_company_type"] = 
			"UPDATE audit_company_type SET  
		  company_type_code='#company_type_code#', name='#name#', description='#description#', report_template='#report_template#', profit_tax='#profit_tax#', legal_reserve='#legal_reserve#' WHERE audit_company_type_id='#audit_company_type_id#'";

		//*************************************************************** audit_engagement*************************************************************** 

		$dbQueries["readaudit_engagement"] = 
			"SELECT * FROM audit_engagement ORDER BY audit_engagement_id DESC";

		$dbQueries["readaudit_engagementDetailById"] = 
			"SELECT * FROM audit_engagement WHERE audit_engagement_id = '#audit_engagement_id#' ";

		$dbQueries["deleteaudit_engagement"] = 
			"DELETE FROM audit_engagement WHERE audit_engagement_id = '#audit_engagement_id#' ";

		$dbQueries["addaudit_engagement"] = 
			"INSERT INTO audit_engagement 
		  (audit_engagement_id,	customer_id,	company_type,	schedules_date,	closing_date,	closing_date_ec,	audit_fee,	audit_completion_time,	client_contact_person,	client_contact_phone,	verification_code,	opinion,	form_value_id,	document_id,	assignee,	audit_status,	contact_email,	employee_count,	audit_standard,	archived,	period0,	period1,	period2,	period3) VALUES 
		  ('#audit_engagement_id#',	'#customer_id#',	'#company_type#',	'#schedules_date#',	'#closing_date#',	'#closing_date_ec#',	'#audit_fee#',	'#audit_completion_time#',	'#client_contact_person#',	'#client_contact_phone#',	'#verification_code#',	'#opinion#',	'#form_value_id#',	'#document_id#',	'#assignee#',	'#audit_status#',	'#contact_email#',	'#employee_count#',	'#audit_standard#',	'#archived#',	'#period0#',	'#period1#',	'#period2#',	'#period3#')";

		$dbQueries["updateaudit_engagement"] = 
			"UPDATE audit_engagement SET  
		  customer_id='#customer_id#', company_type='#company_type#', schedules_date='#schedules_date#', closing_date='#closing_date#', closing_date_ec='#closing_date_ec#', audit_fee='#audit_fee#', audit_completion_time='#audit_completion_time#', client_contact_person='#client_contact_person#', client_contact_phone='#client_contact_phone#', verification_code='#verification_code#', opinion='#opinion#', form_value_id='#form_value_id#', document_id='#document_id#', assignee='#assignee#', audit_status='#audit_status#', contact_email='#contact_email#', employee_count='#employee_count#', audit_standard='#audit_standard#', archived='#archived#', period0='#period0#', period1='#period1#', period2='#period2#', period3='#period3#' WHERE audit_engagement_id='#audit_engagement_id#'";

		//*************************************************************** audit_finding*************************************************************** 

		$dbQueries["readaudit_finding"] = 
			"SELECT * FROM audit_finding ORDER BY audit_finding_id DESC";

		$dbQueries["readaudit_findingDetailById"] = 
			"SELECT * FROM audit_finding WHERE audit_finding_id = '#audit_finding_id#' ";

		$dbQueries["deleteaudit_finding"] = 
			"DELETE FROM audit_finding WHERE audit_finding_id = '#audit_finding_id#' ";

		$dbQueries["addaudit_finding"] = 
			"INSERT INTO audit_finding 
		  (audit_finding_id,	audit_id,	audit_procedure_id,	audited_item_id,	audited_item_type,	notes,	work_done,	issues,	review_notes,	extra_data,	user_id) VALUES 
		  ('#audit_finding_id#',	'#audit_id#',	'#audit_procedure_id#',	'#audited_item_id#',	'#audited_item_type#',	'#notes#',	'#work_done#',	'#issues#',	'#review_notes#',	'#extra_data#',	'#user_id#')";

		$dbQueries["updateaudit_finding"] = 
			"UPDATE audit_finding SET  
		  audit_id='#audit_id#', audit_procedure_id='#audit_procedure_id#', audited_item_id='#audited_item_id#', audited_item_type='#audited_item_type#', notes='#notes#', work_done='#work_done#', issues='#issues#', review_notes='#review_notes#', extra_data='#extra_data#', user_id='#user_id#' WHERE audit_finding_id='#audit_finding_id#'";

		//*************************************************************** audit_management_letter*************************************************************** 

		$dbQueries["readaudit_management_letter"] = 
			"SELECT * FROM audit_management_letter ORDER BY audit_management_letter_id DESC";

		$dbQueries["readaudit_management_letterDetailById"] = 
			"SELECT * FROM audit_management_letter WHERE audit_management_letter_id = '#audit_management_letter_id#' ";

		$dbQueries["deleteaudit_management_letter"] = 
			"DELETE FROM audit_management_letter WHERE audit_management_letter_id = '#audit_management_letter_id#' ";

		$dbQueries["addaudit_management_letter"] = 
			"INSERT INTO audit_management_letter 
		  (audit_management_letter_id,	audit_id,	audit_procedure_id,	audited_item_id,	audited_item_type,	content,	response,	qualification_point,	disclosure_note,	user_id,	display_order,	archived) VALUES 
		  ('#audit_management_letter_id#',	'#audit_id#',	'#audit_procedure_id#',	'#audited_item_id#',	'#audited_item_type#',	'#content#',	'#response#',	'#qualification_point#',	'#disclosure_note#',	'#user_id#',	'#display_order#',	'#archived#')";

		$dbQueries["updateaudit_management_letter"] = 
			"UPDATE audit_management_letter SET  
		  audit_id='#audit_id#', audit_procedure_id='#audit_procedure_id#', audited_item_id='#audited_item_id#', audited_item_type='#audited_item_type#', content='#content#', response='#response#', qualification_point='#qualification_point#', disclosure_note='#disclosure_note#', user_id='#user_id#', display_order='#display_order#', archived='#archived#' WHERE audit_management_letter_id='#audit_management_letter_id#'";

		//*************************************************************** audit_procedure*************************************************************** 

		$dbQueries["readaudit_procedure"] = 
			"SELECT * FROM audit_procedure ORDER BY audit_procedure_id DESC";

		$dbQueries["readaudit_procedureDetailById"] = 
			"SELECT * FROM audit_procedure WHERE audit_procedure_id = '#audit_procedure_id#' ";

		$dbQueries["deleteaudit_procedure"] = 
			"DELETE FROM audit_procedure WHERE audit_procedure_id = '#audit_procedure_id#' ";

		$dbQueries["addaudit_procedure"] = 
			"INSERT INTO audit_procedure 
		  (ref,	description,	objectives,	grouping_code,	priority,	not_for_children,	extra_data) VALUES 
		  ('#ref#',	'#description#',	'#objectives#',	'#grouping_code#',	'#priority#',	'#not_for_children#',	'#extra_data#')";

		$dbQueries["updateaudit_procedure"] = 
			"UPDATE audit_procedure SET  
		  ref='#ref#', description='#description#', objectives='#objectives#', grouping_code='#grouping_code#', priority='#priority#', not_for_children='#not_for_children#', extra_data='#extra_data#' WHERE audit_procedure_id='#audit_procedure_id#'";

		//*************************************************************** audit_transaction*************************************************************** 

		$dbQueries["readaudit_transaction"] = 
			"SELECT * FROM audit_transaction ORDER BY audit_transaction_id DESC";

		$dbQueries["readaudit_transactionDetailById"] = 
			"SELECT * FROM audit_transaction WHERE audit_transaction_id = '#audit_transaction_id#' ";

		$dbQueries["deleteaudit_transaction"] = 
			"DELETE FROM audit_transaction WHERE audit_transaction_id = '#audit_transaction_id#' ";

		$dbQueries["addaudit_transaction"] = 
			"INSERT INTO audit_transaction 
		  (audit_transaction_id,	parent_code,	audit_id,	txn_date,	reference,	jrnl,	description,	debit,	credit,	balance) VALUES 
		  ('#audit_transaction_id#',	'#parent_code#',	'#audit_id#',	'#txn_date#',	'#reference#',	'#jrnl#',	'#description#',	'#debit#',	'#credit#',	'#balance#')";

		$dbQueries["updateaudit_transaction"] = 
			"UPDATE audit_transaction SET  
		  parent_code='#parent_code#', audit_id='#audit_id#', txn_date='#txn_date#', reference='#reference#', jrnl='#jrnl#', description='#description#', debit='#debit#', credit='#credit#', balance='#balance#' WHERE audit_transaction_id='#audit_transaction_id#'";

		//*************************************************************** company_type_key*************************************************************** 

		$dbQueries["readcompany_type_key"] = 
			"SELECT * FROM company_type_key ORDER BY company_type_key_id DESC";

		$dbQueries["readcompany_type_keyDetailById"] = 
			"SELECT * FROM company_type_key WHERE company_type_key_id = '#company_type_key_id#' ";

		$dbQueries["deletecompany_type_key"] = 
			"DELETE FROM company_type_key WHERE company_type_key_id = '#company_type_key_id#' ";

		$dbQueries["addcompany_type_key"] = 
			"INSERT INTO company_type_key 
		  (grouping_code,	audit_company_type_id,	allowed) VALUES 
		  ('#grouping_code#',	'#audit_company_type_id#',	'#allowed#')";

		$dbQueries["updatecompany_type_key"] = 
			"UPDATE company_type_key SET  
		  grouping_code='#grouping_code#', audit_company_type_id='#audit_company_type_id#', allowed='#allowed#' WHERE company_type_key_id='#company_type_key_id#'";

		//*************************************************************** customer*************************************************************** 

		$dbQueries["readcustomer"] = 
			"SELECT * FROM customer ORDER BY customer_id DESC";

		$dbQueries["readcustomerDetailById"] = 
			"SELECT * FROM customer WHERE customer_id = '#customer_id#' ";

		$dbQueries["deletecustomer"] = 
			"DELETE FROM customer WHERE customer_id = '#customer_id#' ";

		$dbQueries["addcustomer"] = 
			"INSERT INTO customer 
		  (customer_id,	logo,	customer_name,	telephone_no,	email,	address,	company_type,	general_manager,	establishment,	tin,	vat_reg_no,	commercial_registratio_no,	commercial_reg_issued_by,	extra,	archived) VALUES 
		  ('#customer_id#',	'#logo#',	'#customer_name#',	'#telephone_no#',	'#email#',	'#address#',	'#company_type#',	'#general_manager#',	'#establishment#',	'#tin#',	'#vat_reg_no#',	'#commercial_registratio_no#',	'#commercial_reg_issued_by#',	'#extra#',	'#archived#')";

		$dbQueries["updatecustomer"] = 
			"UPDATE customer SET  
		  logo='#logo#', customer_name='#customer_name#', telephone_no='#telephone_no#', email='#email#', address='#address#', company_type='#company_type#', general_manager='#general_manager#', establishment='#establishment#', tin='#tin#', vat_reg_no='#vat_reg_no#', commercial_registratio_no='#commercial_registratio_no#', commercial_reg_issued_by='#commercial_reg_issued_by#', extra='#extra#', archived='#archived#' WHERE customer_id='#customer_id#'";

		//*************************************************************** db_transaction*************************************************************** 

		$dbQueries["readdb_transaction"] = 
			"SELECT * FROM db_transaction ORDER BY db_transaction_id DESC";

		$dbQueries["readdb_transactionDetailById"] = 
			"SELECT * FROM db_transaction WHERE db_transaction_id = '#db_transaction_id#' ";

		$dbQueries["deletedb_transaction"] = 
			"DELETE FROM db_transaction WHERE db_transaction_id = '#db_transaction_id#' ";

		$dbQueries["adddb_transaction"] = 
			"INSERT INTO db_transaction 
		  (table_name,	table_id,	query_data,	updated_fields,	user_id,	modify_time,	sync_time,	host_name) VALUES 
		  ('#table_name#',	'#table_id#',	'#query_data#',	'#updated_fields#',	'#user_id#',	'#modify_time#',	'#sync_time#',	'#host_name#')";

		$dbQueries["updatedb_transaction"] = 
			"UPDATE db_transaction SET  
		  table_name='#table_name#', table_id='#table_id#', query_data='#query_data#', updated_fields='#updated_fields#', user_id='#user_id#', modify_time='#modify_time#', sync_time='#sync_time#', host_name='#host_name#' WHERE db_transaction_id='#db_transaction_id#'";

		//*************************************************************** discussion*************************************************************** 

		$dbQueries["readdiscussion"] = 
			"SELECT * FROM discussion ORDER BY discussion_id DESC";

		$dbQueries["readdiscussionDetailById"] = 
			"SELECT * FROM discussion WHERE discussion_id = '#discussion_id#' ";

		$dbQueries["deletediscussion"] = 
			"DELETE FROM discussion WHERE discussion_id = '#discussion_id#' ";

		$dbQueries["adddiscussion"] = 
			"INSERT INTO discussion 
		  (user_id,	post_time,	parent_type,	parent_id,	discussion_name,	participants,	archived) VALUES 
		  ('#user_id#',	'#post_time#',	'#parent_type#',	'#parent_id#',	'#discussion_name#',	'#participants#',	'#archived#')";

		$dbQueries["updatediscussion"] = 
			"UPDATE discussion SET  
		  user_id='#user_id#', post_time='#post_time#', parent_type='#parent_type#', parent_id='#parent_id#', discussion_name='#discussion_name#', participants='#participants#', archived='#archived#' WHERE discussion_id='#discussion_id#'";

		//*************************************************************** discussion_message*************************************************************** 

		$dbQueries["readdiscussion_message"] = 
			"SELECT * FROM discussion_message ORDER BY discussion_message_id DESC";

		$dbQueries["readdiscussion_messageDetailById"] = 
			"SELECT * FROM discussion_message WHERE discussion_message_id = '#discussion_message_id#' ";

		$dbQueries["deletediscussion_message"] = 
			"DELETE FROM discussion_message WHERE discussion_message_id = '#discussion_message_id#' ";

		$dbQueries["adddiscussion_message"] = 
			"INSERT INTO discussion_message 
		  (discussion_id,	message_time,	user_id,	message_body,	recipients,	archived) VALUES 
		  ('#discussion_id#',	'#message_time#',	'#user_id#',	'#message_body#',	'#recipients#',	'#archived#')";

		$dbQueries["updatediscussion_message"] = 
			"UPDATE discussion_message SET  
		  discussion_id='#discussion_id#', message_time='#message_time#', user_id='#user_id#', message_body='#message_body#', recipients='#recipients#', archived='#archived#' WHERE discussion_message_id='#discussion_message_id#'";

		//*************************************************************** document*************************************************************** 

		$dbQueries["readdocument"] = 
			"SELECT * FROM document ORDER BY document_id DESC";

		$dbQueries["readdocumentDetailById"] = 
			"SELECT * FROM document WHERE document_id = '#document_id#' ";

		$dbQueries["deletedocument"] = 
			"DELETE FROM document WHERE document_id = '#document_id#' ";

		$dbQueries["adddocument"] = 
			"INSERT INTO document 
		  (document_name,	description,	document_category_id,	parent_type,	document_path,	tags,	parent_id,	isTemplate,	folder_id,	system_name,	permission,	mime_type,	upload_type,	archived) VALUES 
		  ('#document_name#',	'#description#',	'#document_category_id#',	'#parent_type#',	'#document_path#',	'#tags#',	'#parent_id#',	'#isTemplate#',	'#folder_id#',	'#system_name#',	'#permission#',	'#mime_type#',	'#upload_type#',	'#archived#')";

		$dbQueries["updatedocument"] = 
			"UPDATE document SET  
		  document_name='#document_name#', description='#description#', document_category_id='#document_category_id#', parent_type='#parent_type#', document_path='#document_path#', tags='#tags#', parent_id='#parent_id#', isTemplate='#isTemplate#', folder_id='#folder_id#', system_name='#system_name#', permission='#permission#', mime_type='#mime_type#', upload_type='#upload_type#', archived='#archived#' WHERE document_id='#document_id#'";

		//*************************************************************** event*************************************************************** 

		$dbQueries["readevent"] = 
			"SELECT * FROM event ORDER BY event_id DESC";

		$dbQueries["readeventDetailById"] = 
			"SELECT * FROM event WHERE event_id = '#event_id#' ";

		$dbQueries["deleteevent"] = 
			"DELETE FROM event WHERE event_id = '#event_id#' ";

		$dbQueries["addevent"] = 
			"INSERT INTO event 
		  (event_name,	description,	event_type,	parent_type,	event_time,	location,	parent_id,	archived) VALUES 
		  ('#event_name#',	'#description#',	'#event_type#',	'#parent_type#',	'#event_time#',	'#location#',	'#parent_id#',	'#archived#')";

		$dbQueries["updateevent"] = 
			"UPDATE event SET  
		  event_name='#event_name#', description='#description#', event_type='#event_type#', parent_type='#parent_type#', event_time='#event_time#', location='#location#', parent_id='#parent_id#', archived='#archived#' WHERE event_id='#event_id#'";

		//*************************************************************** form_field_template*************************************************************** 

		$dbQueries["readform_field_template"] = 
			"SELECT * FROM form_field_template ORDER BY form_field_template_id DESC";

		$dbQueries["readform_field_templateDetailById"] = 
			"SELECT * FROM form_field_template WHERE form_field_template_id = '#form_field_template_id#' ";

		$dbQueries["deleteform_field_template"] = 
			"DELETE FROM form_field_template WHERE form_field_template_id = '#form_field_template_id#' ";

		$dbQueries["addform_field_template"] = 
			"INSERT INTO form_field_template 
		  (form_field_template_id,	form_template_id,	name,	label,	data_type,	required,	default_value,	placeholder,	parent_id,	parent_type,	repeating,	lookup_id,	width,	section_id,	display_order,	container_template,	field_template,	custom_script,	archived) VALUES 
		  ('#form_field_template_id#',	'#form_template_id#',	'#name#',	'#label#',	'#data_type#',	'#required#',	'#default_value#',	'#placeholder#',	'#parent_id#',	'#parent_type#',	'#repeating#',	'#lookup_id#',	'#width#',	'#section_id#',	'#display_order#',	'#container_template#',	'#field_template#',	'#custom_script#',	'#archived#')";

		$dbQueries["updateform_field_template"] = 
			"UPDATE form_field_template SET  
		  form_template_id='#form_template_id#', name='#name#', label='#label#', data_type='#data_type#', required='#required#', default_value='#default_value#', placeholder='#placeholder#', parent_id='#parent_id#', parent_type='#parent_type#', repeating='#repeating#', lookup_id='#lookup_id#', width='#width#', section_id='#section_id#', display_order='#display_order#', container_template='#container_template#', field_template='#field_template#', custom_script='#custom_script#', archived='#archived#' WHERE form_field_template_id='#form_field_template_id#'";

		//*************************************************************** form_field_value*************************************************************** 

		$dbQueries["readform_field_value"] = 
			"SELECT * FROM form_field_value ORDER BY form_field_value_id DESC";

		$dbQueries["readform_field_valueDetailById"] = 
			"SELECT * FROM form_field_value WHERE form_field_value_id = '#form_field_value_id#' ";

		$dbQueries["deleteform_field_value"] = 
			"DELETE FROM form_field_value WHERE form_field_value_id = '#form_field_value_id#' ";

		$dbQueries["addform_field_value"] = 
			"INSERT INTO form_field_value 
		  (form_field_value_id,	form_value_id,	form_field_template_id,	field_value) VALUES 
		  ('#form_field_value_id#',	'#form_value_id#',	'#form_field_template_id#',	'#field_value#')";

		$dbQueries["updateform_field_value"] = 
			"UPDATE form_field_value SET  
		  form_value_id='#form_value_id#', form_field_template_id='#form_field_template_id#', field_value='#field_value#' WHERE form_field_value_id='#form_field_value_id#'";

		//*************************************************************** form_template*************************************************************** 

		$dbQueries["readform_template"] = 
			"SELECT * FROM form_template ORDER BY form_template_id DESC";

		$dbQueries["readform_templateDetailById"] = 
			"SELECT * FROM form_template WHERE form_template_id = '#form_template_id#' ";

		$dbQueries["deleteform_template"] = 
			"DELETE FROM form_template WHERE form_template_id = '#form_template_id#' ";

		$dbQueries["addform_template"] = 
			"INSERT INTO form_template 
		  (form_template_id,	name,	description,	label,	type,	extra_content,	script_path) VALUES 
		  ('#form_template_id#',	'#name#',	'#description#',	'#label#',	'#type#',	'#extra_content#',	'#script_path#')";

		$dbQueries["updateform_template"] = 
			"UPDATE form_template SET  
		  name='#name#', description='#description#', label='#label#', type='#type#', extra_content='#extra_content#', script_path='#script_path#' WHERE form_template_id='#form_template_id#'";

		//*************************************************************** form_value*************************************************************** 

		$dbQueries["readform_value"] = 
			"SELECT * FROM form_value ORDER BY form_value_id DESC";

		$dbQueries["readform_valueDetailById"] = 
			"SELECT * FROM form_value WHERE form_value_id = '#form_value_id#' ";

		$dbQueries["deleteform_value"] = 
			"DELETE FROM form_value WHERE form_value_id = '#form_value_id#' ";

		$dbQueries["addform_value"] = 
			"INSERT INTO form_value 
		  (form_value_id,	form_template_id,	description,	parent_type,	parent_id,	custom_data,	archived) VALUES 
		  ('#form_value_id#',	'#form_template_id#',	'#description#',	'#parent_type#',	'#parent_id#',	'#custom_data#',	'#archived#')";

		$dbQueries["updateform_value"] = 
			"UPDATE form_value SET  
		  form_template_id='#form_template_id#', description='#description#', parent_type='#parent_type#', parent_id='#parent_id#', custom_data='#custom_data#', archived='#archived#' WHERE form_value_id='#form_value_id#'";

		//*************************************************************** lookup*************************************************************** 

		$dbQueries["readlookup"] = 
			"SELECT * FROM lookup ORDER BY lookup_id DESC";

		$dbQueries["readlookupDetailById"] = 
			"SELECT * FROM lookup WHERE lookup_id = '#lookup_id#' ";

		$dbQueries["deletelookup"] = 
			"DELETE FROM lookup WHERE lookup_id = '#lookup_id#' ";

		$dbQueries["addlookup"] = 
			"INSERT INTO lookup 
		  (lookup_type,	name,	description) VALUES 
		  ('#lookup_type#',	'#name#',	'#description#')";

		$dbQueries["updatelookup"] = 
			"UPDATE lookup SET  
		  lookup_type='#lookup_type#', name='#name#', description='#description#' WHERE lookup_id='#lookup_id#'";

		//*************************************************************** replication_allowed_hosts*************************************************************** 

		$dbQueries["readreplication_allowed_hosts"] = 
			"SELECT * FROM replication_allowed_hosts ORDER BY replication_allowed_hosts_id DESC";

		$dbQueries["readreplication_allowed_hostsDetailById"] = 
			"SELECT * FROM replication_allowed_hosts WHERE replication_allowed_hosts_id = '#replication_allowed_hosts_id#' ";

		$dbQueries["deletereplication_allowed_hosts"] = 
			"DELETE FROM replication_allowed_hosts WHERE replication_allowed_hosts_id = '#replication_allowed_hosts_id#' ";

		$dbQueries["addreplication_allowed_hosts"] = 
			"INSERT INTO replication_allowed_hosts 
		  (host_id,	host_description,	allowed) VALUES 
		  ('#host_id#',	'#host_description#',	'#allowed#')";

		$dbQueries["updatereplication_allowed_hosts"] = 
			"UPDATE replication_allowed_hosts SET  
		  host_id='#host_id#', host_description='#host_description#', allowed='#allowed#' WHERE replication_allowed_hosts_id='#replication_allowed_hosts_id#'";

		//*************************************************************** replication_server*************************************************************** 

		$dbQueries["readreplication_server"] = 
			"SELECT * FROM replication_server ORDER BY replication_server_id DESC";

		$dbQueries["readreplication_serverDetailById"] = 
			"SELECT * FROM replication_server WHERE replication_server_id = '#replication_server_id#' ";

		$dbQueries["deletereplication_server"] = 
			"DELETE FROM replication_server WHERE replication_server_id = '#replication_server_id#' ";

		$dbQueries["addreplication_server"] = 
			"INSERT INTO replication_server 
		  (server_address,	up_index,	down_index) VALUES 
		  ('#server_address#',	'#up_index#',	'#down_index#')";

		$dbQueries["updatereplication_server"] = 
			"UPDATE replication_server SET  
		  server_address='#server_address#', up_index='#up_index#', down_index='#down_index#' WHERE replication_server_id='#replication_server_id#'";

		//*************************************************************** role_permission*************************************************************** 

		$dbQueries["readrole_permission"] = 
			"SELECT * FROM role_permission ORDER BY role_permission_id DESC";

		$dbQueries["readrole_permissionDetailById"] = 
			"SELECT * FROM role_permission WHERE role_permission_id = '#role_permission_id#' ";

		$dbQueries["deleterole_permission"] = 
			"DELETE FROM role_permission WHERE role_permission_id = '#role_permission_id#' ";

		$dbQueries["addrole_permission"] = 
			"INSERT INTO role_permission 
		  (app_role_id,	app_permission_id,	app_permission_name,	allowed) VALUES 
		  ('#app_role_id#',	'#app_permission_id#',	'#app_permission_name#',	'#allowed#')";

		$dbQueries["updaterole_permission"] = 
			"UPDATE role_permission SET  
		  app_role_id='#app_role_id#', app_permission_id='#app_permission_id#', app_permission_name='#app_permission_name#', allowed='#allowed#' WHERE role_permission_id='#role_permission_id#'";

		//*************************************************************** signin_log*************************************************************** 

		$dbQueries["readsignin_log"] = 
			"SELECT * FROM signin_log ORDER BY signin_log_id DESC";

		$dbQueries["readsignin_logDetailById"] = 
			"SELECT * FROM signin_log WHERE signin_log_id = '#signin_log_id#' ";

		$dbQueries["deletesignin_log"] = 
			"DELETE FROM signin_log WHERE signin_log_id = '#signin_log_id#' ";

		$dbQueries["addsignin_log"] = 
			"INSERT INTO signin_log 
		  (access_time,	ip_address,	user_name,	status) VALUES 
		  ('#access_time#',	'#ip_address#',	'#user_name#',	'#status#')";

		$dbQueries["updatesignin_log"] = 
			"UPDATE signin_log SET  
		  access_time='#access_time#', ip_address='#ip_address#', user_name='#user_name#', status='#status#' WHERE signin_log_id='#signin_log_id#'";

		//*************************************************************** task*************************************************************** 

		$dbQueries["readtask"] = 
			"SELECT * FROM task ORDER BY task_id DESC";

		$dbQueries["readtaskDetailById"] = 
			"SELECT * FROM task WHERE task_id = '#task_id#' ";

		$dbQueries["deletetask"] = 
			"DELETE FROM task WHERE task_id = '#task_id#' ";

		$dbQueries["addtask"] = 
			"INSERT INTO task 
		  (task_name,	created_time,	assgnee_id,	parent_type,	parent_id,	task_status,	priority,	created_by,	archived) VALUES 
		  ('#task_name#',	'#created_time#',	'#assgnee_id#',	'#parent_type#',	'#parent_id#',	'#task_status#',	'#priority#',	'#created_by#',	'#archived#')";

		$dbQueries["updatetask"] = 
			"UPDATE task SET  
		  task_name='#task_name#', created_time='#created_time#', assgnee_id='#assgnee_id#', parent_type='#parent_type#', parent_id='#parent_id#', task_status='#task_status#', priority='#priority#', created_by='#created_by#', archived='#archived#' WHERE task_id='#task_id#'";

		//*************************************************************** user*************************************************************** 

		$dbQueries["readuser"] = 
			"SELECT * FROM user ORDER BY user_id DESC";

		$dbQueries["readuserDetailById"] = 
			"SELECT * FROM user WHERE user_id = '#user_id#' ";

		$dbQueries["deleteuser"] = 
			"DELETE FROM user WHERE user_id = '#user_id#' ";

		$dbQueries["adduser"] = 
			"INSERT INTO user 
		  (profile_picture,	user_name,	password,	full_name,	email,	telephone_no,	address,	user_type,	status,	is_archived) VALUES 
		  ('#profile_picture#',	'#user_name#',	'#password#',	'#full_name#',	'#email#',	'#telephone_no#',	'#address#',	'#user_type#',	'#status#',	'#is_archived#')";

		$dbQueries["updateuser"] = 
			"UPDATE user SET  
		  profile_picture='#profile_picture#', user_name='#user_name#', password='#password#', full_name='#full_name#', email='#email#', telephone_no='#telephone_no#', address='#address#', user_type='#user_type#', status='#status#', is_archived='#is_archived#' WHERE user_id='#user_id#'";

		//*************************************************************** user_role*************************************************************** 

		$dbQueries["readuser_role"] = 
			"SELECT * FROM user_role ORDER BY user_role_id DESC";

		$dbQueries["readuser_roleDetailById"] = 
			"SELECT * FROM user_role WHERE user_role_id = '#user_role_id#' ";

		$dbQueries["deleteuser_role"] = 
			"DELETE FROM user_role WHERE user_role_id = '#user_role_id#' ";

		$dbQueries["adduser_role"] = 
			"INSERT INTO user_role 
		  (user_id,	app_role_id) VALUES 
		  ('#user_id#',	'#app_role_id#')";

		$dbQueries["updateuser_role"] = 
			"UPDATE user_role SET  
		  user_id='#user_id#', app_role_id='#app_role_id#' WHERE user_role_id='#user_role_id#'";

		//*************************************************************** web_content*************************************************************** 

		$dbQueries["readweb_content"] = 
			"SELECT * FROM web_content ORDER BY web_content_id DESC";

		$dbQueries["readweb_contentDetailById"] = 
			"SELECT * FROM web_content WHERE web_content_id = '#web_content_id#' ";

		$dbQueries["deleteweb_content"] = 
			"DELETE FROM web_content WHERE web_content_id = '#web_content_id#' ";

		$dbQueries["addweb_content"] = 
			"INSERT INTO web_content 
		  (web_content_id,	reference,	category,	content_type,	content,	archived) VALUES 
		  ('#web_content_id#',	'#reference#',	'#category#',	'#content_type#',	'#content#',	'#archived#')";

		$dbQueries["updateweb_content"] = 
			"UPDATE web_content SET  
		  reference='#reference#', category='#category#', content_type='#content_type#', content='#content#', archived='#archived#' WHERE web_content_id='#web_content_id#'";
		
		return $dbQueries;
	}

	//****************************************************************************************************************************** 
	//*								AppPermission Functions
	
	public static function AppPermission_readAll()
	{
		serveData("readapp_permission");
	} 
		
	public static function _AppPermission_readDetailById($id)
	{
		$result = dbFetchData("readapp_permissionDetailById",array("app_permission_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AppPermission_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AppPermission_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AppPermission_delete($id)
	{
		 serveData("deleteapp_permission",array("app_permission_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AppPermission_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AppPermission_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AppPermission_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("app_permission_id","name","description","parent"));

		$result= CrudHelperApi::addOrUpdateTable($params,"app_permission","app_permission_id","addapp_permission","updateapp_permission",false);
		return $result;		
	}
	
	public static function AppPermission_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AppPermission_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AppPermission Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AppRole Functions
	
	public static function AppRole_readAll()
	{
		serveData("readapp_role");
	} 
		
	public static function _AppRole_readDetailById($id)
	{
		$result = dbFetchData("readapp_roleDetailById",array("app_role_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AppRole_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AppRole_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AppRole_delete($id)
	{
		 serveData("deleteapp_role",array("app_role_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AppRole_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AppRole_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AppRole_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("app_role_id","name","description"));

		$result= CrudHelperApi::addOrUpdateTable($params,"app_role","app_role_id","addapp_role","updateapp_role",false);
		return $result;		
	}
	
	public static function AppRole_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AppRole_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AppRole Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AppSetting Functions
	
	public static function AppSetting_readAll()
	{
		serveData("readapp_setting");
	} 
		
	public static function _AppSetting_readDetailById($id)
	{
		$result = dbFetchData("readapp_settingDetailById",array("app_setting_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AppSetting_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AppSetting_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AppSetting_delete($id)
	{
		 serveData("deleteapp_setting",array("app_setting_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AppSetting_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AppSetting_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AppSetting_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("app_setting_id","app_name","setting_name","setting_value"));

		$result= CrudHelperApi::addOrUpdateTable($params,"app_setting","app_setting_id","addapp_setting","updateapp_setting",false);
		return $result;		
	}
	
	public static function AppSetting_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AppSetting_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AppSetting Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditAccountGrouping Functions
	
	public static function AuditAccountGrouping_readAll()
	{
		serveData("readaudit_account_grouping");
	} 
		
	public static function _AuditAccountGrouping_readDetailById($id)
	{
		$result = dbFetchData("readaudit_account_groupingDetailById",array("audit_account_grouping_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditAccountGrouping_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditAccountGrouping_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditAccountGrouping_delete($id)
	{
		 serveData("deleteaudit_account_grouping",array("audit_account_grouping_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditAccountGrouping_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditAccountGrouping_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditAccountGrouping_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_account_grouping_id","grouping_code","grouping_name","description","parent_code","cash_flow_parent_code","account_type","mapping_hint","system_name","report_label","normal_balance","report_note_name","second_parent","third_parent","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_account_grouping","audit_account_grouping_id","addaudit_account_grouping","updateaudit_account_grouping",false);
		return $result;		
	}
	
	public static function AuditAccountGrouping_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditAccountGrouping_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditAccountGrouping Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditAdjustment Functions
	
	public static function AuditAdjustment_readAll()
	{
		serveData("readaudit_adjustment");
	} 
		
	public static function _AuditAdjustment_readDetailById($id)
	{
		$result = dbFetchData("readaudit_adjustmentDetailById",array("audit_adjustment_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditAdjustment_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditAdjustment_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditAdjustment_delete($id)
	{
		 serveData("deleteaudit_adjustment",array("audit_adjustment_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditAdjustment_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditAdjustment_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditAdjustment_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_adjustment_id","audit_id","account_id","debit","credit","prior_debit","priod_credit","year2_debit","year2_credit","justification","adjustment_type"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_adjustment","audit_adjustment_id","addaudit_adjustment","updateaudit_adjustment",true);
		return $result;		
	}
	
	public static function AuditAdjustment_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditAdjustment_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditAdjustment Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditClientTrialbalance Functions
	
	public static function AuditClientTrialbalance_readAll()
	{
		serveData("readaudit_client_trialbalance");
	} 
		
	public static function _AuditClientTrialbalance_readDetailById($id)
	{
		$result = dbFetchData("readaudit_client_trialbalanceDetailById",array("audit_client_trialbalance_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditClientTrialbalance_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditClientTrialbalance_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditClientTrialbalance_delete($id)
	{
		 serveData("deleteaudit_client_trialbalance",array("audit_client_trialbalance_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditClientTrialbalance_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditClientTrialbalance_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditClientTrialbalance_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_client_trialbalance_id","audit_engagement_id","account_id","account_description","debit","credit","account_type","current_balance","last_fye_balance","year2_balance","year3_balance","parent_code","extra1","extra","mapping_checked","is_default"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_client_trialbalance","audit_client_trialbalance_id","addaudit_client_trialbalance","updateaudit_client_trialbalance",true);
		return $result;		
	}
	
	public static function AuditClientTrialbalance_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditClientTrialbalance_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditClientTrialbalance Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditCompanyType Functions
	
	public static function AuditCompanyType_readAll()
	{
		serveData("readaudit_company_type");
	} 
		
	public static function _AuditCompanyType_readDetailById($id)
	{
		$result = dbFetchData("readaudit_company_typeDetailById",array("audit_company_type_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditCompanyType_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditCompanyType_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditCompanyType_delete($id)
	{
		 serveData("deleteaudit_company_type",array("audit_company_type_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditCompanyType_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditCompanyType_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditCompanyType_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_company_type_id","company_type_code","name","description","report_template","profit_tax","legal_reserve"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_company_type","audit_company_type_id","addaudit_company_type","updateaudit_company_type",false);
		return $result;		
	}
	
	public static function AuditCompanyType_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditCompanyType_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditCompanyType Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditEngagement Functions
	
	public static function AuditEngagement_readAll()
	{
		serveData("readaudit_engagement");
	} 
		
	public static function _AuditEngagement_readDetailById($id)
	{
		$result = dbFetchData("readaudit_engagementDetailById",array("audit_engagement_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditEngagement_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditEngagement_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditEngagement_delete($id)
	{
		 serveData("deleteaudit_engagement",array("audit_engagement_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditEngagement_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditEngagement_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditEngagement_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_engagement_id","customer_id","company_type","schedules_date","closing_date","closing_date_ec","audit_fee","audit_completion_time","client_contact_person","client_contact_phone","verification_code","opinion","form_value_id","document_id","assignee","audit_status","contact_email","employee_count","audit_standard","archived","period0","period1","period2","period3"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_engagement","audit_engagement_id","addaudit_engagement","updateaudit_engagement",true);
		return $result;		
	}
	
	public static function AuditEngagement_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditEngagement_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditEngagement Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditFinding Functions
	
	public static function AuditFinding_readAll()
	{
		serveData("readaudit_finding");
	} 
		
	public static function _AuditFinding_readDetailById($id)
	{
		$result = dbFetchData("readaudit_findingDetailById",array("audit_finding_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditFinding_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditFinding_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditFinding_delete($id)
	{
		 serveData("deleteaudit_finding",array("audit_finding_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditFinding_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditFinding_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditFinding_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_finding_id","audit_id","audit_procedure_id","audited_item_id","audited_item_type","notes","work_done","issues","review_notes","extra_data","user_id"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_finding","audit_finding_id","addaudit_finding","updateaudit_finding",true);
		return $result;		
	}
	
	public static function AuditFinding_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditFinding_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditFinding Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditManagementLetter Functions
	
	public static function AuditManagementLetter_readAll()
	{
		serveData("readaudit_management_letter");
	} 
		
	public static function _AuditManagementLetter_readDetailById($id)
	{
		$result = dbFetchData("readaudit_management_letterDetailById",array("audit_management_letter_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditManagementLetter_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditManagementLetter_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditManagementLetter_delete($id)
	{
		 serveData("deleteaudit_management_letter",array("audit_management_letter_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditManagementLetter_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditManagementLetter_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditManagementLetter_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_management_letter_id","audit_id","audit_procedure_id","audited_item_id","audited_item_type","content","response","qualification_point","disclosure_note","user_id","display_order","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_management_letter","audit_management_letter_id","addaudit_management_letter","updateaudit_management_letter",true);
		return $result;		
	}
	
	public static function AuditManagementLetter_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditManagementLetter_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditManagementLetter Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditProcedure Functions
	
	public static function AuditProcedure_readAll()
	{
		serveData("readaudit_procedure");
	} 
		
	public static function _AuditProcedure_readDetailById($id)
	{
		$result = dbFetchData("readaudit_procedureDetailById",array("audit_procedure_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditProcedure_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditProcedure_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditProcedure_delete($id)
	{
		 serveData("deleteaudit_procedure",array("audit_procedure_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditProcedure_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditProcedure_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditProcedure_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_procedure_id","ref","description","objectives","grouping_code","priority","not_for_children","extra_data"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_procedure","audit_procedure_id","addaudit_procedure","updateaudit_procedure",false);
		return $result;		
	}
	
	public static function AuditProcedure_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditProcedure_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditProcedure Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								AuditTransaction Functions
	
	public static function AuditTransaction_readAll()
	{
		serveData("readaudit_transaction");
	} 
		
	public static function _AuditTransaction_readDetailById($id)
	{
		$result = dbFetchData("readaudit_transactionDetailById",array("audit_transaction_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function AuditTransaction_readDetailById($id)
	{
		$result= CrudServiceAdapter::_AuditTransaction_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function AuditTransaction_delete($id)
	{
		 serveData("deleteaudit_transaction",array("audit_transaction_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function AuditTransaction_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_AuditTransaction_save($params);
		echo(json_encode($result));		
	}
    
	public static function _AuditTransaction_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("audit_transaction_id","parent_code","audit_id","txn_date","reference","jrnl","description","debit","credit","balance"));

		$result= CrudHelperApi::addOrUpdateTable($params,"audit_transaction","audit_transaction_id","addaudit_transaction","updateaudit_transaction",true);
		return $result;		
	}
	
	public static function AuditTransaction_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_AuditTransaction_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /AuditTransaction Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								CompanyTypeKey Functions
	
	public static function CompanyTypeKey_readAll()
	{
		serveData("readcompany_type_key");
	} 
		
	public static function _CompanyTypeKey_readDetailById($id)
	{
		$result = dbFetchData("readcompany_type_keyDetailById",array("company_type_key_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function CompanyTypeKey_readDetailById($id)
	{
		$result= CrudServiceAdapter::_CompanyTypeKey_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function CompanyTypeKey_delete($id)
	{
		 serveData("deletecompany_type_key",array("company_type_key_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function CompanyTypeKey_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_CompanyTypeKey_save($params);
		echo(json_encode($result));		
	}
    
	public static function _CompanyTypeKey_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("company_type_key_id","grouping_code","audit_company_type_id","allowed"));

		$result= CrudHelperApi::addOrUpdateTable($params,"company_type_key","company_type_key_id","addcompany_type_key","updatecompany_type_key",false);
		return $result;		
	}
	
	public static function CompanyTypeKey_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_CompanyTypeKey_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /CompanyTypeKey Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								Customer Functions
	
	public static function Customer_readAll()
	{
		serveData("readcustomer");
	} 
		
	public static function _Customer_readDetailById($id)
	{
		$result = dbFetchData("readcustomerDetailById",array("customer_id"=>$id),QUERY_FETCH_ONE);
		//convert string data to json
		$result=CrudHelperApi::getJsonAttributes($result,array("extra"));
			
		return $result;
	} 
    
	public static function Customer_readDetailById($id)
	{
		$result= CrudServiceAdapter::_Customer_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function Customer_delete($id)
	{
		 serveData("deletecustomer",array("customer_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function Customer_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_Customer_save($params);
		echo(json_encode($result));		
	}
    
	public static function _Customer_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("customer_id","logo","customer_name","telephone_no","email","address","company_type","general_manager","establishment","tin","vat_reg_no","commercial_registratio_no","commercial_reg_issued_by","extra","archived"));

		//convert json data to string
		$params=CrudHelperApi::setJsonAttributes($params,array("extra"));
	
		$result= CrudHelperApi::addOrUpdateTable($params,"customer","customer_id","addcustomer","updatecustomer",true);
		return $result;		
	}
	
	public static function Customer_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_Customer_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /Customer Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								DbTransaction Functions
	
	public static function DbTransaction_readAll()
	{
		serveData("readdb_transaction");
	} 
		
	public static function _DbTransaction_readDetailById($id)
	{
		$result = dbFetchData("readdb_transactionDetailById",array("db_transaction_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function DbTransaction_readDetailById($id)
	{
		$result= CrudServiceAdapter::_DbTransaction_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function DbTransaction_delete($id)
	{
		 serveData("deletedb_transaction",array("db_transaction_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function DbTransaction_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_DbTransaction_save($params);
		echo(json_encode($result));		
	}
    
	public static function _DbTransaction_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("db_transaction_id","table_name","table_id","query_data","updated_fields","user_id","modify_time","sync_time","host_name"));

		$result= CrudHelperApi::addOrUpdateTable($params,"db_transaction","db_transaction_id","adddb_transaction","updatedb_transaction",false);
		return $result;		
	}
	
	public static function DbTransaction_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_DbTransaction_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /DbTransaction Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								Discussion Functions
	
	public static function Discussion_readAll()
	{
		serveData("readdiscussion");
	} 
		
	public static function _Discussion_readDetailById($id)
	{
		$result = dbFetchData("readdiscussionDetailById",array("discussion_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function Discussion_readDetailById($id)
	{
		$result= CrudServiceAdapter::_Discussion_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function Discussion_delete($id)
	{
		 serveData("deletediscussion",array("discussion_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function Discussion_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_Discussion_save($params);
		echo(json_encode($result));		
	}
    
	public static function _Discussion_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("discussion_id","user_id","post_time","parent_type","parent_id","discussion_name","participants","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"discussion","discussion_id","adddiscussion","updatediscussion",false);
		return $result;		
	}
	
	public static function Discussion_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_Discussion_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /Discussion Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								DiscussionMessage Functions
	
	public static function DiscussionMessage_readAll()
	{
		serveData("readdiscussion_message");
	} 
		
	public static function _DiscussionMessage_readDetailById($id)
	{
		$result = dbFetchData("readdiscussion_messageDetailById",array("discussion_message_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function DiscussionMessage_readDetailById($id)
	{
		$result= CrudServiceAdapter::_DiscussionMessage_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function DiscussionMessage_delete($id)
	{
		 serveData("deletediscussion_message",array("discussion_message_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function DiscussionMessage_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_DiscussionMessage_save($params);
		echo(json_encode($result));		
	}
    
	public static function _DiscussionMessage_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("discussion_message_id","discussion_id","message_time","user_id","message_body","recipients","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"discussion_message","discussion_message_id","adddiscussion_message","updatediscussion_message",false);
		return $result;		
	}
	
	public static function DiscussionMessage_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_DiscussionMessage_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /DiscussionMessage Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								Document Functions
	
	public static function Document_readAll()
	{
		serveData("readdocument");
	} 
		
	public static function _Document_readDetailById($id)
	{
		$result = dbFetchData("readdocumentDetailById",array("document_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function Document_readDetailById($id)
	{
		$result= CrudServiceAdapter::_Document_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function Document_delete($id)
	{
		 serveData("deletedocument",array("document_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function Document_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_Document_save($params);
		echo(json_encode($result));		
	}
    
	public static function _Document_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("document_id","document_name","description","document_category_id","parent_type","document_path","tags","parent_id","isTemplate","folder_id","system_name","permission","mime_type","upload_type","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"document","document_id","adddocument","updatedocument",false);
		return $result;		
	}
	
	public static function Document_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_Document_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /Document Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								Event Functions
	
	public static function Event_readAll()
	{
		serveData("readevent");
	} 
		
	public static function _Event_readDetailById($id)
	{
		$result = dbFetchData("readeventDetailById",array("event_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function Event_readDetailById($id)
	{
		$result= CrudServiceAdapter::_Event_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function Event_delete($id)
	{
		 serveData("deleteevent",array("event_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function Event_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_Event_save($params);
		echo(json_encode($result));		
	}
    
	public static function _Event_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("event_id","event_name","description","event_type","parent_type","event_time","location","parent_id","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"event","event_id","addevent","updateevent",false);
		return $result;		
	}
	
	public static function Event_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_Event_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /Event Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								FormFieldTemplate Functions
	
	public static function FormFieldTemplate_readAll()
	{
		serveData("readform_field_template");
	} 
		
	public static function _FormFieldTemplate_readDetailById($id)
	{
		$result = dbFetchData("readform_field_templateDetailById",array("form_field_template_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function FormFieldTemplate_readDetailById($id)
	{
		$result= CrudServiceAdapter::_FormFieldTemplate_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function FormFieldTemplate_delete($id)
	{
		 serveData("deleteform_field_template",array("form_field_template_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function FormFieldTemplate_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_FormFieldTemplate_save($params);
		echo(json_encode($result));		
	}
    
	public static function _FormFieldTemplate_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("form_field_template_id","form_template_id","name","label","data_type","required","default_value","placeholder","parent_id","parent_type","repeating","lookup_id","width","section_id","display_order","container_template","field_template","custom_script","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"form_field_template","form_field_template_id","addform_field_template","updateform_field_template",true);
		return $result;		
	}
	
	public static function FormFieldTemplate_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_FormFieldTemplate_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /FormFieldTemplate Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								FormFieldValue Functions
	
	public static function FormFieldValue_readAll()
	{
		serveData("readform_field_value");
	} 
		
	public static function _FormFieldValue_readDetailById($id)
	{
		$result = dbFetchData("readform_field_valueDetailById",array("form_field_value_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function FormFieldValue_readDetailById($id)
	{
		$result= CrudServiceAdapter::_FormFieldValue_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function FormFieldValue_delete($id)
	{
		 serveData("deleteform_field_value",array("form_field_value_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function FormFieldValue_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_FormFieldValue_save($params);
		echo(json_encode($result));		
	}
    
	public static function _FormFieldValue_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("form_field_value_id","form_value_id","form_field_template_id","field_value"));

		$result= CrudHelperApi::addOrUpdateTable($params,"form_field_value","form_field_value_id","addform_field_value","updateform_field_value",true);
		return $result;		
	}
	
	public static function FormFieldValue_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_FormFieldValue_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /FormFieldValue Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								FormTemplate Functions
	
	public static function FormTemplate_readAll()
	{
		serveData("readform_template");
	} 
		
	public static function _FormTemplate_readDetailById($id)
	{
		$result = dbFetchData("readform_templateDetailById",array("form_template_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function FormTemplate_readDetailById($id)
	{
		$result= CrudServiceAdapter::_FormTemplate_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function FormTemplate_delete($id)
	{
		 serveData("deleteform_template",array("form_template_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function FormTemplate_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_FormTemplate_save($params);
		echo(json_encode($result));		
	}
    
	public static function _FormTemplate_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("form_template_id","name","description","label","type","extra_content","script_path"));

		$result= CrudHelperApi::addOrUpdateTable($params,"form_template","form_template_id","addform_template","updateform_template",true);
		return $result;		
	}
	
	public static function FormTemplate_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_FormTemplate_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /FormTemplate Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								FormValue Functions
	
	public static function FormValue_readAll()
	{
		serveData("readform_value");
	} 
		
	public static function _FormValue_readDetailById($id)
	{
		$result = dbFetchData("readform_valueDetailById",array("form_value_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function FormValue_readDetailById($id)
	{
		$result= CrudServiceAdapter::_FormValue_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function FormValue_delete($id)
	{
		 serveData("deleteform_value",array("form_value_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function FormValue_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_FormValue_save($params);
		echo(json_encode($result));		
	}
    
	public static function _FormValue_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("form_value_id","form_template_id","description","parent_type","parent_id","custom_data","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"form_value","form_value_id","addform_value","updateform_value",true);
		return $result;		
	}
	
	public static function FormValue_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_FormValue_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /FormValue Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								Lookup Functions
	
	public static function Lookup_readAll()
	{
		serveData("readlookup");
	} 
		
	public static function _Lookup_readDetailById($id)
	{
		$result = dbFetchData("readlookupDetailById",array("lookup_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function Lookup_readDetailById($id)
	{
		$result= CrudServiceAdapter::_Lookup_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function Lookup_delete($id)
	{
		 serveData("deletelookup",array("lookup_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function Lookup_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_Lookup_save($params);
		echo(json_encode($result));		
	}
    
	public static function _Lookup_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("lookup_id","lookup_type","name","description"));

		$result= CrudHelperApi::addOrUpdateTable($params,"lookup","lookup_id","addlookup","updatelookup",false);
		return $result;		
	}
	
	public static function Lookup_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_Lookup_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /Lookup Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								ReplicationAllowedHosts Functions
	
	public static function ReplicationAllowedHosts_readAll()
	{
		serveData("readreplication_allowed_hosts");
	} 
		
	public static function _ReplicationAllowedHosts_readDetailById($id)
	{
		$result = dbFetchData("readreplication_allowed_hostsDetailById",array("replication_allowed_hosts_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function ReplicationAllowedHosts_readDetailById($id)
	{
		$result= CrudServiceAdapter::_ReplicationAllowedHosts_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function ReplicationAllowedHosts_delete($id)
	{
		 serveData("deletereplication_allowed_hosts",array("replication_allowed_hosts_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function ReplicationAllowedHosts_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_ReplicationAllowedHosts_save($params);
		echo(json_encode($result));		
	}
    
	public static function _ReplicationAllowedHosts_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("replication_allowed_hosts_id","host_id","host_description","allowed"));

		$result= CrudHelperApi::addOrUpdateTable($params,"replication_allowed_hosts","replication_allowed_hosts_id","addreplication_allowed_hosts","updatereplication_allowed_hosts",false);
		return $result;		
	}
	
	public static function ReplicationAllowedHosts_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_ReplicationAllowedHosts_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /ReplicationAllowedHosts Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								ReplicationServer Functions
	
	public static function ReplicationServer_readAll()
	{
		serveData("readreplication_server");
	} 
		
	public static function _ReplicationServer_readDetailById($id)
	{
		$result = dbFetchData("readreplication_serverDetailById",array("replication_server_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function ReplicationServer_readDetailById($id)
	{
		$result= CrudServiceAdapter::_ReplicationServer_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function ReplicationServer_delete($id)
	{
		 serveData("deletereplication_server",array("replication_server_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function ReplicationServer_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_ReplicationServer_save($params);
		echo(json_encode($result));		
	}
    
	public static function _ReplicationServer_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("replication_server_id","server_address","up_index","down_index"));

		$result= CrudHelperApi::addOrUpdateTable($params,"replication_server","replication_server_id","addreplication_server","updatereplication_server",false);
		return $result;		
	}
	
	public static function ReplicationServer_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_ReplicationServer_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /ReplicationServer Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								RolePermission Functions
	
	public static function RolePermission_readAll()
	{
		serveData("readrole_permission");
	} 
		
	public static function _RolePermission_readDetailById($id)
	{
		$result = dbFetchData("readrole_permissionDetailById",array("role_permission_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function RolePermission_readDetailById($id)
	{
		$result= CrudServiceAdapter::_RolePermission_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function RolePermission_delete($id)
	{
		 serveData("deleterole_permission",array("role_permission_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function RolePermission_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_RolePermission_save($params);
		echo(json_encode($result));		
	}
    
	public static function _RolePermission_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("role_permission_id","app_role_id","app_permission_id","app_permission_name","allowed"));

		$result= CrudHelperApi::addOrUpdateTable($params,"role_permission","role_permission_id","addrole_permission","updaterole_permission",false);
		return $result;		
	}
	
	public static function RolePermission_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_RolePermission_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /RolePermission Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								SigninLog Functions
	
	public static function SigninLog_readAll()
	{
		serveData("readsignin_log");
	} 
		
	public static function _SigninLog_readDetailById($id)
	{
		$result = dbFetchData("readsignin_logDetailById",array("signin_log_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function SigninLog_readDetailById($id)
	{
		$result= CrudServiceAdapter::_SigninLog_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function SigninLog_delete($id)
	{
		 serveData("deletesignin_log",array("signin_log_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function SigninLog_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_SigninLog_save($params);
		echo(json_encode($result));		
	}
    
	public static function _SigninLog_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("signin_log_id","access_time","ip_address","user_name","status"));

		$result= CrudHelperApi::addOrUpdateTable($params,"signin_log","signin_log_id","addsignin_log","updatesignin_log",false);
		return $result;		
	}
	
	public static function SigninLog_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_SigninLog_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /SigninLog Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								Task Functions
	
	public static function Task_readAll()
	{
		serveData("readtask");
	} 
		
	public static function _Task_readDetailById($id)
	{
		$result = dbFetchData("readtaskDetailById",array("task_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function Task_readDetailById($id)
	{
		$result= CrudServiceAdapter::_Task_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function Task_delete($id)
	{
		 serveData("deletetask",array("task_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function Task_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_Task_save($params);
		echo(json_encode($result));		
	}
    
	public static function _Task_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("task_id","task_name","created_time","assgnee_id","parent_type","parent_id","task_status","priority","created_by","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"task","task_id","addtask","updatetask",false);
		return $result;		
	}
	
	public static function Task_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_Task_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /Task Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								User Functions
	
	public static function User_readAll()
	{
		serveData("readuser");
	} 
		
	public static function _User_readDetailById($id)
	{
		$result = dbFetchData("readuserDetailById",array("user_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function User_readDetailById($id)
	{
		$result= CrudServiceAdapter::_User_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function User_delete($id)
	{
		 serveData("deleteuser",array("user_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function User_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_User_save($params);
		echo(json_encode($result));		
	}
    
	public static function _User_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("user_id","profile_picture","user_name","password","full_name","email","telephone_no","address","user_type","status","is_archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"user","user_id","adduser","updateuser",false);
		return $result;		
	}
	
	public static function User_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_User_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /User Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								UserRole Functions
	
	public static function UserRole_readAll()
	{
		serveData("readuser_role");
	} 
		
	public static function _UserRole_readDetailById($id)
	{
		$result = dbFetchData("readuser_roleDetailById",array("user_role_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function UserRole_readDetailById($id)
	{
		$result= CrudServiceAdapter::_UserRole_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function UserRole_delete($id)
	{
		 serveData("deleteuser_role",array("user_role_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function UserRole_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_UserRole_save($params);
		echo(json_encode($result));		
	}
    
	public static function _UserRole_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("user_role_id","user_id","app_role_id"));

		$result= CrudHelperApi::addOrUpdateTable($params,"user_role","user_role_id","adduser_role","updateuser_role",false);
		return $result;		
	}
	
	public static function UserRole_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_UserRole_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /UserRole Functions/
	//*
	//****************************************************************************************************************************** 

	   
	//****************************************************************************************************************************** 
	//*								WebContent Functions
	
	public static function WebContent_readAll()
	{
		serveData("readweb_content");
	} 
		
	public static function _WebContent_readDetailById($id)
	{
		$result = dbFetchData("readweb_contentDetailById",array("web_content_id"=>$id),QUERY_FETCH_ONE);
		
		return $result;
	} 
    
	public static function WebContent_readDetailById($id)
	{
		$result= CrudServiceAdapter::_WebContent_readDetailById($id);
		echo(json_encode($result));		
	} 
    
	public static function WebContent_delete($id)
	{
		 serveData("deleteweb_content",array("web_content_id"=>$id),QUERY_UPDATE);
	} 
    
	public static function WebContent_save()
	{
		$params=getPostParams();
		$result= CrudServiceAdapter::_WebContent_save($params);
		echo(json_encode($result));		
	}
    
	public static function _WebContent_save($params)
	{
		if(!$params) { return array("invalid Parameters");}
		
		//set default value to empty attributes
		$params=CrudHelperApi::setEmptyAttributes($params,array("web_content_id","reference","category","content_type","content","archived"));

		$result= CrudHelperApi::addOrUpdateTable($params,"web_content","web_content_id","addweb_content","updateweb_content",true);
		return $result;		
	}
	
	public static function WebContent_importExcel()
	{
		$params=getPostParams();
		$entityList= CrudHelperApi::readEntityListExcel($params);
		foreach($entityList as $data)
		{
			CrudServiceAdapter::_WebContent_save($data);
		}
		echo(json_encode($entityList));		
	}
	
	//*								End of /WebContent Functions/
	//*
	//****************************************************************************************************************************** 

	   
	
}

CrudServiceAdapter::mapServiceRoute($sa);
$dbQueries = CrudServiceAdapter::registerQueries($dbQueries);

?>