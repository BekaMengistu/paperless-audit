<?php
$verbos=false;
include("../appEngine.php");

 echo("Folders Parsed");
 
 foreach(ApplicationEngine::$parsedFolders as $f)
 {
	 $isfile=is_file($f."/"."appConfig.php");
	 $preset=$isfile?"|+| Found":"|x| Missing";
	 echo("<br/>---$f &nbsp; ".$preset );
 }
 
 echo("<br/<br/>REST Servers");
 foreach(ApplicationEngine::$restServers as $r)
 {
	 
	 echo("<br/>---$r");
 }
 

 echo("<br/><br/>Scripts");
 foreach(ApplicationEngine::$scripts as $scrpt)
 {
	 $isfile=is_file($scrpt);
	 $preset=$isfile?"|+| Found":"|x| Missing";
	 $preset2=$isfile?"|+|":"|x|";
	 echo("<br/>--- &nbsp; $preset2 $scrpt &nbsp; ".$preset );
 }
 
 
	//var_dump($appNavigationData);
	
	
	function showMenu($menuItem,$sep)
	{
		//echo($menuItem["ui-sref"])
		echo("<br/>$sep <a href='".$menuItem["ui-sref"]."'>".$menuItem["label"]."</a>");
		if($verbos)
		{
			echo(json_encode($menuItem));
		}
		$children=get_attribute_value($menuItem,"children");
		foreach($children as $sub)
		{
			showMenu($sub,$sep."--");
		}
	}

 echo("<br/><br/>Menu");
 $allMenu=ApplicationEngine::$allMenus;	
 foreach($allMenu as $index=>$menu)
	{
		echo("<br/>---$index [".$menu["ui-sref"] . "] ");
		if($verbos)
		{
			echo(json_encode($menu));
		}
	}
	
 echo("<br/><br/>Menu");
 $appNavigationData=ApplicationEngine::$menus;	
 foreach($appNavigationData as $category=>$menu)
	{
		echo("<br/>--$category");
		foreach($menu as $menuItem)
		{
			showMenu($allMenu[$menuItem["name"]],"----");
		}
	}
?>
    
  