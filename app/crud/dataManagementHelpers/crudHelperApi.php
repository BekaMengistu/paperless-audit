<?php

class CrudHelperApi
{
	public static function mapServiceRoute($sa)
	{
        $sa->mapRoute("get","/AppServices/getUniqueId/","CrudHelperApi::serveUniqueId"); 
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["checkAvailability"] = "SELECT * FROM #table# WHERE #id_field#='#id_value#'";
		return $dbQueries;
	}
    public static function serveUniqueId()
    {
        $unique=CrudHelperApi::uniqueId();
        echo(json_encode(array("uniqueId"=>$unique)));
    }
    public static function uniqueId()
    {
        $unique=uniqid(HOST_ID,true);
        $unique=str_replace(".","",$unique);
        return $unique;
    }
  public static function readEntityListExcel($params)
	{
		
		
		$filePath=get_attribute_value($params,"filePath");
		$sheetIndex=get_attribute_value($params,"sheetIndex",0);
		$table=get_attribute_value($params,"dataTable");
		
		$id_field=$table."_id";
		$add_query="add".$table;
		$update_query="update".$table;
		
		$fields_list=get_attribute_value($params,"fields_list","");
		$eraseExisting=get_attribute_value($params,"eraseExisting","");
		$queryAfterImport=get_attribute_value($params,"queryAfterImport","");
        
      $entityList=array();
      $excelFileData=ExcelServiceAdapter::readFullExcelData($filePath); 
      foreach($excelFileData["excelData"] as $i=>$excelData)
      {
          $sheetEntityList=ExcelServiceAdapter::formatExcelToObj($excelData);
          $entityList = array_merge ($entityList, $sheetEntityList);
      }
      $entityListClean=array(); 
      foreach($entityList as $entity)
      {
          $is_empty=true;
          foreach($entity as $fldValue)
          {
              if($fldValue)
              {
                  $is_empty=false;
              }
          }
          if(!$is_empty)
          {
             array_push($entityListClean,$entity); 
          }
      }
      return $entityListClean;
	}
    public static function getUpdatedFields($dataFromTable,$newData)
    {
        if(!$dataFromTable)
        {
            return $newData;
        }
        $updated_fields=array();
        $is_updated=false;
        foreach($dataFromTable as $f=>$v)
        {
            $newValue=get_attribute_value($newData,$f);
            if(strcmp($newValue,$v))
            {
                $is_updated=true;
                $updated_fields[$f]=$newValue;
            }
        }
        return $is_updated?$updated_fields:"";
    }
    public static function mergeTableFields($dataFromTable,$new_fields)
    {
        $dataFromTable=$dataFromTable?$dataFromTable:array();
        foreach($new_fields as $f=>$v)
        {
            $newValue=get_attribute_value($new_fields,$f);
            $dataFromTable[$f]=$newValue;
        }
        return $dataFromTable;
    }
    public static function updateTable($table,$exsistingData,$newFieldsValue)
    {
        //$mergedData=CrudHelperApi::updateChangedFields($exsistingData,$newFieldsValue);
        
    }
    public static function addOrUpdateAutoIncreamentData($data,$table,$id_field,$add_query,$update_query)
    {
        $id_value=get_attribute_value($data,$id_field);
        
        $updateResult=addOrUpdateData($data,$id_field,$add_query,$update_query);
        
        
        $id_value=$id_value?$id_value:get_attribute_value($updateResult,"lastInsertId");
        
        $fetchResult= dbFetchData("checkAvailability",array("table"=>$table,"id_field"=>$id_field,"id_value"=>$id_value),QUERY_FETCH_ONE);
        
        if(!$fetchResult)
        {
            $fetchResult=array();
        }
        $fetchResult[$id_field]=$id_value;
        return $fetchResult;
    }
    public static function  getUniqueId($table,$id_field)
    {
        //return uniqid("Cr",true);
        $unique=CrudHelperApi::uniqueId();
        for($i=0;$i<1000;$i++)
        {

            $unique=CrudHelperApi::uniqueId();
            $dbQueries1=array("getIds"=>"SELECT $id_field FROM $table WHERE $id_field='#$id_field#'");
            $queryParam=array();
            $queryParam[$id_field]=$unique;

            $queryResult=_runQueryWithData($dbQueries1,"getIds",$queryParam,QUERY_FETCH_ONE);
            if(!$queryResult)
            {
                return $unique;
            }
        }
        return $unique;
    }
	public static function  addOrUpdateTable($data,$table,$id_field,$add_query,$update_query,$generate_pk=false,$is_remote_data=false)
	{
        if(!$generate_pk)
        {
            return CrudHelperApi::addOrUpdateAutoIncreamentData($data,$table,$id_field,$add_query,$update_query);
        }
		$fetchResult= "";
		$fetchResultBefore="";
		$unique=uniqid("",true);
       // $unique="Cr".microtime(true);
		
		$id_value=get_attribute_value($data,$id_field);
		$queryToRun=$update_query;
		
		if($id_value)
		{
			$fetchResultBefore= dbFetchData("checkAvailability",array("table"=>$table,"id_field"=>$id_field,"id_value"=>$id_value),QUERY_FETCH_ONE);
		}
		else
        {
		  $id_value=$unique;
            $id_value=CrudHelperApi::getUniqueId($table,$id_field);
        }
		if(!$fetchResultBefore)
		{
			$data[$id_field]=$id_value;
			$queryToRun=$add_query;
            //$updated_fields=$data;
		}
		$fullData=CrudHelperApi::mergeTableFields($fetchResultBefore,$data);
        
		$updateResult=dbFetchData($queryToRun,$fullData,QUERY_UPDATE);

        $fetchResult= dbFetchData("checkAvailability",array("table"=>$table,"id_field"=>$id_field,"id_value"=>$id_value),QUERY_FETCH_ONE);
        
        if(!$is_remote_data)
        {
            $updated_fields=CrudHelperApi::getUpdatedFields($fetchResultBefore,$fetchResult);
            if($updated_fields)
            {
            $updated_fields[$id_field]=$id_value;
            CrudHelperApi::writeDbTransaction($table,$id_value,$fetchResult,$updated_fields);
                
            }
        }
		return $fetchResult;
	}
    public static function  addOrUpdateTable2($data,$table,$id_field,$add_query,$update_query,$generate_pk=false,$is_remote_data=false)
	{
		$fetchResult= "";
		$fetchResultBefore="";
		$unique=uniqid("");
		
		$id_value=get_attribute_value($data,$id_field);
		
		
		if($id_value)
		{
			$fetchResultBefore= dbFetchData("checkAvailability",array("table"=>$table,"id_field"=>$id_field,"id_value"=>$id_value),QUERY_FETCH_ONE);
		}
		if($generate_pk)
		{
			$id_value=$id_value?$id_value:$unique;
		}
		$queryToRun=$update_query;
		if(!$fetchResultBefore)
		{
			$data[$id_field]=$id_value;
			$queryToRun=$add_query;
		}
		
		$updateResult=dbFetchData($queryToRun,$data,QUERY_UPDATE);
		
		if(!$generate_pk && ($updateResult["lastInsertId"]*1))
		{
			$id_value=$updateResult["lastInsertId"];
		}
		
		$fetchResult= dbFetchData("checkAvailability",array("table"=>$table,"id_field"=>$id_field,"id_value"=>$id_value),QUERY_FETCH_ONE);
        if(!$is_remote_data)
        {
            $updated_fields=CrudHelperApi::getUpdatedFields($fetchResultBefore,$fetchResult);
        CrudHelperApi::writeDbTransaction($table,$id_value,$fetchResult,$updated_fields);
        }
		return $fetchResult;
	}
    
