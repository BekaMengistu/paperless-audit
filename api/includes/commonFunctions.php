<?php
function runQueryWithData($queryName,$data,$fetchList=0)
{
	global $dbQueries;
	return _runQueryWithData($dbQueries,$queryName,$data,$fetchList);
}
function dbFetchData($queryName,$param="",$fetch=QUERY_FETCH_ALL)
{
	$param=$param?$param:array();
	return runQueryWithData($queryName,$param,$fetch);
}

function getSlimPostData()
{
	$request = Slim::getInstance()->request();
	$record = json_decode($request->getBody(),true);
	return $record;
}
function get_attribute_value($var,$att,$def="")
{
	return isset($var[$att])?$var[$att]:$def;
}
function makeDir($dir)
{
	if(!is_dir($dir))
	{
		mkdir($dir,0777,true);
	}
}
function write_to_file($fn,$txt)
	{
		$fp = fopen($fn, 'w');
		fwrite($fp, $txt);
		fclose($fp);
	
	}

function read_file($filename)
{
	$contents="No such file $filename";
	if(is_file($filename))
	{
	$handle = fopen($filename, "r");
	$contents = fread($handle, filesize($filename));
	fclose($handle);
	}
	return $contents;
}
function createHash($arry,$prefix,$idFld)
{
	$result=array();
	foreach($arry as $i=> $item)
	{
		$id=get_attribute_value($item,$idFld);
		$item["index"]=$i;
		$result[$prefix.$id]=$item;
	}
	return $result;
}
function readCSVFile($fileName)
{
	$tables=array();
	$fileContent=read_file($fileName);
	$tablesStr=explode("\n\n",$fileContent);
	foreach($tablesStr as $i=>$tbl)
	{
		$tblInfo=array("tableName"=>"","fields"=>"","data"=>array(),"dataStr"=>"");
		$tblRows=explode("\n",$tbl);
		$sep="";
		foreach($tblRows as $r=>$rd)
		{
			if($r==0) {$tblInfo["tableName"]=$rd;}
			elseif($r==1) {$tblInfo["fields"]=explode("\t",$rd);}
			else {array_push($tblInfo["data"],explode("\t",$rd));
			$tblInfo["dataStr"]=$tblInfo["dataStr"].$sep.$rd;
			$sep="\n";
			}
			
		}
		//echo("<br/><br/>".$tblInfo["tableName"]);
		//echo("<br/>".$tblInfo["fields"]);
		//echo("<br/>".$tblInfo["data"]);
		
		
		$tables[$i]=$tblInfo;
	}
	return $tables;
}
function listDirectoryContent($path="")
{
    $dirs=array();
    $files=array();
     
	//echo("<br/>$path ". is_dir($path)); 
    if (is_dir($path))
    {
    if ($handle = opendir($path)) 
    {
        while (false !== ($entry = readdir($handle))) 
        {
            if($entry!="." && $entry!=".." )
            {
                $file=array("name"=>$entry,"type"=>"file","path"=>"$path/$entry");
                if(is_dir ("$path/$entry" ))
                {
                    $file["type"]="folder";    
                    array_push($dirs,$file);
                }
                else
                {
                    array_push($files,$file);
                    
                }
                
            }
        }
    
        
    
        closedir($handle);
    }
    }
    
    return array("folders"=>$dirs,"files"=>$files);
    
} 
?>