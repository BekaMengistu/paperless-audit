<?php
class ServiceAdapter
{
	public $routes;
	protected $app;
	
	public function __construct() {
		$this->app = new Slim();
		//$getAllServices=array("get","
		$this->routes=array(); 
		
	}
    public static function serveAutheticationError($p1="",$p2="",$p3="",$p4="")
    {
        echo('{"error":"User not authenticated"}');
    }
	public function getAllServices()
	{
		echo(json_encode($this->routes));
	}
	public function mapRoute($method,$url,$fn,$priority=0,$protected=true)
	{
        if($protected)
        {
            $userStr = get_attribute_value($_SESSION,DB_NAME."_loginUser");
            if(!$userStr)
            {
                $fn="ServiceAdapter::serveAutheticationError";
            }
        }
        $prevMap=get_attribute_value($this->routes,$method.$url);
        $isMappable=true;
        if($prevMap)
        {
            if($prevMap['priority']>$priority)
            {
                $isMappable=false;
            }
        }
        if($isMappable)
        {
		$this->routes[$method.$url]=array("method"=>$method,"url"=>$url,"function"=>$fn,"priority"=>$priority);
            
        }
	}
	public function run()
	{
		foreach($this->routes as $r)
		{
			$method=$r["method"];
            $url=$r["url"];
            $fn=$r["function"];
			if($method=="get")
			{
				$this->app->get($url,$fn);
			}
			elseif($method=="post")
			{
                $this->app->post($url,$fn);
				//$this->app->post($r[1],$r[2]);
			}
			elseif($method=="delete")
			{
				$this->app->delete($url,$fn);
                //$this->app->delete($r[1],$r[2]);
			}			
		}
		$this->app->run();
	}
}
?>