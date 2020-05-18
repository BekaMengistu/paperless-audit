(function() {
    'use strict';
    angular
        .module('app')
        .controller('EventController', EventController)

 		EventController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"EventService","EventManager","DataImportExportService","DataImportManager"];

      	
/*--------------EventController------------------*/
		
		function EventController($scope, $http, $filter,$stateParams,$state,EventService,EventManager,DataImportExportService,DataImportManager)
		{
			 $scope.eventManager=EventManager.create({state:$state});
             $scope.dataImportManager=$scope.eventManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.event_id?$stateParams.event_id:"list";
				console.log("EventController",id);
				$scope.eventManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/EventController------------------*/
		
        
})();

