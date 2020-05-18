(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CRUDService", function( $q,$http )
	{
		return {
        	Lookup:{}
            ,readLocalValue: function(params){return simulateService($q, params);}
            ,getUniqueId:function(){return excuteService($q,$http,"api/AppServices/getUniqueId/", {},"get");}

		,AppPermission:{
			readAll :function(){return excuteService($q,$http,"api/AppPermissionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AppPermissionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AppPermissionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AppPermissionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AppRole:{
			readAll :function(){return excuteService($q,$http,"api/AppRoleService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AppRoleService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AppRoleService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AppRoleService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AppSetting:{
			readAll :function(){return excuteService($q,$http,"api/AppSettingService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AppSettingService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AppSettingService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AppSettingService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditAccountGrouping:{
			readAll :function(){return excuteService($q,$http,"api/AuditAccountGroupingService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditAccountGroupingService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditAccountGroupingService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditAccountGroupingService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditAdjustment:{
			readAll :function(){return excuteService($q,$http,"api/AuditAdjustmentService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditAdjustmentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditAdjustmentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditAdjustmentService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditClientTrialbalance:{
			readAll :function(){return excuteService($q,$http,"api/AuditClientTrialbalanceService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditClientTrialbalanceService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditClientTrialbalanceService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditClientTrialbalanceService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditCompanyType:{
			readAll :function(){return excuteService($q,$http,"api/AuditCompanyTypeService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditCompanyTypeService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditCompanyTypeService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditCompanyTypeService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditEngagement:{
			readAll :function(){return excuteService($q,$http,"api/AuditEngagementService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditEngagementService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditEngagementService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditEngagementService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditFinding:{
			readAll :function(){return excuteService($q,$http,"api/AuditFindingService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditFindingService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditFindingService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditFindingService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditManagementLetter:{
			readAll :function(){return excuteService($q,$http,"api/AuditManagementLetterService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditManagementLetterService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditManagementLetterService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditManagementLetterService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditProcedure:{
			readAll :function(){return excuteService($q,$http,"api/AuditProcedureService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditProcedureService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditProcedureService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditProcedureService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,AuditTransaction:{
			readAll :function(){return excuteService($q,$http,"api/AuditTransactionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditTransactionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditTransactionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditTransactionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,CompanyTypeKey:{
			readAll :function(){return excuteService($q,$http,"api/CompanyTypeKeyService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/CompanyTypeKeyService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/CompanyTypeKeyService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/CompanyTypeKeyService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,Customer:{
			readAll :function(){return excuteService($q,$http,"api/CustomerService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/CustomerService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/CustomerService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/CustomerService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,DbTransaction:{
			readAll :function(){return excuteService($q,$http,"api/DbTransactionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DbTransactionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DbTransactionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DbTransactionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,Discussion:{
			readAll :function(){return excuteService($q,$http,"api/DiscussionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DiscussionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DiscussionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DiscussionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,DiscussionMessage:{
			readAll :function(){return excuteService($q,$http,"api/DiscussionMessageService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DiscussionMessageService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DiscussionMessageService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DiscussionMessageService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,Document:{
			readAll :function(){return excuteService($q,$http,"api/DocumentService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DocumentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DocumentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DocumentService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,Event:{
			readAll :function(){return excuteService($q,$http,"api/EventService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/EventService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/EventService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/EventService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,FormFieldTemplate:{
			readAll :function(){return excuteService($q,$http,"api/FormFieldTemplateService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormFieldTemplateService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormFieldTemplateService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormFieldTemplateService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,FormFieldValue:{
			readAll :function(){return excuteService($q,$http,"api/FormFieldValueService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormFieldValueService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormFieldValueService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormFieldValueService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,FormTemplate:{
			readAll :function(){return excuteService($q,$http,"api/FormTemplateService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormTemplateService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormTemplateService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormTemplateService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,FormValue:{
			readAll :function(){return excuteService($q,$http,"api/FormValueService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/FormValueService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/FormValueService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/FormValueService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,Lookup:{
			readAll :function(){return excuteService($q,$http,"api/LookupService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/LookupService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/LookupService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/LookupService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,ReplicationAllowedHosts:{
			readAll :function(){return excuteService($q,$http,"api/ReplicationAllowedHostsService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/ReplicationAllowedHostsService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/ReplicationAllowedHostsService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/ReplicationAllowedHostsService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,ReplicationServer:{
			readAll :function(){return excuteService($q,$http,"api/ReplicationServerService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/ReplicationServerService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/ReplicationServerService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/ReplicationServerService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,RolePermission:{
			readAll :function(){return excuteService($q,$http,"api/RolePermissionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/RolePermissionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/RolePermissionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/RolePermissionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,Task:{
			readAll :function(){return excuteService($q,$http,"api/TaskService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/TaskService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/TaskService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/TaskService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,User:{
			readAll :function(){return excuteService($q,$http,"api/UserService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/UserService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/UserService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/UserService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,UserRole:{
			readAll :function(){return excuteService($q,$http,"api/UserRoleService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/UserRoleService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/UserRoleService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/UserRoleService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
        
		,WebContent:{
			readAll :function(){return excuteService($q,$http,"api/WebContentService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/WebContentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/WebContentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/WebContentService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			}
		
		};
	})	
	
             
 }(window.angular));
