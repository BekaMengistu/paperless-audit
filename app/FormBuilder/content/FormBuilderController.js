(function() {
    'use strict';
    angular
        .module('app')
        .controller('FormFillerController', FormFillerController)
		.controller('FormBuilderController', FormBuilderController)

 		FormFillerController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"FormBuilderService","FormBuilderManager"];
 		FormBuilderController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$timeout","FormBuilderService","FormBuilderManager",];
      	
	/*--------------FormBuilderController------------------*/
		
		function FormFillerController($scope, $http, $filter,$stateParams,$state,FormBuilderService,FormBuilderManager)
		{
			 $scope.formManager=FormBuilderManager.create();

			 $scope.formManager.state=$state;
			 /*
			 var bankAccountFields=[
			 {name:"bank_name",label:"Bank Name",data_type:"text",required:1,width:4,value:["Hibret","CBE"]}
			 ,{name:"account_number",label:"Account No",data_type:"text",required:1,width:4,value:["HBE-0001","1000002668"]}
			 ,{name:"balance",label:"Balance",data_type:"number",required:0,width:4,value:[123000,8007]}
			 ];
			 var bankLoanFields=[
			 {name:"bank_name",label:"Bank Name",data_type:"text",required:1,width:4,value:["Hibret"]}
			 ,{name:"loan_amount",label:"Loan Amount",data_type:"number",required:1,width:4,value:[12000]}
			 ,{name:"outstanding_balance",label:"Outstanding Balance",data_type:"number",required:0,width:4,value:[9000]}
			 ];
			 
			 var educFields=[
			 {name:"year_from",label:"Year From",data_type:"text",required:1,width:3,value:["2000"]}
			 ,{name:"year_To",label:"To",data_type:"text",required:1,width:3,value:["2005"]}
			 ,{name:"college",label:"College",data_type:"text",required:0,width:3,value:["AAU"]}
			 ,{name:"certificate",label:"Cirtificate",data_type:"text",required:0,width:3,value:["B.S.C"]}
			 ,{name:"educ_note",label:"What did you learn?",data_type:"textarea",required:0,width:12,value:["Your note here"]}
			 
			 ]
			 
			 $scope.formManager.fieldTemplateList=[
			 {name:"full_name",label:"Name",data_type:"text",required:1,width:6,value:["Beka Mengistu"]}
			 ,{name:"email",label:"Email",data_type:"email",repeating:1,required:1,width:6,value:["bekalive@gmail.com"]}
			 ,{name:"age",label:"Age",data_type:"number",required:0,width:4,value:["38"]}
			 ,{name:"gender",label:"Gender",data_type:"text",required:0,width:4,value:["Male"]}
			 ,{name:"maritalStatus",label:"Marital Status",data_type:"text",required:0,width:4,value:["Engaged"]}
			 ,{name:"education",label:"Education Status",repeating:1,data_type:"object",width:12,fields:educFields}
			 ,{name:"cash_bank",label:"Cash at Bank",repeating:1,data_type:"grid",width:6,fields:bankAccountFields}
			 ,{name:"bank_loan",label:"Loans",repeating:1,data_type:"grid",width:6,fields:bankLoanFields}
			 
			 
			 ]
			*/
			 	
			 $scope.onPageLoad2=function()
			 {
				var form_template_id=$stateParams.form_template_id?$stateParams.form_template_id:0;
				var form_value_id=$stateParams.form_value_id?$stateParams.form_value_id:0;
				
				console.log("FormFillerController");
				//FormBuilderService.readFormValueDetail(form_template_id)
				$scope.formManager.loadFormValueDetail(form_template_id)
				.then(function(sr)
				{
					console.log("FormFillerController",sr);
					if(sr)
					{
						
						$scope.formManager.loadFormValueDetail(sr.form_template_id,form_value_id);
					}
					else
					{
						$scope.formManager.loadFormValueDetail(form_template_id,form_value_id);
					}
				});
				$scope.formManager.loadCustomLookups();
				//$scope.formManager.loadData(id);
			 }
			 
			 $scope.onPageLoad=function()
			 {
				var form_template_id=$stateParams.form_template_id?$stateParams.form_template_id:0;
				var form_value_id=$stateParams.form_value_id?$stateParams.form_value_id:0;
				
				console.log("FormFillerController",{form_template_id:form_template_id,form_value_id:form_value_id});
				//FormBuilderService.readFormValueDetail(form_template_id)
				$scope.formManager.loadFormValueDetail(form_template_id)
				.then(function(sr)
				{
					$scope.formManager.loadFormValueDetail(form_template_id,form_value_id)
					.then($scope.onFormValueDataLoad)
				});
				$scope.formManager.loadCustomLookups();
				//$scope.formManager.loadData(id);
			 }
			 $scope.onFormValueChange=function(fld)
			 {
				 console.log("onFormValueChange",fld.name,fld.index);
				 if(fld.name=="unit_price"||fld.name=="quantity")
				 {
					 var item=$scope.formManager.fieldValues.items[fld.index];
					 item.sub_total.value=item.unit_price.value*item.quantity.value;
				 }
			 }
			 $scope.onFormValueDataLoad=function()
			 {
				// $scope.formManager.fieldValues.summary.auditor_name.value='Beka Mengistu';
			 }
			 $scope.formToObject=function()
			 {
				 $scope.formManager.fieldValues=$scope.formManager.formToObject($scope.formManager.fields);
			 }
			 
			 $scope.onPageLoad();		 
		}
	/*--------------/FormBuilderController------------------*/
	
	/*--------------FormBuilderController------------------*/
		
		function FormBuilderController($scope, $http, $filter,$stateParams,$state,$timeout,FormBuilderService,FormBuilderManager)
		{
			 $scope.formManager=FormBuilderManager.create();

			 $scope.formManager.state=$state;
			 /*
			 var bankAccountFields=[
			 {name:"bank_name",label:"Bank Name",data_type:"text",required:1,width:4,value:["Hibret","CBE"]}
			 ,{name:"account_number",label:"Account No",data_type:"text",required:1,width:4,value:["HBE-0001","1000002668"]}
			 ,{name:"balance",label:"Balance",data_type:"number",required:0,width:4,value:[123000,8007]}
			 ];
			 var bankLoanFields=[
			 {name:"bank_name",label:"Bank Name",data_type:"text",required:1,width:4,value:["Hibret"]}
			 ,{name:"loan_amount",label:"Loan Amount",data_type:"number",required:1,width:4,value:[12000]}
			 ,{name:"outstanding_balance",label:"Outstanding Balance",data_type:"number",required:0,width:4,value:[9000]}
			 ];
			 
			 var educFields=[
			 {name:"year_from",label:"Year From",data_type:"text",required:1,width:3,value:["2000"]}
			 ,{name:"year_To",label:"To",data_type:"text",required:1,width:3,value:["2005"]}
			 ,{name:"college",label:"College",data_type:"text",required:0,width:3,value:["AAU"]}
			 ,{name:"certificate",label:"Cirtificate",data_type:"text",required:0,width:3,value:["B.S.C"]}
			 ,{name:"educ_note",label:"What did you learn?",data_type:"textarea",required:0,width:12,value:["Your note here"]}
			 
			 ]
			 
			 $scope.formManager.fieldTemplateList=[
			 {name:"full_name",label:"Name",data_type:"text",required:1,width:6,value:["Beka Mengistu"]}
			 ,{name:"email",label:"Email",data_type:"email",repeating:1,required:1,width:6,value:["bekalive@gmail.com"]}
			 ,{name:"age",label:"Age",data_type:"number",required:0,width:4,value:["38"]}
			 ,{name:"gender",label:"Gender",data_type:"text",required:0,width:4,value:["Male"]}
			 ,{name:"maritalStatus",label:"Marital Status",data_type:"text",required:0,width:4,value:["Engaged"]}
			 ,{name:"education",label:"Education Status",repeating:1,data_type:"object",width:12,fields:educFields}
			 ,{name:"cash_bank",label:"Cash at Bank",repeating:1,data_type:"grid",width:6,fields:bankAccountFields}
			 ,{name:"bank_loan",label:"Loans",repeating:1,data_type:"grid",width:6,fields:bankLoanFields}
			 
			 
			 ]
			*/
			 
			 $scope.fieldsList=[];	
			 $scope.startMoving=function()
			 {
				  $scope.fieldsList=$scope.formManager.fields;	
			 }
			 
			 $scope.addField=function(parent,type)
			 {
				 var fld=$scope.formManager.addField(parent,type);
				 console.log("addField",fld,parent);
				 var savedFld=fld;
				 //if(!parent)
				 {
				 return $scope.formManager.saveMultipleFieldTemplates([fld])
				 .then($scope.onPageLoad);
				 }
			 }
			 $scope.deleteField=function(fld)
			 {
				 var message="Are you sure?";
				 var ids=[fld.form_field_template_id];
				 if(fld.fields.length)
				 {
					 message="This will delete '" + fld.label + "' and  all its children. \n Are you sure?"; 
					 for(var i in fld.fields)
					 {
						 ids.push(fld.fields[i].form_field_template_id);
					 }
				 }
				 if(confirm(message))
				 {
					  return $scope.formManager.deleteMultipleFieldTemplates({ids:ids})
				 	.then($scope.onPageLoad);
				 }
			 }
			 $scope.editField=function(fld)
			 {
				 fld.repeatingBool=(fld.repeating/1)==1;
				 fld.requiredBool=(fld.required/1)==1;
				 
				 $scope.editedFormFieldTemplate=fld;
				 
				 $("#modalFieldEdit").modal("show");
			 }
			 $scope.saveField=function(fld)
			 {
				 fld.repeating=fld.repeatingBool?1:0;
				 fld.required=fld.requiredBool?1:0;
				// alert("Save?");
				 Pace.start();
				 $scope.formManager.saveFieldTemplate(fld)
				 .then(function(r){$("#modalFieldEdit").modal("hide");});
			 }
			 $scope.onPageLoad=function()
			 {
				$scope.form_template_id=$stateParams.form_template_id?$stateParams.form_template_id:0;
				var form_value_id=$stateParams.form_value_id?$stateParams.form_value_id:0;
				
				console.log("FormBuilderController");
				$scope.formManager.loadFormValueDetail($scope.form_template_id);
				$scope.formManager.loadCustomLookups();
				//$scope.formManager.loadData(id);
			 }
			 
			 /*
			 
			 $scope.list = [
  {id:1,letter:'A'},
  {id:2,letter:'B'},
  {id:3,letter:'C'},
  {id:4,letter:'D'},
];
$scope.sortable_option = {
  //Only allow draggable when click on handle element
  handle:'span.handle',
  //Construct method before sortable code
  construct:function(model){
    for ( var i = 0; i < model.length; i++ ){
      model[i].letter +=" (constructed)";
    }
  },
  //Callback after item is dropped
  stop:function(list, dropped_index){
    list[ dropped_index].letter += " Dropped";
  }
};*/

			$scope.field_sortable_option = {
			  //Only allow draggable when click on handle element
			  handle:'span.handle',
			  //Construct method before sortable code
			  construct:function(model){}
			  //Callback after item is dropped
			  ,start:function(list, moved_index){console.log(moved_index,"Picked:")}
			  ,stop:function(list, dropped_index){console.log("Dropped:",dropped_index,list)}
			  
			};

			 $scope.onPageLoad();		 
		}
	/*--------------/FormBuilderController------------------*/
		
        
})();

