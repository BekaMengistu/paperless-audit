<?php
class UserServiceAdapter
{
	public static function registerQueries($dbQueries)
	{
			return $dbQueries;
		
	}
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/UsersService/getLoginUser/","UserServiceAdapter::getLoginUser"); 
		$sa->mapRoute("get","/UsersService/logout/","UserServiceAdapter::logout"); 
		$sa->mapRoute("get","/UsersService/login/","UserServiceAdapter::login"); 
		$sa->mapRoute("post","/UsersService/signIn/","UserServiceAdapter::signIn"); 
		
	}
	public static function  getLoginUser()
	{
		$defaultUserStr='{"user_id":"0","fullname":"Guest","userType":""}';
		$loginUser=get_attribute_value($_SESSION,"loginUser");
		$loginUser=$loginUser?$loginUser:$defaultUserStr;
		$_SESSION["loginUser"]=$loginUser;
		echo($loginUser);
	}
	public static function logout()
	{
		//$loginUser=get_attribute_value($_SESSION,"loginUser",'{"userId":"0","fullname":"Guest","userType":"guest"}');
		$_SESSION["loginUser"]="";
		UserServiceAdapter::getLoginUser();
		//echo($loginUser);
	}
	
	public static function signIn()
	{
		$params=getPostParams();
		//$result=dbFetchData("authenticateUser",$params,QUERY_FETCH_ONE);
		
		$result="";
		$login=get_attribute_value($params,"login");
		$password=get_attribute_value($params,"password");
		
		if(strtoupper($login)=="ADMIN" && $password=="Admin")
		{
			$result=array("user_id"=>"1","userType"=>"System Administrator","fullname"=>"System Admin","username"=>"Admin","email"=>"admin@gmail.com");
		}
		//{"user_id":"1","userType":"System Administrator","fullname":"Beka Mengistu","username":"beka","email":"bekalive@gmail.com","pass":"123","dateAdded":"2016-05-19 22:56:04","gender":"Male","marital":"Married"}
		
		if(!$result)
		{
			$result=$params;
			$result["password"]="";
		}
		else
		{
			$_SESSION["loginUser"]=json_encode($result);
		}
		echo(json_encode($result));
	}
	public static function login()
	{
	$data_param = strftime("%Y-%m-%d %H:%M:%S");
	//echo($data_param);
	//return;
		$_SESSION["loginUser"]='{"userId":"1","fullname":"Administrator","userType":"admin"}';
		UserServiceAdapter::getLoginUser();
	
	}	
}
UserServiceAdapter::mapServiceRoute($sa);
$dbQueries	=UserServiceAdapter::registerQueries($dbQueries);
  
  