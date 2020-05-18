(function() {
    'use strict';
    angular
        .module('app')
		.controller("AuditAppController",AuditAppController)
		.controller("AuditDetailController",AuditDetailController)
        .controller('AuditListController', AuditListController)
		.controller("AuditAdjustmentController",AuditAdjustmentController)
		.controller('AuditController', AuditController)
		.controller('AuditTBMappingController', AuditTBMappingController)
		.controller('SubstantiveAuditController', SubstantiveAuditController)
		.controller('AuditFormController', AuditFormController)
		
		AuditAppController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","CoreLookupManager"]
		
		AuditDetailController.$inject = ["$scope", "$http", "$filter","$stateParams","$state"
				,"AuditManager"
				,"AuditService"
				,"FormBuilderManager"
				,"AuditEngagementService"]
		
		AuditFormController.$inject = ["$scope", "$http", "$filter","$stateParams","$state","FormBuilderManager"]
			
 		AuditListController.$inject = ['$scope', '$http', '$filter','$stateParams','$state'
			,"AuditEngagementService","AuditEngagementManager"
			,"AuditClientTrialbalanceService","AuditClientTrialbalanceManager"
			,"DataImportExportService","DataImportManager","AuditService","AuditManager","CoreLookupService","CoreLookupManager"];
		
		AuditAdjustmentController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','AuditService','AuditAdjustmentService']	
/*
 		AuditController.$inject = ['$scope', '$http', '$filter','$stateParams','$state'
			,"AuditEngagementService","AuditEngagementManager"
			,"AuditClientTrialbalanceService","AuditClientTrialbalanceManager"
			,"DataImportExportService","DataImportManager","AuditService","AuditManager","AuditAccountGroupingManager","AuditAccountGroupingService","CoreLookupManager"];
	*/	
		AuditController.$inject = ['$scope', '$http', '$filter','$stateParams','$state'
			,"AuditEngagementManager"
			,"AuditClientTrialbalanceManager"
			,"AuditAccountGroupingManager"
			,"AuditService"
			,"FormBuilderManager"
			,"CoreLookupManager"
			,"AuditAdjustmentManager"
			,"AuditAdjustmentService"];	
			
		AuditTBMappingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout'
			,"AuditEngagementService","AuditEngagementManager"
			,"AuditClientTrialbalanceService","AuditClientTrialbalanceManager"
			,"DataImportExportService","DataImportManager","AuditService","AuditManager"];
		
		SubstantiveAuditController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout',"AuditService","AuditFindingService","AuditTransactionManager"
			,"AuditEngagementService","AuditEngagementManager"
			,"AuditClientTrialbalanceService","AuditClientTrialbalanceManager"
			,"DataImportExportService","DataImportManager","AuditService","AuditManager"];
			
	function AuditAppController($scope, $http, $filter,$stateParams,$state,CoreLookupManager)
	{
		console.log("AuditAppController");
		$scope.lookups=CoreLookupManager.lookups;
		
		$scope.loadAuditAppLookups=function()
		{
			return CoreLookupManager.load("User")
			.then(function(){return CoreLookupManager.load("Customer")})
			
		}
	}
	
	function AuditFormController($scope, $http, $filter,$stateParams,$state,FormBuilderManager)
		{
			
			 $scope.onPageLoadForm=function()
			 {
				var activeSectionId=$stateParams.form_section_id?$stateParams.form_section_id:"";
				console.log("AuditFormController",activeSectionId);
				
				if(activeSectionId)
				{
					$scope.formManager.activeSectionId=activeSectionId;
					$scope.formManager.setCurrentSection(activeSectionId);
				}
			 }
			 
			 $scope.onPageLoadForm();	
		}
	
	function AuditListController($scope, $http, $filter,$stateParams,$state
		,AuditEngagementService,AuditEngagementManager
		,AuditClientTrialbalanceService,AuditClientTrialbalanceManager
		,DataImportExportService,DataImportManager,AuditService,AuditManager,CoreLookupService,CoreLookupManager)
	{
		$scope.auditManager=AuditManager.create();
		$scope.auditManager.state=$state;
		$scope.auditManager.editPath.url="app.auditDetail.auditInfo";
		$scope.viewInitialized=false;
		
		$scope.processList=function(sr)
		{
			console.log("AuditListController.processList",$scope.auditManager.auditsList);
			for(var i in $scope.auditManager.auditsList)
			{
				var audit=$scope.auditManager.auditsList[i];
				audit.assigned_users=audit.assignee.split(",");
				
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
		$scope.initializeView=function()
		{
			$scope.processList();
			$scope.viewInitialized=true;
		}
		$scope.onPageLoad=function()
		{
			$scope.auditManager.loadList()
			.then($scope.loadAuditAppLookups)
			.then($scope.initializeView);
		
		}
		
		$scope.saveNewItem=function(item)
		{
			$scope.viewInitialized=false;
			
			$scope.auditManager.saveNewItem(item)
			.then(function(){
				$("#auditListEdit").modal("hide");
				$scope.auditManager.loadList()
				.then($scope.initializeView);
				})
			//.then($scope.auditManager.loadList)
			
		}
		$scope.onCreateAudit=function()
		{
			$scope.auditManager.newAuditEngagement();
			$("#auditListEdit").modal();
			//$scope.audit_engagementManager.loadData("list");
		
		}
			
		
		$scope.onPageLoad();
	}
	
	function AuditDetailController($scope, $http, $filter,$stateParams,$state
				,AuditManager
				,AuditService
				,FormBuilderManager
				,AuditEngagementService)
	{
		
		$scope.auditManager=AuditManager.create();
		$scope.formManager=FormBuilderManager.create();
		$scope.GKtreeOptions={idField:"grouping_code",parentId:"parent_code",label:"grouping_name",includeFields:["description","tags"]}
		$scope.TBtreeOptions={idField:"account_id",parentId:"parent_code",label:"account_description",includeFields:["description","tags"]}
		
		$scope.auditDetailLoaded=false;
			  	
		$scope.treeManager=new TreeManager();
		
		
		$scope.onSaveClick=function()
		{
			$scope.formManager.saveFormValue();
			AuditEngagementService.save($scope.auditManager.currentAudit.engagementInfo);
		}
		
		$scope.buildHashes=function()
		{
			$scope.accountGroupingsHash=buildHash($scope.auditManager.accountGroupings,"item","grouping_code");
			//$scope.currentAudit.clientAccountsHash=buildHash(sr,"","account_id");	
			$scope.auditManager.currentAudit.clientTBHash=buildHash($scope.auditManager.currentAudit.clientTB,"","account_id");	
		}
		
		$scope.loadEngagementFormData=function(data)
		{
			return $scope.formManager.loadFormValueDetail(1,data.engagement.form_value_id);
		}
		$scope.loadAllData=function()
		{
			
			return $scope.auditManager.readAuditDetail($scope.audit_engagement_id)
			.then(function(sr)
				{$scope.loadEngagementFormData(sr);
				$scope.initializeTree();
				$scope.auditDetailLoaded=true;
				$scope.buildHashes();
				})
		}
		
		$scope.onPageLoad=function()
		{
		 	$scope.loadAuditAppLookups();
			var id=$stateParams.audit_engagement_id?$stateParams.audit_engagement_id:"list";
			$scope.audit_engagement_id=id;
			console.log("AuditDetailController",id);
			if(id!="list" && id/1)
			{
				$scope.loadAllData(id)
			}
		}
		
		$scope.initializeTree=function()
			{
				$scope.treeManager.makeTree($scope.auditManager.accountGroupings,$scope.GKtreeOptions);
				var leaf=$scope.treeManager.getLeafNodes();
				$scope.validMappingKeys=$scope.treeManager.getLeafNodes();
				console.log("AuditDetailController.initializeTree");
				
				for(var i in $scope.auditManager.currentAudit.clientTB)
				{
					$scope.auditManager.currentAudit.clientTB[i].objType="acct";
				}
				
				for(var i in $scope.treeManager.treeHash)
				{
					var node=$scope.treeManager.treeHash[i];
					//node.expanded=true;
					node.data.objType="GK";
					
				}
				
				$scope.treeManager.makeTree($scope.auditManager.currentAudit.clientTB,$scope.TBtreeOptions,true);
				var mapped=[];
				for(var i in leaf)
				{
					var n=leaf[i];
					if(n.children.length)
					{
						mapped.push(n);
					}
				}
				
				for(var i in $scope.treeManager.tree)
				{
					$scope.getCalculatedValue($scope.treeManager.tree[i]);
				}
				
				//$scope.initializeFindings();
				//$scope.loadTransactionCounts();
				$scope.leafTBTree=mapped;
				//$scope.currentTree=$scope.treeManager.tree;
				//$scope.currentTree=mapped;
				$scope.setView("GK");
				
			}
			$scope.setView=function(v)
			{
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
			$scope.getCalculatedValue=function(node)
			{
				var fields={debit:0,credit:0,current_balance:0,last_fye_balance:0};
				if(node.data.objType=='acct')
				{
					for(var i in fields)
					{
						fields[i]=node.data[i]/1;
					}
					return fields;
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
				if(balance>=0)
				{
					fields.debit=balance;
					fields.credit=0;
				}
				else
				{
					fields.credit=-balance;
					fields.debit=0;
				}
				
				for(var i in fields)
				{
					node.data[i]=fields[i];
				}
				
				return fields;
			}
			
		$scope.toggleChildView=function(node)
			{
				node.expanded=!node.expanded;
				/*
				if(node.expanded && node.data.objType=='acct')
				{
					AuditService.readAuditTransactionsForAccount($scope.audit_engagement_id,node.data.account_id)
					.then(function(sr){
						node.children=[];
						for(var i in sr)
						{
							sr[i].objType="txn";
							node.children.push({label:sr[i].description,level:node.level+1, parent:node,data:sr[i]});
						}
					});
				}*/
			}
		$scope.onPageLoad();			
					
	}
	function AuditInfoController($scope, $http, $filter,$stateParams,$state
				,AuditManager
				,AuditService
				,FormBuilderManager)
	{
	}
	
	function AuditTBMappingController2($scope, $http, $filter,$stateParams,$state,$timeout
		,AuditEngagementService,AuditEngagementManager
		,AuditClientTrialbalanceService,AuditClientTrialbalanceManager
		,DataImportExportService,DataImportManager,AuditService,AuditManager)
	{
		$scope.audit_client_trialbalanceManager.buildUploader();
			
			$scope.audit_client_trialbalanceManager.dataImportManager.buildImportRequestParams=function(params)
			{
				//account_id	account_description	debit	credit	account_type	current_balance	last_fye_balance	parent_code	mapping_checked
				var fields_list={account_id:{col:"A"},account_description:{col:"B"},	debit:{col:"C"},	credit:{col:"D"}
				,	account_type:{col:"E"},	current_balance	:{col:"F"},last_fye_balance:{col:"G"},	parent_code:{col:"H"},	mapping_checked:{col:"I"},audit_engagement_id:{value:$scope.audit_engagement_id}}
				
				params.fields_list=fields_list;
				return params;
			};
			 
			$scope.dataImportManager=$scope.audit_client_trialbalanceManager.dataImportManager;
			
			$scope.initializeMapping=function()
			{
				$scope.validGrouping=$scope.loadedData.groupingKeys;
				$scope.audit.trialBalance=$scope.loadedData.trialBalance;
				
				$scope.validGroupingHash={};
				$scope.validGroupingNameHash={};
				for(var i in $scope.validGrouping)
				{
					var gm=$scope.validGrouping[i];
					$scope.validGroupingHash["item" + gm.grouping_code]=gm;
					$scope.validGroupingNameHash["item" + gm.grouping_name]=gm;
				}
				for(var i in $scope.loadedData.trialBalance)
				{
					var tb=$scope.loadedData.trialBalance[i];
					var codeItem=$scope.validGroupingHash["item" + tb.parent_code]
					var nameItem=$scope.validGroupingNameHash["item" + tb.parent_code]
					
					if(codeItem)
					{
						tb.parent=codeItem;
					}
					else if(nameItem)
					{
						tb.parent_code=nameItem.grouping_code;
						tb.parent=nameItem;
					}
				}
			}
			$scope.saveAll=function(index)
			{
				var item=$scope.audit.trialBalance[index];
				item.busy=true;
				AuditClientTrialbalanceService.save(item)
				.then(function()
				{
					item.busy=false;
					$scope.saveAll(index+1)
				})
			}
			$scope.groupingMapChanged=function(item)
			{
				if(item.parent)
				{
					item.parent_code=item.parent.grouping_code;
				}
				else
				{
					item.parent_code="";
				}
				item.busy=true;
				AuditClientTrialbalanceService.save(item)
				.then(function()
				{
					item.busy=false;
				})
			}
			$scope.loadData=function()
			{
				$scope.loadTrialCount++;
				var dataLoaded=true;
				var loadedData={trialBalance:$scope.audit_client_trialbalanceManager.audit_client_trialbalancesList
								,groupingKeys:$scope.audit_account_groupingManager.audit_account_groupingsList};
				
				for(var i in loadedData)
				{
					if(typeof(loadedData[i])=="undefined")
					{
						dataLoaded=false;
					}
				}
				if(dataLoaded)
				{
					console.log("AuditTBMappingController.loadData\n---------",loadedData);
					$scope.loadedData=$scope.audit=loadedData;
					$scope.initializeMapping();
				}
				else if($scope.loadTrialCount>10)
				{
					console.log("AuditTBMappingController.loadData \n---------Giving up");
				}
				else
				{
					$timeout($scope.loadData,1000);
				}
			}
			$scope.audit={}
			$scope.loadedData={};
			$scope.loadTrialCount=0;
			$scope.loadData();
		
	}
	
	function AuditAdjustmentController($scope, $http, $filter,$stateParams,$state,AuditService,AuditAdjustmentService)
	{
			$scope.editedAdjustmentIndex=-1;
			$scope.editedAdjustment={};
			$scope.addAdjustment=function()
			{
				var adjustment={audit_id:$scope.audit_engagement_id,debit:0,credit:0,prior_debit:0,prior_credit:0};
				
				var index=$scope.auditManager.currentAudit.adjustments.length;
				
				$scope.auditManager.currentAudit.adjustments.push(adjustment);
				
				$scope.editAdjustment(index);
			}
			$scope.editAdjustment=function(index)
			{
				$scope.editedAdjustmentIndex=index;
				$scope.editedAdjustment=$scope.auditManager.currentAudit.adjustments[index];
				$scope.editedAdjustment.account=$scope.auditManager.currentAudit.clientTBHash["item"+$scope.editedAdjustment.account_id]
			}
			$scope.cancelEditAdjustment=function(index)
			{
				$scope.editedAdjustmentIndex=-1;
				$scope.loadAuditAdjustments();
			}
			$scope.loadAuditAdjustments=function()
			{
				AuditService.readAuditAdjustments($scope.audit_engagement_id)
				.then(function(sr){$scope.auditManager.currentAudit.adjustments=sr;});
			}
			
			$scope.saveAdjustment=function(index)
			{
				//var adj=$scope.auditManager.currentAudit.adjustments[$scope.editedAdjustmentIndex];
				if(!$scope.editedAdjustment.account)
				{
					return;
				}
				$scope.editedAdjustment.account_id=$scope.editedAdjustment.account.account_id;
				AuditAdjustmentService.save($scope.editedAdjustment)
				.then(function()
					{
						$scope.editedAdjustmentIndex=-1;
						$scope.loadAuditAdjustments();
					});
			}

	}
	
	
		
	function AuditTBMappingController($scope, $http, $filter,$stateParams,$state,$timeout
		,AuditEngagementService,AuditEngagementManager
		,AuditClientTrialbalanceService,AuditClientTrialbalanceManager
		,DataImportExportService,DataImportManager,AuditService,AuditManager)
		{
			$scope.audit_client_trialbalanceManager=AuditClientTrialbalanceManager.create();
			$scope.audit_client_trialbalanceManager.buildUploader();
			
			$scope.audit_client_trialbalanceManager.dataImportManager.buildImportRequestParams=function(params)
			{
				//account_id	account_description	debit	credit	account_type	current_balance	last_fye_balance	parent_code	mapping_checked
				var fields_list={account_id:{col:"A"},account_description:{col:"B"},	debit:{col:"C"},	credit:{col:"D"}
				,	account_type:{col:"E"},	current_balance	:{col:"F"},last_fye_balance:{col:"G"},	parent_code:{col:"H"},	mapping_checked:{col:"I"},audit_engagement_id:{value:$scope.audit_engagement_id}}
				
				params.fields_list=fields_list;
				return params;
			};
			 
			$scope.dataImportManager=$scope.audit_client_trialbalanceManager.dataImportManager;
		
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
			$scope.groupingMapChanged=function(item)
			{
				if(item.parentGrouping)
				{
					item.parent_code=item.parentGrouping.grouping_code;
				}
				else
				{
					item.parent_code="";
				}
				item.busy=true;
				AuditClientTrialbalanceService.save(item)
				.then(function()
				{
					item.busy=false;
				})
			}
			
			$scope.initializeMapping=function()
			{
				$scope.validGroupingHash=buildHash($scope.auditManager.accountGroupings,"item","grouping_code");
				$scope.validGroupingNameHash=buildHash($scope.auditManager.accountGroupings,"item","grouping_name");
				
				for(var i in $scope.auditManager.currentAudit.clientTB)
				{
					var tb=$scope.auditManager.currentAudit.clientTB[i];
					var codeItem=$scope.validGroupingHash["item" + tb.parent_code]
					var nameItem=$scope.validGroupingNameHash["item" + tb.parent_code]
					
					if(codeItem)
					{
						tb.parentGrouping=codeItem;
					}
					else if(nameItem)
					{
						tb.parent_code=nameItem.grouping_code;
						tb.parentGrouping=nameItem;
					}
					if(i%3)
					{
						//tb.mapping_checked=0;
					}
				}
				/*
				$scope.validGrouping=$scope.loadedData.groupingKeys;
				$scope.audit.trialBalance=$scope.loadedData.trialBalance;
				
				$scope.validGroupingHash={};
				$scope.validGroupingNameHash={};
				for(var i in $scope.validGrouping)
				{
					var gm=$scope.validGrouping[i];
					$scope.validGroupingHash["item" + gm.grouping_code]=gm;
					$scope.validGroupingNameHash["item" + gm.grouping_name]=gm;
				}
				for(var i in $scope.loadedData.trialBalance)
				{
					var tb=$scope.loadedData.trialBalance[i];
					var codeItem=$scope.validGroupingHash["item" + tb.parent_code]
					var nameItem=$scope.validGroupingNameHash["item" + tb.parent_code]
					
					if(codeItem)
					{
						tb.parent=codeItem;
					}
					else if(nameItem)
					{
						tb.parent_code=nameItem.grouping_code;
						tb.parent=nameItem;
					}
				}*/
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
			$scope.onPageLoad2=function()
			{
				$scope.checkDataLoad();
			}
			var trialCount=0;
			$scope.onPageLoad2();
		}
/*--------------AuditEngagementController------------------*/


		function AuditController($scope, $http, $filter,$stateParams,$state
				,AuditEngagementManager
				,AuditClientTrialbalanceManager
				,AuditAccountGroupingManager
				,AuditService
				,FormBuilderManager
				,CoreLookupManager
				,AuditAdjustmentManager
				,AuditAdjustmentService
				)
		{
			 $scope.audit_engagementManager=AuditEngagementManager.create();
			 
			 $scope.audit_client_trialbalanceManager=AuditClientTrialbalanceManager.create();
			 
			 $scope.audit_account_groupingManager=AuditAccountGroupingManager.create();
			 
			 $scope.audit_adjustmentManager=AuditAdjustmentManager.create();
			 
			 $scope.audit_engagementManager.state=$state;
			 
			 $scope.formManager=FormBuilderManager.create();
			
			$scope.lookups=CoreLookupManager.lookups;
			$scope.loadLookups=function()
			{
				CoreLookupManager.load("User");
				CoreLookupManager.load("Customer");
				
			}

		 	$scope.audit_client_trialbalanceManager.readList=function()
			{
				return AuditService.readAuditClientTrialbalance($scope.audit_engagement_id);
			}
			
			$scope.loadAuditClientAccouts=function()
			{
				return AuditService.readAuditClientTrialbalance($scope.audit_engagement_id)
				.then(function(sr){
					$scope.currentAudit.clientAccounts=sr;
					$scope.currentAudit.clientAccountsHash=buildHash(sr,"","account_id");			
					});
			}
			$scope.addAdjustment=function()
			{
				var adjustment={audit_id:$scope.currentAudit.audit_engagement_id,debit:0,credit:0,prior_debit:0,prior_credit:0};
				var index=$scope.audit_adjustmentManager.audit_adjustmentsList.length;
				$scope.audit_adjustmentManager.audit_adjustmentsList.push(adjustment);
				
				$scope.editAdjustment(index);
			}
			$scope.editAdjustment=function(index)
			{
				$scope.currentAudit.editedAdjustmentIndex=index;
			}
			$scope.cancelEditAdjustment=function(index)
			{
				$scope.currentAudit.editedAdjustmentIndex=-1;
				$scope.audit_adjustmentManager.loadData("list");
			}
			
			$scope.saveAdjustment=function(index)
			{
				var adj=$scope.audit_adjustmentManager.audit_adjustmentsList[$scope.currentAudit.editedAdjustmentIndex];
				AuditAdjustmentService.save(adj)
				.then(function()
					{
						$scope.currentAudit.editedAdjustmentIndex=-1;
						$scope.audit_adjustmentManager.loadData("list");
					});
			}

			$scope.loadFormData=function(formId)
			{
				
				$scope.formManager.loadFormValueDetail(1,formId);
			}
						 
			 $scope.audit_engagementManager.editPath.url="app.auditDetail.auditInfo";
			 $scope.audit_engagementManager.listPath.url="app.audit";
             	
			 
			 $scope.onPageLoad=function()
			 {
				 
				var id=$stateParams.audit_engagement_id?$stateParams.audit_engagement_id:"list";
				$scope.audit_engagement_id=id;
				console.log("AuditEngagementController",id);
				
				
				$scope.loadLookups();
				
				if(id!="list" && id/1)
				{
				$scope.audit_engagementManager.readDetail(id)
				.then(function(sr){
						$scope.currentAudit=sr;
						$scope.audit_engagementManager.editedAuditEngagement=sr;
						
						$scope.audit_client_trialbalanceManager.loadData("list");
						
						$scope.audit_account_groupingManager.loadData("list")
						
						$scope.loadAuditClientAccouts();
						
						$scope.audit_adjustmentManager.loadData("list");
				
						$scope.loadFormData(sr.form_value_id);
					})
				//.then(loadFormData);
				
				
				}
			 }
			 
			 $scope.onPageLoad();
        }		
		
		
/*--------------/AuditEngagementController------------------*/

		function SubstantiveAuditController($scope, $http, $filter,$stateParams,$state,$timeout,AuditService,AuditFindingService,AuditTransactionManager)
		{
			$scope.transactionManager=AuditTransactionManager.create();
			$scope.transactionManager.buildUploader();  
			$scope.transactionManager.dataImportManager.buildImportRequestParams=function(params)
			{
				//account_id	account_description	debit	credit	account_type	current_balance	last_fye_balance	parent_code	mapping_checked
				var fields_list={parent_code:{col:"A"},txn_date:{col:"C"},reference:{col:"C"}
								,jrnl:{col:"E"},description	:{col:"F"},debit:{col:"G"},credit:{col:"H"}	
								,balance:{col:"I"},audit_id:{value:$scope.audit_engagement_id}}
				params.fields_list=fields_list;
				return params;
			};
			 
			$scope.dataImportManager=$scope.transactionManager.dataImportManager;
			$scope.dataImportManager.afterImportDone=function(){console.log("import");$scope.loadTransactionCounts();}
			//
			$scope.toggleChildView=function(node)
			{
				node.expanded=!node.expanded;
				if(node.expanded && node.data.objType=='acct')
				{
					AuditService.readAuditTransactionsForAccount($scope.audit_engagement_id,node.data.account_id)
					.then(function(sr){
						node.children=[];
						for(var i in sr)
						{
							sr[i].objType="txn";
							node.children.push({label:sr[i].description,level:node.level+1, parent:node,data:sr[i]});
						}
					});
				}
			}
			$scope.loadTransactionCounts=function()
			{
				$scope.allTransactionsCount=0;
				AuditService.readAuditTransactionCounts($scope.audit_engagement_id)
				.then(function(sr){
					$scope.auditTransactionsCount=sr;
					for(var i in $scope.auditTransactionsCount)
					{
						var tnx=$scope.auditTransactionsCount[i];
						var id=tnx.parent_code;
						var parent=$scope.treeManager.treeHash["item"+id];
						if(parent)
						{
							parent.childCount=tnx.transactions/1;
							$scope.allTransactionsCount+=parent.childCount;
							//parent.workingProcedures.push(proc);
						}
					}
					return sr;
					});
								}
			$scope.saveFinding=function(finding)
			{
				AuditFindingService.save(finding)
				.then(function(){
					$scope.loadFindingsCount();
					$("#audit_finding").modal("hide");})
				
			}
			$scope.loadAuditFindingForAccountProcedure=function()
			{
				var params={audit_id:$scope.audit_engagement_id, audit_procedure_id:$scope.selectedFindingData.procedure.audit_procedure_id , parent_id: $scope.selectedFindingData.account.account_id};//, parent_type: ""
				
				return AuditService.readAuditFindingForAccountProcedure(params)
				.then(function(sr){
					if(sr=="")
					{
						sr=params;
					}
					return $scope.selectedFindingData.auditFinding=sr;
					});
			}
			$scope.auditProcedureClick=function(proc)
			 {
				 $scope.selectedFindingData={account:$scope.selectedAccount,procedure:proc,auditFinding:{}}
				 console.log("auditProcedureClick",proc);
				 $scope.loadAuditFindingForAccountProcedure();
				 $("#modalProcedures").modal("hide");
				 $("#audit_finding").modal();
			 }
			 
			$scope.loadProcedures=function()
			{
				return AuditService.readAuditProcedures()
				.then(function(sr){
					$scope.auditProcedures=sr;
					$scope.auditProceduresHash=buildHash(sr,"proc","audit_procedure_id");
					console.log("loadProcedures",$scope.auditProceduresHash);
					return sr;
					});
			
			}
			$scope.loadFindingsCount=function()
			{
				return AuditService.readAuditFindingCounts($scope.audit_engagement_id)
				.then(function(sr){
					$scope.auditFindingsCount=sr;
					for(var i in $scope.auditFindingsCount)
					{
						var proc=$scope.auditFindingsCount[i];
						var id=proc["parent_id"];
						var parent=$scope.treeManager.treeHash["item"+id];
						if(parent)
						{
							parent.findingsCount=proc.findings/1;
							
							//parent.workingProcedures.push(proc);
						}
					}
					return sr;
					});
			}
			 
			$scope.initializeFindings=function()
			{
				
				$scope.loadProcedures()
				.then($scope.loadFindingsCount)
				.then(function(){
					for(var i in $scope.auditProcedures)
					{
						var proc=$scope.auditProcedures[i];
						var id=proc["grouping_code"];
						var parent=$scope.treeManager.treeHash["item"+id];
						if(parent)
						{
							parent.workingProcedures=parent.workingProcedures?parent.workingProcedures:[];
							parent.workingProcedures.push(proc);
						}
					}
					
				});
				
				
			
			}
			
			
			$scope.loadData=function()
			{
				
				$scope.loadTrialCount++;
				console.log("SubstantiveAuditController.loadData");
				var dataLoaded=true;
				var loadedData={trialBalance:$scope.audit_client_trialbalanceManager.audit_client_trialbalancesList
								,groupingKeys:$scope.audit_account_groupingManager.audit_account_groupingsList};
				
				for(var i in loadedData)
				{
					if(typeof(loadedData[i])=="undefined")
					{
						dataLoaded=false;
					}
				}
				if(dataLoaded)
				{
					console.log("SubstantiveAuditController.loadData\n---------",loadedData);
					$scope.loadedData=$scope.audit=loadedData;
					$scope.initializeTree();
					//$scope.transactionManager.loadData("list");
				}
				else if($scope.loadTrialCount>10)
				{
					console.log("SubstantiveAuditController.loadData \n---------Giving up");
				}
				else
				{
					$timeout($scope.loadData,1000);
				}
			
			}
			
			$scope.GKtreeOptions={idField:"grouping_code",parentId:"parent_code",label:"grouping_name",includeFields:["description","tags"]}
			$scope.TBtreeOptions={idField:"account_id",parentId:"parent_code",label:"account_description",includeFields:["description","tags"]}
			  	
			 $scope.treeManager=new TreeManager();
			
			
			 
			$scope.getValidProcedures=function(node,arry)
			{
				if(node.workingProcedures)
				{
					for(var i in node.workingProcedures)
					{
						node.workingProcedures[i].done=0;
						arry.push(node.workingProcedures[i]);
					}
				}
				if(node.parent)
				{
					$scope.getValidProcedures(node.parent,arry)
				}
				return arry;
			}
			
			$scope.loadAuditFindingsForAccount=function(audit_id,parent_id,parent_type)
			{
				var params={audit_id:audit_id, parent_id:parent_id,parent_type:parent_type};//, parent_type: ""
				
				return AuditService.readAuditFindingsForAccount(params)
				.then(function(sr){
					return sr;
					});
			}
				 
			$scope.onAccountFindingClick=function(node)
			{
				$scope.selectedAccount=node.data;
				$scope.selectedAuditProcedures=$scope.getValidProcedures(node,[]);
				
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
				$("#modalProcedures").modal("show");
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
			$scope.getCalculatedValue=function(node)
			{
				var fields={debit:0,credit:0,current_balance:0,last_fye_balance:0};
				if(node.data.objType=='acct')
				{
					for(var i in fields)
					{
						fields[i]=node.data[i]/1;
					}
					return fields;
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
				if(balance>=0)
				{
					fields.debit=balance;
					fields.credit=0;
				}
				else
				{
					fields.credit=-balance;
					fields.debit=0;
				}
				
				for(var i in fields)
				{
					node.data[i]=fields[i];
				}
				
				return fields;
			}
			$scope.initializeTree=function()
			{
				$scope.treeManager.makeTree($scope.audit.groupingKeys,$scope.GKtreeOptions);
				var leaf=$scope.treeManager.getLeafNodes();
				
				for(var i in $scope.audit.trialBalance)
				{
					$scope.audit.trialBalance[i].objType="acct";
				}
				for(var i in $scope.treeManager.treeHash)
				{
					var node=$scope.treeManager.treeHash[i];
					//node.expanded=true;
					node.data.objType="GK";
					
				}
				
				$scope.treeManager.makeTree($scope.audit.trialBalance,$scope.TBtreeOptions,true);
				var mapped=[];
				for(var i in leaf)
				{
					var n=leaf[i];
					if(n.children.length)
					{
						mapped.push(n);
					}
				}
				
				for(var i in $scope.treeManager.tree)
				{
					$scope.getCalculatedValue($scope.treeManager.tree[i]);
				}
				
				$scope.initializeFindings();
				$scope.loadTransactionCounts();
				$scope.leafTBTree=mapped;
				//$scope.currentTree=$scope.treeManager.tree;
				//$scope.currentTree=mapped;
				$scope.setView("GK");
			}
			$scope.setView=function(v)
			{
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
			$scope.audit={}
			$scope.loadedData={};
			$scope.loadTrialCount=0;
			$scope.loadData();
		}
        
})();

