(function(angular) {
    "use strict";
	
	angular.module("app")
	.controller('ErpController', ErpController)
	.controller('ErpDTOController', ErpDTOController)

 	ErpDTOController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$localStorage','$timeout','CRUDService','ErpServices'];
	ErpController.$inject = ['$scope','$rootScope', '$http', '$filter','$stateParams','$state','$localStorage','$timeout','ErpManager','CRUDService','ErpServices',"CRUDManagers"];
      	
/*--------------ErpDTOController------------------*/
		
		function ErpDTOController($scope, $http, $filter,$stateParams,$state,$localStorage,$timeout,CRUDService,ErpServices )
		{
			$scope.dtoManager.loadList();
		}
      	
/*--------------ErpController------------------*/
		
		function ErpController($scope,$rootScope,$http, $filter,$stateParams,$state,$localStorage,$timeout,ErpManager,CRUDService,ErpServices,CRUDManagers )
		{
			$scope.erpManager=ErpManager.erpManager({});
			$scope.erpManager.settingManager={};
			
			$scope.template={page:{title:"ERP General Setting"}}
			
			var single_col={ 
							width:12,class:"  p-t-xs p-b ",color:"hovers-shadow shadows-005 lter-3 r p-b",colors:"box r p-b-lg"
							,headers:{class:"dker",titles:"Organization Setting",color:""}
							,content:{colors:"white",template:"erp.setting.content.html"}
							}
						
			var temp_2col={
					col1:{width:2,colors:"white hover-shadow shadow-lt5 r"
						,headers:{titles:"list",classs:"blue-500"}
						,content:{template:"erp.setting.list.content.html"}}
					,col2:{
							width:9,class:"p-r p-t-xs p-b",color:"lter-75 hover-shadow shadow-005s r p-b"
							,header:{title:"Organization Setting",color:""}
							,content:{class:"white",template:"erp.setting.content.html"}}
						}
						
			
			$scope.setSettingViewTemplates=function()
			{
				if($state.current.data.viewName=="erp.setting")
				{
					var single=$scope.app.Manager.LayoutManager.getSingleSection("",{width:12,content:{template:"erp.setting.content.html"}});
					$scope.template.columns=[single];
					$scope.template.page.tool=""
				}
				else
				{
					var sidebar={type:"sidebar",width:2,content:{template:"erp.setting.list.content.html"}};
					var main={type:"main",width:10,header:{title:"Organization Setting"},content:{template:"erp.setting.content.html"}};
					$scope.template.columns=$scope.app.Manager.LayoutManager.getSections({sidebar:sidebar,main:main});
					$scope.template.page.tool="erp.setting.page.tool.html"
				}
			}
			
			$scope.app.initializeSettingPage=function()
			{
				$scope.template={page:{title:"ERP General Setting",tool:"erp.setting.tool.html"}}
				
			$scope.erpSettingNames=[
					{label:"About your organization",description:"Organization name, business type... ",url:"app.erp.setting.detail",status:"completed"}
					,{label:"Address and Contact Info",description:"Physical address, contact information... ",url:"app.erp.setting",status:"completed"}
					,{label:"Business Information",description:"VAT Registration, TIN ... ",url:"app.erp.setting",status:""}
					,{label:"Users",description:"Users, Roles, ... ",url:"app.erp.setting",status:""}
				];
				var tabs={erp_main:{title:"Organization Setting",items:$scope.erpSettingNames,width:4}}
					
					$scope.app.Manager.UIManager.registerTabs("erp_setting",tabs);
					
					//console.log("Erp Setting  erp.setting",$scope.app.Manager.UIManager.tabArray.erp_setting)
					$scope.setSettingViewTemplates();
					return CRUDService.readLocalValue({});
			}
			
			$scope.app.loadErpData=function()
			{
				var managerOptions={readDetail:ErpServices.readJsonDataDetail}
				$scope.erpManager.settingManager=CRUDManagers.JsonData(managerOptions);
				
				return $scope.erpManager.settingManager.loadDetail("general_organisation_setting")
				.then(function(sr){
						$scope.app.organization=sr.data;
						return sr;
					})
			}
			
			$scope.app.initializeErpSettingManager=function()
			{
				$scope.template.detailMenu="erp.setting.toolbar.html";
				var managerOptions={readDetail:ErpServices.readJsonDataDetail}
				$scope.erpManager.settingManager=CRUDManagers.JsonData(managerOptions);
				
				return $scope.erpManager.settingManager.loadDetail("general_organisation_setting");
			}
			
			
			$scope.app.initializeSettingPage2=function()
			{
				$scope.template={detail:"erp.setting.content.html",detailMenu:"",title:"ERP General Setting",layout:"layout-1col.html"}
			$scope.erpSettingNames=[
					{label:"About your organization",description:"Organization name, business type... ",url:"app.erp.setting.detail",status:"completed"}
					,{label:"Address and Contact Info",description:"Physical address, contact information... ",url:"app.erp.setting",status:"completed"}
					,{label:"Business Information",description:"VAT Registration, TIN ... ",url:"app.erp.setting",status:""}
					,{label:"Users",description:"Users, Roles, ... ",url:"app.erp.setting",status:""}
				];
				var tabs={erp_main:{title:"Organization Setting",items:$scope.erpSettingNames,width:4}}
					
					$scope.app.Manager.UIManager.registerTabs("erp_setting",tabs);
					
					//console.log("Erp Setting  erp.setting",$scope.app.Manager.UIManager.tabArray.erp_setting)
					
					return CRUDService.readLocalValue({});
			}
			
			
			
			$scope.cleanTransaction=function()
			{
				if(confirm("Are you sure?"))
				{
					$scope.erpManager.restServices.cleanTransaction();
				}
			}

			$scope.interModuleMessages=[];
			$scope.eventResults=[];
			$scope.erpLookups={};
			$scope.erpLookupsHash={};

			$scope.app.lookups.erp={list:$scope.erpLookups,hash:$scope.erpLookupsHash};
			
			$scope.dtos={
				sale_purchase:{url:"app.erp.accounting.transaction.sale_purchase.detail",id:"sale_purchase_id"}
				,Purchase:{url:"app.erp.accounting.transaction.Purchase.detail",id:"sale_purchase_id"}
				,Sales:{url:"app.erp.accounting.transaction.Sales.detail",id:"sale_purchase_id"}
				,accounting_transaction:{url:"app.erp.accounting.transaction.journal.detail",id:"accounting_transaction_id"}
				,inventory_movement:{url:'app.erp.inventory.movement.detail',id:"inventory_movement_id"}
				,Recieving:{url:'app.erp.inventory.Recieving.detail',id:"inventory_movement_id"}
				,custom_form :{url:'app.erp.accounting.transaction.custom.detail.input',id:"form_value_id"}
				
				};
			//Inventory:Recieving
			//$scope.dtoManager=ErpServices.DTOManager({});
			$scope.dtoManager=ErpManager.DTOManager({});
			
			$scope.sum=function(data,fld)
			{
				var ret=0;
				for(var i in data)
				{
					ret+=data[i][fld]/1;
				}
				return ret;
			}
			$scope.initializeErp=function()
			{
				$timeout(function(){$scope.app.headers.erp="app/ERP/content/ERP.app.header.html"},4000)
				
				
				if ( !angular.isDefined($scope.app.setting.erpSettings )) 
				{
          $scope.app.setting.erpSettings={currentDate:new Date()};
        } 
				if (!angular.isDefined($scope.app.setting.erpSettings.reportParams )) 
				{
          $scope.app.setting.erpSettings.reportParams={date:$scope.app.setting.erpSettings.currentDate,date2:$scope.app.setting.erpSettings.currentDate};
        } 
				
				$scope.erpApps={
					Accounting:
						{menu:[
							{uiSref:'app.erp.accounting.transaction',label:"Record Transactions"}
							,{uiSref:'app.erp.accounting.transaction.sales',label:"Record Sales"}
							]}
					,Inventory:{}}
					
				return $scope.loadErpLooks();
			}
			
			$scope.loadErpLooks=function()
			{
				$scope.app.Manager.LookupManager.registerRequiredLookups(["InventoryItem","Unit"]);
				return $scope.loadInventoryItemLookups()
				.then($scope.loadUnitLookups)
				.then(function(sr){return sr;});
			}
			$scope.loadInventoryItemLookups=function()
			{
				return CRUDService.InventoryItem.readAll()
				.then(function(sr){
					$scope.erpLookups.InventoryItem=sr; 
					$scope.erpLookupsHash.InventoryItem=buildHash(sr,"item","inventory_item_id");
					return sr;})
			}
			$scope.loadUnitLookups=function()
			{
				return CRUDService.Unit.readAll()
				.then(function(sr){
					$scope.erpLookups.Unit=sr; 
					$scope.erpLookupsHash.Unit=buildHash(sr,"item","unit_id");
					for(var i in sr)
					{
						var inventoryItem=$scope.erpLookupsHash.InventoryItem["item"+ sr[i].inventory_item_id]
						if(inventoryItem)
						{
							inventoryItem.units=inventoryItem.units?inventoryItem.units:[];
							inventoryItem.unitsHash=inventoryItem.unitsHash?inventoryItem.unitsHash:{};
							
							inventoryItem.unitsHash["item"+sr[i].unit_id]=sr[i];
							inventoryItem.units.push(sr[i]);
						}
					}
					return sr;})
			}
			 $scope.dispatchEvent=function(evnt,param)
			 {
				 $scope.eventResults=[];
				return ErpServices.dispatchEvent(evnt,param)
				 .then(function(sr){
					 param.result=sr;
					 return $scope.eventResults=sr;});
			 }
			 
			 $scope.loadInterModuleMessages=function(param)
			 {
				return ErpServices.readInterModuleMessages(param)
				 .then(function(sr){return $scope.interModuleMessages=sr;});
			 }
			 
			 $scope.loadModuleMessageDetail=function(m)
			 {
				return ErpServices.executeInterModuleMessage(m)
				 .then(function(sr){return m.apiResult=sr;}); 
			 }
			 $scope.loadModuleMessageDetailLoop=function(index)
			 {
				 index=index?index:0;
				 if(index<$scope.interModuleMessages.length)
				 {
					 $scope.loadModuleMessageDetail($scope.interModuleMessages[index])
					 .then(function(){$scope.loadModuleMessageDetailLoop(index+1)});
				 }
			 }
			 $scope.loadInterModuleMessagesWithDetail=function(param)
			 {
				 $scope.loadInterModuleMessages(param)
				 .then(function(){$scope.loadModuleMessageDetailLoop(0)})
			 }
			// $scope.onAppLoad();
			 //console.log("ErpController");
			 $scope.ErpControllerOnLoad=function(sps)
			 {
				 sps=sps?sps:"";
				 console.log(sps + "ErpControllerOnLoad");
				 $scope.AppCtrlOnLoad("   " + sps);
			 	return $scope.initializeErp()
			 }
			// $scope.initializeErp();
			 //$scope.ErpControllerOnLoad();
			 //$scope.appLoadHandlers.handlers.ErpController=$scope.ErpControllerOnLoad;
			 
			 
			 
        }
/*--------------/ErpController------------------*/
		
	
             
 }(window.angular));