(function() {
    'use strict';
    angular
        .module('app')
        .controller('MessagingController', MessagingController)

 		MessagingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state'
			,"MessagingService"
			,"DiscussionManager"
			,"DiscussionMessageService"
			,"DiscussionMessageManager"
			,"UserService"];

      	
/*--------------DiscussionController------------------*/
		
		function MessagingController($scope, $http, $filter,$stateParams,$state
			,DiscussionService
			,DiscussionManager
			,DiscussionMessageService
			,DiscussionMessageManager
			,UserService)
		{
			 $scope.discussionManager=DiscussionManager.create({state:$state,editPath:{url:"app.messaging.detail",id:"discussion_id"},listPath:{url:"app.messaging.list"}});

             $scope.dataImportManager=$scope.discussionManager.dataImportManager;
			
			 $scope.discussion_messageManager=DiscussionMessageManager.create({state:$state});
			 
			 $scope.editorOptions = {
            height: 80,
            toolbar: [
              ['style', ['bold', 'italic', 'underline', 'clear']],
			  ['font',['fontname']],
              ['color', ['color']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['height', ['height']],
                ['picture', ['picture']],
                ['table', ['table']]
            ]
                 ,fontNames: ['Roboto','Eurostile','Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Merriweather','Impact','']
          };
			 
			$scope.loadMessages=function(id)
			{
				$scope.discussion_messageManager.loadData("list");
			}
			$scope.loadUsers=function()
			{
				UserService.readAll()
				.then(function(sr){
				$scope.usersLookup=sr;
				$scope.userHash=buildHash(sr,"user","user_id");
				});
			}
			$scope.createDiscussion=function(options)
			{
				var newDiscussion={user_id:$scope.app.loginUser.user_id, post_time:new Date(), parent_type:"", parent_id:"", discussion_name:"", participants:""}
				var newDiscussionParams={};
				console.log("createDiscussion",options);
				if(options)
				{
					if(options.newDiscussionParams)
					{
						newDiscussionParams=options.newDiscussionParams();
					}
				}
				for(var i in newDiscussionParams)
				{
					newDiscussion[i]=newDiscussionParams[i];
				}
				console.log("------",newDiscussion);
				DiscussionService.save(newDiscussion)
				.then(function(sr){$scope.onPageLoad()});
				
			}
			$scope.loadDiscussionDetail=function(id)
			{
				//$scope.discussion_messageManager.loadData("list");
				if(id)
				{
					$scope.activeDiscussionId=id;
				}
				$scope.discussionManager.loadDetail($scope.activeDiscussionId);
				//$scope.discussion_messageManager.loadMessagesForDiscussion($scope.activeDiscussionId);
				$scope.newMessage={user_id:$scope.app.loginUser.user_id,discussion_id:$scope.activeDiscussionId,message_body:"",recipients:""}
				//.then($scope.loadUsers)
			}
			$scope.sendMessage=function(message)
			{
				message.message_time=new Date();
				DiscussionMessageService.save(message)
				.then(function(){$scope.loadDiscussionDetail()});
			}
			$scope.onDiscussionClick=function(id)
			{
				$scope.activeDiscussionId=id;
				$scope.loadDiscussionDetail(id);
			}
			 $scope.onPageLoad=function()
			 {
				 $scope.loadUsers();
				 
				 console.log("MessagingController.messagingOptions",$scope.messagingOptions);
				 if($scope.messagingOptions)
				 {
					 if($scope.messagingOptions.showDiscussionList)
					 {
						 $scope.discussionManager.loadData("list")
					 }
					 
					 if($scope.messagingOptions.discussion_id)
					 {
						 $scope.loadDiscussionDetail($scope.messagingOptions.discussion_id);
					 }
					 else if($scope.messagingOptions.discussion)
					 {
						 if($scope.messagingOptions.discussion.loadMethod=="loadDiscussionForEntity")
						 {
							 $scope.discussionManager.loadDiscussionForEntity($scope.messagingOptions.discussion)
							 .then(function(sr){
								 if(sr && sr.discussion_id)
								 {
									 $scope.loadDiscussionDetail(sr.discussion_id);
								 }
								 })
						 }
						 
					 }
				 }
				 else
				 {
					var id=$stateParams.discussion_id?$stateParams.discussion_id:"list";
					$scope.activeDiscussionId=id;
					console.log("MessagingController.onPageLoad",id);
					
					$scope.discussionManager.loadData("list")
					.then(function(sr){
						console.log("MessagingController.after data");
						});
					if(id!=0 && id!="list")
					{
						console.log("MessagingController Load Detail");
						$scope.loadDiscussionDetail(id);
					}
				 }
					
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/DiscussionController------------------*/
		
        
})();

