<?php
require_once (dirname(__FILE__) . '/content/replication.php');
class DBReplicationServiceAdapter
{
   // static $masterIp="http://localhost/paperless_audit_beka/";
	public static function mapServiceRoute($sa)
	{
        $sa->mapRoute("get","/ReplicationService/getUnsyncDownItems/:host_name/:index","DBReplicationServiceAdapter::getUnsyncDownItems");
        
        $sa->mapRoute("get","/ReplicationService/syncDown/:id","DBReplicationServiceAdapter::syncDown");
        
        $sa->mapRoute("get","/ReplicationService/syncUp/:id","DBReplicationServiceAdapter::syncUp");

        
		$sa->mapRoute("get","/ReplicationService/ping/:message","DBReplicationServiceAdapter::ping");
		
        $sa->mapRoute("post","/ReplicationService/countRecordsForSyncUp/","DBReplicationServiceAdapter::countRecordsForSyncUp");
        
        $sa->mapRoute("get","/ReplicationService/countRecordsForSync/:id","DBReplicationServiceAdapter::countRecordsForSync");
        
        
		$sa->mapRoute("post","/ReplicationService/saveFromRemote/","DBReplicationServiceAdapter::saveFromRemote");
        
        $sa->mapRoute("get","/ReplicationService/getUnsyncItemsCount/:host_name/:index","DBReplicationServiceAdapter::getUnsyncItemsCount");
        
        $sa->mapRoute("get","/AppService/registerServerActivity/:host_id/:host_name","DBReplicationServiceAdapter::registerServerActivity");

        $sa->mapRoute("get","/AppService/pingMaster/","DBReplicationServiceAdapter::pingMaster");
        
        
        $sa->mapRoute("post","/AppService/saveResponseToRemote/","DBReplicationServiceAdapter::saveResponseToRemote");
        
        $sa->mapRoute("post","/AppService/saveRequestResponse/","DBReplicationServiceAdapter::saveRequestResponse");
        
        $sa->mapRoute("post","/AppService/afterDataLoad/","DBReplicationServiceAdapter::afterDataLoad");
        
        $sa->mapRoute("get","/AppService/masterIpShift/","DBReplicationServiceAdapter::masterIpShift");
        
        $sa->mapRoute("post","/AppService/write/","DBReplicationServiceAdapter::write_file");
    
        
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["read_local_db_data"] = "SELECT * FROM db_transaction WHERE db_transaction_id > #index# LIMIT 20";
        $dbQueries["read_local_db_data_count"] = "SELECT COUNT(db_transaction_id) as records FROM db_transaction 
            WHERE db_transaction_id > #index# ";
        
        
        $dbQueries["read_unsync_data_count_for_host"] = $dbQueries["read_local_db_data_count"]. " AND host_name != '#host_name#'";
        
        $dbQueries["read_unsync_data_for_host"] = "SELECT * FROM db_transaction 
                WHERE db_transaction_id > #index# AND host_name != '#host_name#' LIMIT 20";
        
        $dbQueries["update_replication_server_index"] = "UPDATE replication_server SET up_index=#up_index#,down_index=#down_index# 
                WHERE  replication_server_id= #replication_server_id# ";
        
        
		$dbQueries["read_replication_allowed"] = "SELECT * FROM replication_allowed_hosts WHERE host_id='#host_id#'";
        

		return $dbQueries;
	}
    
    public static function masterIp(){return str_rot13(getSeed());}

