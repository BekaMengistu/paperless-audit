<?php
$dbQueries["search_table"]="SELECT * FROM #table#  #criteria# ";


define('QUERY_FETCH_ALL', -1);
define('QUERY_FETCH_ONE', 1);
define('QUERY_UPDATE', 0);

$databaseConnection=null;

function searchTableByCriteria($table,$criteria)
{
	return dbFetchData("search_table",array("table"=>$table,"criteria"=>$criteria));
}
function getPostParams()
{
	$request = Slim::getInstance()->request();
	return json_decode($request->getBody(),true);
}
function serveData($queryName,$param="",$fetch=QUERY_FETCH_ALL)
{
	$result=dbFetchData($queryName,$param,$fetch);
	$tblData=array("aaData"=>$result); 
	echo(json_encode($result));
	
}
function _runQueryWithData($queries,$queryName,$data,$fetchList=0)
{
	
    $query=get_attribute_value($queries,$queryName,"");
	//echo("<br/>$queryName $query <br/>");
//	return $query;
    $sql=$query."";
	//var_dump($data);
    foreach($data as $fld=>$val)
    {
        
		if(gettype($val)!="array")
		{
        	$val=str_replace("'","\'",$val);
        	$sql=str_replace("#$fld#",$val,$sql);
		}
        if(gettype($val)=="array")
        {
            $val=json_encode($val);
        }
    }
	//echo("<br/>$queryName <br/> $sql</br>");
	if($fetchList)
	{
		$ret=fetchData($sql);
		if(QUERY_FETCH_ALL==$fetchList)
		{
			return $ret;
		}
		return get_attribute_value($ret,0,"");
	}
	return updateData($sql);
}
function getConnection() {
	//echo("getConnection");
	//return;
    global $databaseConnection;
    
    if(!$databaseConnection)
    {
    $dbhost=DB_HOST;
	$dbuser=DB_USER;
	$dbpass=DB_PASSWORD;
	$dbname=DB_NAME;
	$databaseConnection = new PDO("mysql:host=$dbhost;charset=utf8;dbname=$dbname", $dbuser, $dbpass);	
	
	$databaseConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//var_dump($dbh);
    
    $connection_count=get_attribute_value($_SESSION,"connection_count",0);
    $connection_count=$connection_count*1+1;
    $_SESSION["connection_count"]=$connection_count;  
    }
	
	return $databaseConnection;
}
function fetchData($sql,$paraList="",$paramValue="")
{

try {
		$db = getConnection();

		$stmt = $db->prepare($sql);  
		bindValue($stmt,$paraList,$paramValue);
		$stmt->execute();
		$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
		//var_dump($rows);
		$db = null;
		return $rows;
	} catch(PDOException $e) {
		//echo("Error");
		return array("error"=>array("text"=>$e->getMessage())); 
	}
}
function addOrUpdateData($params,$idField,$addSQL,$updateSQL)
{

	$itemId=get_attribute_value($params,$idField);
	if($itemId)
	{
		//return $itemId;
		return runQueryWithData($updateSQL,$params,QUERY_UPDATE);
	}
	return runQueryWithData($addSQL,$params,QUERY_UPDATE);

}
function updateData2($sql,$paraList="",$paramValue="")
{
		$db = getConnection();
		foreach($paramValue as $p=>$v)
		{
			        $v=str_replace("'","\'",$v);
			//echo("<br/>$fld = $val");
       		 $sql=str_replace("#$p#",$v,$sql);

		}
		echo("<br/><pre>$sql</pre>");
	return updateData($sql);
}
function updateData($sql,$paraList="",$paramValue="")
{
    $paramValue=$paramValue?$paramValue:array();
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		bindValue($stmt,$paraList,$paramValue);
		$stmt->execute();	
        $paramValue["lastInsertId"]=0;
        //if(isset($db->lastInsertId))
        {
            $paramValue["lastInsertId"]=$db->lastInsertId();
        }
		
		$db = null;
		return $paramValue;
	} catch(PDOException $e) {
		return array("error"=>array("text"=>$e->getMessage())); 
	}	
	
}
function bindValue($stmt,$paraList="",$paramValue="")
{
	$paraList=$paraList?$paraList:array();
	$paramValue=$paramValue?$paramValue:array();
	foreach($paraList as $pn)
		{
			
			$val=get_attribute_value($paramValue,$pn);
			//echo($pn.$val);
			$stmt->bindValue($pn,$val );
		}
}
function importData($table,$data,$flds,$separator="\t")
{
	$rows= explode("\n",$data);
	$insfld="";
	$insvalue="";
	$comma="";
	foreach($flds as $f)
	{
		$insfld.="$comma $f";
		$insvalue.="$comma '#$f#'";
		$comma= " , ";
	}
	$sql="INSERT INTO $table ($insfld) VALUES ( $insvalue )";
	echo($sql);
	foreach($rows as $r)
	{
		$cols=explode($separator,$r);
		$singleRec=array();
		foreach($flds as $i=>$f)
		{
			$singleRec[$f]=$cols[$i];
			$singleRec[$f]=str_replace("\r","",$singleRec[$f]);
		}
		//echo("<pre>".json_encode($singleRec)."</pre>");
		updateData2($sql,$flds,$singleRec);
	}
}
function getTableDataExportSql($db,$table,$purge=0,$sep="\n------")
{
	$data=dbFetchData("readTableData",array("dbName"=>$db,"table"=>$table));
	$insStatement="";
	if($purge)
	{
		$insStatement.="TRUNCATE $table $sep\n";
	}
	$insStatement.= getInsertStment($data,$table,"$sep\n");
	return $insStatement;
}
function getInsertStment($data,$tbl,$stmntSep)
{
	$insStmnt="";
	$flds="";
	$vals="";
	$rec=get_attribute_value($data,0);
	$index=1;
	if($rec)
	{
		$sep="";
		foreach($rec as $fld=>$val)
		{
			$flds.=$sep.$fld;
			$sep=",";
		}
		$rowSep="";
		foreach($data as $row)
		{
			$colSep="";
			$rowVal="";
			foreach($row as $col=>$val)
			{
				$val=str_replace("'","\'",$val);
				$rowVal.=$colSep."'$val'";
				$colSep=" , ";
			}
			$vals.="\n$rowSep ($rowVal)";
			$rowSep=",";
			if($index % 20==0)
			{
				$insStmnt.="INSERT INTO $tbl ($flds) VALUES $vals $stmntSep";
				$vals="";
				$rowSep="";
			}
			$index++;
			
		}
		if($vals)
		
		$insStmnt.="INSERT INTO $tbl ($flds) VALUES $vals $stmntSep";

	}
	
	return $insStmnt;
}

?>