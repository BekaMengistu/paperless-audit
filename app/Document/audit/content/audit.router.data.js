var bmAuditDependencies={
        "html5.sortable":["libs/html5-sortable-angularjs-master/lib/html5-sortable.js"]
			,"bm.audit":[
						'app/audit/content/AuditController.js'
						,'app/audit/content/Audit.services.js' 
						,'app/crud/AuditClientTrialbalance/content/AuditClientTrialbalance.services.js'
						,'app/crud/AuditEngagement/content/AuditEngagement.services.js'
						,'app/crud/AuditAccountGrouping/content/AuditAccountGrouping.services.js' 
						,'app/crud/AuditFinding/content/AuditFinding.services.js' 
						,'app/crud/AuditTransaction/content/AuditTransaction.services.js' 
						,'app/crud/AuditAdjustment/content/AuditAdjustment.services.js' 
						,'app/crud/AuditManagementLetter/content/AuditManagementLetter.services.js' 
						//,"app/FormBuilder/content/formbuilder.services.js"
						,"app/FormBuilder/content/form.services.js"
						]
					};
					
addDependencyToApp(bmAuditDependencies);


auditRoutes={
			'app.audit':
				{
					url:'/audit'
					,templates:"<div>Welcome to the app. go to list or do configuration<div ui-view></div></div>"
					,template:"<div ui-view></div>"
					,controller: 'AuditAppController'
					,resolve:['ui.select',"bm.audit","bm.document"]
            		,data : { title: 'Paperless Audit' }
                	//,templateUrl: 'app/audit/content/audit.list.html'
				}
			,'app.audit.setup':
				{
					url:'/setup'
					//,template:"<div class='padding'>Audit Setup<br/><div ui-view></div></div>"
					,data : { title: 'Audit Setup'}
					//,controller: 'AuditDetailController'
					,resolve:['ui.select',"bm.audit"]
                	,templateUrl: 'app/audit/content/setup/setup.main.html'
				}
			
			,'app.audit.setup.account_grouping':
				{
					url:'/grouping'
					//,template:"<div class='padding'>Audit Grouping Map Setup<br/></div>"
					,data : { title: 'Audit Setup : Grouping'}
					,controller: 'AuditSetupGroupingController'
					,resolve:['ui.select',"bm.audit"]
                	,templateUrl: 'app/audit/content/setup/setup.grouping.html'
				}
			,'app.audit.setup.grouping':
				{
					url:'/valid_keys'
					//,template:"<div class='padding'>Audit Grouping Map Setup<br/></div>"
					,data : { title: 'Audit Setup :',subTitle:'Valid Keys'}
					,controller: 'AuditSetupValidGroupingController'
					,resolve:['ui.select',"bm.audit"]
                	,templateUrl: 'app/audit/content/setup/setup.valid.grouping.html'
				}
			,'app.audit.setup.setting':
				{
					url:'/setting'
					//,template:"<div class='padding'>Audit Grouping Map Setup<br/></div>"
					,data : { title: 'Audit Setup : Other Settings'}
					,controller: 'AuditAppSettingController'
					,resolve:["bm.audit"]
                	,templateUrl: 'app/audit/content/setup/audit.app.setting.html'
				}
			,'app.audit.list':
				{
					url:'/list',templates:"<div>Audit Info<div ui-view></div></div>"
					,data : { title: 'Audit:Engagements'}
					,controller: 'AuditListController'
					,resolve:['ui.select',"bm.audit","ui.bootstrap","mgcrea.ngStrap"]
            		,data : { title: 'Audit Engagement' }
                	,templateUrl: 'app/audit/content/audit.list.html'
				}	
			,'app.audit.detail':
				{
					url:'/{audit_engagement_id}'
					//,template:"<div class='padding'>Audit Detail<br/>Single audit has been selected. edit info or do mapping<div ui-view></div></div>"
					,data : { title: 'Audit:Detail'}
					,controller: 'AuditDetailController'
					,resolve:['ui.select',"bm.audit","ui.bootstrap","mgcrea.ngStrap"]
                	,templateUrl: 'app/audit/content/audit.detail2.html'
				}
			,'app.audit.detail.edit': 
            	{
					url: '/info'
            		,controllers: 'AuditController'
					,resolve:['ui.select',"bm.audit","ui.bootstrap","mgcrea.ngStrap"]
					,data : { title: 'Engagement Info' }
					,templates: "<div class='padding'>Audit Engagement Edit. Basic info or Custome Form data<div ui-view></div></div>"
					,templateUrl: 'app/audit/content/audit.detail.edit.html'
				}
			,'app.audit.detail.edit.basic': 
            	{
					url: '/basic'
            		//,controllers: 'BaseAuditController'
					,resolve:['ui.select',"bm.audit","ui.bootstrap","mgcrea.ngStrap"]
					,data : { title: 'Audit Info' }
					//,template: "Info Edit <div ui-view></div>"
					,templateUrl: 'app/audit/content/crud/AuditEngagementEdit.php'
				}	
			,'app.audit.detail.edit.form': 
            	{
					url: '/{form_section_id}'
            		,controller: 'AuditFormController'
					,resolve:['ui.select',"bm.audit","ui.bootstrap","mgcrea.ngStrap"]
					,data : { title: 'Audit Info' }
					//,template: "Info Edit <div ui-view></div>"
					,templateUrl: 'app/audit/content/audit.form.data.html'
				}
			,'app.audit.detail.mapping': 
            	{
					url: '/mapping'
            		,controller: 'AuditTBMappingController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit TB Mapping' }
					,templateUrl: 'app/audit/content/tb.mapping.html'
				}
			,'app.audit.detail.adjustments': 
            	{
					url: '/adjustments'
            		,controller: 'AuditAdjustmentController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Adjustment' }
					,templateUrl: 'app/audit/content/adjustment/AuditAdjustmentList.html'
				}	
			,'app.audit.detail.summary': 
            	{
					url: '/summary'
            		,controller: 'AuditSummaryController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Summary' }
					,templateUrl: 'app/audit/content/audit.summary.html'
				}	
			,'app.audit.detail.substantive': 
            	{
					url: '/substantive'
					,controller: 'SubstantiveAuditController'
					,resolve:['ui.select','vr.directives.slider',"bm.audit"]
					,data : { title: 'Substantive Audit' }
					,templateUrl: 'app/audit/content/substantive.audit/audit.substantive.html'
				}	
            ,'app.audit.detail.qualification': 
            	{
					url: '/qualification'
					,controller: 'SubstantiveAuditController'
					,resolve:['ui.select',"html5.sortable","bm.audit"]
					,data : { title: 'Qualification Points' }
					,templateUrl: 'app/audit/content/blocks/qualification_point_list.html'
				}	
			,'app.audit.detail.files': 
            	{
					url: '/files'
					,controller: 'AuditDocumentsController'
					,resolve:["bm.audit"]
					,data : { title: 'Audit Documents' }
					,templateUrl: 'app/audit/content/audit.files.html'
				}	
			,'app.audit.detail.input_files': 
            	{
					url: '/input_files'
					,controller: 'AuditInputDocumentsController'
					,resolve:["bm.audit"]
					,data : { title: 'Audit Input Documents' }
					,templateUrl: 'app/audit/content/audit.files.html'
				}	
			,'app.audit.detail.discussion': 
            	{
					url: '/discussion'
					,controller: 'AuditMessagingController'
					,resolve:["bm.audit","bm.messaging","bm.crud.user","summernote"]
					,data : { title: 'Discussions' }
					,templateUrl: 'app/audit/content/audit.discussion.html'
				}	
			,'app.audit.detail.printables': 
            	{
					url: '/printables'
					,controller: 'AuditPrintablesController'
					,resolve:["bm.audit","html5.sortable"]
					,data : { title: 'Printable Documents' }
					,templateUrl: 'app/audit/content/audit.printables.html'
				}
			,'app.audit.detail.verification': 
            	{
					url: '/verification'
					,controller: 'AuditVerificationController'
					,resolve:["bm.audit"]
					,data : { title: 'Audit Verification ' }
					,templateUrl: 'app/audit/content/audit.verification.html'
				}	
			/*		
			,'app.audit':
				{
					url:'/audit',templates:"<div>Audit Info<div ui-view></div></div>"
					,data : { title: 'Audit:Engagements'}
					,controller: 'AuditListController'
					,resolve:['ui.select',"bm.audit"]
            		,data : { title: 'Audit Engagement' }
                	,templateUrl: 'app/audit/content/audit.list.html'
				}
			,'app.auditDetail': 
            	{
					url: '/audit/{audit_engagement_id}'
            		,controller: 'BaseAuditController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Work' }
	                ,templateUrl: 'app/audit/content/audit.detail2.html'
				}	
			,'app.auditDetail2': 
            	{
					url: '/audit/{audit_engagement_id}'
            		,controller: 'AuditController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Engagement' }
	                ,templateUrl: 'app/audit/content/audit.detail.html'
				}
			,'app.auditDetail.auditInfo': 
            	{
					url: '/info'
            		,controllers: 'BaseAuditController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Info' }
					//,template: "Info Edit <div ui-view></div>"
					,templateUrl: 'app/audit/content/crud/AuditEngagementEdit.php'
				}
			,'app.auditDetail.formData': 
            	{
					url: '/form'
            		,controller: 'AuditFormController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Form Builder Data' }
					,templateUrl: 'app/audit/content/audit.form.data.html'
				}
			,'app.auditDetail.formDetail': 
            	{
					url: '/form/{form_section_id}'
            		,controller: 'AuditFormController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Form Builder Data' }
					,templateUrl: 'app/audit/content/audit.form.data.html'
				}
			,'app.auditDetail.mapping': 
            	{
					url: '/mapping'
            		,controller: 'AuditTBMappingController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Engagement: Mapping' }
					,templateUrl: 'app/audit/content/tb.mapping/AuditClientTrialbalanceList.php'
				}
			,'app.auditDetail.adjustments': 
            	{
					url: '/adjustments'
            		,controllers: 'AuditTBMappingController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Engagement: Adjustment' }
					,templateUrl: 'app/audit/content/adjustment/AuditAdjustmentList.html'
				}
			,'app.auditDetail.substantive': 
            	{
					url: '/substantive'
					,controller: 'SubstantiveAuditController'
					,resolve:['ui.select',"bm.audit"]
					,data : { title: 'Audit Engagement: Substantive Audit' }
					,templateUrl: 'app/audit/content/substantive.audit/mainpage.html'
				}	
				*/
			
			};			
   addRoutesToApp(auditRoutes);