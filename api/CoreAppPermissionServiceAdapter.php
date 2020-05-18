<?php
class CoreAppPermissionServiceAdapter
{
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readPermissionsForRole"] = "SELECT * FROM role_permission WHERE app_role_id='#app_role_id#'";
		$dbQueries["readapp_permission"] = "SELECT * FROM app_permission ORDER BY app_permission_id DESC";
		$dbQueries["readUserRole"] = "SELECT * FROM user_role WHERE user_id='#user_id#'";
		$dbQueries["remove_user_role"] = "DELETE FROM user_role WHERE user_id = '#user_id#' AND app_role_id='#app_role_id#' ";
	
		$dbQueries["addUserRole"] = "INSERT INTO user_role  (user_id,app_role_id) VALUES ('#user_id#','#app_role_id#') ";
		
		$dbQueries["deleteuser_role"] = "DELETE FROM user_role WHERE user_role_id = '#user_role_id#' ";
/*
	
    $dbQueries["adduser_role"] = "INSERT INTO user_role 
	 ( user_id, app_role_id) 
	 VALUES ( '#user_id#', '#app_role_id#')";
	 
		"INSERT INTO user_role 
	 ( user_id, app_role_id) 
	 VALUES ( '#user_id#', '#app_role_id#')";
	 */

		return $dbQueries;
		
	}
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/PermissionService/readAllPermissions/","CoreAppPermissionServiceAdapter::readAllPermissions"); 
   		$sa->mapRoute("delete","/PermissionService/deletePermission/:id","CoreAppPermissionServiceAdapter::deletePermission"); 
   	 	$sa->mapRoute("post","/PermissionService/savePermission/","CoreAppPermissionServiceAdapter::savePermission"); 
    
		
     	$sa->mapRoute("get","/PermissionService/readAllRoles/","CoreAppPermissionServiceAdapter::readAllRoles"); 
	   	$sa->mapRoute("get","/PermissionService/readRoleDetail/:id","CoreAppPermissionServiceAdapter::readRoleDetail"); 
   		$sa->mapRoute("delete","/PermissionService/deleteRole/:id","CoreAppPermissionServiceAdapter::deleteRole"); 
   	 	$sa->mapRoute("post","/PermissionService/saveRole/","CoreAppPermissionServiceAdapter::saveRole"); 

   	 	$sa->mapRoute("post","/PermissionService/saveRolePermission/","CoreAppPermissionServiceAdapter::saveRolePermission"); 
		
		$sa->mapRoute("get","/PermissionService/readUserDetail/:id","CoreAppPermissionServiceAdapter::readUserDetail"); 

   	 	$sa->mapRoute("post","/PermissionService/addUserRole/","CoreAppPermissionServiceAdapter::addUserRole"); 
		
		$sa->mapRoute("post","/PermissionService/deleteUserRole/","CoreAppPermissionServiceAdapter::deleteUserRole"); 
		
		
	}
	public static function addUserRole()
	{
		$params=getPostParams();
		serveData("addUserRole",$params);
	}
	public static function deleteUserRole()
	{
		$params=getPostParams();
		serveData("remove_user_role",$params);
	}
	
	public static function readUserDetail($id)
	{
		$user=dbFetchData("readuserDetailById",array("user_id"=>$id),QUERY_FETCH_ONE);
		if($user)
		{
			$user["roles"]=dbFetchData("readUserRole",array("user_id"=>$id));
			$user["permissions"]=CoreAppPermissionServiceAdapter::readRolesPremissions($user["roles"]);
		}
		echo(json_encode($user));
		return $user;
	}
	public static function readUserPermissions($user)
	{
		
	}
	public static function readRolesPremissions($roles)
    {
			$permissionsHash=array();
			$rolePermiHash=array();
			
			$allPermissions=dbFetchData("readapp_permission");
			foreach($allPermissions as $p)
			{
				$permissionsHash["p".$p["app_permission_id"]]=$p["name"];
				
				$rolePermiHash[$p["name"]]="0";
			}
			foreach($roles as $role)
			{
				$rolePermissions=dbFetchData("readPermissionsForRole",$role,QUERY_FETCH_ALL);
				
				foreach($rolePermissions as $rp)
				{
					$permissionName=get_attribute_value($permissionsHash,"p".$rp["app_permission_id"]);
					if($permissionName && $rp["allowed"]==1)
					{
						$rolePermiHash[$permissionName]=$rp["allowed"];
					}
				}
			}
			//$role["permissions"]=dbFetchData("readPermissionsForRole",array("app_role_id"=>$id),QUERY_FETCH_ALL);
			return $rolePermiHash;
		
	   
    } 
	public static function saveRolePermission()
    {
    	$params=getPostParams();
        $result = CrudServiceAdapter::_RolePermission_save($params);
        
        //$result = addOrUpdateData($params,"role_permission_id","addrole_permission","updaterole_permission");
		echo(json_encode($result));
    }
	
	public static function readAllPermissions()
    {
    	serveData("readapp_permission");
    } 
    public static function AppPermission_readDetailById($id)
    {
       serveData("readapp_permissionDetailById",array("app_permission_id"=>$id),QUERY_FETCH_ONE);
    } 
    public static function deletePermission($id)
    {
       serveData("deleteapp_permission",array("app_permission_id"=>$id));
    } 
    public static function savePermission()
    {
    	$params=getPostParams();
        $result= addOrUpdateData($params,"app_permission_id","addapp_permission","updateapp_permission");
		echo(json_encode($result));
    }
    
  
    public static function readAllRoles()
    {
    	serveData("readapp_role");
    } 
    public static function readRoleDetail($id)
    {
		$role=dbFetchData("readapp_roleDetailById",array("app_role_id"=>$id),QUERY_FETCH_ONE);
       	if($role)
		{
			$permissionsHash=array();
			$rolePermiHash=array();
			
			$allPermissions=dbFetchData("readapp_permission");
			foreach($allPermissions as $p)
			{
				$permissionsHash["p".$p["app_permission_id"]]=$p["name"];
				
				$rolePermiHash[$p["name"]]=array("app_permission_id"=>$p["app_permission_id"],"app_role_id"=>$role["app_role_id"]);
			}
			$rolePermissions=dbFetchData("readPermissionsForRole",array("app_role_id"=>$id),QUERY_FETCH_ALL);
			
			foreach($rolePermissions as $rp)
			{
				$permissionName=get_attribute_value($permissionsHash,"p".$rp["app_permission_id"]);
				if($permissionName)
				{
					$rolePermiHash[$permissionName]=$rp;
				}
			}
			
			//$role["permissions"]=dbFetchData("readPermissionsForRole",array("app_role_id"=>$id),QUERY_FETCH_ALL);
			$role["permissions"]=$rolePermiHash;
			echo(json_encode($role));
		}
	   
    } 
    public static function deleteRole($id)
    {
       serveData("deleteapp_role",array("app_role_id"=>$id));
    } 
    public static function saveRole()
    {
    	$params=getPostParams();
        $result= addOrUpdateData($params,"app_role_id","addapp_role","updateapp_role");
		echo(json_encode($result));
    }
    
}
CoreAppPermissionServiceAdapter::mapServiceRoute($sa);
$dbQueries	=CoreAppPermissionServiceAdapter::registerQueries($dbQueries);

?>