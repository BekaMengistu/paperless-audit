<?php
class CustomeLookupServiceAdapter
{
	public static function registerQueries($dbQueries)
	{
		$dbQueries["read_lookup_by_type"] = "SELECT * FROM lookup WHERE lookup_type='#lookup_type#'";

		$dbQueries["read_lookup_types"] = "SELECT DISTINCT  lookup_type FROM lookup";
		
		$dbQueries["read_typeahead_distinct_values"] = "SELECT DISTINCT  #field# as value FROM #table# WHERE #field# LIKE '%#value#%'";
	
		//$dbQueries["read_lookup_types"] = "SELECT lookup_type FROM lookup";
		return $dbQueries;
	}
	public static function mapServiceRoute($sa)
	{
        $sa->mapRoute("post","/LookupServices/readLookupsByNames/","CustomeLookupServiceAdapter::readLookupsByNames");
		
		$sa->mapRoute("get","/LookupServices/readLookupByName/:id","CustomeLookupServiceAdapter::readLookupByName");
		
		
        
		$sa->mapRoute("get","/CustomeLookupService/readLookupByType/:id","CustomeLookupServiceAdapter::readLookupByType"); 
   	$sa->mapRoute("get","/CustomeLookupService/readLookupTypes/","CustomeLookupServiceAdapter::readLookupTypes"); 
		$sa->mapRoute("get","/CustomeLookupService/readAllLookupsByTypes/","CustomeLookupServiceAdapter::readAllLookupsByTypes"); 
	
		$sa->mapRoute("get","/CustomeLookupService/readAutocompleteValues/:table/:field/:value","CustomeLookupServiceAdapter::readAutocompleteValues"); 

	}
	
    public static function readLookupsByNames()
    {
			$params=getPostParams();
			$result=array();
			foreach($params as $name=>$p)
			{
				$result[$name]=dbFetchData("read$name"."Lookup");
			}
    	echo(json_encode($result));
    } 
		
	public static function readLookupByName($name)
    {
    	serveData("read$name"."Lookup");
    } 
		
    
	public static function readAutocompleteValues($table,$field,$value)
    {
    	serveData("read_typeahead_distinct_values",array("field"=>$field,"table"=>$table,"value"=>$value));
    } 
	
	public static function readLookupTypes()
    {
    	serveData("read_lookup_types");
    } 
    public static function readLookupByType($id)
    {
       serveData("read_lookup_by_type",array("lookup_type"=>$id));
    } 
	public static function readAllLookupsByTypes()
	{
		$allLookups=array();
		$allLookupNames=dbFetchData("read_lookup_types");
		foreach($allLookupNames as $i=>$lu)
		{
			$name=$lu["lookup_type"];
			$allLookups[$name]=dbFetchData("read_lookup_by_type",$lu);
		}
		$result=array("lookupNames"=>$allLookupNames,"lookupValues"=>$allLookups);
		echo(json_encode($result));
	}
}
CustomeLookupServiceAdapter::mapServiceRoute($sa);
$dbQueries	=CustomeLookupServiceAdapter::registerQueries($dbQueries);

?>