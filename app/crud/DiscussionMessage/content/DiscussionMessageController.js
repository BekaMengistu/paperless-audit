(function() {
    'use strict';
    angular
        .module('app')
        .controller('DiscussionMessageController', DiscussionMessageController)

 		DiscussionMessageController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"DiscussionMessageService","DiscussionMessageManager","DataImportExportService","DataImportManager"];

      	
/*--------------DiscussionMessageController------------------*/
		
		function DiscussionMessageController($scope, $http, $filter,$stateParams,$state,DiscussionMessageService,DiscussionMessageManager,DataImportExportService,DataImportManager)
		{
			 $scope.discussion_messageManager=DiscussionMessageManager.create({state:$state});
             $scope.dataImportManager=$scope.discussion_messageManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.discussion_message_id?$stateParams.discussion_message_id:"list";
				console.log("DiscussionMessageController",id);
				$scope.discussion_messageManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/DiscussionMessageController------------------*/
		
        
})();

