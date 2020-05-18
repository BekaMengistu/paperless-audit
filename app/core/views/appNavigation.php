<ul class="nav" ui-nav>
<?php include('appNavigationData.php');

	foreach($appNavigationData as $category=>$menu)
	{
	?>
    <li class="nav-header hidden-folded">
      <small class="text-muted"><?php echo($category)?></small>
    </li>
    <?php
		foreach($menu as $menuItem)
		{
			$children=get_attribute_value($menuItem,"children");
			if($children)
			{
			?>
            <li ng-class="{active:$state.includes('<?php echo($menuItem["ui-sref"])?>')}">
      <a>
        <span class="nav-caret">
          <i class="fa fa-caret-down"></i>
        </span>
        <span class="nav-icon"> <i class="fa <?php echo($menuItem["icon"])?>"> </i> </span>
        <span class="nav-text"><?php echo($menuItem["label"])?></span>
      </a>
      <ul class="nav-sub">
      	<?php
			foreach($children as $subItem)
			{
		?>
        	<li ui-sref-active="active">
              <a ui-sref="<?php echo($subItem["ui-sref"])?>">
                
                <span class="nav-text"><i class="fa <?php echo($subItem["icon"])?>"></i> <?php echo($subItem["label"])?></span>
              </a>
            </li>
        <?php		
			}
		?>
        </ul>
        
		
        </li>
            <?php
			}
			else
			{
		?>
        <li ui-sref-active="active">
          <a ui-sref="<?php echo($menuItem["ui-sref"])?>">
            <span class="nav-icon">
              <i class="fa <?php echo($menuItem["icon"])?>">
              </i>
            </span>
            <span class="nav-text"><?php echo($menuItem["label"])?></span>
          </a>
        </li>   
        <?php
			}
		}
	}
?>

  	
    
     
</ul>