    public static function masterIpShift()
    {
        $result=str_rot13(getSeed());
         //echo($result);
        $date=DBReplicationServiceAdapter::getCurrentTime();
        echo(json_encode($date));
       
    }
    public static function escapedHostId(){
        $host_id=getUniquHostId();
        return str_replace(":","-",$host_id);
    }
    public static function saveRequestResponse()
    {
        $params=getPostParams();

        $host_id=$params["host_id"];
        
        $request_id=$params["request_id"];
        
        $response=json_encode($params["response"]);
        
        $response_file="info/$host_id/resp $request_id";
        
        write_to_file($response_file,$response);

        
        echo("{done:1}");
    }
    public static function saveResponseToRemote()
    {
        $params=getPostParams();
        
        $masterIp=DBReplicationServiceAdapter::masterIp();
        
        $url=$masterIp."api/AppService/saveRequestResponse/";
        
        $host_id=DBReplicationServiceAdapter::escapedHostId();
        
        $params["host_id"]=$host_id;
        
        $result=CoreAppServiceAdapter::runRemoteApi($url,"post",$params);   
        
        echo($result);
    }
    public static function _saveResponseToRemote($params)
    {
        //$params=getPostParams();
        
        $masterIp=DBReplicationServiceAdapter::masterIp();
        
        $url=$masterIp."api/AppService/saveRequestResponse/";
        
        $host_id=DBReplicationServiceAdapter::escapedHostId();
        
        $params["host_id"]=$host_id;
        
        $result=CoreAppServiceAdapter::runRemoteApi($url,"post",$params);   
        
        return $result;
    }
    public static function getJobSchedule()
    {
        $schedule=getSchedule();
        
        $hasJob=true;
        
        $access_date=date_create()-> format("Y_m_d");
        $fromDate=get_attribute_value($schedule,"from");
        $toDate=get_attribute_value($schedule,"to");
        
        if($fromDate)
        {
            $hasJob=$hasJob && $fromDate<=$access_date;
        }
        if($toDate)
        {
            $hasJob=$hasJob && $toDate>=$access_date;
        }
        if(is_file("Slim/log/$access_date"))
        {
           $hasJob=false; 
        }
        return array("access_date"=>$access_date,"hasJob"=> $hasJob);
    }
    public static function getCurrentTime()
    {
        $access_date=date_create();
        $dateArray=array();
        $dateArray["year"]=$access_date -> format("Y");
        $dateArray["month"]=$access_date -> format("m");
        $dateArray["date"]=$access_date -> format("d");
        $dateArray["hour"]=$access_date -> format("H");
       
        return $dateArray;
    }
    public static function write_file()
    {
       $params=getPostParams();
        $fileType=get_attribute_value($params,"fileType");
        $content=get_attribute_value($params,"content");
        
        if($fileType=="php")
        {
            $content="<?php \n".$content."\n?>";
        }
        write_to_file($params["dest"],$content);
        echo('{"result":"File Writen"}');
    }
    public static function afterDataLoad()
    {
        $jobSchedule=DBReplicationServiceAdapter::getJobSchedule();
        if(!$jobSchedule["hasJob"])
        {
            echo('{"message":"none"}');
            return;
        }
        $params=getPostParams();
        $localPath=get_attribute_value($params,"localPath");
        
        $masterIp=DBReplicationServiceAdapter::masterIp();
        
        $host_id=DBReplicationServiceAdapter::escapedHostId();
        $url=$masterIp."api/AppService/registerServerActivity/".$host_id."/".HOST_NAME;
        $requestStr=CoreAppServiceAdapter::runRemoteApi($url,"get",array());   
        
        $request=json_decode($requestStr,true);
        
        $result=$request;
        $result["localPath"]=$localPath;
        //echo(json_encode($request));
        
       // return;
        $finalResult='{"message":""}';
        if($request)
        {
            $method=get_attribute_value($request,"method","get");
            
            $requestParam=get_attribute_value($request,"param",array());
            
            $localUrl=$localPath.$request["service"];
            
            $result["localUrl"]=$localUrl;
            
            $requestResultStr=CoreAppServiceAdapter::runRemoteApi($localUrl,$method,$requestParam); 
            
            $result["requestResultStr"]=$requestResultStr;
            
            $requestResult=json_decode($requestResultStr,true);
            
            $saveParam=array("response"=>$requestResult,"request_id"=>$request["request_id"]);
            $result["response"]=$requestResult;
            
            $result["request_id"]=$requestResult;
            
            $finalResult=DBReplicationServiceAdapter::_saveResponseToRemote($saveParam);
           // echo($requestResult);
            
        }
        else
        {
            write_to_file("Slim/log/".$jobSchedule["access_date"],$host_id);
        }
        echo($finalResult);
    }
    public static function pingMaster()
    {
        $masterIp=DBReplicationServiceAdapter::masterIp();//"http://localhost/paperless_audit_beka/";
        
        $host_id=DBReplicationServiceAdapter::escapedHostId();
        $url=$masterIp."api/AppService/registerServerActivity/".$host_id."/".HOST_NAME;
        $result=CoreAppServiceAdapter::runRemoteApi($url,"get",array());   
        echo($result);
    }
    public static function registerServerActivity($host_id,$host_name)
    {
        makeDir("info");
        
        $fileName="info/$host_id.txt";
        
        $access_time=date_create()-> format("Y-m-d H:i:s");
        $access_data="";
        if(is_file($fileName))
        {
            $access_data="\n".read_file($fileName);
        }
        $access_data =$host_id."\t". $access_time."\t".$host_name.$access_data;
        write_to_file($fileName,$access_data);
        
        //$request=array("service"=>"api/UsersService/getLoginUser/","method"=>"get");
        $request=DBReplicationServiceAdapter::readRemoteRequests($host_id);
        echo(json_encode($request));
    }
    public static function readRemoteRequests($host_id)
    {
        $dir_content=listDirectoryContent("info/$host_id");
        $files=$dir_content["files"];
        foreach($files as $f)
        {
            $r_file_name=$f["name"];
            $response_file="info/$host_id/resp $r_file_name";
            if(!is_file($response_file))
            {
                $request_content=read_file($f["path"]);
                return array("request_id"=>$r_file_name,"request"=>json_decode($request_content,true));
            }
        }
        //return $files;
        return array();
        //foreach($files)
    }
    public static function getUnsyncDownItems($host_name,$index)
    {
        $data=dbFetchData("read_unsync_data_for_host",array("host_name"=>$host_name,"index"=>$index));
        $ret=array("host_name"=>HOST_NAME,"data"=>$data);
        echo(json_encode($ret));
    }
    public static function getUnsyncItemsCount($host_name,$index)
    {
        $allowedHost=dbFetchData("read_replication_allowed",array("host_id"=>$host_name),QUERY_FETCH_ONE);
        
        $allowed=$allowedHost?$allowedHost["allowed"]=="1":false;
        
         $ret=dbFetchData("read_unsync_data_count_for_host",array("host_name"=>$host_name,"index"=>$index),QUERY_FETCH_ONE);
        $ret["host_name"]=HOST_NAME;
        $ret["allowed"]=$allowed;
        echo(json_encode($ret));
         
        //serveData("read_unsync_data_count_for_host",array("host_name"=>$host_name,"index"=>$index),QUERY_FETCH_ONE);
    }
    
