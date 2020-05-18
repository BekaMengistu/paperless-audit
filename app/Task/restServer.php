<?php
class TaskServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
	
		$sa->mapRoute("get","/TaskService/readTasksForEntity/:entity/:id","TaskServiceAdapter::readTasksForEntity"); 
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readTasksForEntity"] = "SELECT * FROM task WHERE parent_type='#parent_type#' AND parent_id='#parent_id#' AND archived!=1";

		return $dbQueries;
	}

    public static function readTasksForEntity($entity,$id)
	{
		$result=dbFetchData("readTasksForEntity",array("parent_type"=>$entity,"parent_id"=>$id),QUERY_FETCH_ALL);
		echo(json_encode($result));
	}
    
  }
TaskServiceAdapter::mapServiceRoute($sa);
$dbQueries	=TaskServiceAdapter::registerQueries($dbQueries);

?>