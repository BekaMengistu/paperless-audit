(function() {
    'use strict';
    angular
        .module('app')
        //.controller('AppUserController', UserController)
        .controller('AppUserController', AppUserController);

AppUserController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"UserService","FileUploader",'editableOptions', 'editableThemes'];
      
	
 function AppUserController($scope, $http, $filter,$stateParams,$state,UserService,FileUploader,editableOptions, editableThemes)
 {
	 editableOptions.theme = 'bs3';
        editableOptions.icon_set = 'font-awesome';
        editableThemes.bs3.inputClass = 'form-control-sm';
        editableThemes.bs3.buttonsClass = 'btn-sm';
		
	 var uploader = $scope.uploader = new FileUploader({
                url: 'files/upload.php'
            });
			console.log("uploader",uploader);
			uploader.onAfterAddingFile = function(fileItem) {
                console.info('onAfterAddingFile', fileItem);
				fileItem.upload();
            };			
			
			uploader.onSuccessItem = function(fileItem, response, status, headers) {
                //console.info('onSuccessItem', fileItem, response, status, headers);
				console.info('onSuccessItem', {response: response, status:status, headers:headers});
				$scope.editedUser.profile_picture=response.fileName;
				
				//$scope.saveUser();
				//$scope.selectedDigitalDocument.file_path=fileItem.file.name;
				//$scope.saveDigitalDocument($scope.selectedDigitalDocument);
            };
			
	 $scope.editedUser={}
     
    	$scope.onCancelEdit=function()
		{
			console.log("onCancelEdit",$scope.editableForm);
			$scope.editedUser.profile_picture=$scope.editedUser.initialProfilePic;
		}
	 
	 $scope.loadDetailById=function (id)
	 {
		 return UserService.readDetailById(id)
			.then( function( si )
			{
		
				$scope.editedUser=si;
				
				return si;
			});
	 }
     $scope.saveUser=function()
	{
			$scope.editedUser.initialProfilePic=$scope.editedUser.profile_picture;
			return UserService.save($scope.editedUser)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
               // $state.go("app.database.UserEdit",{id:si.lastInsertId/1});
				//$scope.editedUser=$scope.loadUserById(si.lastInsertId);
				}
				return si;
			});
		
	}	
     $scope.onPageLoad=function()
     {
		 $scope.editedUser=$scope.app.loginUser;
		 $scope.editedUser.initialProfilePic=$scope.editedUser.profile_picture;
		 return;
      	var id=$scope.app.loginUser.user_id
	 	$scope.loadDetailById(id);
       
     }
	 $scope.changePassword=function()
	 {
		 $scope.editedUser.changePasswordMessage="Attempting changePassword.";
		 if(!$scope.editedUser.oldPassword || !$scope.editedUser.newPassword || !$scope.editedUser.newPassword2)
		 {
			 $scope.editedUser.changePasswordMessage="Some required fields are not filled.";
			 return;
		 }
		 if($scope.editedUser.oldPassword!=$scope.editedUser.password)
		 {
			 $scope.editedUser.changePasswordMessage="The current password is incorrect.";
			 return;
		 }
		 if($scope.editedUser.newPassword!=$scope.editedUser.newPassword2)
		 {
			 $scope.editedUser.changePasswordMessage="The new passwords do not match.";
			 return;
		 }
		 $scope.editedUser.password=$scope.editedUser.newPassword;
		 $scope.saveUser()
		 .then(function( si )
			{
				$scope.editedUser.changePasswordMessage="Password changed.";
			});
	 }
	 $scope.statuses = [
          {value: "on", text: 'Online'},
          {value: "off", text: 'Offline'},
          {value: "busy", text: 'Busy'}
        ];
     $scope.onPageLoad();
 }
        
})();
