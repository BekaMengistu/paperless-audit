(function() {
    'use strict';
    angular
        .module('app')
		
		.controller("AuditQualificationController", AuditQualificationController)

        .controller("AuditSummaryController",AuditSummaryController)
		.controller("AuditExtraSubstantiveDataController",AuditExtraSubstantiveDataController)
		
		.controller("AuditAppController",AuditAppController)
		.controller("AuditDetailController",AuditDetailController)
        .controller('AuditListController', AuditListController)
		.controller("AuditAdjustmentController",AuditAdjustmentController)
		//.controller('AuditController', AuditController)
		.controller('AuditTBMappingController', AuditTBMappingController)
		.controller('SubstantiveAuditController', SubstantiveAuditController)
		.controller('AuditFormController', AuditFormController)
		
		.controller('AuditSetupGroupingController', AuditSetupGroupingController)
		
		.controller('AuditSetupValidGroupingController', AuditSetupValidGroupingController)
		
		.controller('AuditAppSettingController', AuditAppSettingController)
		
		.controller('AuditDocumentsController', AuditDocumentsController)
		
		.controller('AuditSubstantiveDocumentsController', AuditSubstantiveDocumentsController)
		
		.controller('AuditInputDocumentsController', AuditInputDocumentsController)
		
		.controller('AuditVerificationController', AuditVerificationController)
		
		.controller('AuditMessagingController', AuditMessagingController)
		
		
		.controller('AuditPrintablesController', AuditPrintablesController)
		
		.controller('AuditFSController', AuditFSController)
		
        AuditQualificationController.$inject = ["$scope", "$http", "$filter" , "$stateParams" , "$state" , "AuditManagementLetterService" , "CoreLookupService" , "AuditService"];
    
		AuditFSController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","$timeout","$locale","CoreAppSettingService","CoreLookupService","CoreLookupManager","AuditService"]
		

		AuditPrintablesController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","$timeout","CoreAppSettingService","CoreLookupService","CoreLookupManager","AuditService"]
		
		AuditMessagingController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","CoreAppSettingService","CoreLookupService","CoreLookupManager","AuditService"]
		
		AuditAppController.$inject = ["$scope", "$http", "$filter","$stateParams","$state",'$locale',"$window","CoreAppSettingService","CoreLookupService","CoreLookupManager","AuditService","DataImportExportService"]

		AuditAppSettingController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","CoreAppSettingService","CoreLookupService","CoreLookupManager","AuditService"]
	
		AuditVerificationController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","CoreAppSettingService","CoreLookupService","CoreLookupManager","AuditService"]
	
		AuditDocumentsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout'
				,"AuditService","AuditEngagementService","DigitalDocumentService","DocumentManager",'FileUploader',"AppService"];

		AuditSubstantiveDocumentsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout',"AuditEngagementService","DigitalDocumentService","DocumentManager",'FileUploader'];

		AuditInputDocumentsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout',"AuditService","AuditEngagementService","DigitalDocumentService","DocumentManager",'FileUploader',"DataImportExportService"];

		AuditDetailController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","$timeout","$window","$localStorage"
				,"AuditManager"
				,"AuditService"
				//,"FormBuilderService"
				,"CustomFormManager"
				,"AuditEngagementService"
				,"DataImportExportService"
				,"AuditClientTrialbalanceService"]
		
		AuditFormController.$inject = ["$scope", "$http", "$filter","$stateParams","$state"]
			
 		AuditListController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$window'
			,"AuditEngagementService","AuditEngagementManager"
			,"AuditClientTrialbalanceService","AuditClientTrialbalanceManager"
			,"DataImportExportService","DataImportManager","AuditService","AuditManager","CoreLookupService","CoreLookupManager"];
		
		AuditAdjustmentController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout','AuditService','AuditAdjustmentService']	

		AuditTBMappingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout'
			,"AuditEngagementService","AuditEngagementManager"
			,"AuditClientTrialbalanceService","AuditClientTrialbalanceManager"
			,"DataImportExportService","DataImportManager","AuditService","AuditManager"];
		
		SubstantiveAuditController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout',"$localStorage"
			,"AuditClientTrialbalanceService"
			,"AuditService"
			,"AuditFindingService"
			,"AuditManagementLetterService"
			,"AuditTransactionManager"
			,"AuditAdjustmentService"
			];
		
		AuditSetupGroupingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout',"$localStorage"
			,"AuditService"]
			
		AuditSetupValidGroupingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout'
			,"AuditService"]
		AuditExtraSubstantiveDataController.$inject = ['$scope', '$filter','$timeout']
		
		AuditSummaryController.$inject = ['$scope', '$filter','$timeout',"CRUDManagers"]
		
		
	function AuditSummaryController($scope, $filter,$timeout,CRUDManagers)
	{
			$scope.summaryItems={
				qualification_point:{label:"Qualification Points",file:"audit.qualification.point.html",expanded:false
                                     ,manager:"AuditManagementLetter",editorTemplate:"summary.edit.qualification.html"}
				
				,disclosure_note:{label:"Disclosure Notes",file:"audit.disclosure.notes.html"
                                 ,manager:"AuditManagementLetter",editorTemplate:"summary.edit.disclosure_note.html"} 
				
				,management_letter:{label:"Management Letters",file:"audit.management.letter.html"
                                   ,manager:"AuditManagementLetter",editorTemplate:"summary.edit.management_letter.html"}
				
				,audit_finding:{label:"Substantive Audit Works",file:"audit.finding.lits.html",expanded:true
                                ,manager:"AuditFinding",editorTemplate:"summary.edit.audit_finding.html"}
				
				,applied_procedures:{label:"Applied Audit Procedures",file:"audit.applied.procedures.html" }
			
				,grouped_tb:{label:"Grouped Trial Balance",file:"groupedTB.html"}
			
				,adjustments:{label:"Adjustments",file:"AuditAdjustmentList.html"}

				,client_tb:{label:"Client Trial Balance",file:"client.tb.summary.html"}

			};
		$scope.initializeSummaryTemplates=function()
		{
			for(var i in $scope.summaryItems)
			{
				var s=$scope.summaryItems[i];
                s.summaryType=i;
				s.templateUrl="app/audit/content/summary/" + s.file;
				//s.expanded=true;
			}
		}
        $scope.summaryEditor={};
        $scope.summaryEditor.editItem=function(type,item)
        {
            $scope.summaryEditor.editorInfo=$scope.summaryItems[type];
            $scope.summaryEditor.type=type;
            
            var itemClone={};
            $scope.summaryEditor.item=inherit(itemClone,item);
            
            $("#auditSummaryEdit").modal();
            if($scope.summaryEditor.editorInfo)
            {
                 var manager=CRUDManagers[$scope.summaryEditor.editorInfo.manager]();
               $scope.summaryEditor.manager=  manager;
            }
            console.log("summaryEditor.editItem",$scope.summaryEditor.manager)
        }
        $scope.summaryEditor.save=function()
        {
            $scope.summaryEditor.manager.saveItem($scope.summaryEditor.item)
            .then(function(){$scope.loadAllData();
                            $("#auditSummaryEdit").modal("hide");
                            })
        }
		$scope.initializeSummaryTemplates();
	}
			
	function AuditExtraSubstantiveDataController($scope, $filter,$timeout)
	{
		$scope.onAuditExtraSubstantiveDataControllerLoad=function()
		{
			console.log("onAuditExtraSubstantiveDataControllerLoad",$scope.selectedFindingData.auditFinding.extra_data);
		}
		$scope.extraSubstativeDataManager={};
		
		$scope.extraSubstativeDataManager.doCalculation=function()
		{
			console.log("extraSubstativeDataManager.doCalculation",$scope.selectedFindingData.auditFinding);
		}
		$scope.extraSubstativeDataManager.income_summary={};
		$scope.extraSubstativeDataManager.income_summary.doCalculation=function()
		{
			
		}
		$scope.onAuditExtraSubstantiveDataControllerLoad();
	}
	
	function AuditAppController($scope, $http, $filter,$stateParams,$state,$locale,$window,CoreAppSettingService,CoreLookupService,CoreLookupManager,AuditService,DataImportExportService)
	{
		$scope.autocomplete={
				justifications:function(value){return CoreLookupService.readAutocompleteValues("audit_adjustment","justification",value)}
			}
		$scope.exportListToExcel=function(data,fieldsList,sheetName)
			 {
				 var sheetData=[fieldsList];
				 
				 for(var i in data)
				 {
					 
					 var item=data[i];
					 var itemData=[];
					 for(var f in fieldsList)
					 {
						 var fld=fieldsList[f];
						 itemData.push(item[fld]);
					 }
					 sheetData.push(itemData);
				 }
				 
				 var sheets={sheet1:{name:sheetName,startRow:1,data:sheetData}};
				 var param={outputFile:sheetName+".xlsx",sheets:sheets};
			
					DataImportExportService.export("Excel",param)
					.then(function(sr){$scope.exportInfo=sr; $window.location.href=sr.filePath;});
			 }
			 
		$locale.NUMBER_FORMATS.PATTERNS[0].negPre="(";
				$locale.NUMBER_FORMATS.PATTERNS[1].negPre="(";
				$locale.NUMBER_FORMATS.PATTERNS[0].negSuf=")";
				$locale.NUMBER_FORMATS.PATTERNS[1].negSuf=")";
				
		console.log("AuditAppController");
		$scope.lookups=CoreLookupManager.lookups;
		
		$scope.auditStatusLookup=[{value:"1",label:"Started"}
								,{value:"3",label:"Info Submitted"},{value:"4",label:"Info Verified"}
								,{value:"5",label:"Mapping Submitted"},{value:"6",label:"Mapping Verified"}
								,{value:"7",label:"Substantive Submitted"},{value:"8",label:"Substantive Verified"}
								,{value:"9",label:"Revision and Reporting"},{value:"10",label:"Draft Report Issued"}
								,{value:"11",label:"Final Report Issued"}
								,{value:"12",label:"Suspended"}
								,{value:"13",label:"Prospective"},{value:"14",label:"Under Negotiation"}
								]
		$scope.auditOpinionLookup=[{value:"1-clean",label:"Clean"},{value:"2-qualified",label:"Qualified"},{value:"3-disclaimer",label:"Disclaimer"}
									,{value:"4-adverse",label:"Adverse"}]
		
		$scope.month_names=["JULY / Hamle","AUGUST / Nehassie","SEPTEMBER / Meskerem","OCTOBER / Tikimt","NOVEMBER / Hidar","DECEMBER / Tahsas","JANUARY / Tirr"
		,"FEBRUARY / Yekatit","MARCH / Megabit","APRIL / Miazia","MAY / Ginbot","JUNE / Sene"]
		 
		$scope.extraSubstantiveData={
				bank_statement:{
						name:"bank_statement",label:"Bank Statement"
						,template:"extra_substantive/bank_statement/input.html"
						,viewTemplate:"extra_substantive/bank_statement/view.html"
						}
				,income_summary:{
						name:"income_summary",label:"Income Summary"
						,template:"extra_substantive/income_summary/input.html"
						,viewTemplate:"extra_substantive/income_summary/view.html"
						}
				,balance_comparison:{
					name:"balance_comparison",label:"Balance Comparison"
						,template:"extra_substantive/comparison/input.html"
						,viewTemplate:"extra_substantive/comparison/view.html"
					}
				};
				/*
		$scope.accountsWithExtraData={
				cash_at_bank:	{label:"Cash at Bank"
							,comparative_figure:"st_balance"
							,fields:{bank:{label:"Bank",name:"bank"},st_balance:{label:"Stmt. Bal.",name:"st_balance"}}
						}		
				,bank_overdraft:{label:"Bank Overdraft"
							,comparative_figure:"st_balance"
							,fields:{bank:{label:"Bank",name:"bank"},st_balance:{label:"Stmt. Bal.",name:"st_balance"}}
						}	
				,bank_loan:{label:"Bank Loans"
							,comparative_figure:"st_balance"
							,fields:{bank:{label:"Bank",name:"bank"},st_balance:{label:"Stmt. Bal.",name:"st_balance"}}
						}
				,bank_loan_short:{label:"Bank Loans : Short Term"
							,comparative_figure:"st_balance"
							,fields:{bank:{label:"Bank",name:"bank"},st_balance:{label:"Stmt. Bal.",name:"st_balance"}}
						}
				};*/
		
		$scope.companyTypesLookup=[];
		
		$scope.auditAppSettingNames=["form_template_id","audit_document_template","file_target_folder","verification_site","verification_publish_route"];
		
		$scope.auditAppSettings={};//file_target_folder:"5",form_template_id:"1"};
		
		$scope.customLookups={};
		
		$scope.loadAuditAppSettings=function()
		{
			return CoreAppSettingService.readSettingByApp("Audit")
			.then(function(sr){
				$scope.auditAppSettings={};
				
					for(var i in $scope.auditAppSettingNames)
					{
						var settingName=$scope.auditAppSettingNames[i];
						var app_setting={app_name:"Audit",setting_name:settingName,setting_value:"",app_setting_id:""}
						
						if(sr[settingName])
						{
							app_setting.setting_value=sr[settingName].setting_value;
							app_setting.app_setting_id=sr[settingName].app_setting_id;
							
						}
						$scope.auditAppSettings[settingName]=app_setting;
					}
				return sr;
				});
		}
		
		$scope.loadCustomLookups=function(index)
		{
			//var __this=this;
			CoreLookupService.readAllLookupsByTypes()
			.then(function(sr){$scope.customLookups=sr.lookupValues;});
		}
		
		$scope.loadCompanyTypesLookup=function()
		{
			return AuditService.readAuditCompanyTypes()
			.then(function(sr){
				$scope.companyTypesLookup=sr;
				$scope.companyTypesHash=buildHash(sr,"item","audit_company_type_id");
				return sr;
				})
		}
		$scope.loadCompanyLookup=function()
		{
			return AuditService.readCustomers()
			.then(function(sr){
				$scope.companysLookup=sr;
				$scope.companysHash=buildHash(sr,"item","customer_id");
				return sr;
				})
		}
		$scope.loadAuditAppLookups=function()
		{
			$scope.loadCustomLookups(0);
			return CoreLookupManager.load("User")
			//.then(function(){ CoreLookupManager.load("Customer")})
			.then ($scope.loadCompanyLookup)
			.then (function(){ return $scope.loadCompanyTypesLookup();})
		}
	}
	
	function AuditFormController($scope, $http, $filter,$stateParams,$state)
		{
			 $scope.onPageLoadForm=function()
			 {
				 $scope.formManager.loadCustomLookups();

				var activeSectionId=$stateParams.form_section_id?$stateParams.form_section_id:"";
				console.log("AuditFormController",activeSectionId);
				
				if(activeSectionId)
				{
					$scope.formManager.activeSectionId=activeSectionId;
					$scope.formManager.setCurrentSection(activeSectionId);
				}
			 }
             $scope.onPageLoadForm=function()
			 {

				$scope.activeSectionId=$stateParams.form_section_id?$stateParams.form_section_id:"";
				console.log("AuditFormController",$scope.activeSectionId);
			 }
		
			 
			 $scope.onPageLoadForm();	
		}
	
	function AuditListController($scope, $http, $filter,$stateParams,$state,$window
		,AuditEngagementService,AuditEngagementManager
		,AuditClientTrialbalanceService,AuditClientTrialbalanceManager
		,DataImportExportService,DataImportManager,AuditService,AuditManager,CoreLookupService,CoreLookupManager)
	{
		$scope.auditManager=AuditManager.create();
		$scope.auditManager.state=$state;
		$scope.auditManager.editPath.url="app.auditDetail.auditInfo";
		$scope.viewInitialized=false;
		$scope.selectedAudit="";
		$scope.auditManager.currentStatusView="9";
		$scope.canCreate=true;
		$scope.createMessage="";
		$scope.exportToExcel=function()
			 {
				 var header=["audit_engagement_id","customer_id","customer_name","schedules_date","closing_date","closing_date_ec","audit_fee","audit_completion_time","client_contact_person","client_contact_phone","contact_email","employee_count","verification_code","opinion","assignee","audit_status","archived"];
				 var sheetData=[header];
				 
				 for(var i in $scope.auditManager.auditsList)
				 {
					 
					 var item=$scope.auditManager.auditsList[i];
					 if(item.customer)
					 {
						 item.customer_name=item.customer.customer_name;
					 }
					 
					 var itemData=[];
					 for(var f in header)
					 {
						 var fld=header[f];
						 itemData.push(item[fld]);
					 }
					 sheetData.push(itemData);
				 }
				 
				 var engagementSheet={name:"Engagements",startRow:1,data:sheetData};
				 var param={outputFile:"engagements.xlsx",sheets:{Engagements:engagementSheet}};
			
					DataImportExportService.export("Excel",param)
					.then(function(sr){$scope.exportInfo=sr; $window.location.href=sr.filePath;});
			 }
		$scope.onAuditParamChange=function(item)
		{
			$scope.createMessage="";
			if(item.customer)
			{
				item.customer_id=item.customer.customer_id;
				$scope.checkAuditExistance(item);
			}
			return;
		}
		$scope.processList=function(sr)
		{
			console.log("AuditListController.processList",$scope.auditManager.auditsList);
			for(var i in $scope.auditManager.auditsList)
			{
				var audit=$scope.auditManager.auditsList[i];
				audit.assigned_users=audit.assignee.split(",");
				
				audit.assigned_usersHash={};
				for(var j in audit.assigned_users)
				{
					audit.assigned_usersHash["item"+audit.assigned_users[j]]=audit.assigned_users[j];
				}
				
				
				
				var statusColors=['#F06030','#FCC100','#0cc2aa']
				var color=statusColors[0];
				if(audit.audit_status>=3 && audit.audit_status<=6)
				{
					color=statusColors[1];
				}
				else if(audit.audit_status>=6)
				{
					color=statusColors[2];
				}
				
				audit.progress={percent:audit.audit_status*10,color:color}
			}
		}
		$scope.saveAuditAssignee=function(audit)
		{
			var assignee="";
			var sep="";
			for(var i in audit.assigned_users_detail)
			{
				assignee=assignee + sep +  audit.assigned_users_detail[i].id;
				sep=",";
			}
			audit.assignee=assignee;
			AuditEngagementService.save(audit)
			.then($scope.initializeView);
		}
		$scope.onAuditAsignClick=function(audit)
		{
			$scope.selectedAudit=audit;
			audit.assigned_users_detail=[];
			for(var i in audit.assigned_users)
			{
				var user_id=audit.assigned_users[i];
				var user=$scope.lookups.hash.User['User'+user_id];
				if(user)
				{
					audit.assigned_users_detail.push(user);
				}
			}
		}
		$scope.initializeView=function()
		{
			$scope.processList();
			$scope.viewInitialized=true;
		}
		$scope.onPageLoad=function()
		{
			
			$scope.auditManager.loadList()
			.then($scope.loadAuditAppLookups)
			.then($scope.loadAuditAppSettings)
			.then($scope.initializeView);
		
		}
		$scope.checkAuditExistance=function(item)
		{
			$scope.canCreate=false;

			var checkDate=$filter('date')(item.closing_date, "yyyy-MM-dd") ;
			
			AuditService.checkAuditExists(item.customer_id,checkDate)
			.then(function(sr){
				if(sr.audits/1)
				{
					$scope.createMessage=(sr.audits + " aduits existing for this customer for " + checkDate );
				}
				else 
				{
					$scope.canCreate=true;
				}
				});
		}
		
		$scope.saveNewItem=function(item)
		{
			$scope.viewInitialized=false;
			item.company_type=item.customer.company_type;
			$scope.auditManager.saveNewItem(item,$scope.auditAppSettings)
			.then(function(){
				$("#auditListEdit").modal("hide");
				$scope.auditManager.loadList()
				.then($scope.initializeView);
				})
			//.then($scope.auditManager.loadList)
			
		}
		$scope.archiveAudit=function(item)
		{
			if(confirm("Are you sure?"))
			{
				item.archived=1;
				AuditEngagementService.save(item)
				.then($scope.loadList)
				//.then($scope.initializeView);
			}
		}
		$scope.loadList=function()
		{
			$scope.auditManager.readList()
			.then(function(sr)
			{
				$scope.auditManager.auditsList=sr;
				$scope.initializeView();
			});
		}
		$scope.onCreateAudit=function()
		{
			$scope.auditManager.newAuditEngagement();
			$scope.auditManager.editedAuditEngagement.assignee=$scope.app.loginUser.user_id;
			$("#auditListEdit").modal();
			//$scope.audit_engagementManager.loadData("list");
		
		}
			
		
		$scope.onPageLoad();
	}
	
	function AuditDetailController($scope, $http, $filter,$stateParams,$state,$timeout,$window,$localStorage
				,AuditManager
				,AuditService
				//,FormBuilderService
				,CustomFormManager
				,AuditEngagementService
				,DataImportExportService
				,AuditClientTrialbalanceService)
	{
		$scope.filter2={hide_novalue:true,reconsiled:"any",sampled:"any",vouched:"any",show_adjusted:true,treeView:"acct"};
		
		$scope.auditManager=AuditManager.create();
		//$scope.formManager=CustomFormManager.create();
        $scope.customForm=CustomFormManager.FormManager();
        $scope.formManager=$scope.customForm.manager;
        $scope.templateManager=$scope.formManager.FormTemplate;
		$scope.valueManager=$scope.formManager.FormValue;
			
		$scope.templateManager.lookupManager=$scope.app.Manager.LookupManager;
        $scope.formManager.showEditorTemplate=true;
        $scope.formManager.editorTemplate="auditform.value.editor.html"; 
        
				//$scope.form_template_id=$state.params.form_template_id;
				//$scope.form_value_id=$state.params.form_value_id;
				
        
        $scope.onFormValueChange=function(fld,rowIndex,container,field_name)
			{
				$scope.customForm.manager.onFormValueChange(fld,rowIndex,container,field_name);
			}  
		$scope.GKtreeOptions={idField:"grouping_code",parentId:"parent_code",label:"grouping_name",includeFields:["description","tags"]}
		$scope.TBtreeOptions={idField:"account_id",parentId:"parent_code",label:"account_description",includeFields:["description","tags"]}
		
		$scope.auditDetailLoaded=false;
			  	
		$scope.treeManager=new TreeManager();
		$scope.relationshipManager=new AdvancedTreeManager();
		$scope.exportInfo={};
		
        $scope.createAuditForm=function()
        {
            return $scope.loadAuditAppSettings()
            .then(function(){
                console.log("Create Audit Form ",$scope.auditAppSettings,$scope.auditManager.currentAudit.customer.customer_name);
                $scope.auditManager.saveNewItem($scope.auditManager.currentAudit,$scope.auditAppSettings)
                .then($scope.loadAllData)
            })
            
            return;
            
           // $scope.auditManager.currentAudit.engagementInfo
        }
        
		$scope.exportClientTb=function(type)
		{
				var items=$scope.auditManager.currentAudit.clientTB;
				for(var i in items)
				{
					var item=items[i];
					if(item.parentGrouping)
					{
						item.grouping_name=item.parentGrouping.grouping_name;
					}
				}
					var fields=["account_id","account_description","debit","credit","account_type","current_balance","last_fye_balance","parent_code","mapping_checked","grouping_name"];
					$scope.exportListToExcel($scope.auditManager.currentAudit.clientTB,fields,"Client_TB");
					console.log("exportClientTb");
		}
		
		$scope.balanceType="balance";
		
		$scope.loadFilterValue=function()
			{
				//$scope.filter
				console.log("---------------loadFilterValue",$scope.filter2);
				var filterStorageName="auditAppFilter" + $scope.audit_engagement_id;
					
					 if (!angular.isDefined($localStorage[filterStorageName])) 
					 {
						  $localStorage[filterStorageName]=$scope.filter2;
						
					 }
					 $scope.filter = $localStorage[filterStorageName];
					 $scope.filter.expanded=$scope.filter.expanded?$scope.filter.expanded:{};
					 
			}
		
		$scope.setTodayDate=function(fld)
		{
			$scope.auditManager.currentAudit.engagementInfo[fld]=new Date();
		}
		
		$scope.saveNewAccount=function()
		{
			var fields={account_type:"",grouping_map:""};
			for(var i in fields)
			{
				if(!$scope.editedAccount[i])
				{
					$scope.editedAccount[i]=fields[i];
				}
			}
			if($scope.editedAccount.parent_code)
			{
				$scope.editedAccount.mapping_checked=1;
			}
			AuditClientTrialbalanceService.save($scope.editedAccount)
			.then(function(){
				$("#modal_create_account").modal("hide");
			$scope.loadAllData()})
		}
		
		$scope.createNewAccount=function(options)
		{
			$scope.editedAccount={audit_engagement_id:$scope.audit_engagement_id};
			for(var i in options)
			{
				$scope.editedAccount[i]=options[i];
			}
		}
		$scope.editClientAccount=function(account)
		{
			$scope.editedAccount=account;
			$("#modal_create_account").modal("show");
		}
		$scope.showCreateAccountModal=function(options)
		{
			$scope.createNewAccount(options)
			$("#modal_create_account").modal("show");
		}
		
		$scope.CapitalizeFirstLetters=function(text)
	{
		var ret="";
		var wordArray=text.split(" ");
		for(var i in wordArray)
		{
			var word=wordArray[i];
			var capWord=word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
			
			if(capWord=="P.l.c" || capWord=="Plc")
			{
				capWord=word.toUpperCase();
			}
			
			ret += capWord + " ";
		}
		return ret;
	}
		
		
		
		$scope.calculateDerivedVars=function()
		{
			
			var engagementInfo=$scope.auditManager.currentAudit.engagementInfo;
			var customer=$scope.auditManager.currentAudit.customer;
			
			
			console.log("calculateDerivedVars");
			var calculatedFields={
				
					schedules_date:engagementInfo.schedules_date
					,client_name:customer?customer.customer_name:""
					,client_name_word_cap:""
					,client_name_cap:""
					
					,comparative_date:moment(engagementInfo.closing_date).subtract(1, 'year')	
					,opening_date:moment(engagementInfo.closing_date).subtract(1, 'year')	
					
					,comparative_year_ec:engagementInfo.closing_date_ec

					,closing_date:engagementInfo.closing_date
					,closing_date_sce:""
					,closing_date_ec:engagementInfo.closing_date_ec
					
					,audit_fee:engagementInfo.audit_fee
					,audit_completion_time:engagementInfo.audit_completion_time
	
					,client_contact_person:engagementInfo.client_contact_person
					,client_contact_phone:engagementInfo.client_contact_phone
					
					,verification_code:engagementInfo.verification_code
					,company_type:engagementInfo.company_type
					,establishment:customer?customer.establishment:""
					
			}
				calculatedFields.schedules_date=$filter('date')(calculatedFields.schedules_date);
				
				calculatedFields.opening_date=calculatedFields.opening_date.add(1,"day");
				
				calculatedFields.opening_date=$filter('date')(calculatedFields.opening_date.format());
				
				calculatedFields.comparative_date=$filter('date')(calculatedFields.comparative_date.format());
				
				
				
				calculatedFields.closing_date=$filter('date')(calculatedFields.closing_date);
				
				
				calculatedFields.client_name_word_cap=$scope.CapitalizeFirstLetters(calculatedFields.client_name);
				calculatedFields.client_name_cap=calculatedFields.client_name.toUpperCase();
				
				calculatedFields.sfp_date="as at "
				calculatedFields.sfp_date_cap=calculatedFields.sfp_date.toUpperCase();
				
				calculatedFields.opening_date_sce=""
				calculatedFields.closing_date_sce=""
				
				calculatedFields.for_year_caps="FOR THE YEAR ENDED"
				
				
				calculatedFields.comparative_year_gc=""
				calculatedFields.comparative_year_gc_ec=""
				
				
				var yearEC=calculatedFields.comparative_year_ec;
				var yearECBracket=yearEC ? " (" + yearEC + " E.C)":"";
		
				var yearGC=$filter('date')(calculatedFields.opening_data, "yyyy") ;
		
				calculatedFields.comparative_year_gc_ec=yearGC  + yearECBracket;

				calculatedFields.opening_date_sce="Balance, " + calculatedFields.comparative_date;

				
		//var auditYear=$filter('date')($scope.audit.infoVariables["Closing date"].input, "mm-yyyy") ;
		//$scope.audit.correctAuditName=$scope.audit.infoVariables['Clinet Name Word Cap'].output + "-" + auditYear;
		
	//	console.log("------------ClocorrectAuditName",$scope.audit.correctAuditName);
		var closingDate=calculatedFields.closing_date;
		var closingDateEC=calculatedFields.closing_date_ec;
		
		var closingDateECBracket=calculatedFields.closing_date_ec ? " (" + calculatedFields.closing_date_ec + " E.C)":"";

		var closingDateGC_EC=closingDate + closingDateECBracket;
		
		calculatedFields.closing_date_sce="Balance, " +closingDate;

		calculatedFields.sfp_date ="as at " + closingDateGC_EC;
		
		calculatedFields.sfp_date_cap=calculatedFields.sfp_date.toUpperCase();
		
		calculatedFields.for_year_caps="FOR THE YEAR ENDED " + closingDateGC_EC.toUpperCase();;
				
				
				$scope.auditManager.currentAudit.engagementOutput=calculatedFields;
				return;
				
/*
			var calculatedFields={
				"Schedules Date":schedules_date
				,"Client Name":""
				,"Client Name Word Cap":""
				,"Client Name Cap":""
				,"Opening Date":""
				,"Opening Date SCE":""
				,"Closing Date":closing_date
				,"Closing Date SCE":""
				,"Closing Date EC":closing_date_ec
				,"SFP date":"as at Jul 7, 2014 (Sene 30, 2006 E.C)"
				,"SFP date Caps":			"AS AT JUL 7, 2014 (SENE 30, 2006 E.C)"
				,"For Year Caps":			"FOR THE YEAR ENDED JUL 7, 2014 (SENE 30, 2006 E.C)"
				,"Comparative year EC":""
				,"Comparative year GC_EC":"2013 (2005 E.C)"
				,"Client Contact Person":client_contact_person
				,"Client Phone":client_contact_phone
				,"Audit Fee":audit_fee
				,"Completion Time":audit_completion_time
				,"Verification Code":""
				,"Establishment":""
				,"Company Type":""

			}*/


		
		
		var auditYear=$filter('date')($scope.audit.infoVariables["Closing date"].input, "mm-yyyy") ;
		$scope.audit.correctAuditName=$scope.audit.infoVariables['Clinet Name Word Cap'].output + "-" + auditYear;
		
		console.log("------------ClocorrectAuditName",$scope.audit.correctAuditName);
		var closingDate=$scope.audit.infoVariables["Closing date"].output;
		var closingDateEC=$scope.audit.infoVariables["Closing date EC"].output;
		
		closingDateECBracket=closingDateEC ? " (" + closingDateEC + " E.C)":"";

		var closingDateGC_EC=closingDate + closingDateECBracket;
		
		$scope.audit.infoVariables["Closing date SCE"].output="Balance, " +closingDate;

		$scope.audit.infoVariables["SFP date"].output="as at " + closingDateGC_EC;
		
		$scope.audit.infoVariables["SFP date Caps"].output=$scope.audit.infoVariables["SFP date"].output.toUpperCase();
		
		$scope.audit.infoVariables["For Year Caps"].output="FOR THE YEAR ENDED " + closingDateGC_EC.toUpperCase();;
	
	}
		
		$scope.objToTable=function(objData,fields,tableData)
		{
			//var tableData=[];
			for(var i in objData)
			{
				var obj=objData[i];
				var row=[];
				for(var f in fields)
				{
					row.push(obj[f]);
				}
				tableData.push(row);
			}
			return tableData;
		}
		
		$scope.infoToTable=function(sheetData)
		{
			
			var tableData=[];
			for(var i in $scope.auditManager.currentAudit.engagementOutput)
			{
				var value=$scope.auditManager.currentAudit.engagementOutput[i];
				var label=i.replace("_"," ",true);
				tableData.push([label,value]);
			}

			/*var fields={grouping_name:"",debit:"",credit:"",current_balance:"",last_fye_balance:""
			,adjDebit:"",adjCredit:"",adjPDebit:"",adjPCredit:""}
			
			$scope.objToTable(tbData,fields,tableData);*/
			
			sheetData["Info"]={name:"Info",data:tableData};
			return sheetData;
		}		
		
		$scope.groupdTBToTable=function(sheetData,treeTable,sheetName,format)
		{
			var tableData=[];
			for(var i in treeTable)
			{
				var node=treeTable[i];
				var label=node.label;
				var acct=node.data;
				var row=[];
				
				var indent="";
				if(format)
				{
					for(var i=0;i<node.indent;i++)
					{
						indent +="    ";
					}
				}
				row.push(indent + label);
				for(var b in {adjustedBalace :"",balance:""})
				{
					var bt=acct[b];
					row.push(bt.debit);
					row.push(bt.credit);
					row.push(bt.debit-bt.credit);
					
					row.push(bt.balance);
					row.push("");
				}
				
				
				row.push(acct.adjDebit)
				row.push(acct.adjCredit)
				row.push(acct.adjPDebit)
				row.push(acct.adjPCredit)
				
				tableData.push(row);
			}
			sheetData[sheetName]={name:sheetName,data:tableData};
			return sheetData;
		}
		
		$scope.adjustmentsToTable=function(sheetData)
		{
			var header1=["","","","Current Period","","Prior Period","",""];
			var header2=["Ref","Account","","Debit","Credit","Debit","Credit","Justification"];
			
			var tableData=[header1,header2];
			var fields={full_id:"",account_id:"",account_label:"",debit:"",credit:"",prior_debit:"",priod_credit:"",justification:""}
			
			$scope.objToTable($scope.auditManager.currentAudit.adjustments,fields,tableData);
			
			sheetData["adj"]={name:"adj",data:tableData};
			return sheetData;
		}
		$scope.substantiveAuditToTable=function(sheetData)
		{
			var header1=["Audit Procedure","Audited Acct/Txn","Notes","Work Done","Issues","Review Notes"];
			
			var fields={procedure_label:"",audited_item_label:"",notes:"",work_done:"",issues:"",review_notes:""}
			
		   	var tableData=[header1];

			$scope.objToTable($scope.auditManager.currentAudit.findings,fields,tableData);

			sheetData["SUB AUD"]={name:"SUB AUD",data:tableData};
			return sheetData;
		}
		$scope.managementLetterToTable=function(sheetData)
		{
			var header1=["Audit Procedure","Audited Acct/Txn","Management Letter Points","Management Response"];
			var header2=["Audit Procedure","Audited Acct/Txn","Qualification Points"];
			
			var fields1={procedure_label:"",audited_item_label:"",content:"",response:""}
			var fields2={procedure_label:"",audited_item_label:"",content:""}
			
			var tableData1=[header1];
			var tableData2=[header2];

			$scope.objToTable($scope.auditManager.currentAudit.managementLetters,fields1,tableData1);
			$scope.objToTable($scope.auditManager.currentAudit.qualificationPoints,fields2,tableData2);
			
			sheetData["ICM"]={name:"ICM",data:tableData1};
			sheetData["QPTs"]={name:"QPTs",data:tableData2};			
			/*sheetData["managemenent_letter"]={name:"ICM",data:[]};
			sheetData["qualification_point"]={name:"QPTs",data:[]};*/
			return sheetData;
		}
		
		$scope.generateFS=function(fs)
		{
			var formSheets=$scope.formManager.formToTable($scope.formManager.fields);
			
			$scope.infoToTable(formSheets);
			$scope.groupdTBToTable(formSheets,$scope.groupedTrialBalance,"GTB");
			$scope.groupdTBToTable(formSheets,$scope.heirarchyTable,"HTB",true);
			$scope.adjustmentsToTable(formSheets);
			$scope.substantiveAuditToTable(formSheets);
			$scope.managementLetterToTable(formSheets)
			
			var templateFile="awpTemplate.xlsx"
			var outputFileName=$scope.auditManager.currentAudit.auditName + "-AWP.xlsx";
			if(fs)
			{
				var suffix=$scope.companyTypesHash['item'+$scope.auditManager.currentAudit.engagementInfo.company_type].report_template;
				templateFile="template" + suffix + ".xlsx";
				outputFileName=$scope.auditManager.currentAudit.auditName + "-FS.xlsx";
			}
			
			var param={exportFolder:"files/uploads/",outputFile:outputFileName,templateFile:templateFile ,sheets:formSheets};
		
			return DataImportExportService.export("Excel",param)
			.then(function(sr){
				return {outputFile:outputFileName,serverResult:sr};
				//$scope.exportInfo=sr;
				//$window.location.href=sr.filePath;
			});
			
		}
		$scope.exportToExcel=function(fields,suffix)
		{
			var formSheets=$scope.formManager.formToTable($scope.formManager.fields);
			
			$scope.infoToTable(formSheets);
			$scope.groupdTBToTable(formSheets);
			$scope.adjustmentsToTable(formSheets);
			$scope.substantiveAuditToTable(formSheets);
			$scope.managementLetterToTable(formSheets)
			
			var templateFile="awpTemplate.xlsx"
			if(suffix)
			{
				templateFile="template" + suffix + ".xlsx";
			}
			
			var param={outputFile:"auditWD-FS" + $scope.audit_engagement_id + ".xlsx",templateFile:templateFile ,sheets:formSheets};
			
			DataImportExportService.export("Excel",param)
			.then(function(sr){$scope.exportInfo=sr;
			$window.location.href=sr.filePath;
			});
			
		}
		
		
		$scope.onSaveClick=function(type)
		{
            if(type=='form')
                {
                   $scope.formManager.FormValue.saveItem($scope.formManager.FormValue.editedItem);
                }
            else
                {
			$scope.calculateDerivedVars();
            AuditEngagementService.save($scope.auditManager.currentAudit.engagementInfo);
                    
                }
			
			
		}
		
		$scope.buildHashes=function()
		{
			$scope.accountGroupingsHash=buildHash($scope.auditManager.accountGroupings,"item","grouping_code");
			//$scope.currentAudit.clientAccountsHash=buildHash(sr,"","account_id");	
			$scope.auditManager.currentAudit.clientTBHash=buildHash($scope.auditManager.currentAudit.clientTB,"","account_id");	
			/*
			$scope.relationshipManager.addElements($scope.auditManager.accountGroupings,"grouping_code","GK",{label:"grouping_name"});
			$scope.relationshipManager.addElements($scope.auditManager.currentAudit.clientTB,"account_id","acct",{label:"account_description"});
			$scope.relationshipManager.addElements($scope.auditManager.auditProcedures,"audit_procedure_id","AP",{label:"description"});
			*/
			
		}
		$scope.buildRelations=function()
		{
			$scope.relationshipManager.addElements($scope.auditManager.accountGroupings,"grouping_code","GK",{label:"grouping_name"});
			$scope.relationshipManager.addElements($scope.auditManager.currentAudit.clientTB,"account_id","acct",{label:"account_description"});
			$scope.relationshipManager.addElements($scope.auditManager.auditProcedures,"audit_procedure_id","AP",{label:"description"});
			$scope.relationshipManager.addElements($scope.auditManager.currentAudit.adjustments,"audit_adjustment_id","ADJ",{label:"justification"});
			
			
			for(var i in $scope.auditManager.currentAudit.adjustments)
			{
				var adj=$scope.auditManager.currentAudit.adjustments[i];
				var target=$scope.relationshipManager.objHash["acct"+adj.account_id];
				if(target)
				{
					target.adjustments=target.adjustments?target.adjustments:[];
					target.adjustments.push(adj);
				}
			}
			for(var i in $scope.auditManager.auditProcedures)
			{
				var ap=$scope.auditManager.auditProcedures[i];
				//console.log("AP-",ap.grouping_code);
				
				var target=$scope.relationshipManager.objHash["GK"+ap.grouping_code];
				if(target)
				{
					//console.log("Found -AP-",target.label);
					target.workingProcedures=target.workingProcedures?target.workingProcedures:[];
					target.workingProcedures.push(ap);
				}
			}
			
		}
		
		$scope.loadEngagementFormData=function(data)
		{
            
            console.log("loadEngagementFormData",data);
             $scope.formManager.loadFormValue(0,data.engagement.form_value_id)
            .then(function(sr){
                 $scope.formValueLoaded=true;
                console.log("loadEngagementFormData",$scope.customForm.fieldValues);
            })
            /*
			FormBuilderService.readFormValueDetail(data.engagement.form_value_id)
			.then(function(sr)
				{
					if(sr)
					{
						console.log("loadEngagementFormData",sr);
						$scope.formManager.loadFormValueDetail(sr.form_template_id,data.engagement.form_value_id)
						.then(function(){$scope.formValueLoaded=true;});
					}
				});
				*/
			//return $scope.formManager.loadFormValueDetail(1,data.engagement.form_value_id);
		}
		$scope.loadAllData=function()
		{
			$scope.state=$state;
			
			return $scope.auditManager.readAuditDetail($scope.audit_engagement_id)
			.then(function(sr)
				{
					$scope.auditManager.currentAudit.auditName=$scope.auditManager.currentAudit.customer.customer_name + " - " + 
					$filter('date')($scope.auditManager.currentAudit.engagementInfo.closing_date,"dd MMM, yyyy");
					
					$scope.app.subTitle = "[" +$scope.auditManager.currentAudit.auditName+ "]";
					
					//$scope.auditManager.currentAudit.auditName=$scope.app.subTitle;
					$state.current.data.subTitle=$scope.app.subTitle;
				$scope.loadEngagementFormData(sr);
				$scope.buildRelations();
				$scope.initializeTree();
				$scope.auditDetailLoaded=true;
				
				$scope.buildHashes();
				
				$timeout( $scope.calculateDerivedVars,10);
				return sr;
				})
		}
		
		$scope.onApplySamplingClick=function(node)
		{
			if(!node.children.length)
			{
				$scope.loadTransactionsForAccount(node)
				.then($scope.applySampling)
			}
			else
			{
				$scope.applySampling(node);
			}
		}
		
		$scope.applySampling=function(node)
		{
			node.data.accountStatus.sampled=true;
			var totalTxn=node.data.totalTxn;
			var sampledTxn={debit:0,credit:0};
			for(var i=1;i<node.children.length;i++)
			{
				var child=node.children[i];
				child.data.accountStatus.sampled=false;
			}
			for(var i=1;i<node.children.length;i++)
			{
				var txn=node.children[i].data;
				if( ((txn.debit/1) && sampledTxn.debit<totalTxn.debit*.6) )
				{
					txn.accountStatus.sampled=true;
					sampledTxn.debit += (txn.debit/1);
				}
				if( ((txn.credit/1) && sampledTxn.credit<totalTxn.credit*.6) )
				{
					txn.accountStatus.sampled=true;
					sampledTxn.credit += (txn.credit/1);
				}
				//child.data.accountStatus.sampled=false;
			}
		}
		
		
		$scope.onAccountStatusChange=function(node,status)
		{
			var item=node.data;
			console.log("onAccountStatusChange",item.accountStatus,$scope.accountStatusHash);
			var accountStatusName="accountStatusHash" + $scope.audit_engagement_id;
			$localStorage[accountStatusName]=$scope.accountStatusHash;
			
		}
		
		$scope.getAccountStatus=function(item)
		{
			if(!$scope.accountStatusHash)
			{
				var accountStatusName="accountStatusHash" + $scope.audit_engagement_id;
				
				 if (angular.isDefined($localStorage[accountStatusName])) 
				 {
          			$scope.accountStatusHash = $localStorage[accountStatusName];
        		 }
				 else
				 {
					 $scope.accountStatusHash={};
				 }
			}
			
			
			item.accountStatus=$scope.accountStatusHash[item.full_id];
			item.accountStatus=item.accountStatus?item.accountStatus:{sampled:false,reconsiled:false,vouched:false};
			
			$scope.accountStatusHash[item.full_id]=item.accountStatus;
		}
		
		$scope.initializeTree=function()
			{
				$scope.treeManager.makeTree($scope.auditManager.accountGroupings,$scope.GKtreeOptions);
				
				$scope.accountsHash={}
				var acctHash=buildHash($scope.auditManager.accountGroupings,"","system_name");
				
				for(var i in acctHash)
				{
					var acct=$scope.treeManager.treeHash["item"+acctHash[i].grouping_code];
					if(i)
					{
						$scope.accountsHash[i]=acct;
					}
				}
				for(var i in $scope.accountsWithExtraData)
				{
					var acct=$scope.accountsHash[i];
					if(acct)
					{
						acct.extraDataType=$scope.accountsWithExtraData[i];
					}
				}
				
				var leaf=$scope.treeManager.getLeafNodes();
				
				//$scope.validMappingKeys=$scope.treeManager.getLeafNodes();
				
				$scope.validMappingKeys=$scope.auditManager.currentAudit.validMappingKeys;
				
				var tbTable=[]
				$scope.groupedTrialBalance=$scope.treeManager.treeToTable($scope.treeManager.tree,tbTable);
				
				console.log("AuditDetailController.initializeTree");
				
				for(var i in $scope.auditManager.currentAudit.clientTB)
				{
					var acct=$scope.auditManager.currentAudit.clientTB[i];
					acct.objType="acct";
//					$scope.auditManager.currentAudit.clientTB[i].accountStatus={sampled:false,reconsiled:false,vouched:false};
					acct.full_id="ac"+acct.account_id;
					
					$scope.getAccountStatus(acct);
					
				}
				
				
				for(var i in $scope.treeManager.treeHash)
				{
					var node=$scope.treeManager.treeHash[i];
					//node.expanded=true;
					node.data.objType="GK";
					node.data.full_id=node.id;
					//node.data.accountStatus={sampled:false,reconsiled:false,vouched:false};
					$scope.getAccountStatus(node.data);
				}
				
				$scope.treeManager.makeTree($scope.auditManager.currentAudit.clientTB,$scope.TBtreeOptions,true);
				
				var heirarchyTable=[]
				$scope.heirarchyTable=$scope.treeManager.treeToTable($scope.treeManager.tree,heirarchyTable);
				
				var mapped=[];
				for(var i in leaf)
				{
					var n=leaf[i];
					n.isAccountParent=true;
					if(n.children.length)
					{
						for(var i in n.children)
						{
							n.children[i].data.normal_balance=n.data.normal_balance;
						}
						mapped.push(n);
					}
				}
				$scope.reCalculateBalances();
				/*
				for(var i in $scope.treeManager.tree)
				{
					$scope.getCalculatedValue($scope.treeManager.tree[i]);
				}*/
				
				//$scope.initializeFindings();
				//$scope.loadTransactionCounts();
				$scope.leafTBTree=mapped;
				//$scope.currentTree=$scope.treeManager.tree;
				//$scope.currentTree=mapped;
				var treeView="";
				if($scope.filter)
				{
					treeView=$scope.filter.treeView;
					
				}
				
				treeView=treeView?treeView:"acct";
				$scope.setView(treeView);
				
			}
			$scope.setView=function(v)
			{
				console.log("Set View",$scope.filter);
				if($scope.filter)
				{
				$scope.filter.treeView=v;
				}
				if(v=="GK")
				{
					$scope.currentTree=$scope.treeManager.tree;
				}
				else if(v=="acct")
				{
					$scope.currentTree=$scope.leafTBTree;
				}
				$scope.calculateTreeLevel($scope.currentTree);
			}
			$scope.calculateTreeLevel=function(nodes,level)
			{
				level=level?level:0;
				for(var i in nodes)
				{
					nodes[i].level=level;
					$scope.calculateTreeLevel(nodes[i].children,level+1);
				}
			}
			
			$scope.reCalculateBalances=function()
			{
				for(var i in $scope.treeManager.tree)
				{
					$scope.getCalculatedValue($scope.treeManager.tree[i]);
				}
				for(var i in $scope.treeManager.treeHash)
				{
					//console.log(i);
					var obj=$scope.treeManager.treeHash[i].data;
					obj.balance={debit:obj.debit,credit:obj.credit,balance:obj.last_fye_balance}
					
					var adjustedLastBalace=obj.last_fye_balance + obj.adjPDebit - obj.adjPCredit;
					
					var adjustedBalance=obj.debit + obj.adjDebit + obj.adjPDebit - obj.adjCredit -obj.adjPCredit-obj.credit;
					
					var adjDebit=0;
					var adjCredit=0;
					
					if(adjustedBalance>=0)
					{
						adjDebit=adjustedBalance;
					}
					else
					{
						adjCredit=-adjustedBalance;
					}
					
					obj.adjustedBalace={debit:adjDebit,credit:adjCredit,balance:adjustedLastBalace};
					
					//var adjustedDebit=obj.debit + obj.adjPDebit - obj.adjPCredit
					
				}
			}
			
			$scope.getCalculatedValue=function(node)
			{
				var fields={debit:0,credit:0,current_balance:0,last_fye_balance:0,adjDebit:0,adjCredit:0,adjPDebit:0,adjPCredit:0};
				//var adjustment
				for(var i in fields)
				{
					node.data[i]=node.data[i]?node.data[i]:fields[i];
				}
				if(node.data.objType=='acct')
				{
					var adjustmentFields={adjDebit:"debit",adjCredit:"credit",adjPDebit:"prior_debit",adjPCredit:"priod_credit"}
					
					for(var a in node.data.adjustments)
					{
						var adjustment=node.data.adjustments[a];
						for(var f in adjustmentFields)
						{
							var adjFld=adjustmentFields[f];
							node.data[f]+=adjustment[adjFld]/1;
						}
					}
					for(var i in fields)
					{
						fields[i]=node.data[i]/1;
					}
					
				}
				for(var i in node.children)
				{
					var childVals=$scope.getCalculatedValue(node.children[i]);
					for(var j in childVals)
					{
						fields[j]+=childVals[j];
					}
				}
				var balance=fields.debit-fields.credit;
				fields.debit=balance>=0?balance:0;
				fields.credit=balance<0?-balance:0;
				
				var adjBal=fields.adjDebit-fields.adjCredit;
					fields.adjDebit=adjBal>=0?adjBal:0;
					fields.adjCredit=adjBal<0?-adjBal:0;
	
					var adjBalp=fields.adjPDebit-fields.adjPCredit;
					fields.adjPDebit=adjBalp>=0?adjBalp:0;
					fields.adjPCredit=adjBalp<0?-adjBalp:0;
					//return fields;
				
				for(var i in fields)
				{
					node.data[i]=fields[i];
				}
				
				return fields;
			}
		$scope.loadTransactionsForAccount=function(node)
		{
			return AuditService.readAuditTransactionsForAccount($scope.audit_engagement_id,node.data.account_id)
					.then(function(sr){
						node.children=[{}];
						var totalTxn={debit:0,credit:0,objType:"txn",is_summary:true}
						for(var i in sr)
						{
							
							var txn=sr[i];
							if(txn.description!="Change")
							{
								if(txn.balance/1)
								{
									if(txn.balance>0)
									{
										txn.debit=txn.balance;
									}
									else
									{
										txn.credit=-txn.balance;
									}
									txn.balance=0;
								}
								totalTxn.debit+=txn.debit/1;
								totalTxn.credit+=txn.credit/1;
								
								sr[i].objType="txn";
								sr[i].full_id="t" + sr[i].id;
								$scope.getAccountStatus(sr[i]);
								node.children.push({label:sr[i].description,level:node.level+1,parent:node,data:sr[i]});
							}
						}
						node.children[0]={label:"Total Movement",level:node.level+1,parent:node,data:totalTxn};
						node.data.totalTxn=totalTxn;
						return node;
					});
		}
		
		$scope.toggleChildView=function(node)
			{
				$scope.filter.expanded[node.id]=!$scope.filter.expanded[node.id]
				node.expanded=!node.expanded;
				
				if($scope.filter.expanded[node.id] && node.data.objType=='acct' && !node.children.length)
				{
					return $scope.loadTransactionsForAccount(node);
					
				}
			}
		$scope.onPageLoad=function()
		{
		 	$scope.loadAuditAppLookups();
			var id=$stateParams.audit_engagement_id?$stateParams.audit_engagement_id:"list";
			$scope.audit_engagement_id=id;
			console.log("AuditDetailController",id);
			if(id!="list" && id)
			{
				$scope.loadAllData(id)
			}
		}
		$scope.onPageLoad();			
					
	}
	
	
	
	function AuditInfoController($scope, $http, $filter,$stateParams,$state
				,AuditManager
				,AuditService
				,FormBuilderManager)
	{
	}
	
	
	
	function AuditAdjustmentController($scope, $http, $filter,$stateParams,$state,$timeout,AuditService,AuditAdjustmentService)
	{
			$scope.editedAdjustmentIndex=-1;
			$scope.editedAdjustment={};
			$scope.adjustmentTotals={debit:0,credit:0,prior_debit:0,priod_credit:0}

			$scope.calculateAdjustmentTotal=function()
			{
				for(var i in $scope.adjustmentTotals)
				{
					$scope.adjustmentTotals[i]=0;
					for(var a in $scope.auditManager.currentAudit.adjustments)
					{
						var adj=$scope.auditManager.currentAudit.adjustments[a];
						
						$scope.adjustmentTotals[i]+=(adj[i]/1);
					}
					
				}
			}
			$scope.addAdjustment=function(options)
			{
				var adjustment={audit_id:$scope.audit_engagement_id,debit:0,credit:0,prior_debit:0,priod_credit:0,justification:""};
				
				for(var i in options)
				{
					adjustment[i]=options[i];
				}
				var adjustments=$scope.auditManager.currentAudit.adjustments;
				var adjLen=adjustments.length-1;
				for(var i=adjLen;i>=0;i--)
				{
					adjustments[i+1]=adjustments[i];
				}
				
				//var index=$scope.auditManager.currentAudit.adjustments.length;
				
				//$scope.auditManager.currentAudit.adjustments.push(adjustment);
				
				adjustments[0]=adjustment
				$scope.editAdjustment(0);
			}
			$scope.deleteAdjustment=function(id)
			{
				if(confirm("Are you sure?"))
				{
					AuditAdjustmentService.delete(id)
					.then($scope.loadAuditAdjustments)
				}
				
			}
			$scope.editAdjustment=function(index)
			{
				$scope.editedAdjustmentIndex=index;
				$scope.editedAdjustment=$scope.auditManager.currentAudit.adjustments[index];
				$scope.editedAdjustment.account=$scope.auditManager.currentAudit.clientTBHash[$scope.editedAdjustment.account_id]
			}
			$scope.cancelEditAdjustment=function(index)
			{
				$scope.editedAdjustmentIndex=-1;
				$scope.loadAuditAdjustments();
			}
			$scope.loadAuditAdjustments=function()
			{
				AuditService.readAuditAdjustments($scope.audit_engagement_id)
				.then(function(sr){$scope.auditManager.currentAudit.adjustments=sr;
				$scope.calculateAdjustmentTotal();
				});
			}
			
			$scope.repeatAdjustmentOnCurrent=function(item)
			{
                console.log("repeatAdjustmentOnCurrent",item);
                
                var newAdjustment={};
                
                for(var i in item)
                {
                   newAdjustment[i]=item[i]; 
                }
                
                $scope.editedAdjustment=newAdjustment;
                newAdjustment.audit_adjustment_id="";
                newAdjustment.priod_credit=0;
                newAdjustment.prior_debit=0;
                
                $scope.editedAdjustment.account=$scope.auditManager.currentAudit.clientTBHash[$scope.editedAdjustment.account_id]
                
				newAdjustment.credit=item.priod_credit ;

				newAdjustment.debit=item.prior_debit;
				
				$scope.saveAdjustment(newAdjustment)
                
				console.log("repeatAdjustmentOnCurrent",item,newAdjustment);
			}
			
			$scope.reverceOnCurrent=function(item)
			{
				$scope.editedAdjustment=item;
				
				item.debit=item.priod_credit;

				item.credit=item.prior_debit;
				
				$scope.saveAdjustment();
				
			}
			
			$scope.saveAdjustment=function()
			{
				//var adj=$scope.auditManager.currentAudit.adjustments[$scope.editedAdjustmentIndex];
				if(!$scope.editedAdjustment.account)
				{
					return;
				}
				$scope.editedAdjustment.account_id=$scope.editedAdjustment.account.account_id;
				
				var adjustmentFields={audit_id:$scope.audit_engagement_id,debit:0,credit:0,prior_debit:0,priod_credit:0,justification:"",account_id:"",audit_adjustment_id:""};
				var numberFields={debit:0,credit:0,prior_debit:0,priod_credit:0}
				for(var i in adjustmentFields)
				{
					adjustmentFields[i]=$scope.editedAdjustment[i];// + "";
				}
				for(var i in numberFields)
				{
					adjustmentFields[i]=$scope.getNumberValue($scope.editedAdjustment[i]);
				}
				
				
				AuditAdjustmentService.save(adjustmentFields)
				.then(function()
					{
						$scope.editedAdjustmentIndex=-1;
						$scope.loadAuditAdjustments();
					});
			}
			$scope.checkDataLoad=function()
			{
				console.log("AuditAdjustmentController.checkDataLoad","Checking....",trialCount,$scope.auditDetailLoaded);
				if(!$scope.auditDetailLoaded && trialCount<10)
				{
					trialCount++;
					$timeout($scope.checkDataLoad,1000);
				}
				else if($scope.auditDetailLoaded)
				{
					console.log("AuditAdjustmentController.checkDataLoad","Data Loaded");
					$scope.calculateAdjustmentTotal();
				}
				else
				{
					console.log("AuditAdjustmentController.checkDataLoad","No Data Loaded...givingup");
				}
			}
			var trialCount=0;
			$scope.checkDataLoad()

	}
	
	
		
	function AuditTBMappingController($scope, $http, $filter,$stateParams,$state,$timeout
		,AuditEngagementService,AuditEngagementManager
		,AuditClientTrialbalanceService,AuditClientTrialbalanceManager
		,DataImportExportService,DataImportManager,AuditService,AuditManager)
		{
			
					
			$scope.saveAll=function(index)
			{
				var item=$scope.auditManager.currentAudit.clientTB[index];
				if(!item)
				{
					return;
				}
				item.busy=true;
				AuditClientTrialbalanceService.save(item)
				.then(function()
				{
					item.busy=false;
					$scope.saveAll(index+1)
				})
			}
			$scope.groupingMapChanged=function(item,index)
			{
				if(item.parentGrouping)
				{
					item.parent_code=item.parentGrouping.grouping_code;
					item.mapping_checked=1;
				}
				else
				{
					item.parent_code="";
					item.mapping_checked=0;
				}
				item.busy=true;
				AuditClientTrialbalanceService.save(item)
				.then(function()
				{
					item.busy=false;
					$scope.getMappingKeyForAccount(item,index);
				})
			}

			
			
			$scope.getMappingSuggestion=function(acct)
			{
				//return $scope.auditManager.currentAudit.validMappingKeys[0];
				for(var i in $scope.auditManager.currentAudit.validMappingKeys)
				{
					var grp=$scope.auditManager.currentAudit.validMappingKeys[i];
			
					var acctType=acct.account_type?acct.account_type.toUpperCase():"";
			
					var KeywordAcctType=grp.account_type?grp.account_type.toUpperCase():"------------";
			
					var KeywordAcctDescription=grp.mapping_hint?grp.mapping_hint.toUpperCase():"------------";

					var accountDescription=acct.account_description?acct.account_description.toUpperCase():"";
			
					var descKeywords=KeywordAcctDescription.split(";");
			
					var accTypKeywords=KeywordAcctType.split(";");
			
					for(var dc in descKeywords)
					{
						var descKeyword=descKeywords[dc];
						for(var tk in accTypKeywords)
						{
							var typKeyword=accTypKeywords[tk]
							if(acctType.indexOf(typKeyword)>=0 && accountDescription.indexOf(descKeyword)>=0)
							{
								return grp;
							}
						}
					}
				}
			}
			
			$scope.getMappingKeyForAccount=function(tb,i)
			{
				
					tb.status="unmapped";
					var codeItem=$scope.validGroupingHash["item" + tb.parent_code]
					var nameItem=$scope.validGroupingNameHash["item" + tb.parent_code]
					
					
					if(codeItem)
					{
						tb.parentGrouping=codeItem;
						tb.status="mapped";
					}
					else if(nameItem)
					{
						tb.parent_code=nameItem.grouping_code;
						tb.parentGrouping=nameItem;
						tb.status="suggested";
					}
					else
					{
						var parent=$scope.getMappingSuggestion(tb);
						if(parent)
						{
							tb.parent_code=parent.grouping_code;
							tb.parentGrouping=parent;
							tb.status="suggested";
						}
					}
			}
			$scope.initializeMapping=function()
			{
				var validMapping=$scope.auditManager.currentAudit.validMappingKeys;
				//=$scope.auditManager.accountGroupings;
				
				
				$scope.validGroupingHash=buildHash(validMapping,"item","grouping_code");
				$scope.validGroupingNameHash=buildHash(validMapping,"item","grouping_name");
				
				
				for(var i in $scope.auditManager.currentAudit.clientTB)
				{
					var tb=$scope.auditManager.currentAudit.clientTB[i];
					$scope.getMappingKeyForAccount(tb,i);
				}
			}
			
			$scope.checkDataLoad=function()
			{
				console.log("AuditTBMappingController.checkDataLoad","Checking....",trialCount,$scope.auditDetailLoaded);
				if(!$scope.auditDetailLoaded && trialCount<10)
				{
					trialCount++;
					$timeout($scope.checkDataLoad,1000);
				}
				else if($scope.auditDetailLoaded)
				{
					console.log("AuditTBMappingController.checkDataLoad","Data Loaded");
					$scope.initializeMapping();
				}
				else
				{
					console.log("AuditTBMappingController.checkDataLoad","No Data Loaded...givingup");
				}
			}
			$scope.reloaMappingdData=function()
			{
				trialCount=0;
				$scope.loadAllData()
				.then($scope.checkDataLoad);
			}
			$scope.onPageLoad2=function()
			{
				$scope.checkDataLoad();
			}
			var trialCount=0;
			$scope.onPageLoad2();
			
			$scope.audit_client_trialbalanceManager=AuditClientTrialbalanceManager.create();
			$scope.audit_client_trialbalanceManager.buildUploader();
			
			$scope.audit_client_trialbalanceManager.dataImportManager.buildImportRequestParams=function(params)
			{
				
			};
			 
			$scope.dataImportManager=$scope.audit_client_trialbalanceManager.dataImportManager;
			
			$scope.dataImportManager.afterImportDone=$scope.reloaMappingdData;

		}

		
