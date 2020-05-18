(function(angular) {
    "use strict";
angular.module('bm-app', [])

    .directive('bmPermission', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.bmPermission, function(value){
					console.log('bmPermission',attrs.bmPermission,value,scope.app.loginUser);
					//if(typeof(value)!="undefined")
					{
						if(value=="0")
						{
							element.addClass("permission-0");
						}
						else
						{
							element.removeClass("permission-0");
						}
					}
					})
            }
        };
    })
	.directive('bmUiPermission', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.loginUser, function(loginUserValue){
					//console.log('bmUiPermission',attrs.loginUser,loginUserValue);
					if(!loginUserValue){return;}
					if(!loginUserValue.permissions){return;}
					
					var permission=loginUserValue.permissions[attrs.bmUiPermission];
					
						
						if(permission=="0")
						{
							element.addClass("permission-0");
						}
						else
						{
							element.removeClass("permission-0");
						}
					
					})
            }
        };
    })
	
 }(window.angular));	