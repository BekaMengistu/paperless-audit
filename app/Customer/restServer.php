<?php
class CustomerServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/CustomerService/checkTin/:tin","CustomerServiceAdapter::checkTin"); 
		$sa->mapRoute("get","/LookupServices/Customer/","CustomerServiceAdapter::getLookup"); 
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readCustomerLookup"] = "SELECT customer_id as id, customer_name as name, logo as image,email FROM customer";
		$dbQueries["checkCustomerTin"] =  "SELECT customer_id,customer_name FROM customer WHERE tin = '#tin#' ";

		return $dbQueries;
	}
	public static function getLookup()
  {
  	serveData("readCustomerLookup");
  }
	public static function checkTin($tin)
  {
		
  	serveData("checkCustomerTin",array("tin"=>$tin));
  }

  }
CustomerServiceAdapter::mapServiceRoute($sa);
$dbQueries	=CustomerServiceAdapter::registerQueries($dbQueries);

?>