/*--------------/SubstantiveAuditController------------------*/

		function SubstantiveAuditController($scope, $http, $filter,$stateParams,$state,$timeout,$localStorage,AuditClientTrialbalanceService
			,AuditService
			,AuditFindingService
			,AuditManagementLetterService
			,AuditTransactionManager
			,AuditAdjustmentService)
		{
			$scope.procedure={importance:5};
			$scope.procedureOpen=false;
			
			
			$scope.filterCriteriaLookup=[{value:"any",label:"All"},{value:true,label:"Marked Only" },{value:false,label:"Unmarked Only"}]
			$scope.newFilterValues={reconsiled:"any",sampled:"any",vouched:"any"};
			
			$scope.adjustment_window_displayed=false;
			
			$scope.editedAccountGrouping=""
			
			$scope.regroupData={}
			
			$scope.selectedName="substantive_audit";
			
			AuditAdjustmentController($scope, $http, $filter,$stateParams,$state,$timeout,AuditService,AuditAdjustmentService)
			
			
			$scope.extraSubstativeDataManager={};
		
			$scope.extraSubstativeDataManager.doCalculation=function()
			{
				var extraData=$scope.selectedFindingData.auditFinding.extra_data?$scope.selectedFindingData.auditFinding.extra_data:{};
				var dataType=$scope.selectedFindingData.procedure.extra_data;
				
				extraData.data_type=dataType;
				
				$scope.selectedFindingData.auditFinding.extra_data=extraData;
				
				console.log("extraSubstativeDataManager.doCalculation",extraData,dataType);
				
				$scope.selectedNode.data.ledgerBalance=($scope.selectedNode.data.balance.debit-$scope.selectedNode.data.balance.credit)*$scope.selectedNode.data.normal_balance;
				$scope.selectedNode.data.adjustedLedgerBalance=($scope.selectedNode.data.adjustedBalace.debit-$scope.selectedNode.data.adjustedBalace.credit)*$scope.selectedNode.data.normal_balance;
				for(var i in $scope.selectedNode.children)
				{
					var child=$scope.selectedNode.children[i];
					
					var normal_balance=child.data.normal_balance?child.data.normal_balance:$scope.selectedNode.data.normal_balance;
					
					child.data.ledgerBalance=(child.data.balance.debit-child.data.balance.credit)*normal_balance;
					child.data.adjustedLedgerBalance=(child.data.adjustedBalace.debit-child.data.adjustedBalace.credit)*normal_balance;
				}
				if($scope.extraSubstativeDataManager[dataType] && $scope.extraSubstativeDataManager[dataType].doCalculation)
				{
					$scope.extraSubstativeDataManager[dataType].doCalculation(extraData);
				}
			}
			$scope.extraSubstativeDataManager.income_summary={};
			$scope.extraSubstativeDataManager.bank_statement={};
			$scope.extraSubstativeDataManager.income_summary.doCalculation=function(extraData)
			{
				console.log("extraSubstativeDataManager.income_summary.doCalculation",extraData);
				extraData.declared_total=0;
				for(var i in extraData.declared_income)
				{
					extraData.declared_income[i]=$scope.getNumberValue(extraData.declared_income[i]);
					extraData.declared_total+=extraData.declared_income[i]/1;
				}
				var initSales={cash_reg:0,manual:0,refund:0,deffered:0,accrued:0,total:0};
				
				extraData.sales=extraData.sales?extraData.sales:initSales;
				var sales=extraData.sales;
				for(var i in initSales)
				{
					sales[i]=$scope.getNumberValue(sales[i]);
				}
				sales.deffered=$scope.getNumberValue(sales.deffered_end)-$scope.getNumberValue(sales.deffered_beg);
				sales.accrued=$scope.getNumberValue(sales.accrued_beg)-$scope.getNumberValue(sales.accrued_end);
				
				sales.total=sales.cash_reg + sales.manual - sales.refund;// - sales.deffered + sales.accrued;
				
			}
			$scope.extraSubstativeDataManager.bank_statement.doCalculation=function(extra_data)
			{
				extra_data.total=0;
				
				extra_data.total_chk=0;
				
				extra_data.total_dep=0;
				
				extra_data.difference=0;
				for(var i in extra_data.stmt)
				{
					extra_data.stmt[i].balance=$scope.getNumberValue(extra_data.stmt[i].balance);
					extra_data.stmt[i].out_chk=$scope.getNumberValue(extra_data.stmt[i].out_chk);
					extra_data.stmt[i].out_dep=$scope.getNumberValue(extra_data.stmt[i].out_dep);
					
					extra_data.total+=extra_data.stmt[i].balance;
					extra_data.total_chk+=extra_data.stmt[i].out_chk;
					extra_data.total_dep+=extra_data.stmt[i].out_dep;
					
					
				}
			}
			

			$scope.onCreateNewAccount=function(node)
			{
				var acct={parent_code:node.data.grouping_code,mapping_checked:1,parentGrouping:node.data}
				$scope.showCreateAccountModal(acct);
			}
			
			$scope.onBalanceTypeChange=function()
			{
				$scope.balanceType=$scope.filter.show_adjusted?"adjustedBalace":"balance";
			}
			
			$scope.saveGrouping=function()
			{
				var prevParent=$scope.regroupData.parent;
				var pid=$scope.editedAccountGrouping.parentGrouping.grouping_code;
				
				$scope.editedAccountGrouping.parent_code=pid;
				
				AuditClientTrialbalanceService.save($scope.editedAccountGrouping)
				.then(function(){

							var node=$scope.regroupData.node;
							$("#modal_regroup").modal("hide");
							node.parentId="item" + pid;
							node.parent_id=pid;
							
							var newParent=$scope.treeManager.treeHash[node.parentId];
							
							prevParent.children.splice($scope.regroupData.index,1);
							
							newParent.children.push(node);
							
							/*
							for(var i in $scope.treeManager.tree)
							{
								$scope.getCalculatedValue($scope.treeManager.tree[i]);
							}*/
							$scope.reCalculateBalances();
						});
						//$scope.getCalculatedValue($scope.treeManager.tree[i]);
				
			}
			
			//formbuilder.services.js 221
			
			$scope.onRegroupClick=function(node,index)
			{
				$scope.editedAccountGrouping=node.data;
				
				var parent=$scope.treeManager.treeHash[node.parentId];
				
				$scope.editedAccountGrouping.parentGrouping=parent
				
				console.log("onRegroupClick",node.parentId,node.parent_id,index);
				
				$scope.regroupData={node:node,index:index,parent:parent}
				
				$("#modal_regroup").modal("show");
			}
			
			$scope.onAdjustmentClick=function(node)
			{
				$scope.adjustment_window_displayed=true;
				
				$("#modal_audit_adjustment").modal("show");
				$timeout(function(){$scope.addAdjustment({account_id:node.data.account_id})},1000);
			}
			$scope.onAdvancedFilterClick=function()
			{
				for(var i in $scope.newFilterValues)
				{
					$scope.newFilterValues[i]=$scope.filter[i];
				}
			}
			$scope.setAdvancedCriteria=function()
			{
				for(var i in $scope.newFilterValues)
				{
					$scope.filter[i]=$scope.newFilterValues[i];
				}
			}
			
			$scope.onToggleAcctStatus=function(node,attrib)
			{
				//var acctIdFields={acct:"account_id",GK:"grouping_code",txn:""}
				var id=node.data.entity_type + node.data.id;
				console.log("onAcctStatusChange",id);
				
				var target=$scope.relationshipManager.objHash[node.data.entity_type + node.data.id];
				if(target)
				{
					target.accountStatus=target.accountStatus?target.accountStatus:{};
					target.accountStatus[attrib]=!target.accountStatus[attrib];
					console.log("onAcctStatusChange Target Found",target);
				}
				
			}
			
			$scope.loadAuditFindingForAccountProcedure=function(params)
			{
				return AuditService.readAuditFindingForAccountProcedure(params)
				.then(function(sr){
					if(sr=="")
					{
						sr=params;
					}
						
					 $scope.selectedFindingData.auditFinding=sr.auditFinding;
					 $scope.selectedFindingData.managementLetter=sr.auditManagementLetter;
					 sr.auditManagementLetter.qualification_pointBool=(sr.auditManagementLetter.qualification_point=="1");
					 
					 
					 return sr;
					});
			}
			$scope.saveFinding=function(auditFinding)
			{
				$scope.statusBusy=1;
				
				//AuditFindingService.save(auditFinding)
				AuditService.saveFinding(auditFinding)
				.then(function(sr){
					console.log(sr);
					$scope.statusBusy=0;
					if(sr.lastInsertId/1)
					{
						auditFinding.audit_finding_id=sr.lastInsertId/1;
						$scope.selectedFindingData.account.findingsCount=$scope.selectedFindingData.account.findingsCount/1+1;
					}
					//$("#audit_finding").modal("hide");
					});
				
			}
			$scope.saveLetter=function(auditLetter)
			{
				$scope.statusBusy=1;
				//auditLetter.qualification_point=auditLetter.qualification_pointBool?1:0;
				AuditManagementLetterService.save(auditLetter)
				.then(function(sr){
					console.log(sr);
					if(sr.audit_management_letter_id!=auditLetter.audit_management_letter_id)
					{
						auditLetter.audit_management_letter_id=sr.audit_management_letter_id;
					}
					$scope.statusBusy=0;
					
					//$("#audit_finding").modal("hide");
					});
				
			}
			
						
			$scope.getValidProcedures=function(node,arry,ignore_not_for_children)
			{
				ignore_not_for_children=ignore_not_for_children?ignore_not_for_children:false;
				
				if(node.data.workingProcedures)
				{
					for(var i in node.data.workingProcedures)
					{
						var wp=node.data.workingProcedures[i];
						
						wp.not_for_children=wp.not_for_children?wp.not_for_children:0;
						
						if(!ignore_not_for_children || !(wp.not_for_children/1))
						{
							wp.done=0;
							arry.push(wp);
						}
					}
				}
				console.log("getValidProcedures",node);
				var parent=node.parent;
				
				parent=parent?parent:$scope.treeManager.treeHash[node.parentId];
				if(parent)
				{
					$scope.getValidProcedures(parent,arry,true)
				}
				return arry;
			}
			
			$scope.onAccountFindingClick=function(node)
			{
				$timeout(function(){$scope.procedureOpen=true;},1000);
				$scope.selectedAccount=node.data;
				$scope.selectedNode=node;
				
				$scope.selectedAuditProcedures=$scope.getValidProcedures(node,[]);
				console.log("selectedAuditProcedures",$scope.selectedAuditProcedures.length);
				/*
				$scope.loadAuditFindingsForAccount($scope.audit_engagement_id,$scope.selectedAccount.account_id,$scope.selectedAccount.objType)
				.then(function(sr){
					for(var i  in sr)
					{
						var item=sr[i];
						var ap=$scope.auditProceduresHash["proc" + item.audit_procedure_id]
						if(ap)
						{
							//console.log("Procedure Done",ap);
							ap.done=1;
							console.log("Procedure Done",ap);
						}
					}
					});
				*/
				//$("#audit_finding").modal();
				$("#modalProcedures").modal("show");
			}

			$scope.auditProcedureClick=function(proc)
			 {
				 var newFinding={
					 	audit_id: $scope.audit_engagement_id
						,audit_procedure_id: proc.audit_procedure_id
						,audited_item_id:$scope.selectedAccount.id
						,audited_item_type:$scope.selectedAccount.entity_type
						,work_done:"",notes:""
						,issues:""
						,review_notes:""
						,content:""
						,response:""
						};
				 $scope.selectedFindingData={account:$scope.selectedAccount,procedure:proc,auditFinding:newFinding}
				 
				 console.log("auditProcedureClick",proc);
				 $scope.loadAuditFindingForAccountProcedure(newFinding)
				 .then(function(sr){
				 $("#modalProcedures").modal("hide");
				 sr.activeTabWork='tab_work_done';
				 $("#audit_finding").modal();
				 });
			 }	
			 
			$scope.transactionManager=AuditTransactionManager.create();
			$scope.transactionManager.buildUploader();  
			$scope.transactionManager.dataImportManager.buildImportRequestParams=function(params)
			{
				return params;
			};
			 
			$scope.dataImportManager=$scope.transactionManager.dataImportManager;
			$scope.dataImportManager.afterImportDone=function(){console.log("import");
			alert("Import Done");
			//$scope.loadTransactionCounts();
			}
			
			$scope.loadFilterValue2=function()
			{
				//$scope.filter
				console.log("---------------loadFilterValue",$scope.filter);
				var filterStorageName="auditAppFilter" + $scope.audit_engagement_id;
					
					 if (angular.isDefined($localStorage[filterStorageName])) 
					 {
						$scope.filter = $localStorage[filterStorageName];
					 }
					 else
					 {
						 $localStorage[filterStorageName]=$scope.filter;
					 }
			}
			$scope.loadFilterValue();
			$scope.onBalanceTypeChange();
		}
		
		
		function AuditSetupGroupingController($scope, $http, $filter,$stateParams,$state,$timeout,$localStorage
			,AuditService)
		{
			$scope.GKtreeOptions={idField:"grouping_code",parentId:"parent_code",label:"grouping_name",includeFields:["description","tags"]}
			
			$scope.treeManager=new TreeManager();
			
			$scope.formData={selectedAccount:"",expanded:{}}
			
			$scope.regroupInfo={};
			
			if (angular.isDefined($localStorage["SetupGroupingForm"])) 
			{
				$scope.formData = $localStorage["SetupGroupingForm"];
			}
			$localStorage["SetupGroupingForm"]=$scope.formData;
			
			$scope.RegroupHere=function(parent_node)
			{
				var acct=$scope.regroupInfo.node.data;
				acct.parent_code=parent_node.id;
				
				$scope.formData.expanded [parent_node.id]=true;
				$scope.cancelRegroup();
				$scope.saveItem(acct);
			}
			
			$scope.cancelRegroup=function()
			{
				$scope.regroupInfo={started:false};
			}
			$scope.startRegroup=function(node)
			{
				$scope.regroupInfo={started:true,node:node};
			}
			
			$scope.addChild=function(node)
			{
				var acct={grouping_code:node.data.grouping_code + "_1",parent_code:node.data.grouping_code,normal_balance:node.data.normal_balance,grouping_name:"New Account"};
				var child_node={label:acct.grouping_name,id:acct.grouping_code,data:acct};
				
				$scope.treeManager.makeTree([acct],$scope.TBtreeOptions,true);
				
				//node.children.push(child_node);
				$scope.onItemSelect(child_node);
			}
			$scope.deleteItem=function(node)
			{
				if(confirm("Are you sure?"))
				{
					AuditService.deleteGrouping(node.data.audit_account_grouping_id)
					.then($scope.loadGroupingAccounts);
				}
			}
			
			$scope.saveItem=function(data)
			{
				var fields={grouping_code:"", grouping_name:"", description:"", parent_code:"", account_type:"", mapping_hint:"", system_name:"", report_label:data.grouping_name
					, normal_balance:1, report_note_name:""}
				for(var i in fields)
				{
					data[i]=data[i]?data[i]:fields[i];
				}
				
				$scope.formData.selectedAccount=data.grouping_code;
				AuditService.saveGrouping(data)
				.then(function(sr)
				{
					$scope.loadGroupingAccounts();
					//$scope.editedNode.data
				})
			}
			$scope.onItemSelect=function(node)
			{
				$scope.formData.selectedAccount=node.id;
				$scope.editAccount();
			}
			
			$scope.editAccount=function()
			{
				$scope.editedNode=$scope.treeManager.treeHash["item"+$scope.formData.selectedAccount];
			}
			
			$scope.loadGroupingAccounts=function()
			{
				return AuditService.readAllGroupingKeys()
				.then(function(sr){
					$scope.treeManager.makeTree(sr,$scope.GKtreeOptions);
					$scope.editAccount();
				return sr;
				});
			}
			$scope.loadGroupingAccounts();
		}
		function AuditSetupValidGroupingController($scope, $http, $filter,$stateParams,$state,$timeout
			,AuditService)
		{
			$scope.GKtreeOptions={idField:"grouping_code",parentId:"parent_code",label:"grouping_name",includeFields:["description","tags"]}
			
			$scope.accountGrouping=[];
			$scope.allowedGrid={};
			$scope.companyTypeGroupingKeys=[];
			
			$scope.toggleAllowed=function(ctgk)
			{
				ctgk.allowed=ctgk.allowed==1?0:1;
				AuditService.saveCompanyTypeGroupingKeys(ctgk)
				.then(function(sr) {
					if(sr.lastInsertId/1)
					{
						ctgk.company_type_key_id=sr.lastInsertId;
					}
					});
			}
			
			$scope.populateAllowedGrid=function()
			{
				for(var i in $scope.companyTypeGroupingKeys)
				{
					var k=$scope.companyTypeGroupingKeys[i];
					$scope.allowedGrid["a"+k.grouping_code+"_"+k.audit_company_type_id]=k;
				}
			}
			
			$scope.loadCompanyTypeGroupingKeys=function()
			{
				return AuditService.readCompanyTypeGroupingKeys()
				.then(function(sr){
					$scope.companyTypeGroupingKeys=sr;
					$scope.populateAllowedGrid();
					return sr;
				});
			}
			
			$scope.buildGrid=function()
			{
				for(var a in $scope.accountGrouping)
				{
					var acct=$scope.accountGrouping[a];
					
					for(var c in $scope.companyTypesLookup)
					{
						var ct=$scope.companyTypesLookup[c];
						
						var val=((c/1+a/1)%2);
						
						var ctgk={grouping_code:acct.grouping_code,audit_company_type_id:ct.audit_company_type_id,allowed:0};
						
						$scope.allowedGrid["a"+acct.grouping_code+"_"+ct.audit_company_type_id]=ctgk;
					}
				}
				console.log("$scope.allowedGrid",$scope.allowedGrid);
			}
			$scope.setAccountGrouping=function(sr)
			{
				$scope.accountGrouping=sr;
				$scope.buildGrid();
			}
			
			$scope.loadGroupingAccounts=function()
			{
				return AuditService.readAllGroupingKeys()
				.then(function(sr){$scope.setAccountGrouping(sr);
				return sr;
				});
			}
			$scope.onAuditSetupGroupingLoaded=function()
			{
				$scope.loadCompanyTypesLookup()
				.then($scope.loadGroupingAccounts)
				.then($scope.loadCompanyTypeGroupingKeys)
			}
			$scope.onAuditSetupGroupingLoaded();
		}
		
		function AuditAppSettingController($scope, $http, $filter,$stateParams,$state,CoreAppSettingService,CoreLookupService,CoreLookupManager,AuditService)
		{
			$scope.saveSettings=function()
			{
				CoreAppSettingService.saveMultiple($scope.auditAppSettings)
				.then($scope.onAuditAppSettingPageLoad);
			}
			$scope.onAuditAppSettingPageLoad=function()
			{
				$scope.loadAuditAppSettings();
			}
			$scope.onAuditAppSettingPageLoad();
		}
		
		function AuditDocumentsController($scope,$http,$filter,$stateParams,$state,$timeout
			,AuditService
			,AuditEngagementService
			,DigitalDocumentService
			,DocumentManager
			,FileUploader
			,AppService) 
		{

			$scope.documentManager=DocumentManager.create();
	
			$scope.documentManager.state=$state;

			$scope.documentManager.viewType="view";
			
			var trialCount=0;
			
			$scope.insertQRCode=function(node)
			{
				
				$scope.insertQRCodeMessage={canInsert:false};
				var requiredDocuments={}
				for(var i in node.children)
				{
					var childDoc=node.children[i].data;
					requiredDocuments[childDoc.system_name]=childDoc.document_path;
				}
				if(requiredDocuments.output_fs && requiredDocuments.output_qrcode)
				{
					$scope.app.status.working=true;
					$scope.insertQRCodeMessage.canInsert=true;	
					var param={folder:$scope.app.uploadOptions.fileLocation,fileName:requiredDocuments.output_fs,imageFileName:requiredDocuments.output_qrcode,verficationCode:""}
					AuditService.insertVerficationCodeToFile(param)
					.then(function(sr){$scope.insertQRCodeMessage.serverResponse=sr;
					$scope.app.status.working=false;
					});
				}
				else
				{
					
						/*
						$folder=get_attribute_value($params,"folder");
	$fileName=get_attribute_value($params,"fileName");
	$imageFileName=get_attribute_value($params,"imageFileName","qrcode.png");
	$verficationCode=get_attribute_value($params,"verficationCode","");

						*/
					$scope.insertQRCodeMessage.message="Please generate qr code and financial statements";
				}
				//$scope.insertQRCodeMessage=requiredDocuments;
			}
			$scope.publishReportToRemote=function()
			{
				$scope.app.status.working=true;
				var audit=$scope.auditManager.currentAudit.engagementInfo;
				var companyName=$scope.auditManager.currentAudit.customer.customer_name;
				
				var verificationCode = $scope.auditManager.currentAudit.engagementInfo.verification_code;
				
				var reportData={verificationCode:verificationCode,companyName:companyName,reportDate:audit.schedules_date,reportPeriod:audit.closing_date};
				
				var remoteApiParam={url:$scope.auditAppSettings.verification_publish_route.setting_value,method:"post",params:{reportData:reportData}};
				$scope.publishFSMessage={};
				
				AppService.runRemoteApi(remoteApiParam)
				.then(function(sr){$scope.publishFSMessage=sr;
				$scope.app.status.working=false;
				});
				
			}
			
			$scope.generateQRCode=function(doc)
			{
				var verificationCode=$scope.auditManager.currentAudit.engagementInfo.verification_code;
				AuditService.generateQRCode($scope.auditAppSettings.verification_site.setting_value,verificationCode)
				.then(function(sr){
					doc.document_path=verificationCode + ".png"
					$scope.documentManager.saveItem(doc);
					});
			}
			$scope.generateFSToDoc=function(doc,fs)
			{
				$scope.app.status.working=true;
				doc.document_path="";
				$scope.generateFS(fs)
				.then(function(sr){
					
					$scope.app.status.working=false;
					
					doc.document_path=sr.outputFile;
					
					console.log("generateFSToDoc",sr);
					$scope.documentManager.saveItem(doc);
					})
				
				//$scope.exportToExcel($scope.formManager.fields,$scope.companyTypesHash['item'+auditManager.currentAudit.engagementInfo.company_type].report_template)
			}
			
			
			$scope.checkDataLoad=function()
			{
				console.log("AudtiDocumentsController.checkDataLoad","Checking....",trialCount,$scope.auditDetailLoaded);
				if(!$scope.auditDetailLoaded && trialCount<10)
				{
					trialCount++;
					$timeout($scope.checkDataLoad,1000);
				}
				else if($scope.auditDetailLoaded)
				{
					console.log("AudtiDocumentsController.checkDataLoad","Data Loaded");
					$scope.loadDocuments();
				}
				else
				{
					console.log("AudtiDocumentsController.checkDataLoad","No Data Loaded...givingup");
				}
			}
			$scope.createAuditDocument=function()
			{
				var newAttribs={parent_type:"Audit",parent_id:$scope.audit_engagement_id,isTemplate:0};
				var auditFileName=$scope.auditManager.currentAudit.customer.customer_name+ " - " +$scope.auditManager.currentAudit.closing_date;
							
				var root_attributes={folder_id:$scope.auditAppSettings.file_target_folder.setting_value,document_name:auditFileName,permission:""}
				
				$scope.documentManager.createFromTemplate($scope.auditAppSettings.audit_document_template.setting_value,root_attributes,newAttribs)
				.then(function(sr){
					console.log("Create from template",sr);
					$scope.auditManager.currentAudit.engagementInfo.document_id=sr.document_id;
					AuditEngagementService.save($scope.auditManager.currentAudit.engagementInfo);
					$scope.loadDocuments();
				});		
			}
			
			$scope.loadDocuments=function()
			{
				if(!($scope.auditManager.currentAudit.engagementInfo.document_id/1))
				{
					return $scope.loadAuditAppSettings();
				}
				$scope.documentManager.readList=function(){return DigitalDocumentService.readWholeTree($scope.auditManager.currentAudit.engagementInfo.document_id)}
				
				$scope.documentManager.loadList()
				.then(function(){
							console.log("Audit Files Doc_id",$scope.auditManager.currentAudit.document_id, " Tree ",$scope.documentManager.treeManager.tree.length);
							
							if(!$scope.documentManager.treeManager.tree.length)
							{
								//$scope.loadAuditAppSettings();
							}
							else if($scope.selectedName)
							{
								var node=$scope.documentManager.selectNodeByName($scope.selectedName,true);
								if(node)
								{
									$scope.documentManager.readList=function(){return DigitalDocumentService.readWholeTree(node.data.document_id)}
								}
							}
						
						})
				
			}
			
			$scope.loadAuditAppSettings();
			$scope.checkDataLoad();
			$scope.documentTemplate={list:"app/Document/content/DocumentList.html",detail:'app/Document/content/DocumentPreview.html'};
		}
		
		function AuditSubstantiveDocumentsController($scope,$http,$filter,$stateParams,$state,$timeout,AuditEngagementService,DigitalDocumentService,DocumentManager,FileUploader) 
		{
			
			$scope.documentManager.onAfterAddingFile=function(fileItem)
			{
				var id=$scope.selectedFindingData.account.entity_type + "_" + $scope.selectedFindingData.account.id;
				fileItem.digitalDocumentData.parent_type=id;
				
				console.log("AuditSubstantiveDocumentsController.onAfterAddingFile",fileItem);
				$scope.documentManager.showUploadList();
			}
			$scope.documentTemplate.list="app/Audit/content/substantive.audit/substantive.audit.files.html";
		}
		
		function AuditInputDocumentsController($scope,$http,$filter,$stateParams,$state,$timeout,AuditService,AuditEngagementService,DigitalDocumentService,DocumentManager,FileUploader,DataImportExportService) 
		{
			$scope.selectedName="input_docs";
			AuditDocumentsController($scope,$http,$filter,$stateParams,$state,$timeout,AuditService,AuditEngagementService,DigitalDocumentService,DocumentManager,FileUploader) ;
			
			$scope.importFile=function(inputDoc)
			{
				console.log("importFIle",inputDoc);
				//return;
				var filePath=inputDoc.docNode.data.document_path;
				var params=inputDoc.importParam;
				
				params.filePath=["files/uploads/" + filePath,"files/excel/defaultAccounts.xlsx"];
				
				var canImport=true;
				if(inputDoc.recordLen)
				{
					canImport=confirm("Are you sure?");
				}
				if(!canImport)
				{
					return;
				}
				
				return DataImportExportService.import(params.fileType,params)
				.then(function (sr)
					{
						if(inputDoc.name=="input_clientTB")
						{
							AuditService.mapTbFromPrevEngagement($scope.audit_engagement_id)
							.then(function(sr){
								//inputDoc.message=sr.unmapped_count + " unmapped accounts";
								//inputDoc.message=me
								});
						}
						$scope.loadAllData()
						.then($scope.updateRecordsLength)
					return sr;
					});
			}
			
			
				
			var audit_transactionParams={fileType:"Excel",eraseExisting:true,
				dataTable:"audit_transaction"
				,fields_list:
					{parent_code:{col:"A"}
					,audit_transaction_id:{dataType:"uniqueId"}
					,txn_date:{col:"C"}
					,reference:{col:"D"}
					,jrnl:{col:"E"}
					,description:{col:"F"}
					,debit:{col:"G",dataType:"number"}
					,credit:{col:"H",dataType:"number"}	
					,balance:{col:"I",dataType:"number"}
					,audit_id:{value:$scope.audit_engagement_id}
					}
					,eraseCriteria:" WHERE audit_id='" + $scope.audit_engagement_id + "'"
					
				}


			var audit_client_trialbalanceParams={fileType:"Excel",eraseExisting:true,
				dataTable:"audit_client_trialbalance"
				,fields_list:
					{account_id:{col:"A"}
					,audit_client_trialbalance_id:{dataType:"uniqueId"}
					,account_description:{col:"B"}
					,debit:{col:"C",dataType:"number"}
					,credit:{col:"D",dataType:"number"} 
					,account_type:{col:"E"}	
					,current_balance:{col:"F",dataType:"number"}	
					,last_fye_balance:{col:"G",dataType:"number"}	
					,parent_code:{col:"H"}
					,audit_engagement_id:{value:$scope.audit_engagement_id}
					}
					,eraseCriteria:" WHERE audit_engagement_id='" + $scope.audit_engagement_id + "'"
					,queryAfterImport:"DELETE FROM audit_client_trialbalance WHERE account_id=''"
				}

			$scope.inputDocsList={input_ptb:{name:"input_ptb",label:"Peachtree Backup"}
				,input_clientTB:{name:"input_clientTB",importParam:audit_client_trialbalanceParams}
				,input_txn:{name:"input_txn",importParam:audit_transactionParams}
			}
			var trialCount=0;
			
			$scope.updateRecordsLength=function(inputDocs)
			{
				$scope.inputDocsList.input_clientTB.recordLen=$scope.auditManager.currentAudit.clientTB.length;
				$scope.inputDocsList.input_txn.recordLen=$scope.auditManager.currentAudit.txnCount/1;
				
			}
			
			$scope.getInputDocNodes=function()
			{
				trialCount++;
				if(trialCount>10)
				{
					return;
				}
				var loadedNodes=0;
				for(var i in $scope.inputDocsList)
				{
					
					var docNode=$scope.documentManager.selectNodeByName(i);
					if(docNode)
					{
						$scope.inputDocsList[i].docNode=docNode;
						loadedNodes++;
					}
				}
				if(loadedNodes<3)
				{
					$timeout($scope.getInputDocNodes,1000);
				}
				else
				{
					$scope.updateRecordsLength($scope.inputDocsList)
				}
			}
			
			$scope.getInputDocNodes();
			
			$scope.documentTemplate.detail="app/Audit/content/audit.inputdoc.detail.html";
		}
		
		
		function AuditVerificationController($scope, $http, $filter,$stateParams,$state,CoreAppSettingService,CoreLookupService,CoreLookupManager,AuditService)
		{
			
			$scope.onAuditVerificationPageLoad=function()
			{
				$scope.loadAuditAppSettings();
			}
			$scope.onAuditVerificationPageLoad();
		}	
		
		function AuditMessagingController($scope, $http, $filter,$stateParams,$state,CoreAppSettingService,CoreLookupService,CoreLookupManager,AuditService)
		{
			$scope.newDiscussionParams=function(param)
			{
				return {parent_type:"Audit",parent_id:$scope.audit_engagement_id,discussion_name:"Audit- " + $scope.auditManager.currentAudit.auditName
					,participants:$scope.auditManager.currentAudit.engagementInfo.assignee};
				
			}
			$scope.messagingOptions={showDiscussionList:false
					,discussion:{loadMethod:"loadDiscussionForEntity",entity_type:"Audit",entity_id:$scope.audit_engagement_id}
					,createIfNotFound:true,newDiscussionParams:$scope.newDiscussionParams};
		}
        
    
                                         
        function AuditQualificationController($scope, $http, $filter,$stateParams,$state,AuditManagementLetterService,CoreLookupService,AuditService)
		{
			$scope.saveQualificationPoint=function(item)
			{
				if(item.modified)
				{
                   AuditManagementLetterService.save(item)
                    .then(function(sr){
                       item.modified=false;
					console.log(sr);})
                }
                
            }
            $scope.onAfterReorder=function(items,drop_index)
            {
                console.log("onAfterReorder",items);
                for(var i in items)
                {
                    items[i].display_order=i*1+1;
                    AuditManagementLetterService.save(items[i]);
                }
            }
            $scope.onArchiveChange=function(item)
            {
                item.archived=(item.archivedB?1:0);
                AuditManagementLetterService.save(item);
            }
            $scope.qualificationListDragOption={stop:$scope.onAfterReorder}
		}
			
    
    
    
    
    
    
    
		function AuditPrintablesController($scope, $http, $filter,$stateParams,$state,$timeout,CoreAppSettingService,CoreLookupService,CoreLookupManager,AuditService)
		{
            $scope.letter_templates=[];
           // $scope.officialDocs.selectedFolder="";
            $scope.selectLicenseFolder=function(doc)
            {
                $scope.officialDocs.selectedFolder=doc;
                $scope.officialDocs.selectedImagesPath=$scope.officialDocs.imagesPath  + doc + "/";
                $scope.readOfficialDocuments(doc);
            }
            $scope.selectLicenseDoc=function(name)
            {
                var doc=$scope.officialDocs.filesHash["f_"+name]
                if(doc)
                {
                    if(!doc.selected)
                    {
                        doc.selected=true;
                        $scope.officialDocs.selected.push(name);
                    }    
                }
                else
                {
                    $scope.officialDocs.selected.push(name);    
                }
            }
            
            $scope.unSelectLicenseDoc=function(index)
            {
                var docName=$scope.officialDocs.selected[index];
                $scope.officialDocs.selected.splice(index,1);
                var doc=$scope.officialDocs.filesHash["f_"+docName]
                if(doc)
                {
                    doc.selected=false;
                }
            }
            $scope.readOfficialDocuments=function(folder)
            {
                //var docsPath="../files/company_files/official_docs";
                AuditService.readFolderContent($scope.officialDocs.docsPath + "/" + folder)
                .then(function(sr){
                    $scope.officialDocs.selected=sr.files;
                });
            }
            $scope.readOfficialDocumentsList=function()
            {
                //var docsPath="../files/company_files/official_docs";
                AuditService.readFolderContent($scope.officialDocs.docsPath)
                .then(function(sr){
                    $scope.officialDocs.available=sr.folders;
                    $scope.selectLicenseFolder($scope.officialDocs.defaultFolder)
                });
            }
            $scope.readLetterTemplates=function(doc)
            {
                AuditService.searchWebContentByCategory("letter")
                .then(function(sr)
                {
                    $scope.letter_templates=sr;
                    if(sr[0]) {doc.param.letter_template=sr[0].reference;}               
                });
            }
            
			$scope.audit={form:{}};
			$scope.activeDocument={};
			
			$scope.watermarkOptionsLookup=[{value:"",label:"Light"},{value:"watermark-dark",label:"Dark"}];
			
			
			
			$scope.headerOptionsLookup=[{value:"none",label:"Dont Show"},{value:"first-page",label:"Show On First Page"},{value:"every-page",label:"Show On Every Page"}];
			
			$scope.printableParams={copy:"Original",header:"every-page",footer:"none",watermark:"watermark-dark",submission_purpose:"Audit Engagement",showPageNo:false};
			
			$scope.documentTitles={default:"INDEPENDENT AUDITOR’S REPORT AND FINANCIAL STATEMENTS",networth:"MEMBER’S NET WORTH CERTIFICATE"}
			
			$scope.documentStyles={hafa:{header:"every-page",footer:"every-page"},h1fa:{header:"first-page",footer:"every-page"},hnfa:{header:"none",footer:"every-page"},hnfn:{header:"none",footer:"none"}}
			
			$scope.printableDocContents={
			cover:{style:"a4",docPath:"app/Audit/content/printables/cover/cover.html",config:"app/Audit/content/printables/cover/cover.config.html"}
			,Opinion:{name:"Opinion",style:"min-a4",label:"Opinion"
					,param:$scope.documentStyles.h1fa
					 ,docPath:"app/Audit/content/printables/multipage_doc.html"	
					 ,contentPath:"app/Audit/content/printables/opinion/opinion.html"
					 }
			,networth:{name:"networth",label:"NetWorth",style:"min-a4"
						,param:$scope.documentStyles.h1fa
						,docPath:"app/Audit/content/printables/multipage_doc.html"
						,contentPath:"api/WebContentService/getContent/net_worth"}
				 
			//,mgment_letter:{name:"mgment_letter",label:"Mngmnt Ltr",docPath:"app/Audit/content/printables/mgment_letter/mgment_letter.html"}
			
			}
			
			$scope.officialDocs={
                selected:[]
                ,defaultSelected:["licence_ht.png","aabe_ht.png","aabe_2_ht.png","tin_ht.png","registration_ht.png","vat_ht.png","prof_reg_ht.png","acca_ht.png","sfai_ht.png"]
                ,docsPath:"../files/company_files/official_docs"
                ,imagesPath:"files/company_files/official_docs/"
                ,defaultFolder:"default"
                ,available:[],selectedFolder:""}
			
            
            
			$scope.printableDocs={
			cover:{name:"cover",label:"Cover",config:{copy:1},title:$scope.documentTitles.default,contents:[$scope.printableDocContents.cover]
					,permission:"app.audit.printables.cover"}
			,Opinion:{name:"Opinion",label:"Opinion",title:$scope.documentTitles.default
					,contents:[$scope.printableDocContents.cover,$scope.printableDocContents.Opinion]
					,params:{Original:$scope.documentStyles.h1fa,Draft:$scope.documentStyles.hnfa}
					,param:$scope.documentStyles.h1fa,config:{copy:1,opinion:1}
					,permission:"app.audit.printables.opinion"}
			,networth:{name:"networth",label:"NetWorth",title:$scope.documentTitles.networth
					,contents:[$scope.printableDocContents.cover,$scope.printableDocContents.networth]
					,params:{Original:$scope.documentStyles.h1fa,Draft:$scope.documentStyles.hnfa}
					,param:$scope.documentStyles.h1fa,config:{copy:1}
					,permission:"app.audit.printables.networth"
						}
			,engagement:{name:"engagement",label:"Engagement",param:$scope.printableParams,config:{header:1,footer:1}
					,contents:[
						{docPath:"app/Audit/content/printables/multipage_doc.html",
						contentPath:"api/WebContentService/getContent/printables-engagement",style:"min-a4",param:$scope.documentStyles.hnfn}
						]
						,permission:"app.audit.printables.engagement"}
						
			,repletter:{name:"repletter",label:"Rep. Letter",param:$scope.documentStyles.hnfn
					,contents:[
						{docPath:"app/Audit/content/printables/multipage_doc.html",
						contentPath:"api/WebContentService/getContent/management_representation",style:"min-a4",param:$scope.documentStyles.hnfn}
						]
						,permission:"app.audit.printables.repletter"}
						
			,license:{name:"license",label:"License",onShow:$scope.readOfficialDocumentsList,configButton:"configLicense"
                      ,config:{watermark:1,submission_purpose:1},param:$scope.documentStyles.hnfn
					,contents:[{docPath:"app/Audit/content/printables/multipage_doc.html",contentPath:"app/Audit/content/printables/license/license.html",style:"min-a4"}
					]
					,permission:"app.audit.printables.license"}
					
			,letterhead:{name:"letterhead",label:"Letters",onShow:$scope.readLetterTemplates,param:{header:"every-page",footer:"every-page",hideQr:true,letter_template:1},footer:"footer-qr.html",config:{letter_template:true,header:0,footer:0}
					,contents:[
						{docPath:"app/Audit/content/printables/multipage_doc.html",
						contentPaths:"api/WebContentService/getContent/letter_template"
						,contentPath:"dynamic_letters_template.html"
						,style:"min-a4",param:$scope.documentStyles.hnfn}
						]
						,permission:"app.audit.printables.letterhead"}
			,financial_statements:{
					name:"financial_statements",label:"FS",title:$scope.documentTitles.default
					,param:{showPageNo:true},config:{copy:1,opinion:1}
					,permission:"app.audit.printables.fs"
					,page:"app/Audit/content/printables/fs/fs.main.html"
					
					
					}
					/*
			,proposal:{name:"proposal",label:"Proposal",config:{watermark:1,submission_purpose:1,header:1,footer:1},param:$scope.printableParams
					,contents:[
						$scope.printableDocContents.cover
						,{docPath:"app/Audit/content/printables/multipage_doc.html",
						contentPath:"app/Audit/content/printables/mg.rep.letter.html",style:"min-a4",param:$scope.documentStyles.hnfn}
						,{docPath:"app/Audit/content/printables/multipage_doc.html",contentPath:"app/Audit/content/printables/license.html",style:"min-a4"}
					]
					,permission:"app.audit.printables.proposal"}	*/	
			
			//,mgment_letter:{name:"mgment_letter",label:"Mngmnt Ltr",docPath:"app/Audit/content/printables/mgment_letter/mgment_letter.html"}
			
			}

            $scope.onReportOpinionChange=function()
			{
				$scope.auditDetailLoaded=false;
				//$scope.setActiveDoc("cover");
				$timeout(function(){
					$scope.auditDetailLoaded=true;
					//$scope.setActiveDoc("Opinion")
					},1000);
			}
			
			$scope.setDocParam=function(doc)
			{
				if(doc.params)
				{
					
					if(doc.params[$scope.printableParams.copy])
					{
						doc.param=doc.params[$scope.printableParams.copy];
					}
				}
			}
			
			$scope.setActiveDoc=function(doc_name)
			{
				$scope.activeDocument=$scope.printableDocs[doc_name];
				$scope.setDocParam($scope.activeDocument);
                if($scope.activeDocument.onShow)
                {
                    $scope.activeDocument.onShow($scope.activeDocument);    
                }
			}
			
			
			$scope.checkDataLoad=function()
			{
				//console.log("AuditPrintablesController.checkDataLoad","Checking....",trialCount,$scope.auditDetailLoaded);
				if(!$scope.formValueLoaded && trialCount<10)
				{
					trialCount++;
					$timeout($scope.checkDataLoad,1000);
				}
				else if($scope.formValueLoaded)
				{
					//console.log("AuditPrintablesController.checkDataLoad","Data Loaded",$scope.formManager.fields);
					//$scope.loadDocuments();
					$scope.initializePrintVariables();
                    $scope.setActiveDoc("Opinion");
                    
					//$scope.setActiveDoc("financial_statements");
				}
				else
				{
					console.log("AuditPrintablesController.checkDataLoad","No Data Loaded...givingup");
				}
			}
			$scope.initializePrintVariables=function()
			{
                
				for(var i in $scope.auditManager.currentAudit.engagementOutput)
				{
					$scope.audit[i]=$scope.auditManager.currentAudit.engagementOutput[i];
				}
				$scope.audit.form=$scope.customForm.formToObject();
				$scope.audit.accounts=$scope.accountsHash;
				//console.log("initializePrintVariables",$scope.audit.form,$scope.customForm.formToObject );
			}
			
			$scope.resizePagesForPrint=function()
			{
				var resizeOption={class:".page-content",pageHeight:1006};
				
				var pageHeight=resizeOption.pageHeight;
				
				$(resizeOption.class).each(function(index){
					var elem=$(this);
					var contentHeight=elem.height();
					var pages=Math.floor(contentHeight/pageHeight);
					
					if(pages*pageHeight<contentHeight)
					{
						pages++;
					}
					var content_id=this.id;
					var spacer_id=this.id + "_spacer";
					var spacer=$("#" + spacer_id);
					
					var diff=pages*pageHeight-contentHeight;
					
					spacer.css("padding-top",diff + "px");
					
					//elem.height(pages*pageHeight);
					
					console.log({index:index,content_id:content_id,contentHeight:contentHeight,pages:pages,newHight:elem.height(),diff:diff});
					})
			}
			
			
			var trialCount=0;
			
			
			
			$scope.checkDataLoad();		
		}		
		
		function AuditFSController($scope, $http, $filter,$stateParams,$state,$timeout,$locale,CoreAppSettingService,CoreLookupService,CoreLookupManager,AuditService)
		{
			var balance_sheet={name:"balance_sheet",title:"Statement of Financial Position",subTitle:"As at " + $scope.audit.sfp_date
							,bs_items:["HT_110000000","HT_200000000"],tree_depth:3}
			var income_statement={name:"income_statement",title:"Statement of Comprehensive Income",subTitle:$scope.audit.for_year_caps
							,bs_items2:["HT_214411000","HT_214412001","HT_214410000"]
							,bs_items:["HT_214400000"]
							,templateUrls:"api/WebContentService/getContent/income_statement"
							,tree_depth:3}
			var cash_flow={name:"cash_flow",title:"Statement of Cash Flow",subTitle:$scope.audit.for_year_caps,templateUrls:"cash_flow_report.html"}
			var equity_change={name:"equity_change",title:"Statement of Change in Equity",subTitle:$scope.audit.for_year_caps
					,bs_items:["HT_211000000","HT_213000000","HT_214000000"],tree_depth:1,templateUrl:"equity_change_report.html"
			}
			
			$scope.auditFS={
				reports:{balance_sheet:balance_sheet,income_statement:income_statement,equity_change:equity_change}//,cash_flow:cash_flow
				,notes:[
					{index:1,label:"Establishment",templateUrl:"api/WebContentService/getContent/audit_note_establishment"}
					
					,{index:2,label:"Significant accounting policies",templateUrl:"api/WebContentService/getContent/audit_note_acct_policies"}]
				}
			$scope.fsHelper={};
			
			$scope.fsHelper.makeFSTable=function(auditFS,fs_name)
			{
				var fs_attribs=auditFS.reports[fs_name];
				fs_attribs.reportables=[];
				fs_attribs.bs_accnts=[];
				fs_attribs.templateUrl=fs_attribs.templateUrl?fs_attribs.templateUrl:"default_fs_report.html";
				for(var i in fs_attribs.bs_items)
				{
					var bs_item = fs_attribs.bs_items[i];
					var bs_acct=$scope.treeManager.treeHash["item"+bs_item];
					fs_attribs.bs_accnts.push(bs_acct);
					//console.log("---",fs_name,bs_item,bs_acct);
					//fs_attribs.reportables.push(bs_acct);
					$scope.fsHelper.iterateChildren(auditFS,fs_attribs.reportables,bs_acct,1,fs_attribs.tree_depth)
				}
				//fs_attribs.reportables=root;
			}
            $scope.fsHelper.isNodeIncluded=function(node)
            {
                return  (node.data.debit/1 + node.data.credit/1 )>0 && node.data.objType!='acct'
            }
			$scope.fsHelper.iterateChildren=function(auditFs,reportables,child_node,depth,total_depth,noNote)
			{
				if(depth<=total_depth  && (child_node.data.debit/1 + child_node.data.credit/1 )>0 && child_node.data.objType!='acct')
				{
					var data=(depth<total_depth)?"":child_node.data;
					var note="";
					
					if(depth==total_depth && !noNote)
					{
						var noteTemplate = 'default_fs_note.html';
                        var additionalNoteTemplate=""
						if(child_node.data.report_note_name)
						{
							additionalNoteTemplate="api/WebContentService/getContent/" + child_node.data.report_note_name;
						}
						note={index:auditFs.notes.length+1,node:child_node,templateUrl:noteTemplate,additionalNoteTemplate:additionalNoteTemplate};
						$scope.fsHelper.makeNoteData(note);
						if(note.reportables.length>2)
						{
							auditFs.notes.push(note);
						}
						else
						{
							note="";
						}
					}
					
					reportables.push({level:depth,data:data,label:child_node.data.report_label,style:"head",note:note});
					for(var i in child_node.children)
					{
						$scope.fsHelper.iterateChildren(auditFs,reportables,child_node.children[i],depth+1,total_depth,noNote)
					}
					if(depth<total_depth)
					{
						reportables.push({level:depth,data:child_node.data,label:"Total "+child_node.data.report_label,style:"total"});
					}
				}
			}
			$scope.fsHelper.makeNoteData=function(note)
			{
				note.label=note.node.data.report_label;
				note.reportables=[];
				
				for(var i in note.node.children)
				{
					var node=note.node.children[i];
					$scope.fsHelper.iterateChildren($scope.auditFS,note.reportables,node,2,3,true)
				}
				var noteTotal={level:1,data:note.node.data,label:"",style:"total"}
				note.reportables.push(noteTotal);
				
			}
            
            $scope.fsHelper.iterateNoteData=function(note,node,level,depth)
            {
               if($scope.fsHelper.isNodeIncluded(node) && level<=depth)
                    {
                    var noteLevelN={level:level,data:node.data,label:node.data.report_label,style:""};
                    var childrenCount=1;
                    note.reportables.push(noteLevelN);
                    for(var i in node.children)
                        {
                            childrenCount+=$scope.fsHelper.iterateNoteData(note,node.children[i],level+1,depth);
                        }
                    if(childrenCount-1>0)
                        {
                           noteLevelN.style="total"; 
                        }
                    
                     return childrenCount
                    } 
                return 0;
            }
            $scope.fsHelper.makeNoteData=function(note)
			{
				note.label=note.node.data.report_label;
				note.reportables=[];
				
				for(var i in note.node.children)
				{
					$scope.fsHelper.iterateNoteData(note,note.node.children[i],2,5);
                    
					//$scope.fsHelper.iterateChildren($scope.auditFS,note.reportables,node,2,3,true)
				}
				var noteTotal={level:1,data:note.node.data,label:"",style:"total"}
				note.reportables.push(noteTotal);
				
			}
			
			$scope.fsHelper.makeFSReports=function()
			{
				console.log("---makeFSReports",$locale);
				$locale.NUMBER_FORMATS.PATTERNS[0].negPre="(";
				$locale.NUMBER_FORMATS.PATTERNS[1].negPre="(";
				$locale.NUMBER_FORMATS.PATTERNS[0].negSuf=")";
				$locale.NUMBER_FORMATS.PATTERNS[1].negSuf=")";
				
				
				for(var i in $scope.auditFS.reports)
				{
					$scope.fsHelper.makeFSTable($scope.auditFS,i);
				}
			}
			
			$scope.getElementSize=function(id)
			{
				return $("#" + id)["0"].offsetHeight;
			}
			$scope.fsHelper.makeFSReports();
			
		}
		
})();

