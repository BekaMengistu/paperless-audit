(function() {
    'use strict';
    angular
        .module('app')
        .controller('ToolsController', ToolsController)

 		ToolsController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"ToolsService"];

      	
/*--------------ToolsController------------------*/
		
		function ToolsController($scope, $http, $filter,$stateParams,$state ,ToolsService)
		{
			 
        }
/*--------------/ToolsController------------------*/
		
        
})();

