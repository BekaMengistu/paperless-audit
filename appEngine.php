<?php
define('MODULES_PATH', 'app');
require_once("api/includes/commonFunctions.php");
class ApplicationEngine
{
	protected static $routes;
	public static $scripts;
	protected static $styles;
	 
	public static $menus;
	public static $moduleFiles;
	public static $parsedFolders;
	public static $allMenus;
	public static $restServers;
	
	public static $interModuleMessages;
	
	//$this->moduleFiles=array();
	public static function initialize() {
		//$this->moduleFiles = listDirectoryContent(MODULES_PATH);
		
		ApplicationEngine::$routes=array();
		ApplicationEngine::$scripts=array();
		ApplicationEngine::$parsedFolders=array();
		ApplicationEngine::$menus=array("pos1"=>array(),"pos2"=>array(),"pos3"=>array(),"pos4"=>array());
		//ApplicationEngine::$menus
		
		ApplicationEngine::$allMenus=array();
		ApplicationEngine::$restServers=array();
		ApplicationEngine::$interModuleMessages=array();
		
		//ApplicationEngine::registerMenu("pos2","app.report",array("ui-sref"=>"app.report","label"=>"Report","icon"=>"fa-newspaper-o"));
//ApplicationEngine::registerMenu("pos3","app.setting",array("ui-sref"=>"app.setting","label"=>"Setup","icon"=>"fa-cogs"));
//ApplicationEngine::registerMenu("pos4","app.tools",array("ui-sref"=>"app.tools","label"=>"Tools","icon"=>"fa-newspaper-o"));

		//echo(json_encode($this->moduleFiles));
	}
	public static function registerScripts($path,$files)
	{
		$thisFilePath=dirname(__FILE__).DIRECTORY_SEPARATOR;
		
		foreach($files as $f)
		{
			$path=str_replace($thisFilePath,"",$path);
			array_push(ApplicationEngine::$scripts,$path.DIRECTORY_SEPARATOR.$f);
		}
	}
	public static function parseFolder($path,$sub="")
	{
		$thisFilePath=dirname(__FILE__).DIRECTORY_SEPARATOR;
		$path=str_replace($thisFilePath,"",$path);
		$fullPath=dirname(__FILE__).DIRECTORY_SEPARATOR.$path;
		if(is_file($fullPath.DIRECTORY_SEPARATOR."parse_ignore.txt"))
		{
			return;
		}
		//echo("<br/>----Parse------------$fullPath <br/>");
		$moduleContent=listDirectoryContent($fullPath);
		//var_dump($moduleContent);
		
		foreach($moduleContent["folders"] as $m)
		{
			
			$modulePath=$m["path"];
			$relativePath=$m["name"];
			array_push(ApplicationEngine::$parsedFolders,$modulePath);
			//echo("<br/>------------Folder ".$m["name"]);
			
			$ignorFile=$modulePath.DIRECTORY_SEPARATOR."parse_ignore.txt";
			$configFile=$modulePath.DIRECTORY_SEPARATOR."appConfig.php";
			$serverFile=$modulePath.DIRECTORY_SEPARATOR."restServer.php";
			
			//echo("<br/>---------------Config ".$configFile);
			if(!is_file($ignorFile))
			{
				if(is_file($serverFile))
				{
					//include($configFile);
					array_push(ApplicationEngine::$restServers,$serverFile);
				}
				if(is_file($configFile))
				{
					include_once($configFile);
					//echo("<br/>".dirname(__FILE__).DIRECTORY_SEPARATOR.$configFile);
					//include($configFile);
				}
			}
		}	
	}
	
