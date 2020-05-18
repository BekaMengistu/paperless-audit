(function(angular) {
    "use strict";
	
	angular.module( "app")
.directive( "bmTask", [function()
	{
		return {
			templateUrl: 'apps/directives/task/task_list.php',
 			restrict: 'A',
 			scope: {taskManager: '=',lookups: '=',title: '@',subTitle:'@',headerStyle:'@',whenSelect: '&'},
 			link: function($scope, $element, $attrs) 
			{
				$scope.deleteTask = function(index) {$scope.tasksData.splice(index,1);};
 				$scope.editTask=function(task) {$scope.editedTask=task}
				$scope.save=function(){TaskService.save()}
				//$scope.onSelect = function() {$scope.whenSelect({stockName: $scope.stockData.name,stockPrice: $scope.stockData.price,stockPrevious: $scope.stockData.previous});};
 			}
		/* /link  */
		
 
			};
	}])	
	
 }(window.angular));
 