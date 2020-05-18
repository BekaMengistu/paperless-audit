(function() {
    'use strict';
    angular
        .module('app')
    //    .factory('contactStorage', ContactStorage)
    //    .factory('contactGroupStorage', ContactGroupStorage)
        .controller('CoreUserController', CoreUserController)
        .controller('CoreUserEditController', CoreUserEditController);
/*
        ContactStorage.$inject = ['ngStore'];
        function ContactStorage(ngStore) {
            return ngStore.model('contact');
        }

        ContactGroupStorage.$inject = ['ngStore'];
        function ContactGroupStorage(ngStore) {
            return ngStore.model('contact-group');
        }

        ContactCtrl.$inject = ['$scope', '$http', '$filter', 'contactStorage'];
 */  
 	CoreUserController.$inject = ['$scope', '$http', '$filter',"UserService","CorePermissionService"];
	CoreUserEditController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"UserService","CorePermissionService","FileUploader"];
      
 function CoreUserController($scope, $http, $filter,UserService,CorePermissionService)
 {
	 $scope.selectedUser={};
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
		
 function CoreUserEditController($scope, $http, $filter,$stateParams,$state,UserService,CorePermissionService,FileUploader)
 {
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
			
	 $scope.rolesList=[];
	 $scope.rolesHash={};
	 $scope.onRoleRemoveCallback=function($item, $model)
	 {
		console.log("onRoleRemoveCallback",$item);
		CorePermissionService.deleteUserRole({app_role_id:$item.app_role_id,user_id:$scope.editedUser.user_id});
	 }
	 $scope.onRoleAddCallback=function($item, $model)
	 {
		console.log("onRoleAddCallback",$item);
		CorePermissionService.addUserRole({app_role_id:$item.app_role_id,user_id:$scope.editedUser.user_id});
	 }	 
 	 $scope.newUser=function()
	 {
		 
	 }
	 $scope.loadDetailById=function (id)
	 {
		 UserService.readDetailById(id)
		 
		 return CorePermissionService.readUserDetail(id)
			.then( function( sr )
			{
				console.log("readUserDetail",sr.roles,$scope.rolesHash)
				
				$scope.selectedUser.user_id=sr.user_id;
				$scope.editedUser=sr;
				
				
				var userRole=[];
				$scope.editedUser.userRole=userRole;
				
				for(var i in sr.roles)
				{
					
					var roleId=sr.roles[i].app_role_id;
					var role=$scope.rolesHash["item"+roleId];
					
					console.log("role",sr.roles[i]);
					if(role)
					{
						userRole.push(role);
					}
				}
				return sr;
			});
	 }
	 
     $scope.saveUser=function()
	{
		
			return UserService.save($scope.editedUser)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
                $state.go("app.user.manage_users.detail",{id:si.lastInsertId/1});
				//$scope.editedUser=$scope.loadUserById(si.lastInsertId);
				}
				return si;
			});
		
	}
	$scope.loadRoleList=function()
     {
	 	return CorePermissionService.readAllRoles()
	 	.then(function(sr){
			
			$scope.rolesList=sr;
			for(var i in sr)
			{
				$scope.rolesHash["item"+sr[i].app_role_id]=sr[i];
			}
			return sr;
			});
     }

	$scope.people = [
                { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
                { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
                { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
                { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
                { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
                { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
                { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
                { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
                { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
                { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
            ];
	$scope.multipleDemo={};
	$scope.multipleDemo.selectedPeopleWithGroupBy = [$scope.people[8], $scope.people[6]];
		
     $scope.onPageLoad=function()
     {
		 $scope.editedUser={};
		 $scope.loadRoleList()
		 .then(function(){
      	var id=$stateParams.id?$stateParams.id:0;
        console.log("UserDetailController",id);
        if(id/1)
        {
	 		$scope.loadDetailById(id);
        }
		else
		{
			$scope.selectedUser.user_id=0;
		}
		 });
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
                ret.address="";
                ret.user_type="";
                ret.status="";
                ret.is_archived="";
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