<?php
class MyAppServiceAdabter
{
	public static function registerQueries($dbQueries)
	{
		//$dbQueries["readuserByUserName"] = "SELECT * FROM user WHERE user_name='#user_name#'";
		$dbQueries["readActiveDigital_document"] = "SELECT * FROM document WHERE archived!=1  ORDER BY isTemplate, document_id DESC";
			return $dbQueries;
		
	}
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/clientAppService/readAll/","MyAppServiceAdabter::readAllClients"); 
		$sa->mapRoute("get","/DocumentService/readActiveDocuments/","MyAppServiceAdabter::readActiveDocuments"); 
		$sa->mapRoute("post","/DocumentService/createFromTemplate/","MyAppServiceAdabter::DocumentService_createFromTemplate"); 

		
	}
	public static function  readAllClients()
	{
		$result=array("Abebe Belew","Midroc Gold");		
		echo(json_encode($result));
	}
	public static function readActiveDocuments()
    {
    	serveData("readActiveDigital_document");
    } 
	public static function DocumentService_createFromTemplate()
	{
		$params=getPostParams();
		$ret=array();
		$templateDocument=get_attribute_value($params,"templateDocument");
		$children=get_attribute_value($templateDocument,"children");
		$ret=MyAppServiceAdabter::createDocumentFromTemplateRecursive($params,$children,$ret);
		echo(json_encode($ret));
	}
	public static function createDocumentFromTemplateRecursive($doc,$children,$ret)
	{
		$docAttribs=array( "document_name", "description", "document_category_id", "parent_type", "document_path", "tags", "parent_id", "mime_type", "archived","folder_id") ;
		$docAttribValues=array();
		foreach($docAttribs as $a)
		{
			$docAttribValues[$a]=get_attribute_value($doc,$a);
		}
		
		
		$addResult=runQueryWithData("adddocument",$doc,QUERY_UPDATE);
		$inserId=get_attribute_value($addResult,"lastInsertId");
		
		$docAttribValues["document_id"]=$inserId;
		array_push($ret,$docAttribValues);
		array_push($ret,$addResult);
		
		foreach($children as $child)
		{
			$child["folder_id"]=$inserId;
			$ret=MyAppServiceAdabter::createDocumentFromTemplateRecursive($child,get_attribute_value($child,"children"),$ret);
		}
		
		return $ret;
	}
}
MyAppServiceAdabter::mapServiceRoute($sa);
$dbQueries	=MyAppServiceAdabter::registerQueries($dbQueries);

?>