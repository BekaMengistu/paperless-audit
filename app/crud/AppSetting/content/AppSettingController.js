(function() {
    'use strict';
    angular
        .module('app')
        .controller('AppSettingController', AppSettingController)

 		AppSettingController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"AppSettingService","AppSettingManager","DataImportExportService","DataImportManager"];

      	
/*--------------AppSettingController------------------*/
		
		function AppSettingController($scope, $http, $filter,$stateParams,$state,AppSettingService,AppSettingManager,DataImportExportService,DataImportManager)
		{
			 $scope.app_settingManager=AppSettingManager.create({state:$state});
             $scope.dataImportManager=$scope.app_settingManager.dataImportManager;

			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.app_setting_id?$stateParams.app_setting_id:"list";
				console.log("AppSettingController",id);
				$scope.app_settingManager.loadData(id);
			 }
			 
			 $scope.onPageLoad();
        }
/*--------------/AppSettingController------------------*/
		
        
})();