    public static function writeDbTransaction($table,$table_id,$data,$updated_fields,$host_name="",$sync_time="")
    {
        if(!$updated_fields)
        {
            return;
        }
        //$json_data=json_encode($data);
        $transactionData=array("table_name"=>$table,"table_id"=>$table_id,"updated_fields"=>$updated_fields,"sync_time"=>$sync_time,"host_name"=>$host_name);
        
        CrudHelperApi::saveAuditTrial($transactionData);

        //CrudHelperApi::saveDbTransaction($table,$table_id,$data,$updated_fields,$host_name,$sync_time);
    }
    public static function saveAuditTrial($auditData)
    {
        $updated_fields=get_attribute_value($auditData,"updated_fields",array());
        $updated_fields=json_encode($updated_fields);
        
        $updated_fields=$updated_fields?$updated_fields:"{}";  
        
        $user=UserServiceAdapter::getSessionUser();
        
        $user_id=get_attribute_value($user,"user_id");
        
        $modify_time=date_create()-> format("Y-m-d H:i:s");
        
        $auditData["user_id"]=$user_id;
        $auditData["modify_time"]=$modify_time;
        $auditData["updated_fields"]=$updated_fields;
        
         $transactionData=array("table_name"=>"","table_id"=>"","query_data"=>"","sync_time"=>"","host_name"=>"");
        
        foreach($transactionData as $fld=>$val)
        {
            $auditData[$fld]=get_attribute_value($auditData,$fld);
        }
        
        $updateResult=dbFetchData("adddb_transaction",$auditData,QUERY_UPDATE);
        
     }
    public static function saveDbTransaction($table,$table_id,$data,$updated_fields,$host_name="",$sync_time="")
    {
        $updated_fields=json_encode($updated_fields);
            
        $user=UserServiceAdapter::getSessionUser();
        
        $user_id=get_attribute_value($user,"user_id");
        
        $time=date_create()-> format("Y-m-d H:i:s");
        
        $transactionData=array("table_name"=>$table,"table_id"=>$table_id,"json_data"=>"","modify_time"=>$time,"user_id"=>$user_id,"updated_fields"=>$updated_fields,"sync_time"=>$sync_time,"host_name"=>$host_name);
        $updateResult=dbFetchData("adddb_transaction",$transactionData,QUERY_UPDATE);
    }