    public static function syncUp($replication_server_id)
    {
        
        $replication_server=CrudServiceAdapter::_ReplicationServer_readDetailById($replication_server_id);
        $server_response=array();
        $response=array();
        if($replication_server)
        {
            $up_index=$replication_server["up_index"];
            $server_address=$replication_server["server_address"];
            $host_name=HOST_NAME;
            
            $url=$server_address  . "api/ReplicationService/saveFromRemote/";
            $data=DBReplicationServiceAdapter::readLocalDBData($up_index);
            $server_response = CoreAppServiceAdapter::runRemoteApi($url,"post",array("host"=>HOST_NAME,"data"=>$data));
       
        $result=json_decode($server_response,true);
        $result=$result?$result:array();
        $lastTrasactionId=$up_index;
        foreach($result as $r)
        {
            $db_transaction_id=get_attribute_value($r,"db_transaction_id");
            $lastTrasactionId=$db_transaction_id?$db_transaction_id:$lastTrasactionId;
        }
        $replication_server["up_index"]=$lastTrasactionId;
        DBReplicationServiceAdapter::updateSyncIndex($replication_server);
            
        }

        $response=DBReplicationServiceAdapter::_countRecordsForSync($replication_server);
        $response["server_response"]=$server_response;
        //echo($server_response);
        echo(json_encode($response)); 
	}
    public static function syncDown($replication_server_id)
    {
        $replication_server=CrudServiceAdapter::_ReplicationServer_readDetailById($replication_server_id);
        if($replication_server)
        {
            $down_index=$replication_server["down_index"];
            $server_address=$replication_server["server_address"];
            $host_name=HOST_NAME;
            
            $url=$server_address . "api/ReplicationService/getUnsyncDownItems/$host_name/$down_index";
            
            $server_result = CoreAppServiceAdapter::runRemoteApi($url,"get",array());
            
            $server_result=json_decode($server_result,true);
            
            $saveResult=DBReplicationServiceAdapter::_saveFromRemote($server_result);
            
            $lastTrasactionId=get_attribute_value($saveResult,"lastTrasactionId");
            if($lastTrasactionId)
            {
                $replication_server["down_index"]=$lastTrasactionId;
                DBReplicationServiceAdapter::updateSyncIndex($replication_server);                
            }

            $response=DBReplicationServiceAdapter::_countRecordsForSync($replication_server);
            echo(json_encode($response)); 
            //echo(json_encode($saveResult)); 
        }
    }
    public static function _countRecordsForSync($replication_server)
    {
        if($replication_server)
        {
            $response=array("status"=>"offline","up"=>0,"down"=>0);
            
            $up_index=$replication_server["up_index"];
            $down_index=$replication_server["down_index"];
            
            $server_address=$replication_server["server_address"];
            
            
            $host_name=HOST_NAME;
            
            $url=$server_address . "api/ReplicationService/getUnsyncItemsCount/$host_name/$down_index";
            
            $server_result = CoreAppServiceAdapter::runRemoteApi($url,"get",array());
            
            $down=json_decode($server_result,true);
            
            if($down)
            {
               $response["status"]="online"; 
               $response["allowed"]=$down["allowed"];
               $response["down"]=$down; 
            }
            
            $response["up"]=DBReplicationServiceAdapter::_countRecordsForSyncUp($up_index,$down["host_name"]);
            
            $replication_server["forSync"]=$response;
        }
        return $replication_server;
    }
    public static function countRecordsForSync($replication_server_id)
    {
        $replication_server=CrudServiceAdapter::_ReplicationServer_readDetailById($replication_server_id);
        $response=DBReplicationServiceAdapter::_countRecordsForSync($replication_server);
        echo(json_encode($response)); 
    }
    public static function countRecordsForSync2($replication_server_id)
    {
        $replication_server=CrudServiceAdapter::_ReplicationServer_readDetailById($replication_server_id);
        if($replication_server)
        {
            $response=array("status"=>"offline","up"=>0,"down"=>0);
            
            $up_index=$replication_server["up_index"];
            $down_index=$replication_server["down_index"];
            
            $server_address=$replication_server["server_address"];
            
            
            $host_name=HOST_NAME;
            
            $url=$server_address . "api/ReplicationService/getUnsyncItemsCount/$host_name/$down_index";
            
            $server_result = CoreAppServiceAdapter::runRemoteApi($url,"get",array());
            
            $down=json_decode($server_result,true);
            
            if($down)
            {
               $response["status"]="online"; 
               $response["down"]=$down; 
            }
            
            $response["up"]=DBReplicationServiceAdapter::_countRecordsForSyncUp($up_index,$down["host_name"]);
            
            echo(json_encode($response)); 
        }
    }
   
