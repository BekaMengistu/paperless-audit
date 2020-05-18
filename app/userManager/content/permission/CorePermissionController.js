(function() {
    'use strict';
    angular
        .module('app')
        .controller('CorePermissionController', CorePermissionController)
       // .controller('UserEditController', UserEditController);

 		CorePermissionController.$inject = ['$scope', '$http', '$filter',"CorePermissionService"];
		//UserEditController.$inject = ['$scope', '$http', '$filter','$stateParams','$state',"UserService","FileUploader"];
      
 function CorePermissionController($scope, $http, $filter,CorePermissionService)
 {
	 
	 
	 $scope.permissionList=[];
	 $scope.roleList=[];
	 $scope.treeManager=new TreeManager();
	 
	 $scope.toggleChildView=function(node)
	 {
		 node.expanded=!node.expanded;
	 }
	 $scope.onAddChildPermission=function(node)
	 {
		 $scope.editedAppPermission={parent:node.data.name,name:node.data.name};
	 }
	 $scope.onDeletePermission=function(node,index)
	 {
		 if(confirm("Are you sure?"))
		 {
			 CorePermissionService.deletePermission(node.data.app_permission_id)
			 .then(function(sr){node.parent.children.splice(index,1);});
		 }
	 }
	 
	 
	 
	$scope.expandingProperty={field: "label", displayName: "Name", sortable: true, sortingType: "string"};
	$scope.col_defs=[{field: "description", displayName: "Description",filterable: true},
						{field: "parent", displayName: "Parent",filterable: true}
        				];

	 $scope.selectedRole={};	
	 
	 $scope.onEditPermission=function(permission)
	 {
		 if(permission)
		 {
			 $scope.editedAppPermission=permission;
		 }
		 else
		 {
		 $scope.editedAppPermission={};
		 }
	 }
	 
	 $scope.savePermission=function(permission)
	 {
		 CorePermissionService.savePermission(permission)
		 .then($scope.loadPermissionList);
	 }
	 
	 $scope.saveRole=function(role)
	 {
		 CorePermissionService.saveRole(role)
		 .then($scope.loadRoleList);
	 }
	 $scope.onEditRole=function(role)
	 {
		 if(role)
		 {
			 $scope.editedRole=role;
		 }
		 else
		 {
		 $scope.editedRole={};
		 }
	 }
	 
	 
	 $scope.toggleRolePermission=function(permission,name)
	 {
         console.log("toggleRolePermission",permission,name);
         
        // return;
		 if(permission)
		 {
             //app_permission_name
		 	permission.allowed=permission.allowed+""=="1"?0:1;
            permission.app_permission_name=name;
			CorePermissionService.saveRolePermission(permission)
			.then(function(sr){
                $scope.app.loginUser.permissions[permission.name]=sr;//permission.allowed;
				});
		 }
	 }
	 
	 $scope.selectRole=function(role)
	 {
		 CorePermissionService.readRoleDetail(role.app_role_id)
		 .then(function(sr){role.permissions=sr.permissions})
		 $scope.selectedRole=role;
	 }
	 $scope.treeGridOptions={
				expandingProperty:{field: "label", displayName: "Name", sortable: true, sortingType: "string"}
				,col_defs:[
						{field: "description", displayName: "Description",filterable: true},
						{field: "parent", displayName: "Parent",filterable: true}
        				]
			}
	$scope.my_tree_handler = function (branch) {
            console.log('you clicked on', branch)
        }
		
	 $scope.buildPermissionTree=function(list)
	 {
		 $scope.treeOptions={idField:"name",parentId:"parent",label:"name",includeFields:["name","description","parent"]}
			  	
	 	
		$scope.treeManager.makeTree(list,$scope.treeOptions);
		for(var i in $scope.treeManager.tree)
		{
			$scope.treeManager.tree[i].expanded=true;
		}
		
		$scope.treeBuilt=true;
		/*
			 $scope.col_defs = [
            
            {
                field: "description",
				displayName: "Description",
                sortable: true,
                sortingType: "string",
                filterable: true
            },
            {
                field: "tags",
				displayName: "Tags",
                sortable: true,
                sortingType: "string",
				cellTemplate: "<strong>{{row.branch[col.field]}}</strong>"
            }
        ];*/
	 }
	 
     $scope.setPermissionList=function(sr)
	 {
		 $scope.buildPermissionTree(sr);
		 $scope.permissionList=sr;
	 }
     $scope.setRoleList=function(sr)
	 {
		 $scope.roleList=sr;
	 }	 
     $scope.loadPermissionList=function()
     {
	 	CorePermissionService.readAllPermissions()
	 	.then($scope.setPermissionList);
     }
     $scope.loadRoleList=function()
     {
	 	CorePermissionService.readAllRoles()
	 	.then($scope.setRoleList);
     }

     $scope.deleteUser=function(id)
     {
	 	UserService.delete(id)
	 	.then($scope.loadList);
     }
	 
     $scope.onPageLoad=function()
     {
      	$scope.loadPermissionList();
		$scope.loadRoleList();
     }
     $scope.onPageLoad();
     
 }

        
})();
