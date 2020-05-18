<?php
class ApplicationManager
{
	public static $viewHooks;
	//$this->moduleFiles=array();
	
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/CoreAppService/readViewHooks/:view","ApplicationManager::readViewHooks");
		
		//$sa->mapRoute("get","/CoreAppService/readViewHooks/:module/:view","ApplicationManager::readViewHooks");
		
	}
	public static function registerQueries($dbQueries)
	{
		return $dbQueries;		
	}
	
	
	public static function readViewHooks($view)
	{
		$view=strtolower($view);
		
		
		$hooks=get_attribute_value(ApplicationManager::$viewHooks,$view);
		$hooks=$hooks?$hooks:array();
		echo(json_encode($hooks));
//	echo(json_encode(ApplicationEngine::$parsedFolders));
	
	}
	
	public static function initialize() {
		
		ApplicationManager::$viewHooks=array();
		
	}
	
	public static function registerViewHooks($view,$hooks)
	{
		$view=strtolower($view);
		
		ApplicationManager::$viewHooks[$view]=get_attribute_value(ApplicationManager::$viewHooks,$view,$hooks);
		
		//ApplicationManager::$viewHooks[$module][$view]=get_attribute_value(ApplicationManager::$viewHooks[$module],$view,array());
		
		foreach($hooks as $name=>$value)
		{
			ApplicationManager::$viewHooks[$view][$name]=$value;
		}
	}
	
 }
ApplicationManager::initialize();

//$dbQueries = ApplicationManager::registerQueries($dbQueries);

ApplicationManager::mapServiceRoute($sa);

?>