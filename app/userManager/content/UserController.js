(function() {
    'use strict';
    angular
        .module('app')
    //    .factory('contactStorage', ContactStorage)
    //    .factory('contactGroupStorage', ContactGroupStorage)
        .controller('UserController', UserController)
        .controller('UserEditController', UserEditController)
        

 		
        UserController.$inject = ['$scope', '$http', '$filter',"UserService"];
        UserEditController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"UserService","FileUploader"];

    

 function UserController($scope, $http, $filter,UserService)
 {
	 
	 
	 $scope.UserList=[];
      $scope.setList=function(sr)
	 {
		 $scope.UserList=sr;
	 }
     $scope.loadList=function()
     {
	 	UserService.readAll()
	 	.then($scope.setList);
     }
     $scope.deleteUser=function(id)
     {
	 	UserService.delete(id)
	 	.then($scope.loadList);
     }
     
     $scope.loadList();
 }
		
 function UserEditController($scope, $http, $filter,$stateParams,$state,UserService,FileUploader)
 {
	 var uploader = $scope.uploader = new FileUploader({
                url: 'files/upload.php'
            });
			
			uploader.onAfterAddingFile = function(fileItem) {
                console.info('onAfterAddingFile', fileItem);
				fileItem.upload();
            };			
			
			uploader.onSuccessItem = function(fileItem, response, status, headers) {
                //console.info('onSuccessItem', fileItem, response, status, headers);
				console.info('onSuccessItem', {response: response, status:status, headers:headers});
				$scope.editedUser.profile_picture=response.fileName;
				
				$scope.saveUser();
				//$scope.selectedDigitalDocument.file_path=fileItem.file.name;
				//$scope.saveDigitalDocument($scope.selectedDigitalDocument);
            };
			
	 $scope.editedUser={}
     
    
	 
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
		
			return UserService.save($scope.editedUser)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
                $state.go("app.database.UserEdit",{id:si.lastInsertId/1});
				//$scope.editedUser=$scope.loadUserById(si.lastInsertId);
				}
				return si;
			});
		
	}	
     $scope.onPageLoad=function()
     {
      	var id=$stateParams.id?$stateParams.id:0;
        console.log("UserDetailController",id);
        if(id/1)
        {
	 		$scope.loadDetailById(id);
        }
		else
		{
			$scope.editedUser={profile_picture:"", user_name:"NewUser", password:"password", full_name:"New User", email:"", telephone_no:""}
		}
     }
     $scope.onPageLoad();
 }
        
})();
/*
function UserController($scope, $http,$timeout,$stateParams,$state,$location,UserService, userService)
{

	$scope.UserList=null;


	$scope.deleteUser=function(id)
	{
		UserService.delete(id)
		.then($scope.loadUserList)
	}
	$scope.loadUserList=function()
	{
		return UserService.readAll()
		.then( function( si )
		{
	
			$scope.UserList=si;
			console.log("loadUserList",si);
			
			return si;
		});
	}		
		$scope.onAppStart=function()
		{
			$scope.loadUserList();
		}
		$scope.onAppStart();	
 	
}

function EditUserController($scope, $http,$timeout,$stateParams,$state,$location,userService,UserService)
{	
	$scope.editedUser=null;
	
    $scope.createNewUser=function()
    {
    	var ret={};
                ret.user_id="";
                ret.profile_picture="";
                ret.user_name="";
                ret.password="";
                ret.full_name="";
                ret.email="";
                ret.telephone_no="";
                return ret;
    }
	$scope.saveUser=function()
	{
		
			return UserService.save($scope.editedUser)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
                $state.go("app.editUser",{id:si.lastInsertId/1});
				//$scope.editedUser=$scope.loadUserById(si.lastInsertId);
				}
				return si;
			});
		
	}		

	$scope.loadUserById=function(id)
	{
		if(id/1)
		{
			return UserService.readDetailById(id)
			.then( function( si )
			{
		
				$scope.editedUser=si[0];
				
				return si;
			});
		}
        else
		{
		$scope.editedUser=$scope.createNewUser();	
		//console.log("loadUserById",$scope.editedUser);
		return $scope.editedUser;
		}
	}		
	$scope.onAppStart=function()
	{
		var id=$stateParams.id?$stateParams.id:0;
		$timeout(function(){
		$scope.loadUserById(id);},100);
	}
	$scope.onAppStart();
}*/