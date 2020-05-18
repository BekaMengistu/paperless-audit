(function() {
    'use strict';
    angular
        .module('app')
		.controller('CustomerAppController', CustomerAppController)
        .controller('CustomerController', CustomerController)
		.controller('CustomerTaskController', CustomerTaskController)
		.controller('CustomerDocumentController', CustomerDocumentController)
		.controller('CustomerAuditController', CustomerAuditController)
		
		
		
		CustomerAuditController.$inject = ['$scope', '$http', '$q', '$filter','$stateParams','$state',"AuditService","AuditManager"];
		
 		CustomerAppController.$inject = ['$scope', '$http', '$q', '$filter','$stateParams','$state',"CustomerService","CustomerManager","AuditCompanyTypeService","CoreLookupService"];
		
		CustomerController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$window","CustomerService","CustomerManager","DataImportExportService","DataImportManager"];
 		CustomerTaskController.$inject = ['$scope', '$http', '$q','$filter','$stateParams','$state','$timeout',"TaskService","TaskManager"];
		CustomerDocumentController.$inject = ['$scope', '$http', '$q','$filter','$stateParams','$state','$timeout',"DigitalDocumentService","DocumentManager"]
      	
		
		
		
		
	/*--------------CustomerController------------------*/
		
		function CustomerAppController($scope, $http,$q, $filter,$stateParams,$state,CustomerService,CustomerManager,AuditCompanyTypeService,CoreLookupService)
		{
			$scope.companyTypesLookup=[];
			$scope.loadCompanyTypesLookup=function()
			{
				return AuditCompanyTypeService.readAll()
				.then(function(sr){
					$scope.companyTypesLookup=sr;
					$scope.companyTypesHash=buildHash(sr,"item","audit_company_type_id");
					return sr;
					})
			}
            $scope.loadCustomLookups=function(index)
		      {
			//var __this=this;
			CoreLookupService.readAllLookupsByTypes()
			.then(function(sr){$scope.customLookups=sr.lookupValues;});
		      }
            $scope.loadLookups=function()
            {
               $scope.loadCompanyTypesLookup();
               $scope.loadCustomLookups();    
            }
			console.log("CustomerAppController");
		}
		

      	
		/*--------------CustomerController------------------*/
		
		function CustomerController($scope, $http, $filter,$stateParams,$state,$window,CustomerService,CustomerManager,DataImportExportService,DataImportManager)
		{
			$scope.customer_id="";
			$scope.regex = '\\d+';
			$scope.customerNamePattern = "^[a-zA-Z0-9;`¬!£$%^&()\-_+={}\[\]@#~,.' ]+$/";
			$scope.customerNamePattern = "^[A-Za-z0-9_-\s\.]*$"
			
			 $scope.customerManager=CustomerManager.create();

			 $scope.customerManager.state=$state;
				
             $scope.customerManager.buildDataImporter();   
             
             $scope.dataImportManager=$scope.customerManager.dataImportManager;
			 
			 $scope.customerManager.buildUploader($scope.app.uploadOptions);
			 
            $scope.exportToExcel=function()
			 {
				 var header=["customer_id",	"customer_name","telephone_no","email","address","establishment","vat_reg_no","tin","company_type"];
				 var sheetData=[header];
				 
				 for(var i in $scope.customerManager.customersList)
				 {
					 
					 var item=$scope.customerManager.customersList[i];
					 var itemData=[];
					 for(var f in header)
					 {
						 var fld=header[f];
						 itemData.push(item[fld]);
					 }
					 sheetData.push(itemData);
				 }
				 
				 var customerSheet={name:"Customers",startRow:1,data:sheetData};
				 var param={outputFile:"customer.xlsx",sheets:{customer:customerSheet}};
			
					DataImportExportService.export("Excel",param)
					.then(function(sr){$scope.exportInfo=sr; $window.location.href=sr.filePath;});
			 }
            
             $scope.deleteExtraRow=function(name,index)
             {
                 if(confirm("Are you sure?"))
                     {
                        $scope.customerManager.editedCustomer.extra[name].splice(index,1); 
                     }
             }
             $scope.addExtraRow=function(name,item)
             {
                 var extra=$scope.customerManager.editedCustomer.extra;
                 extra=extra?extra:{};
                 $scope.customerManager.editedCustomer.extra=extra;
                 
                 extra[name]=extra[name]?extra[name]:[];
                 
                 var newItem={}
                 for(var i in item)
                     {
                        newItem[i]=item[i];
                         item[i]="";
                     }
                 extra[name].push(newItem);
             }
             $scope.addShareholder=function(item)
             {
                $scope.addExtraRow("shareholders",item); 
                 $scope.calculateShareTotal();
             }
             $scope.calculateShareTotal=function(item)
             {
                 //item.total=item.par_value*item.shares;
                 var shares=$scope.customerManager.editedCustomer.extra.shareholders;
                 var shareTotal=0;
                 for(var i in shares)
                 {
                      var item=  shares[i];
                      item.total=item.par_value*item.shares;
                      shareTotal+=item.total;
                 }
                 $scope.customerManager.editedCustomer.extra.shareTotal=shareTotal;
             }
             $scope.onSaveClick=function()
			 {
				 
				 if($scope.customerManager.editedCustomer.tin)
				 {
					 $scope.checkTin($scope.customerManager.editedCustomer)
					 .then(function(sr){
						 	if(sr.tinUnique)
							{
								$scope.customerManager.saveItem($scope.customerManager.editedCustomer)
							}
							else if(confirm(sr.message+ "\n Are you sure you want to save?"))
					 		{
						 		$scope.customerManager.saveItem($scope.customerManager.editedCustomer)
							}
							
						 });
					 
				 }
				 else
				 {
				 	$scope.customerManager.saveItem($scope.customerManager.editedCustomer)
				 }
			 }
			 $scope.checkTin=function(customer)
			 {
				 return CustomerService.checkTin(customer.tin)
				 .then(function(sr){
					 if(!sr.length)
					 {
						 return {tinUnique:true}
					 }
					 if(sr.length==1 && sr[0].customer_id==customer.customer_id)
					 {
						 return {tinUnique:true}
					 }
					 else
					 {
						 var msg="Non unique TIN detected with the following customers.";
						 for(var i in sr)
						 {
							 if(sr[i].customer_id!=customer.customer_id)
							 {
							 	msg+="\n     "+sr[i].customer_name;
							 }
						 }
						 return {tinUnique:false,message:msg};
					 }
					 })
			 }
			 
			 $scope.loadCustomerData=function()
			 {
				var id=$stateParams.customer_id?$stateParams.customer_id:"list";
				
				$scope.customer_id=id;
				
				console.log("CustomerController",id);
				$scope.loadLookups();
				if(id!="list" && id!=0)
				{
					return $scope.customerManager.loadData(id)
					.then(function(sr){
					$state.current.data.subTitle="[" + $scope.customerManager.editedCustomer.customer_name + "]";
                        var newExtra={};
                        for(var i in sr.extra)
                            {
                                newExtra[i]=sr.extra[i];
                            }
                        sr.extra=newExtra;
					return sr;
					});
				}
				else
				{
					$state.current.data.subTitle="";
					return $scope.customerManager.loadData(id)
				}
			 }
			 
			 $scope.loadCustomerData();
        }
/*--------------/CustomerController------------------*/
		
	
    
	/*--------------CustomerTaskController------------------*/
		
		
		function CustomerTaskController($scope, $http,$q, $filter,$stateParams,$state,$timeout,TaskService,TaskManager)
		{
			
		 	$scope.taskManager=TaskManager.create();
			
			$scope.taskManager.state=$state;
			 
			TaskService.readCustomerTasks=function(id){return excuteService($q,$http,"api/TaskService/readTasksForEntity/Customer/" + id, {},"get");}
			 
			$scope.taskManager.editPath.url="app.customerdetail.taskEdit";
			$scope.taskManager.listPath.url="app.customerdetail.task";
			  
			 $scope.taskManager.readList=function()
			{
				console.log("$scope.CustomerTaskManager.readList",$scope.customerManager.editedCustomer);
				return TaskService.readCustomerTasks($scope.customerManager.editedCustomer.customer_id);
			}
			 $scope.taskManager.newTask=function()
			{
				console.log("$scope.CustomerTaskManager.newTask",$scope.customerManager.editedCustomer);
				return $scope.taskManager.editedTask={parent_id:$scope.customerManager.editedCustomer.customer_id,parent_type:"Customer",created_time:new Date(),created_by:$scope.app.loginUser.user_id};
			}
			
			 
			 $scope.onPageLoad2=function()
			 {
				 var id=$stateParams.task_id?$stateParams.task_id:"list";
				console.log("TaskController",id);
				var pollCount=0;
				var pollUntilLoad=function()
				{
					pollCount++;
					if($scope.customerManager.editedCustomer || pollCount>10)
					{
						$scope.taskManager.loadData(id);
						return;
					}
					$timeout(pollUntilLoad,1000);
				}
				pollUntilLoad();
			 }
			 
			 $scope.onPageLoad2();
		 }
	/*--------------/CustomerDocumentController------------------*/

	function CustomerDocumentController($scope, $http,$q, $filter,$stateParams,$state,$timeout,DigitalDocumentService,DocumentManager,FileUploader) 
		{
			
			$scope.documentManager=DocumentManager.create();
			$scope.documentManager.state=$state;
			$scope.documentManager.viewType="view";
			
			$scope.documentManager.showEditor=false;
			
			$scope.createDocumentFromTemplate=function()
			{
				var template_id=$scope.documentManager.entityDocStatus.templateInfo.template.data.document_id;
				var root_attributes=$scope.documentManager.entityDocStatus.templateInfo.root_attributes;
				var new_attributes=$scope.documentManager.entityDocStatus.templateInfo.new_attributes;
				
				$scope.documentManager.createFromTemplate(template_id,root_attributes,new_attributes)
				.then($scope.loadCustomerDocuments);
			}
			
			$scope.loadCustomerDocuments=function()
			{
				$scope.documentManager.loadOrCreateEntityDocument("Customer",$scope.customer_id,"customer_template","customer_target",$scope.customerManager.editedCustomer.customer_name)
			}
			

			$scope.onCustomerDocumentPageLoad=function()
			{
				console.log("CustomerDocumentController");
				$scope.loadCustomerData()
				.then($scope.loadCustomerDocuments)
				
				
			}
			$scope.onCustomerDocumentPageLoad();
		 }
	/*--------------/CustomerDocumentController------------------*/
	
function CustomerAuditController($scope, $http,$q, $filter,$stateParams,$state,AuditService,AuditManager)
		{
			$scope.auditManager=AuditManager.create();
			$scope.auditManager.showAction=false;
			
			$scope.loadAllAuditsForCustomer=function()
			{
				return AuditService.readAuditsForCustomer($scope.customer_id)
				.then(function(sr){
					$scope.auditManager.processList(sr);
					return $scope.auditManager.auditsList=sr;});
			}
			
			$scope.onCustomerAuditPageLoad=function()
			{
				console.log("onCustomerAuditPageLoad",$scope.customerManager.editedCustomer);
				$scope.loadCustomerData()
				.then($scope.loadAllAuditsForCustomer)
				.then(function(){
					$scope.companysHash={};
					$scope.companysHash["item"+$scope.customer_id]=$scope.customerManager.editedCustomer;
					$scope.viewInitialized=true;
				
				});
			
			}
			console.log("CustomerAuditController");
			
			
			$scope.onCustomerAuditPageLoad();
		}
	 
})();
