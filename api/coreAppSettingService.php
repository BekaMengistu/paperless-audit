<?php
class CoreAppSettingServiceAdapter
{
	public static function registerQueries($dbQueries)
	{
		$dbQueries["read_setting_by_app"] = "SELECT * FROM app_setting WHERE app_name='#app_name#'";
		return $dbQueries;
	}
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/AppSettingService/readSettingByApp/:id","CoreAppSettingServiceAdapter::readSettingByApp"); 
		
		$sa->mapRoute("post","/AppSettingService/saveMultiple/","CoreAppSettingServiceAdapter::saveMultiple"); 

	}
	
	
	public static function saveMultiple()
    {
		$result=array();
    	$params=getPostParams();
		foreach($params as $i=> $setting)
		{
        	$result[$i]= addOrUpdateData($setting,"app_setting_id","addapp_setting","updateapp_setting");
		}
		echo(json_encode($result));
    }
	public static function readSettingByApp($id)
	{
		$ret=array();
		$settings=dbFetchData("read_setting_by_app",array("app_name"=>$id));
		foreach($settings as $st)
		{
			$name=$st["setting_name"];
			$ret[$name]=$st;
		}
		//$result=array("lookupNames"=>$allLookupNames,"lookupValues"=>$allLookups);
		echo(json_encode($ret));
	}
}
CoreAppSettingServiceAdapter::mapServiceRoute($sa);
$dbQueries	=CoreAppSettingServiceAdapter::registerQueries($dbQueries);

?>