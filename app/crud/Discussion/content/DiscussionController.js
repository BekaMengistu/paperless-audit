(function() {
    'use strict';
    angular
        .module('app')
        .controller('DiscussionController', DiscussionController)

 		DiscussionController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"DiscussionService","DiscussionManager","DataImportExportService","DataImportManager"];

      	
/*--------------DiscussionController------------------*/
		
		function DiscussionController($scope, $http, $filter,$stateParams,$state,DiscussionService,DiscussionManager,DataImportExportService,DataImportManager)
		{
			 $scope.discussionManager=DiscussionManager.create({state:$state});
             $scope.dataImportManager=$scope.discussionManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.discussion_id?$stateParams.discussion_id:"list";
				console.log("DiscussionController",id);
				$scope.discussionManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/DiscussionController------------------*/
		
        
})();

