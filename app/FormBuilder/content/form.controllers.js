var formExtraContents={};
(function() {
    'use strict';
    angular
        .module('app')
        .controller('CustomFormController', CustomFormController)
        .controller('CustomFormTestController', CustomFormTestController)
        .controller('CustomFormFillController', CustomFormFillController)
        .controller('CustomFormDesignController', CustomFormDesignController)

 				CustomFormDesignController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$timeout","CustomFormManager"];
 				CustomFormFillController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$timeout","CustomFormManager"];
 				CustomFormTestController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$timeout","CustomFormManager"];
 				CustomFormController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$timeout","CustomFormManager"];
      	
	function CustomFormDesignController($scope, $http, $filter,$stateParams,$state,$timeout,CustomFormManager)
		{
			$scope.formDataLoaded=false;
			$scope.onFieldTypeChange=function(fld)
			{
				$scope.formManager.FormTemplate.setDesignValueEditor(fld);
			}
			$scope.sortableFields="topFields";
			if ( !angular.isDefined($scope.app.setting.formBuilder )) 
				{
          $scope.app.setting.formBuilder={expandedField:""};
        } 
				
			$scope.formBuilderSetting=$scope.app.setting.formBuilder;
			
			$scope.editFieldTemplate=function(node)
			{
				var fld=node.data;
				 $scope.selectedFieldTemplate=fld;
				 var fld2={};
				 inherit(fld2,fld)
				 $scope.onFieldTypeChange(fld2);
				 $scope.editedFormFieldTemplate=fld2;
				 
				 $("#modalFieldEdit").modal("show");
			}
			$scope.saveField=function()
			{
				inherit($scope.selectedFieldTemplate,$scope.editedFormFieldTemplate);
				$("#modalFieldEdit").modal("hide");
			}
			
			$scope.toggleExpanded=function(name)
			{
				$scope.formBuilderSetting.expandedField = $scope.formBuilderSetting.expandedField==name?"":name;
				$scope.setSortableFields();
			}
			$scope.setSortableFields=function(name)
			{
				$scope.sortableFields="childFields";
				if($scope.formBuilderSetting.expandedField=='custome_form_info______' || $scope.formBuilderSetting.expandedField=="")
				{
					$scope.sortableFields="topFields";
				}
			}
			
			$scope.field_sortable_option={
			  //Only allow draggable when click on handle element
			 // handle:'span.handle',
			  //Construct method before sortable code
			  construct:function(model){}
			  //Callback after item is dropped
			  ,start:function(list, moved_index){console.log(moved_index,"Picked:")}
			  ,stop:function(list, dropped_index){console.log("Dropped:",dropped_index,list)}
			  
			};
			
			//$scope.customForm2=CustomFormManager.FormManager({FormTemplate:{state:$state,detailEditor:{url:"app.formbuilder.design"}}});
			
		//	$scope.formManager=$scope.customForm2.manager;
			
			$scope.form_template_id=$stateParams.form_template_id;
			
			$scope.onCustomFormDesignControllerLoad=function()
			{
				
			
			$scope.formManager.loadFormValue($scope.form_template_id)
			.then(function(sr){console.log("onCustomFormDesignControllerLoad....");$scope.formDataLoaded=true;
//			$timeout(function(){$scope.formDataLoaded=true},2000);
			});
			}
			$scope.setSortableFields();
			
			if($state.current.controller=="CustomFormDesignController")
			{
				$scope.onCustomFormDesignControllerLoad();
			}
			
		}
	
	function CustomFormFillController($scope, $http, $filter,$stateParams,$state,$timeout,CustomFormManager)
		{
			
			
			$scope.form_template_id=$stateParams.form_template_id;
			$scope.form_value_id=$stateParams.form_value_id;
			
			$scope.customForm.manager.loadFormValue($scope.form_template_id,$scope.form_value_id)
			.then(function(sr){
				if(sr.form_template_id){$scope.form_template_id=sr.form_template_id;}
				
				//$timeout(function(){ 
				//console.log("CustomFormFillController loading script......")
				//loadScript("api/FormBuilderService/readFormScripts/" + $scope.form_template_id,"scriptContainer",true);},2000);
				console.log("CustomFormFillController dataLoaded")
				});
			
		}
					
	
		
		function CustomFormTestController($scope, $http, $filter,$stateParams,$state,$timeout,CustomFormManager)
		{
			$scope.loadSampleData=function()
			{
				$scope.templateManager.loadDetail(3)
				.then(function(sr){
					var editedTemplate=$scope.templateManager.editedItem;
					if(editedTemplate.formValues)
					{
						if(editedTemplate.formValues[0])
						{
							$scope.valueManager.loadDetail(editedTemplate.formValues[0].form_value_id)
						}
					}
					});
					/**/
			}
			
			console.log("CustomFormTestController",$scope.customForm);
			$scope.templateManager.loadList()
			.then($scope.loadSampleData);
			
			//$scope.loadSampleData();
		}
		
		/*--------------CustomFormController------------------*/
		function CustomFormController($scope, $http, $filter,$stateParams,$state,$timeout,CustomFormManager)
		{
			$scope.customForm=CustomFormManager.FormManager({FormValue:{state:$state,detailEditor:{url:"app.tools.formbuilder.fill"}}});
			$scope.templateManager=$scope.customForm.manager.FormTemplate;
			$scope.valueManager=$scope.customForm.manager.FormValue;
			
			$scope.formManager=$scope.customForm.manager;

			$scope.onFormValueChange2=function(fld,rowIndex,container,field_name)
			{
				container=$scope.templateManager.fieldsHash[fld.parentId];
				//console.log("onFieldValueChange",fld,rowIndex,container,field_name);

				var item=$scope.customForm.valueObject[container.name];
				var contName=container.name;
				if(container.repeating*1)
				{
					item=item[rowIndex];
				}
				//console.log("CustomFormController.onFieldValueChange: " + contName,item);
				if(formCalculationHandler)
				{
					if(formCalculationHandler[contName])
					{
						formCalculationHandler[contName](item,$scope.customForm.valueObject,$scope.customForm.fieldValues);
					}
					
				}
			}
			
			$scope.onFormValueChange=function(fld,rowIndex,container,field_name)
			{
				$scope.customForm.manager.onFormValueChange(fld,rowIndex,container,field_name);
			}
		}
	
		
        
})();

