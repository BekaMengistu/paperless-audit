(function(angular) {
    "use strict";
	
	angular.module( "app")
.directive( "bmUiPermission", [function()
	{
		return {
			
 			restrict: 'A',
 			scope: {loginUser: '=',bmUiPermission: '@'},
 			link: function($scope, $element, $attrs) 
			{
				if($scope.loginUser)
				{
					var useMode="non-strict";
					var userPermission=$scope.loginUser.permissions[$scope.bmUiPermission];
					//console.log("bmUiPermissionLink",typeof(userPermission)=="undefined",$scope.bmUiPermission,userPermission);
					if(typeof(userPermission)=="undefined")
					{
						if(!$scope.loginUser.newPermissions)
						{
							$scope.loginUser.newPermissions=[];
						}
						$scope.loginUser.newPermissions.push($scope.bmUiPermission);
					}
					var canAccess=true;
					if((typeof(userPermission)!="undefined") && !(userPermission/1))
					{
						canAccess=false;
					}
					if(useMode=="strict" && !userPermission)
					{
						canAccess=false;
					}
					if(!canAccess)
					{
						$element.addClass("permission-0");
					}
					else
					{
						$element.removeClass("permission-0");
					}
				}
				//$scope.onSelect = function() {$scope.whenSelect({stockName: $scope.stockData.name,stockPrice: $scope.stockData.price,stockPrevious: $scope.stockData.previous});};
 			}
		/* /link  */
		
 
			};
	}])	
	
 }(window.angular));
 