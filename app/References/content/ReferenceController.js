(function() {
    'use strict';
    angular
        .module('app')
        .controller('ReferenceController', ReferenceController)
        .service('ReferenceService', ReferenceService)    

    
 		ReferenceController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','ReferenceService'];

        ReferenceService.$inject = ['$http',"$q","$state","$timeout"];


    function ReferenceService($http,$q,$state,$timeout)
    {
        return {getReferenceList :function(){return excuteService($q,$http,"api/ReferenceService/getReferenceList/", {},"get");}};
    }
    
/*--------------ReferenceController------------------*/
		
		function ReferenceController($scope, $http, $filter,$stateParams,$state,ReferenceService)
		{
			 $scope.app.referenceOnPageLoad=function()
			 {
				
				console.log("ReferenceController");
				return ReferenceService.getReferenceList()
                 .then(function(sr){$scope.itemsList=sr;})
			 }
     }

        
})();

