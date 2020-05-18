<?php
class DigitalDocumentServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
	
		$sa->mapRoute("get","/DocumentService/readActiveDocuments/","DigitalDocumentServiceAdapter::readActiveDocuments"); 
		$sa->mapRoute("post","/DocumentService/createFromTemplate/","DigitalDocumentServiceAdapter::createFromTemplate"); 
		$sa->mapRoute("get","/DocumentService/readDocumentForEntity/:entity/:id/","DigitalDocumentServiceAdapter::readDocumentForEntity"); 
		$sa->mapRoute("get","/DocumentService/readTemplateForEntity/:entity","DigitalDocumentServiceAdapter::readTemplateForEntity"); 
		$sa->mapRoute("get","/DocumentService/readWholeTree/:id","DigitalDocumentServiceAdapter::serveWholeTree"); 
		
	}
	
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readActiveDigital_document"] = "SELECT * FROM document WHERE archived!=1  ORDER BY isTemplate, document_id DESC";
		
		$dbQueries["readActiveDigital_document_for_entity"] = "SELECT * FROM document WHERE archived!=1 AND parent_type='#parent_type#' AND parent_id='#parent_id#'";
		
		$dbQueries["readTemplate_for_entity"] = "SELECT * FROM document WHERE archived!=1 AND parent_type='#parent_type#' AND isTemplate=1";

		$dbQueries["doc_read_by_id"] = "SELECT * FROM document WHERE document_id='#document_id#'";
	
		$dbQueries["doc_read_children"] = "SELECT * FROM document WHERE archived!=1 AND folder_id='#folder_id#'";
		
		
			return $dbQueries;
	}

	public static function serveWholeTree($id)
    {
    	//serveData("readTemplate_for_entity",array("parent_type"=>$entity));
		
		$ret=dbFetchData("doc_read_by_id",array("document_id"=>$id));
		
		$ret=DigitalDocumentServiceAdapter::getWholeTree($id,$ret);
		
		echo(json_encode($ret));
		
    } 

	public static function getWholeTree($id,$arry)
    {
		$children=dbFetchData("doc_read_children",array("folder_id"=>$id));
		//return $children;
		
		foreach($children as $child)
		{
			array_push($arry,$child);
		}
		foreach($children as $child)
		{
			$arry=DigitalDocumentServiceAdapter::getWholeTree($child["document_id"],$arry);
		}
		return $arry;
		
    	//serveData("readTemplate_for_entity",array("parent_type"=>$entity));
    } 

	
	public static function readTemplateForEntity($entity)
    {
    	serveData("readTemplate_for_entity",array("parent_type"=>$entity));
    } 
	
	public static function readDocumentForEntity($entity,$id)
    {
    	serveData("readActiveDigital_document_for_entity",array("parent_type"=>$entity,"parent_id"=>$id));
    } 
	
    public static function readActiveDocuments()
    {
    	serveData("readActiveDigital_document");
    } 
    //{template:templateNode,target_id:target_id,root_name:root_name,new_doc_attributes:new_doc_attributes}
	
	public static function createFromTemplate()
	{
		$params=getPostParams();
		$ret=array();
	
		$templateNode=get_attribute_value($params,"template");
		
		if($templateNode)
		{
			$templateDoc=$templateNode["data"];
			
			$root_attributes=get_attribute_value($params,"root_attributes");
			if($root_attributes)
			{
				$templateDoc["folder_id"]=get_attribute_value($root_attributes,"folder_id");
				foreach($root_attributes as $a=>$v)
				{
					$templateDoc[$a]=$v;
				}
			}
			
			
			$templateNode["data"]=$templateDoc;

			$newDocParams=get_attribute_value($params,"new_doc_attributes");
			
			
			$ret=DigitalDocumentServiceAdapter::createDocumentFromTemplateRecursive($templateNode,$newDocParams,$templateDoc["folder_id"]);
		}
		
			
		
		echo(json_encode($ret));
	}
	public static function createDocumentFromTemplateRecursive($templateNode,$newDocParams,$folder_id)
	{
		$templateDoc=$templateNode["data"];
        
        $newDoc=array();
        foreach($templateDoc as $a=>$v)
        {
            if($a!="document_id")
            {
                $newDoc[$a]=$v;
            }
        }
		$newDoc["folder_id"]=$folder_id;
        //$templateDoc["document_id"]="";//uniqid();
		foreach($newDocParams as $a=>$v)
		{
			$newDoc[$a]=$v;
		}
			
		$ret=CrudServiceAdapter::_Document_save($newDoc);
       
        $new_folder_id=	get_attribute_value($ret,"document_id");
		
		foreach($templateNode["children"] as $child)
		{
			$ret2=DigitalDocumentServiceAdapter::createDocumentFromTemplateRecursive($child,$newDocParams,$new_folder_id);
		}
		
		return $ret;
	}
    public static function createDocumentFromTemplateRecursive2($templateNode,$newDocParams,$folder_id)
	{
		$templateDoc=$templateNode["data"];
			
		$templateDoc["folder_id"]=$folder_id;
		foreach($newDocParams as $a=>$v)
		{
			$templateDoc[$a]=$v;
		}
			
		$ret=runQueryWithData("adddocument",$templateDoc,QUERY_UPDATE);
		$new_folder_id=	get_attribute_value($ret,"lastInsertId");
		
		foreach($templateNode["children"] as $child)
		{
			$ret2=DigitalDocumentServiceAdapter::createDocumentFromTemplateRecursive($child,$newDocParams,$new_folder_id);
		}
		
		return $ret;
	}
	
	/*
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
	}*/
  }
DigitalDocumentServiceAdapter::mapServiceRoute($sa);
$dbQueries	=DigitalDocumentServiceAdapter::registerQueries($dbQueries);

?>