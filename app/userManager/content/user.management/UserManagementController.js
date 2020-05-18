(function() {
    'use strict';
    angular
        .module('app')
        .controller('UserManagementController', UserManagementController)
		.controller('UserAppController', UserAppController)
		.controller('UserProfileController', UserProfileController)
		.controller('UserDocumentController', UserDocumentController)
        .controller('SigninLogController', SigninLogController)
    
        SigninLogController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','CRUDManagers'];
    
 		UserAppController.$UserAppController = ['$scope', '$http', '$filter','$stateParams','$state',"UserService","UserManager","FileUploader","CorePermissionService"];

 		UserManagementController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"UserService","UserManager","FileUploader","CorePermissionService"];

 		UserProfileController.$inject = ['$scope', '$http', '$filter','$stateParams','$state','$timeout',"UserService","UserManager","FileUploader","CorePermissionService"];

      	UserDocumentController.$inject = ['$scope', '$http', '$q','$filter','$stateParams','$state','$timeout',"DigitalDocumentService","DocumentManager"]
		
/*--------------SigninLogController------------------*/
		
		function SigninLogController($scope, $http, $filter,$stateParams,$state,CRUDManagers)
		{
			 $scope.signin_logManager=CRUDManagers.SigninLog({state:$state});
            

			 $scope.app.onSigninLogPageLoad=function()
			 {
				var id=$state.params.signin_log_id?$stateParams.signin_log_id:"list";
				console.log("onSigninLogPageLoad",id);
				return $scope.signin_logManager.loadData(id);
			 }
			 
			// $scope.onPageLoad();
     }	
    
		function UserAppController($scope, $http, $filter,$stateParams,$state,UserService,UserManager,FileUploader,CorePermissionService)
		{
			$scope.userManager=UserManager.create({state:$state});

			 
			 
			var uploader = $scope.uploader = new FileUploader({
                url: 'files/upload.php'
            });
			
			uploader.onAfterAddingFile = function(fileItem) {fileItem.upload();};			
			uploader.onSuccessItem = function(fileItem, response, status, headers) {$scope.userManager.editedUser.profile_picture=response.fileName;};
			
			$scope.userManager.editPath.url="app.user.manage_users.detail";
			 
			 
			 $scope.editedUserId=0;
			 $scope.rolesList=[];
			 $scope.rolesHash={};
			 
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
			 $scope.loadDetailById=function (id)
	 		{
		 		//UserService.readDetailById(id)
		 		$scope.editedUserId=id;
			 return CorePermissionService.readUserDetail($scope.editedUserId)
				.then( function( sr )
				{
					if($scope.editedUserId==0)
					{
						sr={user_name:""
							,profile_picture:"default_user.png"
							,address: ""
							,email: ""
							,full_name: ""
							,password: ""
							,status: ""
							,telephone_no: ""
							,user_type: ""
							,roles:[]}
					}
					console.log("readUserDetail",sr.roles,$scope.rolesHash)
					
					//$scope.selectedUser.user_id=sr.user_id;
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
					$scope.userManager.editedUser=$scope.editedUser;
					return sr;
				});
	 		}
		}
	/*--------------UserController------------------*/
		
		function UserManagementController($scope, $http, $filter,$stateParams,$state,UserService,UserManager,FileUploader,CorePermissionService)
		{
			
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
			 
			 
			
			 $scope.onPageLoad=function()
			 {
				var id=$stateParams.user_id?$stateParams.user_id:"list";
				console.log("UserController",id);
				if(id=="list")
				{
					$scope.userManager.loadData(id);
				}
				else
				{
					$scope.editedUserId=id;
					 $scope.loadRoleList()
					 .then(function(sr){$scope.loadDetailById(id)})
				}
			 }
			 
			 $scope.onPageLoad();		 
		}
	/*--------------/UserController------------------*/
		function UserProfileController($scope, $http, $filter,$stateParams,$state,$timeout,UserService,UserManager,FileUploader,CorePermissionService)
		{
           
			$scope.changePassword=function()
			{
                 $scope.editedUser.changePasswordMessage="";
                if($scope.editedUser.newPassword!=$scope.editedUser.newPassword2)
                {
                    $scope.editedUser.changePasswordMessage="Passwords don't match!";
                    return;    
                }
				//$scope.editedUser.password=$scope.editedUser.newPassword;
				UserService.changePassword($scope.editedUser)
				.then(function(sr){
				$scope.editedUser.changePasswordMessage=sr.message;
				$timeout(function(){$scope.editedUser.changePasswordMessage=""},5000);
				});
			}
			$scope.onPageLoad=function()
			 {
				 $scope.editedUserId=$scope.app.loginUser.user_id;
				 CorePermissionService.readUserDetail($scope.editedUserId)
				 .then(function(sr){
					 $scope.userManager.editedUser=$scope.editedUser=sr;
					 
					 });
			 }
			 $scope.onPageLoad();
			 $scope.statuses=[{value:"off",text:"Offline"},{value:"on",text:"Online"},{value:"away",text:"Away"},{value:"busy",text:"Busy"}];
			 
			 
		}
	/*--------------/CustomerDocumentController------------------*/

	function UserDocumentController($scope, $http,$q, $filter,$stateParams,$state,$timeout,DigitalDocumentService,DocumentManager,FileUploader) 
		{
			
			$scope.documentManager=DocumentManager.create();
			$scope.documentManager.state=$state;
			$scope.documentManager.viewType="view";
			
			$scope.documentManager.showEditor=false;
			
			
			$scope.createDocumentFromTemplate=function()//template_id,root_attributes,new_attributes)
			{
				var template_id=$scope.documentManager.entityDocStatus.templateInfo.template.data.document_id;
				var root_attributes=$scope.documentManager.entityDocStatus.templateInfo.root_attributes;
				var new_attributes=$scope.documentManager.entityDocStatus.templateInfo.new_attributes;
				
				root_attributes.document_name=$scope.userManager.editedUser.full_name;
				
				$scope.documentManager.createFromTemplate(template_id,root_attributes,new_attributes)
				.then($scope.loadUserDocuments);
			}
			
			$scope.loadUserDocuments=function()
			{
				$scope.documentManager.loadOrCreateEntityDocument("User",$scope.editedUserId,"user_template","user_target","User " + $scope.editedUserId);
			}
			

			$scope.onUserDocumentPageLoad=function()
			{
				console.log("onUserDocumentPageLoad");
				$scope.loadUserDocuments();
				//$scope.loadCustomerData()
				//.then($scope.loadCustomerDocuments)
				
				
			}
			$scope.onUserDocumentPageLoad();
		 }
	/*--------------/CustomerDocumentController------------------*/

        
})();
