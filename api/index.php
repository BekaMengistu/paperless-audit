<?php
session_start();

require '../bm-config.php';
require_once dirname(__FILE__) . '/phpExcel/Classes/PHPExcel.php';

require 'Slim/Slim.php';
include_once( 'includes/commonFunctions.php');
require ('ServiceAdapter.php');

$sa=new ServiceAdapter();

require_once('includes/queryManager.php');

require_once("CrudServiceAdapter.php");

include("../appEngine.php");


foreach(ApplicationEngine::$restServers as $r)
{
	require_once($r);
}
require "api2.php";
/*
require "queryManager.php";
require "includes/host.php";
*/
//require "apis.php";



$sa->mapRoute("get","/readServices/","read_allServices"); 
$sa->run();
function read_allServices()
{
	global $sa;
	$sa->getAllServices();
}

?>