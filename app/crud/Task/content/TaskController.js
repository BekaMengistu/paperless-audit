(function() {
    'use strict';
    angular
        .module('app')
        .controller('TaskController', TaskController)

 		TaskController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"TaskService","TaskManager","DataImportExportService","DataImportManager"];

      	
/*--------------TaskController------------------*/
		
		function TaskController($scope, $http, $filter,$stateParams,$state,TaskService,TaskManager,DataImportExportService,DataImportManager)
		{
			 $scope.taskManager=TaskManager.create({state:$state});
             $scope.dataImportManager=$scope.taskManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.task_id?$stateParams.task_id:"list";
				console.log("TaskController",id);
				$scope.taskManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/TaskController------------------*/
		
        
})();

