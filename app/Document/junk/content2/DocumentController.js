
(function() {
    'use strict';
    angular
        .module('app')
        .controller('DocumentController', DocumentController)
		.service( "DocumentService", function( $q,$http )
		{
			return {
				readAll :function(){return excuteService($q,$http,"api/DocumentService/readAll/", {},"get");}
				,readActive :function(){return excuteService($q,$http,"api/DocumentService/readActiveDocuments/", {},"get");}
				,readDetailById: function(id){return excuteService($q,$http,"api/DocumentService/readDetailById/" + id, {},"get");}
				,save : function(params){return excuteService($q,$http,"api/DocumentService/save/", params,"post");}
				,delete: function(id){return excuteService($q,$http,"api/DocumentService/delete/" + id, {},"delete");}
				};
		})
 		DocumentController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"DocumentService","DocumentManager"];
      	
	/*--------------DocumentController------------------*/
		
		function DocumentController($scope, $http, $filter,$stateParams,$state,DocumentService,DocumentManager)
		{
			 $scope.documentManager=DocumentManager.create();

			 $scope.documentManager.state=$state;
				
			 $scope.treeOptions={idField:"document_id",parentId:"folder_id",label:"document_name",includeFields:["description","tags"]}
			  	
			 $scope.treeManager=new TreeManager();
			 
			 $scope.documentManager.readList=function()
			 {
				return DocumentService.readActive()
				.then(function(sr){
						$scope.treeManager.makeTree(sr,$scope.treeOptions)
						return sr;
					})
			 }
			 $scope.expandingProperty={
                field: "label",
				displayName: "Name",
                sortable: true,
                sortingType: "string"
            };
			 $scope.col_defs = [
            
            {
                field: "description",
				displayName: "Description",
                sortable: true,
                sortingType: "string",
                filterable: true
            },
            {
                field: "tags",
				displayName: "Tags",
                sortable: true,
                sortingType: "string",
				cellTemplate: "<strong>{{row.branch[col.field]}}</strong>"
            }
        ];
        $scope.my_tree_handler = function (branch) {
            console.log('you clicked on', branch)
        }
			 
			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.document_id?$stateParams.document_id:"list";
				console.log("DocumentController",id);
				$scope.documentManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();		 
	  }
	/*--------------/DocumentController------------------*/
		
        
})();

