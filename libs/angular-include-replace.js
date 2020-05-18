angular.module('angular-include-replace', [])

    .directive('ngIncludeReplace', function() {
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.replaceWith(element.children());
            }
        };
    });