var formExtraContents={};
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
			 
			 $scope.formExtraContents=formExtraContents;
			 	
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
			 $scope.onFormValueChange=function(fld,index,container)
			 {
				 console.log("onFormValueChange ",container,fld.name,fld.index,$scope.formExtraContents);
				 var form_name=$scope.formManager.formTemplate.name;
				 
				 if($scope.formExtraContents[form_name])
				 {
					 $scope.formExtraContents[form_name].doCalculations($scope.formManager.fieldValues);
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
				 fld.archivedBool=(fld.archived/1)==1;
				 
				 $scope.editedFormFieldTemplate=fld;
				 
				 $("#modalFieldEdit").modal("show");
			 }
			 $scope.saveField=function(fld)
			 {
				 fld.repeating=fld.repeatingBool?1:0;
				 fld.required=fld.requiredBool?1:0;
				 fld.archived=fld.archivedBool?1:0;

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
			
			$scope.field_sortable_option = {
			  //Only allow draggable when click on handle element
			 // handle:'span.handle',
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

