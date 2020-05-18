// code style: https://github.com/johnpapa/angular-styleguide 

(function() {
    'use strict';
    angular
        .module('app')
        .controller('DigitalDocumentsController', DigitalDocumentsController);
		
		DigitalDocumentsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"DigitalDocumentService","DocumentManager",'FileUploader'];



        function DigitalDocumentsController($scope,$http,$filter,$stateParams,$state,DigitalDocumentService,DocumentManager,FileUploader) 
		{
			
			
			$scope.documentManager=DocumentManager.create();
			
			
			
			$scope.documentManager.state=$state;
			
			$scope.documentManager.viewType="edit";
			
			$scope.documentManager.canEdit=true;
			
			//$scope.documentManager.onAfterAddingFile=function(){$("#modalUploads").modal("show");}

			$scope.onPageLoad=function()
			{
				/*
				var id=$stateParams.document_id?$stateParams.document_id:"list";
				console.log("DocumentController",id);
				$scope.documentManager.loadData(id);
				*/
				//$scope.documentManager.buildUploader();
				$scope.documentManager.loadList()
				
			}
			
			$scope.onPageLoad();
			$scope.createFromTemplateAttrib={templateId:152,targetId:8,parent_type:"Audit",parent_id:1};
			$scope.createFromTemplate=function()
			{
				var attrib=$scope.createFromTemplateAttrib;
				
				var root_name=attrib.parent_type + " " + attrib.parent_id + " Files";
				

				var newAttribs={parent_type:$scope.createFromTemplateAttrib.parent_type,parent_id:$scope.createFromTemplateAttrib.parent_id,isTemplate:0};

				
				var root_attributes={folder_id:$scope.createFromTemplateAttrib.targetId,document_name:root_name,permission:""}
				
				//$scope.documentManager=DocumentManager.create();
				
				//$scope.documentManager.readList=function(){return DigitalDocumentService.readWholeTree(attrib.templateId);}
				
				//$scope.documentManager.loadList()
				
				$scope.documentManager.createFromTemplate(attrib.templateId,root_attributes,newAttribs)
				.then(function(sr){console.log("Create from template",sr);});		
	
			}
		}
		
		
		
		
})();




