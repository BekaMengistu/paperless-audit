(function(angular) {
    "use strict";
	
	angular.module( "app")
.directive( "bmMessaging", [function()
	{
		return {
			templateUrl: 'app/Messaging/content/bm.messaging.template.html',
 			restrict: 'A',
 			scope: {messagingOptions: '=',app: '=',title: '@',subTitle:'@',headerStyle:'@',whenSelect: '&'},
 			link: function($scope, $element, $attrs) 
			{
				console.log("bmMessaging",$scope.messagingOptions)
				if($scope.messagingOptions.discussion_id)
				{
					//$scope.onDiscussionClick($scope.messagingOptions.discussion_id);
				}
				/*$scope.deleteTask = function(index) {$scope.tasksData.splice(index,1);};
 				$scope.editTask=function(task) {$scope.editedTask=task}
				$scope.save=function(){TaskService.save()}*/
				//$scope.onSelect = function() {$scope.whenSelect({stockName: $scope.stockData.name,stockPrice: $scope.stockData.price,stockPrevious: $scope.stockData.previous});};
 			}
		/* /link  */
		
 
			};
	}])	
	
 }(window.angular));
 