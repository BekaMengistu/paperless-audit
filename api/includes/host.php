<?php
function getUniquHostId()
{
	$hostId=getUniquHostIdWin();
	if(!$hostId)
	{
		$hostId=getUniquHostIdMac();
	}
    if(!$hostId)
    {
        $hostId= $_SERVER['SERVER_NAME'];
    }
	return  $hostId;
}
function getUniquHostIdWin()
{
		
		ob_start(); // Turn on output buffering
		system('ipconfig /all'); //Execute external program to display output
		$mycom=ob_get_contents(); // Capture the output into a variable
		ob_clean(); // Clean (erase) the output buffer
		$findme = "Physical";
		$pmac = strpos($mycom, $findme); // Find the position of Physical text
		$mac=substr($mycom,($pmac+36),17); // Get Physical Address
		return $mac;
		/*
		*/

		$output =exec("/sbin/ifconfig", $output1);



		foreach($output1 as $o)
		{
			
			$pmac = strpos($o, "ether"); // Find the position of Physical text
			if($pmac)
			{
			$mac=substr($o,($pmac+6),17); // Get Physical Address
			return $mac;
			//echo "<br/>$o --- $mac   ---";
			//echo hash('ripemd160', 'The quick brown fox jumped over the lazy dog.');
			
			}
		}
	}
function getUniquHostIdMac()
	{
		/*
		ob_start(); // Turn on output buffering
		system('ipconfig /all'); //Execute external program to display output
		$mycom=ob_get_contents(); // Capture the output into a variable
		ob_clean(); // Clean (erase) the output buffer
		$findme = "Physical";
		$pmac = strpos($mycom, $findme); // Find the position of Physical text
		$mac=substr($mycom,($pmac+36),17); // Get Physical Address
		echo $mac;
		
		*/

		$output =exec("/sbin/ifconfig", $output1);



		foreach($output1 as $o)
		{
			
			$pmac = strpos($o, "ether"); // Find the position of Physical text
			if($pmac)
			{
			$mac=substr($o,($pmac+6),17); // Get Physical Address
			return $mac;
			//echo "<br/>$o --- $mac   ---";
			//echo hash('ripemd160', 'The quick brown fox jumped over the lazy dog.');
			
			}
		}
	}
function readLicenceKey()
	{
		$licenceFile="../licence.key.txt";
		if (file_exists($licenceFile)) 
		{
			return read_file($licenceFile);
		}
		return "";
	}
	function saveLicenceKey($key)
	{
		$licenceFile="../licence.key.txt";
		write_to_file($licenceFile,$key);
		return "";
	}
?>