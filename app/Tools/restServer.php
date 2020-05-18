<?php
class WebContentToolServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/WebContentService/getContent/:id","WebContentToolServiceAdapter::getWebContent");
		$sa->mapRoute("get","/WebContentService/searchByCategory/:category","WebContentToolServiceAdapter::searchByCategory");
		$sa->mapRoute("get","/WebContentService/searchByCategory/:category/:content_type","WebContentToolServiceAdapter::searchByCategoryType");
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["read_web_content_by_name"] = "SELECT * FROM web_content WHERE reference='#content_name#'";
		$dbQueries["search_web_content_by_category"] = "SELECT web_content_id,reference,category,content_type FROM web_content WHERE category='#category#'";
        $dbQueries["search_web_content_by_category_type"] = "SELECT * FROM web_content WHERE category='#category#' AND content_type='#content_type#'";
        
        $dbQueries["search_web_content_by_type"] = "SELECT * FROM web_content WHERE content_type='#content_type#'";
		return $dbQueries;
	}
	
	public static function getWebContent($id)
    {
		
		$web_content=WebContentToolServiceAdapter::readWebContentByName($id);
		
		if($web_content)
		{
			echo($web_content["content"]);
		}
        else
        {
            $error="<div style='color:red; margin:1em; padding:1em; border:solid 1px #900;'><h2>Error </h2> The content '$id' could not be found.</div>";
            echo($error);
        }
		
	}
    public static function readWebContentByType($type)
    {
        return dbFetchData("search_web_content_by_type",array("content_type"=>$type)); 
    }
    public static function readWebContentByName($id)
    {
        return dbFetchData("read_web_content_by_name",array("content_name"=>$id),QUERY_FETCH_ONE);   
    }
    public static function searchByCategory($category)
    {
        WebContentToolServiceAdapter::searchByCategoryType($category,"");
    }
    public static function searchByCategoryType($category,$content_type)
    {
        $param=array("category"=>$category,"content_type"=>$content_type);
        $qry="search_web_content_by_category";
        if($content_type)
        {
            $qry="search_web_content_by_category_type";      
        }
		 serveData($qry,$param);
	}
	
  }
WebContentToolServiceAdapter::mapServiceRoute($sa);
$dbQueries	=WebContentToolServiceAdapter::registerQueries($dbQueries);

?>