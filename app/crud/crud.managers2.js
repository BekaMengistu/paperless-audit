(function(angular) {
    "use strict";
	
	angular.module( "app")
    .service ("CRUDManagers",["CrudDataManager","CRUDService",function(CrudDataManager,CRUDService)
	{
	return {
    	defaultCrudManager:function(){}
			,listDetailEditor:CrudDataManager.listDetailEditor
        
		,AppPermission:function(options) 
			{
				var createapp_permissionManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AppPermission						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"App Permission",subTitle:"Edit App Permission Detail",headerStyle:"dker",url:"app.crud.app_permissionEdit",id:"app_permission_id"}
						,listEditor:{title:"App Permission List",subTitle:"Manage App Permissions",headerStyle:"b-b",url:"app.crud.app_permission"}
						}
				
					var  app_permissionManager=CrudDataManager.create(defaultOptions)
					inherit(app_permissionManager,options)
					return app_permissionManager;
				}
				return createapp_permissionManager(options);
			}
        
		,AppRole:function(options) 
			{
				var createapp_roleManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AppRole						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"App Role",subTitle:"Edit App Role Detail",headerStyle:"dker",url:"app.crud.app_roleEdit",id:"app_role_id"}
						,listEditor:{title:"App Role List",subTitle:"Manage App Roles",headerStyle:"b-b",url:"app.crud.app_role"}
						}
				
					var  app_roleManager=CrudDataManager.create(defaultOptions)
					inherit(app_roleManager,options)
					return app_roleManager;
				}
				return createapp_roleManager(options);
			}
        
		,AppSetting:function(options) 
			{
				var createapp_settingManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AppSetting						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"App Setting",subTitle:"Edit App Setting Detail",headerStyle:"dker",url:"app.crud.app_settingEdit",id:"app_setting_id"}
						,listEditor:{title:"App Setting List",subTitle:"Manage App Settings",headerStyle:"b-b",url:"app.crud.app_setting"}
						}
				
					var  app_settingManager=CrudDataManager.create(defaultOptions)
					inherit(app_settingManager,options)
					return app_settingManager;
				}
				return createapp_settingManager(options);
			}
        
		,AuditAccountGrouping:function(options) 
			{
				var createaudit_account_groupingManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditAccountGrouping						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Account Grouping",subTitle:"Edit Audit Account Grouping Detail",headerStyle:"dker",url:"app.crud.audit_account_groupingEdit",id:"audit_account_grouping_id"}
						,listEditor:{title:"Audit Account Grouping List",subTitle:"Manage Audit Account Groupings",headerStyle:"b-b",url:"app.crud.audit_account_grouping"}
						}
				
					var  audit_account_groupingManager=CrudDataManager.create(defaultOptions)
					inherit(audit_account_groupingManager,options)
					return audit_account_groupingManager;
				}
				return createaudit_account_groupingManager(options);
			}
        
		,AuditAdjustment:function(options) 
			{
				var createaudit_adjustmentManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditAdjustment						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Adjustment",subTitle:"Edit Audit Adjustment Detail",headerStyle:"dker",url:"app.crud.audit_adjustmentEdit",id:"audit_adjustment_id"}
						,listEditor:{title:"Audit Adjustment List",subTitle:"Manage Audit Adjustments",headerStyle:"b-b",url:"app.crud.audit_adjustment"}
						}
				
					var  audit_adjustmentManager=CrudDataManager.create(defaultOptions)
					inherit(audit_adjustmentManager,options)
					return audit_adjustmentManager;
				}
				return createaudit_adjustmentManager(options);
			}
        
		,AuditClientTrialbalance:function(options) 
			{
				var createaudit_client_trialbalanceManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditClientTrialbalance						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Client Trialbalance",subTitle:"Edit Audit Client Trialbalance Detail",headerStyle:"dker",url:"app.crud.audit_client_trialbalanceEdit",id:"audit_client_trialbalance_id"}
						,listEditor:{title:"Audit Client Trialbalance List",subTitle:"Manage Audit Client Trialbalances",headerStyle:"b-b",url:"app.crud.audit_client_trialbalance"}
						}
				
					var  audit_client_trialbalanceManager=CrudDataManager.create(defaultOptions)
					inherit(audit_client_trialbalanceManager,options)
					return audit_client_trialbalanceManager;
				}
				return createaudit_client_trialbalanceManager(options);
			}
        
		,AuditCompanyType:function(options) 
			{
				var createaudit_company_typeManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditCompanyType						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Company Type",subTitle:"Edit Audit Company Type Detail",headerStyle:"dker",url:"app.crud.audit_company_typeEdit",id:"audit_company_type_id"}
						,listEditor:{title:"Audit Company Type List",subTitle:"Manage Audit Company Types",headerStyle:"b-b",url:"app.crud.audit_company_type"}
						}
				
					var  audit_company_typeManager=CrudDataManager.create(defaultOptions)
					inherit(audit_company_typeManager,options)
					return audit_company_typeManager;
				}
				return createaudit_company_typeManager(options);
			}
        
		,AuditEngagement:function(options) 
			{
				var createaudit_engagementManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditEngagement						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Engagement",subTitle:"Edit Audit Engagement Detail",headerStyle:"dker",url:"app.crud.audit_engagementEdit",id:"audit_engagement_id"}
						,listEditor:{title:"Audit Engagement List",subTitle:"Manage Audit Engagements",headerStyle:"b-b",url:"app.crud.audit_engagement"}
						}
				
					var  audit_engagementManager=CrudDataManager.create(defaultOptions)
					inherit(audit_engagementManager,options)
					return audit_engagementManager;
				}
				return createaudit_engagementManager(options);
			}
        
		,AuditFinding:function(options) 
			{
				var createaudit_findingManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditFinding						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Finding",subTitle:"Edit Audit Finding Detail",headerStyle:"dker",url:"app.crud.audit_findingEdit",id:"audit_finding_id"}
						,listEditor:{title:"Audit Finding List",subTitle:"Manage Audit Findings",headerStyle:"b-b",url:"app.crud.audit_finding"}
						}
				
					var  audit_findingManager=CrudDataManager.create(defaultOptions)
					inherit(audit_findingManager,options)
					return audit_findingManager;
				}
				return createaudit_findingManager(options);
			}
        
		,AuditManagementLetter:function(options) 
			{
				var createaudit_management_letterManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditManagementLetter						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Management Letter",subTitle:"Edit Audit Management Letter Detail",headerStyle:"dker",url:"app.crud.audit_management_letterEdit",id:"audit_management_letter_id"}
						,listEditor:{title:"Audit Management Letter List",subTitle:"Manage Audit Management Letters",headerStyle:"b-b",url:"app.crud.audit_management_letter"}
						}
				
					var  audit_management_letterManager=CrudDataManager.create(defaultOptions)
					inherit(audit_management_letterManager,options)
					return audit_management_letterManager;
				}
				return createaudit_management_letterManager(options);
			}
        
		,AuditProcedure:function(options) 
			{
				var createaudit_procedureManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditProcedure						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Procedure",subTitle:"Edit Audit Procedure Detail",headerStyle:"dker",url:"app.crud.audit_procedureEdit",id:"audit_procedure_id"}
						,listEditor:{title:"Audit Procedure List",subTitle:"Manage Audit Procedures",headerStyle:"b-b",url:"app.crud.audit_procedure"}
						}
				
					var  audit_procedureManager=CrudDataManager.create(defaultOptions)
					inherit(audit_procedureManager,options)
					return audit_procedureManager;
				}
				return createaudit_procedureManager(options);
			}
        
		,AuditTransaction:function(options) 
			{
				var createaudit_transactionManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.AuditTransaction						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Audit Transaction",subTitle:"Edit Audit Transaction Detail",headerStyle:"dker",url:"app.crud.audit_transactionEdit",id:"audit_transaction_id"}
						,listEditor:{title:"Audit Transaction List",subTitle:"Manage Audit Transactions",headerStyle:"b-b",url:"app.crud.audit_transaction"}
						}
				
					var  audit_transactionManager=CrudDataManager.create(defaultOptions)
					inherit(audit_transactionManager,options)
					return audit_transactionManager;
				}
				return createaudit_transactionManager(options);
			}
        
		,CompanyTypeKey:function(options) 
			{
				var createcompany_type_keyManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.CompanyTypeKey						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Company Type Key",subTitle:"Edit Company Type Key Detail",headerStyle:"dker",url:"app.crud.company_type_keyEdit",id:"company_type_key_id"}
						,listEditor:{title:"Company Type Key List",subTitle:"Manage Company Type Keys",headerStyle:"b-b",url:"app.crud.company_type_key"}
						}
				
					var  company_type_keyManager=CrudDataManager.create(defaultOptions)
					inherit(company_type_keyManager,options)
					return company_type_keyManager;
				}
				return createcompany_type_keyManager(options);
			}
        
		,Customer:function(options) 
			{
				var createcustomerManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.Customer						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Customer",subTitle:"Edit Customer Detail",headerStyle:"dker",url:"app.crud.customerEdit",id:"customer_id"}
						,listEditor:{title:"Customer List",subTitle:"Manage Customers",headerStyle:"b-b",url:"app.crud.customer"}
						}
				
					var  customerManager=CrudDataManager.create(defaultOptions)
					inherit(customerManager,options)
					return customerManager;
				}
				return createcustomerManager(options);
			}
        
		,DbTransaction:function(options) 
			{
				var createdb_transactionManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.DbTransaction						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Db Transaction",subTitle:"Edit Db Transaction Detail",headerStyle:"dker",url:"app.crud.db_transactionEdit",id:"db_transaction_id"}
						,listEditor:{title:"Db Transaction List",subTitle:"Manage Db Transactions",headerStyle:"b-b",url:"app.crud.db_transaction"}
						}
				
					var  db_transactionManager=CrudDataManager.create(defaultOptions)
					inherit(db_transactionManager,options)
					return db_transactionManager;
				}
				return createdb_transactionManager(options);
			}
        
		,Discussion:function(options) 
			{
				var creatediscussionManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.Discussion						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Discussion",subTitle:"Edit Discussion Detail",headerStyle:"dker",url:"app.crud.discussionEdit",id:"discussion_id"}
						,listEditor:{title:"Discussion List",subTitle:"Manage Discussions",headerStyle:"b-b",url:"app.crud.discussion"}
						}
				
					var  discussionManager=CrudDataManager.create(defaultOptions)
					inherit(discussionManager,options)
					return discussionManager;
				}
				return creatediscussionManager(options);
			}
        
		,DiscussionMessage:function(options) 
			{
				var creatediscussion_messageManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.DiscussionMessage						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Discussion Message",subTitle:"Edit Discussion Message Detail",headerStyle:"dker",url:"app.crud.discussion_messageEdit",id:"discussion_message_id"}
						,listEditor:{title:"Discussion Message List",subTitle:"Manage Discussion Messages",headerStyle:"b-b",url:"app.crud.discussion_message"}
						}
				
					var  discussion_messageManager=CrudDataManager.create(defaultOptions)
					inherit(discussion_messageManager,options)
					return discussion_messageManager;
				}
				return creatediscussion_messageManager(options);
			}
        
		,Document:function(options) 
			{
				var createdocumentManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.Document						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Document",subTitle:"Edit Document Detail",headerStyle:"dker",url:"app.crud.documentEdit",id:"document_id"}
						,listEditor:{title:"Document List",subTitle:"Manage Documents",headerStyle:"b-b",url:"app.crud.document"}
						}
				
					var  documentManager=CrudDataManager.create(defaultOptions)
					inherit(documentManager,options)
					return documentManager;
				}
				return createdocumentManager(options);
			}
        
		,Event:function(options) 
			{
				var createeventManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.Event						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Event",subTitle:"Edit Event Detail",headerStyle:"dker",url:"app.crud.eventEdit",id:"event_id"}
						,listEditor:{title:"Event List",subTitle:"Manage Events",headerStyle:"b-b",url:"app.crud.event"}
						}
				
					var  eventManager=CrudDataManager.create(defaultOptions)
					inherit(eventManager,options)
					return eventManager;
				}
				return createeventManager(options);
			}
        
		,FormFieldTemplate:function(options) 
			{
				var createform_field_templateManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.FormFieldTemplate						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Form Field Template",subTitle:"Edit Form Field Template Detail",headerStyle:"dker",url:"app.crud.form_field_templateEdit",id:"form_field_template_id"}
						,listEditor:{title:"Form Field Template List",subTitle:"Manage Form Field Templates",headerStyle:"b-b",url:"app.crud.form_field_template"}
						}
				
					var  form_field_templateManager=CrudDataManager.create(defaultOptions)
					inherit(form_field_templateManager,options)
					return form_field_templateManager;
				}
				return createform_field_templateManager(options);
			}
        
		,FormFieldValue:function(options) 
			{
				var createform_field_valueManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.FormFieldValue						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Form Field Value",subTitle:"Edit Form Field Value Detail",headerStyle:"dker",url:"app.crud.form_field_valueEdit",id:"form_field_value_id"}
						,listEditor:{title:"Form Field Value List",subTitle:"Manage Form Field Values",headerStyle:"b-b",url:"app.crud.form_field_value"}
						}
				
					var  form_field_valueManager=CrudDataManager.create(defaultOptions)
					inherit(form_field_valueManager,options)
					return form_field_valueManager;
				}
				return createform_field_valueManager(options);
			}
        
		,FormTemplate:function(options) 
			{
				var createform_templateManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.FormTemplate						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Form Template",subTitle:"Edit Form Template Detail",headerStyle:"dker",url:"app.crud.form_templateEdit",id:"form_template_id"}
						,listEditor:{title:"Form Template List",subTitle:"Manage Form Templates",headerStyle:"b-b",url:"app.crud.form_template"}
						}
				
					var  form_templateManager=CrudDataManager.create(defaultOptions)
					inherit(form_templateManager,options)
					return form_templateManager;
				}
				return createform_templateManager(options);
			}
        
		,FormValue:function(options) 
			{
				var createform_valueManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.FormValue						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Form Value",subTitle:"Edit Form Value Detail",headerStyle:"dker",url:"app.crud.form_valueEdit",id:"form_value_id"}
						,listEditor:{title:"Form Value List",subTitle:"Manage Form Values",headerStyle:"b-b",url:"app.crud.form_value"}
						}
				
					var  form_valueManager=CrudDataManager.create(defaultOptions)
					inherit(form_valueManager,options)
					return form_valueManager;
				}
				return createform_valueManager(options);
			}
        
		,Lookup:function(options) 
			{
				var createlookupManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.Lookup						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Lookup",subTitle:"Edit Lookup Detail",headerStyle:"dker",url:"app.crud.lookupEdit",id:"lookup_id"}
						,listEditor:{title:"Lookup List",subTitle:"Manage Lookups",headerStyle:"b-b",url:"app.crud.lookup"}
						}
				
					var  lookupManager=CrudDataManager.create(defaultOptions)
					inherit(lookupManager,options)
					return lookupManager;
				}
				return createlookupManager(options);
			}
        
		,ReplicationAllowedHosts:function(options) 
			{
				var createreplication_allowed_hostsManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.ReplicationAllowedHosts						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Replication Allowed Hosts",subTitle:"Edit Replication Allowed Hosts Detail",headerStyle:"dker",url:"app.crud.replication_allowed_hostsEdit",id:"replication_allowed_hosts_id"}
						,listEditor:{title:"Replication Allowed Hosts List",subTitle:"Manage Replication Allowed Hostss",headerStyle:"b-b",url:"app.crud.replication_allowed_hosts"}
						}
				
					var  replication_allowed_hostsManager=CrudDataManager.create(defaultOptions)
					inherit(replication_allowed_hostsManager,options)
					return replication_allowed_hostsManager;
				}
				return createreplication_allowed_hostsManager(options);
			}
        
		,ReplicationServer:function(options) 
			{
				var createreplication_serverManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.ReplicationServer						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Replication Server",subTitle:"Edit Replication Server Detail",headerStyle:"dker",url:"app.crud.replication_serverEdit",id:"replication_server_id"}
						,listEditor:{title:"Replication Server List",subTitle:"Manage Replication Servers",headerStyle:"b-b",url:"app.crud.replication_server"}
						}
				
					var  replication_serverManager=CrudDataManager.create(defaultOptions)
					inherit(replication_serverManager,options)
					return replication_serverManager;
				}
				return createreplication_serverManager(options);
			}
        
		,RolePermission:function(options) 
			{
				var createrole_permissionManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.RolePermission						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Role Permission",subTitle:"Edit Role Permission Detail",headerStyle:"dker",url:"app.crud.role_permissionEdit",id:"role_permission_id"}
						,listEditor:{title:"Role Permission List",subTitle:"Manage Role Permissions",headerStyle:"b-b",url:"app.crud.role_permission"}
						}
				
					var  role_permissionManager=CrudDataManager.create(defaultOptions)
					inherit(role_permissionManager,options)
					return role_permissionManager;
				}
				return createrole_permissionManager(options);
			}
        
		,SigninLog:function(options) 
			{
				var createsignin_logManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.SigninLog						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Signin Log",subTitle:"Edit Signin Log Detail",headerStyle:"dker",url:"app.crud.signin_logEdit",id:"signin_log_id"}
						,listEditor:{title:"Signin Log List",subTitle:"Manage Signin Logs",headerStyle:"b-b",url:"app.crud.signin_log"}
						}
				
					var  signin_logManager=CrudDataManager.create(defaultOptions)
					inherit(signin_logManager,options)
					return signin_logManager;
				}
				return createsignin_logManager(options);
			}
        
		,Task:function(options) 
			{
				var createtaskManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.Task						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Task",subTitle:"Edit Task Detail",headerStyle:"dker",url:"app.crud.taskEdit",id:"task_id"}
						,listEditor:{title:"Task List",subTitle:"Manage Tasks",headerStyle:"b-b",url:"app.crud.task"}
						}
				
					var  taskManager=CrudDataManager.create(defaultOptions)
					inherit(taskManager,options)
					return taskManager;
				}
				return createtaskManager(options);
			}
        
		,User:function(options) 
			{
				var createuserManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.User						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"User",subTitle:"Edit User Detail",headerStyle:"dker",url:"app.crud.userEdit",id:"user_id"}
						,listEditor:{title:"User List",subTitle:"Manage Users",headerStyle:"b-b",url:"app.crud.user"}
						}
				
					var  userManager=CrudDataManager.create(defaultOptions)
					inherit(userManager,options)
					return userManager;
				}
				return createuserManager(options);
			}
        
		,UserRole:function(options) 
			{
				var createuser_roleManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.UserRole						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"User Role",subTitle:"Edit User Role Detail",headerStyle:"dker",url:"app.crud.user_roleEdit",id:"user_role_id"}
						,listEditor:{title:"User Role List",subTitle:"Manage User Roles",headerStyle:"b-b",url:"app.crud.user_role"}
						}
				
					var  user_roleManager=CrudDataManager.create(defaultOptions)
					inherit(user_roleManager,options)
					return user_roleManager;
				}
				return createuser_roleManager(options);
			}
        
		,WebContent:function(options) 
			{
				var createweb_contentManager=function(options)
				{
					var defaultOptions={
						crudService:CRUDService.WebContent						,readNew:CRUDService.readLocalValue
						
						,detailEditor:{title:"Web Content",subTitle:"Edit Web Content Detail",headerStyle:"dker",url:"app.crud.web_contentEdit",id:"web_content_id"}
						,listEditor:{title:"Web Content List",subTitle:"Manage Web Contents",headerStyle:"b-b",url:"app.crud.web_content"}
						}
				
					var  web_contentManager=CrudDataManager.create(defaultOptions)
					inherit(web_contentManager,options)
					return web_contentManager;
				}
				return createweb_contentManager(options);
			}
            
			
	}
		
	}
])
	
             
 }(window.angular));