	public static function getJsonAttributes($obj,$fields)
	{
		foreach($fields as $f)
		{
			$fldVal=get_attribute_value($obj,$f);
			$fldVal=$fldVal?$fldVal:"{}";
			$obj[$f]=json_decode($fldVal);
			
		}
		return $obj;
	}
	
	public static function setJsonAttributes($obj,$fields)
	{
		foreach($fields as $f)
		{
			$fldVal=get_attribute_value($obj,$f);
			$fldVal=$fldVal?$fldVal:array();
			$obj[$f]=json_encode($fldVal);
			
		}
		return $obj;
	}
	
	public static function setEmptyAttributes($obj,$fields)
	{
		foreach($fields as $f)
		{
			$obj[$f]=get_attribute_value($obj,$f);
			$obj[$f]=$obj[$f]===""?NULL:$obj[$f];
		}
		return $obj;
	} 
  
	public static function saveAndFetch($data,$id,$addQuery,$updateQuery,$fetchQuery)
	{
		$result= addOrUpdateData($data,$id,$addQuery,$updateQuery);
		$newId=get_attribute_value($result,"lastInsertId",0)/1;
		
		$result["updateResult"]=$result;
		$result["newId"]=$newId;
		
		$data[$id]=$newId?$newId:$data[$id];
		$fetchResult= dbFetchData($fetchQuery,$data,QUERY_FETCH_ONE);
		
		$result["dbResult"]=$fetchResult;
		
		return $fetchResult;
	}

   
    
  }
CrudHelperApi::mapServiceRoute($sa);
$dbQueries	=CrudHelperApi::registerQueries($dbQueries);

?>
