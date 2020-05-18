(function(angular) {
    "use strict";
	
	angular.module( "app")
.service( "CorePermissionService", function( $q,$http )
	{
		return {
			readAllPermissions :function(){return excuteService($q,$http,"api/PermissionService/readAllPermissions/", {},"get");}
			,deletePermission:function(id){return excuteService($q,$http,"api/PermissionService/deletePermission/" + id, {},"delete");}
			,savePermission:function(params){return excuteService($q,$http,"api/PermissionService/savePermission/", params,"post");}
			
			,readAllRoles :function(){return excuteService($q,$http,"api/PermissionService/readAllRoles/", {},"get");}
			,readRoleDetail:function(id){return excuteService($q,$http,"api/PermissionService/readRoleDetail/" + id, {},"get");}
			,deleteRole:function(id){return excuteService($q,$http,"api/PermissionService/deleteRole/" + id, {},"delete");}
			,saveRole:function(params){return excuteService($q,$http,"api/PermissionService/saveRole/", params,"post");}
			,saveRolePermission:function(params){return excuteService($q,$http,"api/PermissionService/saveRolePermission/", params,"post");}
				
			,readUserDetail:function(id){return excuteService($q,$http,"api/PermissionService/readUserDetail/" + id, {},"get");}

			,addUserRole:function(params){return excuteService($q,$http,"api/PermissionService/addUserRole/", params,"post");}
			,deleteUserRole:function(params){return excuteService($q,$http,"api/PermissionService/deleteUserRole/", params,"post");}
			
			};
	})	
	
 }(window.angular));
 
 /*
 		$sa->mapRoute("get","/PermissionService/readAllPermissions/","CoreAppPermissionServiceAdapter::readAllPermissions"); 
   		$sa->mapRoute("delete","/PermissionService/deletePermission/:id","CoreAppPermissionServiceAdapter::deletePermission"); 
   	 	$sa->mapRoute("post","/PermissionService/savePermission/","CoreAppPermissionServiceAdapter::savePermission"); 
    
		
     	$sa->mapRoute("get","/PermissionService/readAllRoles/","CoreAppPermissionServiceAdapter::readAllRoles"); 
	   	$sa->mapRoute("get","/PermissionService/readRoleDetail/:id","CoreAppPermissionServiceAdapter::readRoleDetail"); 
   		$sa->mapRoute("delete","/PermissionService/deleteRole/:id","CoreAppPermissionServiceAdapter::deleteRole"); 
   	 	$sa->mapRoute("post","/PermissionService/saveRole/","CoreAppPermissionServiceAdapter::saveRole"); 
*/