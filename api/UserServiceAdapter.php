<?php

class UserServiceAdapter
{
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readuserByUserName"] = "SELECT * FROM user WHERE user_name='#user_name#'";
		$dbQueries["readuserByUserNamePassword"] = "SELECT * FROM user WHERE user_name='#user_name#' AND password='#password#'";
        
		$dbQueries["readuserDetailById"] = "SELECT * FROM user WHERE user_id = '#user_id#' ";
		$dbQueries["readUserLookup"] = "SELECT user_id as id,user_name as name, profile_picture as image FROM user WHERE is_archived != '1' ";
		
			return $dbQueries;
		
	}
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/UsersService/getLoginUser/","UserServiceAdapter::getLoginUser"); 
		$sa->mapRoute("get","/LookupServices/User/","UserServiceAdapter::getLookup"); 
		$sa->mapRoute("get","/UsersService/logout/","UserServiceAdapter::logout"); 
		$sa->mapRoute("get","/UsersService/login/","UserServiceAdapter::login"); 
		$sa->mapRoute("post","/UsersService/signIn/","UserServiceAdapter::signIn"); 
		$sa->mapRoute("get","/UserService/readDetailById/:id","UserServiceAdapter::User_readDetailById"); 
		
	}
	public static function getLookup()
    {
       serveData("readUserLookup");
    }
	public static function User_readDetailById($id)
    {
       serveData("readuserDetailById",array("user_id"=>$id),QUERY_FETCH_ONE);
    }
    public static function getSessionUser()
    {
        $userStr = get_attribute_value($_SESSION,DB_NAME."_loginUser");
        return json_decode($userStr,true);
    }
	public static function  getLoginUser()
	{
		$defaultUserStr='{"user_id":"0","fullname":"Guest","userType":""}';
		$loginUser=get_attribute_value($_SESSION,DB_NAME."_loginUser");
		$loginUser=$loginUser?$loginUser:$defaultUserStr;
		
		$sessionUserData=json_decode($loginUser,true);
		$user_id=get_attribute_value($sessionUserData,"user_id");
		
		$result=CoreAppPermissionServiceAdapter::readUserDetail($user_id);
		 //serveData("readuserDetailById",array("user_id"=>$id),QUERY_FETCH_ONE);
		 
		$_SESSION["loginUser"]=json_encode($result);
		//echo(json_encode($result));
	}
	
	
	public static function logout()
	{
		//$loginUser=get_attribute_value($_SESSION,"loginUser",'{"userId":"0","fullname":"Guest","userType":"guest"}');
		$_SESSION[DB_NAME."_loginUser"]="";
		UserServiceAdapter::getLoginUser();
		//echo($loginUser);
	}
    //readuserByUserNamePassword
	public static function signIn()
	{
		$params=getPostParams();
		
		$result=dbFetchData("readuserByUserNamePassword",$params,QUERY_FETCH_ONE);
		if($result)
		{
            $_SESSION[DB_NAME."_loginUser"]=json_encode($result);
            /*
			$password=get_attribute_value($result,"password");
			if($password==get_attribute_value($params,"password"))
			{
				$_SESSION[DB_NAME."_loginUser"]=json_encode($result);
			}
			else
			{
				$result=$params;
				$result["password"]="";
				$result["message"]="Invalid Password";
				$result["correct"]=$password;
			}
            */
		}
		else
		{
			$result=$params;
			$result["password"]="";
			$result["message"]="Invalid User Name";
		}
		echo(json_encode($result));
		//$password=get_attribute_value($params,"login");
		
	}
	
	public static function signIn2()
	{
		$params=getPostParams();
		
		$result=dbFetchData("readuserByUserName",$params,QUERY_FETCH_ONE);
		if($result)
		{
			$password=get_attribute_value($result,"password");
			if($password==get_attribute_value($params,"password"))
			{
				$_SESSION[DB_NAME."_loginUser"]=json_encode($result);
			}
			else
			{
				$result=$params;
				$result["password"]="";
				$result["message"]="Invalid Password";
				$result["correct"]=$password;
			}
		}
		else
		{
			$result=$params;
			$result["password"]="";
			$result["message"]="Invalid User Name";
		}
		echo(json_encode($result));
		//$password=get_attribute_value($params,"login");
		
	}
	public static function login()
	{
	//$data_param = strftime("%Y-%m-%d %H:%M:%S");
	//echo($data_param);
	//return;
		//$_SESSION["loginUser"]='{"userId":"1","fullname":"Administrator","userType":"admin"}';
        echo ("{'userId':'1','fullname':'Administrator','userType':'admin of the app'}");
		//UserServiceAdapter::getLoginUser();
	
	}	
}
UserServiceAdapter::mapServiceRoute($sa);
$dbQueries	=UserServiceAdapter::registerQueries($dbQueries);

?>