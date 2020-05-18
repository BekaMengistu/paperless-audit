var formExtraContents={};
(function() {
    'use strict';
		var formModuleInjects=['$scope', '$http', '$filter','$stateParams','$state',"$timeout","CustomFormManager","CRUDService"];
    angular
        .module('app')
        .controller('CustomFormController2', CustomFormController2)
        .controller('CustomFormDesignController2', CustomFormDesignController2)
        .controller('CustomFormFillController2', CustomFormFillController2)
        //.controller('CustomFormDesignController', CustomFormDesignController)

 				//CustomFormDesignController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$timeout","CustomFormManager"];
 				//CustomFormFillController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"$timeout","CustomFormManager"];
				
				CustomFormFillController2.$inject = formModuleInjects;
 				CustomFormDesignController2.$inject = formModuleInjects;
 				CustomFormController2.$inject = formModuleInjects;

	function CustomFormFillController2($scope, $http, $filter,$stateParams,$state,$timeout,CustomFormManager,CRUDService)
	{
		$scope.app.initializeFormFillListPage=function()
			{
				
				$scope.entityManager=$scope.valueManager;
				
				$scope.form_template_id=$state.params.form_template_id;
				return $scope.formManager.loadTemplateDetail($scope.form_template_id);
			}
			$scope.app.initializeFormFillPage=function()
			{
				var layoutOptions={page:$scope.templatePage};
				
				$scope.template=$scope.app.Manager.LayoutManager.getCrudPageTemplate(layoutOptions);
				$scope.template.columns.sidebar.content.template="app/FormBuilder/content/fill/form.template.value.tree.html";
				
				return CRUDService.readLocalValue({});
				//inherit($scope.templateManager,{detailEditor:{url:"app.tools.form.fill"}}); 
			}
			$scope.app.initializeFormFillDetailPage=function()
			{
                $scope.entityManager=$scope.valueManager;
				
				$scope.form_template_id=$state.params.form_template_id;
				$scope.form_value_id=$state.params.form_value_id;
				return $scope.formManager.loadFormValue($scope.form_template_id,$scope.form_value_id);
			}
			
		$scope.onFormValueChange=function(fld,rowIndex,container,field_name)
			{
				$scope.customForm.manager.onFormValueChange(fld,rowIndex,container,field_name);
			}
	}
	function CustomFormDesignController2($scope, $http, $filter,$stateParams,$state,$timeout,CustomFormManager)
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
                 
                 console.log("editFieldTemplate")
                 var boolFields={repeating:"",required:"",archived:""};
                 {
                     for(var i in boolFields)
                         {
                            fld2[i+"Bool"]=(fld2[i]*1)==1; 
                         }
                                
                 }
				 fld2.isObject=fld2.data_type == 'grid' || fld2.data_type == 'object';
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
			
			
			$scope.app.initializeFormDesignDetailPage=function()
			{
				$scope.form_template_id=$state.params.form_template_id;
				return $scope.templateManager.loadDetail($scope.form_template_id)
				.then(function(sr){
                    $scope.template.page.tool="form.design.tools.html"     
                    $scope.template.columns.main.header.template="form.design.detail.header.html"
                })
			}
		}
	
	
		
		
		/*--------------CustomFormController------------------*/
		function CustomFormController2($scope, $http, $filter,$stateParams,$state,$timeout,CustomFormManager,CRUDService)
		{
			$scope.customForm=CustomFormManager.FormManager({
					FormTemplate:{detailEditor:{url:"app.tools.form.design.detail"}}
					,FormValue:{detailEditor:{url:"app.tools.form.fill.detail"},listEditor:{url:"app.tools.form.fill.list"}}
					});
			
			$scope.formManager=$scope.customForm.manager;
            
			$scope.templateManager=$scope.formManager.FormTemplate;
			$scope.valueManager=$scope.formManager.FormValue;
			
			$scope.templateManager.lookupManager=$scope.app.Manager.LookupManager;
			$scope.templateManager.state=$state;

			var templatePage=$scope.templatePage={title:"Form Builder"}
			var listPageCol={content:{template:"forms.list.big.html"}}
			
			//var designPageCols={sidebar:{width:3,contents:{template:"forms.list.html"}},main:{width:9}}
			
			
			$scope.app.initializeFormDesignPage=function()
			{
				var layoutOptions={page:templatePage};
				
				$scope.template=$scope.app.Manager.LayoutManager.getCrudPageTemplate(layoutOptions);
				
                 $scope.template.page.tool="form.design.tools.html"   
                
				$scope.entityManager=$scope.templateManager;
				return CRUDService.readLocalValue({});
				
			}
			$scope.app.initializeFormListPage=function()
			{
				$scope.template=$scope.app.Manager.LayoutManager.getSinglePageTemplate({page:templatePage,columns:{main:listPageCol}});
				
				return CRUDService.readLocalValue({});
				
			}
			$scope.app.initializeFormBuilderPage=function()
			{
					return $scope.templateManager.loadList()
		//		return CRUDService.readLocalValue({});
				
			}
		}
	
		
        
})();

