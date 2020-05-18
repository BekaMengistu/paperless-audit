<?php

class UserServiceAdapter
{
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readuserByUserName"] = "SELECT * FROM user WHERE user_name='#user_name#'";
		$dbQueries["readuserByUserNamePassword"] = "SELECT * FROM user WHERE user_name='#user_name#' AND password='#password#'";
        
		$dbQueries["readuserDetailById"] = "SELECT * FROM user WHERE user_id = '#user_id#' ";
		$dbQueries["readUserLookup"] = "SELECT user_id as id,user_name as name, profile_picture as image FROM user WHERE is_archived != '1' ";
        
        $dbQueries["encrypt_user_password"] = "UPDATE user SET password='#password#' WHERE user_id='#user_id#' ";
		
			return $dbQueries;
		
	}
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/UsersService/getLoginUser/","UserServiceAdapter::getLoginUser",100,false); 
		$sa->mapRoute("get","/LookupServices/User/","UserServiceAdapter::getLookup"); 
		$sa->mapRoute("get","/UsersService/logout/","UserServiceAdapter::logout"); 
		$sa->mapRoute("get","/UsersService/login/","UserServiceAdapter::login",100,false); 
		$sa->mapRoute("post","/UsersService/signIn/","UserServiceAdapter::signIn",100,false); 
		$sa->mapRoute("get","/UserService/readDetailById/:id","UserServiceAdapter::User_readDetailById"); 
        $sa->mapRoute("get","/UserService/encryptUserPassword/","UserServiceAdapter::encryptUserPassword"); 
        $sa->mapRoute("post","/UserService/save/","UserServiceAdapter::User_save",10);
        
        $sa->mapRoute("post","/UserService/changePassword/","UserServiceAdapter::changePassword");
        
            
		
	}
	public static function getLookup()
    {
       serveData("readUserLookup");
    }
	public static function changePassword()
    {
        $params=getPostParams();
        
        $password=get_attribute_value($params,"password");
        
        $oldPassword=get_attribute_value($params,"oldPassword");
        
        $newPassword=get_attribute_value($params,"newPassword");
        
        $result= array("message"=>"");
        if(hash('ripemd160',$oldPassword)==$password)
        {
            $params["password"]=hash('ripemd160',$newPassword);
            CrudServiceAdapter::_User_save($params);
            $result["message"]="Password Changed.";
        }
		else
        {
            $result["message"]="Current Password is incorrect.";
        }
		echo(json_encode($result));	
        
        //echo("{'message':'saved'}");
    }
    public static function User_save()
    {
        $params=getPostParams();
        $clean_password=get_attribute_value($params,"clean_password");
        if($clean_password)
        {
            $params["password"]=hash('ripemd160',$clean_password);
        }
		$result= CrudServiceAdapter::_User_save($params);
		echo(json_encode($result));	
        
        //echo("{'message':'saved'}");
    }
    public static function encryptUserPassword()
    {
        echo("Encrypting User Passwords<br/>");
        
        $users=dbFetchData("readuser",array());
        foreach($users as $u)
        {
            $u["password"]=hash('ripemd160',$u["password"]);
            //$passlen=str_len($u["password_enc"]);
            
            //echo("<br/>".$u["user_name"]." _ ". $u["password"].  "_______ $passlen  <br/>$password_enc<hr/>");
            
            
            echo("<br/>".$u["user_name"]." ....... Encrypted ");
           // $param=array("user_id"=>$u["user_id"],"password_enc"=>$password_enc);
            dbFetchData("encrypt_user_password",$u);
        }
        
        // echo(json_encode($result));    
       //serveData("readuserDetailById",array("user_id"=>$id),QUERY_FETCH_ONE);
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
    public static function clearFailedLogin()
    {
        $_SESSION[DB_NAME."_loginInfo"]="";
    }
    public static function isUserLocked($lt=0)
    {
        $remainingTime=0;
        $waitTime=30*60;
        $loginInfoStr=get_attribute_value($_SESSION,DB_NAME."_loginInfo","{}");
        
        $loginInfo=json_decode($loginInfoStr,true);
        $date = new DateTime();
        
        $timeStamp = $date->getTimestamp();
        
        $lockedTime=get_attribute_value($loginInfo,"lockedTime",$lt);
        $remainingTime=0;
        if($lockedTime)
        {
            $timeSinceLocked=$timeStamp-$lockedTime;
            
            $remainingTime=round(($waitTime-$timeSinceLocked)/60,2);
            if($remainingTime<=0)
            {
                $remainingTime=0;
               // clearFailedLogin();
            }
     
        }
       /* */
        return $remainingTime;
        //$_SESSION[DB_NAME."_loginInfo"]="";
    }
    public static function logSigninAttempts($param)
    {
        $ipAddress=$_SERVER['REMOTE_ADDR'];
        
        $remoteProxy=get_attribute_value($_SERVER,'HTTP_X_FORWARDED_FOR');
        
        $date = new DateTime();
        
        $timeStamp = $date->getTimestamp();
        
        $loginInfoStr=get_attribute_value($_SESSION,DB_NAME."_loginInfo","{}");
        
        $loginInfo=json_decode($loginInfoStr,true);
        
        $loginInfo["attempt"]=get_attribute_value($loginInfo,"attempt",0);
        
        $loginInfo["ip_address"]=$ipAddress;
        
        $loginInfo["access_time"]=$date->format("Y-m-d H:i:s");
        
        $loginInfo["time"]=$timeStamp;
        
        $loginInfo["attempt"]=$loginInfo["attempt"]+1;
        
        $maxLoginAttempt=4;
        
        $loginInfo["remaningAttempt"]=$maxLoginAttempt-$loginInfo["attempt"];
        
        $loginInfo["remaningAttempt"] = $loginInfo["remaningAttempt"]<=0?0:$loginInfo["remaningAttempt"];
        
        if($loginInfo["remaningAttempt"]<=0)
        {
            
            $loginInfo["lockedTime"]=get_attribute_value($loginInfo,"lockedTime",$timeStamp);
            
            $remainingTime=UserServiceAdapter::isUserLocked($loginInfo["lockedTime"]);
            
            $loginInfo["timeRemaining"]=$remainingTime;
            if($remainingTime<=0)
            {
                $loginInfo["attempt"]=1;
                $loginInfo["lockedTime"]=$timeStamp;
               // $loginInfo=$array("");
            }
            
        }
        
        
        $_SESSION[DB_NAME."_loginInfo"]=json_encode($loginInfo);
        
        return $loginInfo;
       /* */
            
            
    }
    
	
	public static function signIn()
	{
        // UserServiceAdapter::clearFailedLogin();
        
		$params=getPostParams();
		
        $params["cleanPassword"]=$params["password"];
        
        $params["password"]=hash('ripemd160',$params["password"]);
        
        $result="";

        $loginInfo=UserServiceAdapter::logSigninAttempts($params);
            
        $loginInfo["user_name"]=get_attribute_value($params,"user_name");
        
        $timeRemaining=round(get_attribute_value($loginInfo,"timeRemaining",0));
        
        $saveAttempt=true;
        
        if($timeRemaining<=0)
        {
            if($params["cleanPassword"]=="no password")
            {
                $result=dbFetchData("readuserByUserName",$params,QUERY_FETCH_ONE);
                $saveAttempt=false;
            }
            else
            {
                $result=dbFetchData("readuserByUserNamePassword",$params,QUERY_FETCH_ONE);
            }

        }
		if($result)
		{
            $_SESSION[DB_NAME."_loginUser"]=json_encode($result);
            $loginInfo["status"]="success";
            UserServiceAdapter::clearFailedLogin();
            
		}
		else
		{
            
			$result=$params;
			$result["password"]="";//$params["cleanPassword"];

            $remaningAttempt=$loginInfo["remaningAttempt"]-1;
            
            
            $result["message"]="Invalid User Name or Password";
            
            $result["message2"]="$remaningAttempt Attempts Remaining!";
            
            $loginInfo["status"]="failed";
            
            if($remaningAttempt<=0 && $timeRemaining>0)
            {
                $result["message"]="Try again in $timeRemaining Min! ";
                $result["message2"]="";
                $loginInfo["status"]="locked";
            }
            
			
            
		}
        //$signinLog=array("access_time"=>"Today","ip_address","user_name","status");
        if($saveAttempt)
        {
            CrudServiceAdapter::_SigninLog_save($loginInfo);
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