<?php
class DocumentServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
	
		$sa->mapRoute("get","/DocumentService/readActiveDocuments/","DocumentServiceAdapter::readActiveDocuments"); 
		$sa->mapRoute("post","/DocumentService/createFromTemplate/","DocumentServiceAdapter::createFromTemplate"); 
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readActiveDigital_document"] = "SELECT * FROM document WHERE archived!=1  ORDER BY isTemplate, document_id DESC";
			return $dbQueries;
	}

    public static function readActiveDocuments()
    {
    	serveData("readActiveDigital_document");
    } 
    
	public static function createFromTemplate()
	{
		$params=getPostParams();
		$ret=array();
		$templateDocument=get_attribute_value($params,"templateDocument");
		$children=get_attribute_value($templateDocument,"children");
		$ret=DocumentServiceAdapter::createDocumentFromTemplateRecursive($params,$children,$ret);
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
			$ret=DocumentServiceAdapter::createDocumentFromTemplateRecursive($child,get_attribute_value($child,"children"),$ret);
		}
		
		return $ret;
	}
  }
DocumentServiceAdapter::mapServiceRoute($sa);
$dbQueries	=DocumentServiceAdapter::registerQueries($dbQueries);

?>