	public static function parseFolder2($path,$sub="")
	{
		$thisFilePath=dirname(__FILE__).DIRECTORY_SEPARATOR;
		$path=str_replace($thisFilePath,"",$path);
		$fullPath=dirname(__FILE__).DIRECTORY_SEPARATOR.$path;
		
		$ignorFile=$fullPath.DIRECTORY_SEPARATOR."parse_ignore.txt";
			$configFile=$fullPath.DIRECTORY_SEPARATOR."appConfig.php";
			$serverFile=$fullPath.DIRECTORY_SEPARATOR."restServer.php";
			
		
		if(is_file($fullPath.DIRECTORY_SEPARATOR."parse_ignore.txt"))
		{
			return;
		}
		else
		{
			array_push(ApplicationEngine::$parsedFolders,$path);
		}
		
		//echo("<br/>----Parse------------$fullPath <br/>");
		$moduleContent=listDirectoryContent($fullPath);
		//var_dump($moduleContent);
		
		foreach($moduleContent["folders"] as $m)
		{
			
			$modulePath=$m["path"];
			$relativePath=$m["name"];
			array_push(ApplicationEngine::$parsedFolders,$modulePath);
			//echo("<br/>------------Folder ".$m["name"]);
			
			$ignorFile=$modulePath.DIRECTORY_SEPARATOR."parse_ignore.txt";
			$configFile=$modulePath.DIRECTORY_SEPARATOR."appConfig.php";
			$serverFile=$modulePath.DIRECTORY_SEPARATOR."restServer.php";
			
			//echo("<br/>---------------Config ".$configFile);
			if(!is_file($ignorFile))
			{
				if(is_file($serverFile))
				{
					//include($configFile);
					array_push(ApplicationEngine::$restServers,$serverFile);
				}
				if(is_file($configFile))
				{
					include_once($configFile);
					//echo("<br/>".dirname(__FILE__).DIRECTORY_SEPARATOR.$configFile);
					//include($configFile);
				}
			}
		}	
		
	}
	public static function readMenu($menuItem)
	{
		$full_name=get_attribute_value($menuItem,"full_name");
		if($full_name)
		{
			$menuItem=get_attribute_value(ApplicationEngine::$allMenus,$full_name,$menuItem);
		}
		return $menuItem;
	}
	public static function registerMenu($pos,$name,$menu)
	{
		$menuItemNew=array("pos"=>$pos,"name"=>$name,
		"ui-sref"=>get_attribute_value($menu,"ui-sref"),
		"label"=>get_attribute_value($menu,"label"),
		"icon"=>get_attribute_value($menu,"icon"),
         "submenu_class"=>get_attribute_value($menu,"submenu_class"),                  
		"children"=>array()
		);
        $menuItem=get_attribute_value(ApplicationEngine::$menus[$pos],$name);
        if(!$menuItem)
        {
		ApplicationEngine::$menus[$pos][$name]=$menuItemNew;
		ApplicationEngine::$allMenus[$name]=$menuItemNew;
            $menuItem=$menuItemNew;
        }
		return $menuItem;
	}
	public static function registerSubMenu($parentName,$name,$menu,$isAbsolute="")
	{
		$menuName=$isAbsolute?$name:$parentName.".".$name;
		
		$parent=get_attribute_value(ApplicationEngine::$allMenus,$parentName);
		$menuItem=array("name"=>$name,
		"ui-sref"=>get_attribute_value($menu,"ui-sref"),
		"label"=>get_attribute_value($menu,"label"),
		"icon"=>get_attribute_value($menu,"icon"),
		"children"=>get_attribute_value($menu,"children"),
		"full_name"=>$menuName
		);
		
		if($parent)
		{
		ApplicationEngine::$allMenus[$parentName]["children"][$name]=$menuItem;
		ApplicationEngine::$allMenus[$menuName]=$menuItem;
		//ApplicationEngine::$allMenus[$parentName]=$$parent;
		}
		return $menuItem;
	}
	
	
	public function run()
	{
		echo("<br/>Scripts");
		foreach($this->scripts as $s)
		{
			echo("<br/>----- $s");
		}
		echo("<br/>Menus");
		foreach($this->menus as $pos=>$menuPos)
		{
			echo("<br/>----- $pos");
			foreach($menuPos as $menu)
			{
				echo("<br/>----------- ".$menu["label"]);
			}
		}
	}
}
 ApplicationEngine::initialize();
 //echo("<br/> Absoulte Path ".dirname(__FILE__)."<br/>");
 ApplicationEngine::parseFolder(MODULES_PATH);
?>