<?php
class ReferenceServiceAdapter
{
   // static $masterIp="http://localhost/paperless_audit_beka/";
	public static function mapServiceRoute($sa)
	{
        $sa->mapRoute("get","/ReferenceService/getReferenceList/","ReferenceServiceAdapter::getReferenceList");
	}
    
	
    public static function getReferenceList()
    {
        $content=listDirectoryContent("../documents/references");
        echo(json_encode($content));
    }

    
	
  }
ReferenceServiceAdapter::mapServiceRoute($sa);

?>