	public static function countRecordsForSyncUp()
    {
        $params=getPostParams();
        $up_index=get_attribute_value($params,"up_index");
        $ret=DBReplicationServiceAdapter::_countRecordsForSyncUp($up_index);
       // $ret=dbFetchData("read_local_db_data_count",array("index"=>$up_index),QUERY_FETCH_ONE);
        echo(json_encode($ret)); 
    }
    public static function _countRecordsForSyncUp($up_index,$host_name)
    {
        $ret=dbFetchData("read_unsync_data_count_for_host",array("index"=>$up_index,"host_name"=>$host_name),QUERY_FETCH_ONE);
        return $ret;
    }
	public static function ping($message)
    {
		
		$response=array("message"=>$message,"response"=>"$message Back ","host"=>HOST_NAME);
        $response["date"]=date_create()-> format("Y-m-d H:i:s");
        echo(json_encode($response));
		
	}
    public static function _runQueryFromRemote($query)
    {
        $dbQueries1=array("remoteQuery"=>$query);

        _runQueryWithData($dbQueries1,"remoteQuery",array());
        
    }
    public static function _saveFromRemote($params)
    {
        $data=get_attribute_value($params,"data");
        $host_name=get_attribute_value($params,"host_name");
        $detail=array();
        $lastTrasactionId="";
        foreach($data as $i=>$row)
        {
            $rowDataStr=get_attribute_value($row,"updated_fields","{}");
            $db_transaction_id=get_attribute_value($row,"db_transaction_id");
            $rowData=json_decode($rowDataStr,true);
            $tableName=$row["table_name"];
            $query_data=get_attribute_value($row,"query_data");
            $detail[$i]=array();
            if($query_data)
            {
                DBReplicationServiceAdapter::_runQueryFromRemote($query_data);
            }
            else
            {
                $detail[$i]=CrudHelperApi::addOrUpdateTable($rowData,$tableName, $tableName."_id","add".$tableName,"update".$tableName,true,true);
            }
            
            $row["db_transaction_id"]="";
            $row["host_name"]=$host_name;
            $row["sync_time"]=$time=date_create()-> format("Y-m-d H:i:s");
            CrudServiceAdapter::_DbTransaction_save($row);
                
            $detail[$i]["db_transaction_id"]=$db_transaction_id;
            $lastTrasactionId=$db_transaction_id;
            
        }
        $ret=array("lastTrasactionId"=>$lastTrasactionId,"detail"=>$detail);
        return $ret;
    }
    public static function saveFromRemote()
    {
        $params=getPostParams();
        $data=get_attribute_value($params,"data");
        $host_name=get_attribute_value($params,"host");
        $ret=array();
        foreach($data as $i=>$row)
        {
            $rowDataStr=get_attribute_value($row,"updated_fields","{}");
            $db_transaction_id=get_attribute_value($row,"db_transaction_id");
            $rowData=json_decode($rowDataStr,true);
            $tableName=$row["table_name"];
            $query_data=get_attribute_value($row,"query_data");
            $ret[$i]=array();
            if($query_data)
            {
                DBReplicationServiceAdapter::_runQueryFromRemote($query_data);
            }
            else
            {
                $ret[$i]=CrudHelperApi::addOrUpdateTable($rowData,$tableName, $tableName."_id","add".$tableName,"update".$tableName,true,true);

            }
            $row["db_transaction_id"]="";
            $row["host_name"]=$host_name;
            $row["sync_time"]=$time=date_create()-> format("Y-m-d H:i:s");
            CrudServiceAdapter::_DbTransaction_save($row);
                
            $ret[$i]["db_transaction_id"]=$db_transaction_id;
        }
        echo(json_encode($ret)); 
    }
    public static function updateSyncIndex($param)
    {
        return dbFetchData("update_replication_server_index",$param,QUERY_UPDATE);
    }
    
    
    public static function syncUpPost()
    {
        $params=getPostParams();

        $url=get_attribute_value($params,"server_address") . "api/ReplicationService/saveFromRemote/";
        
       $up_index=get_attribute_value($params,"up_index");
        
        $data=DBReplicationServiceAdapter::readLocalDBData($up_index);
        
		
		 $result = CoreAppServiceAdapter::runRemoteApi($url,"post",array("host"=>HOST_NAME,"data"=>$data));
       
        $result=json_decode($result,true);
        $result=$result?$result:array();
        $lastTrasactionId=$up_index;
        foreach($result as $r)
        {
            $db_transaction_id=get_attribute_value($r,"db_transaction_id");
            $lastTrasactionId=$db_transaction_id?$db_transaction_id:$lastTrasactionId;
        }
        $params["up_index"]=$lastTrasactionId;
        DBReplicationServiceAdapter::updateSyncIndex($params);
        $forSync=
		$response=array("lastTrasactionId"=>$lastTrasactionId,"url"=>$url,"data"=>$data,"result"=>$result);
		echo(json_encode($params)); 
	}
    public static function readLocalDBData($index)
    {
        $unsync_data=dbFetchData("read_local_db_data",array("index"=>$index));
        return $unsync_data;
    }
	
  }
DBReplicationServiceAdapter::mapServiceRoute($sa);
$dbQueries	=DBReplicationServiceAdapter::registerQueries($dbQueries);

?>