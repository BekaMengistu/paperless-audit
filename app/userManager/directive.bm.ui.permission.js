(function(angular) {
    "use strict";
	
	angular.module( "app")
.directive( "bmUiPermission2", [function()
	{
		var setElementPermission=function($scope, $element, $attrs)
		{
			if($scope.bmMode)
			{
			console.log($scope.loginUser.permissions);
			}
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
		return {
			
 			restrict: 'A',
 			scope: {loginUser: '=',bmUiPermission: '@',bmMode:'='},
 			link: function(scope, element, attrs) 
			{
				
				scope.$watch(scope.loginUser,function(){
					if(attrs['bmMode'])
					{
					console.log("bmUiPermission.watch(loginUser)",scope.loginUser);
					}
				if(scope.loginUser)
				{
					
					
					if(!scope.loginUser.permissions)
					{
						return;
					}
					scope.$watch(scope.loginUser.permissions,function(){
					if(attrs['bmMode'])
					{
					console.log("bmUiPermission.watch(loginUser)",scope.loginUser);
					}	
					setElementPermission(scope, element, attrs);
					});
				}
				});
				//$scope.onSelect = function() {$scope.whenSelect({stockName: $scope.stockData.name,stockPrice: $scope.stockData.price,stockPrevious: $scope.stockData.previous});};
 			}
		/* /link  */
		
 
			};
	}])	
	
 }(window.angular));
 