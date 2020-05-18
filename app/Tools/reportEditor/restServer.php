<?php
class ReportToolsServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/reportService/getContent/:id","ReportToolsServiceAdapter::getContent");
        $sa->mapRoute("get","/reportService/getDataController/:type/:name","ReportToolsServiceAdapter::getDataController");
	}
    
	public static function registerQueries($dbQueries)
	{
		
		//$dbQueries["search_web_content_by_category"] = "SELECT web_content_id,reference,category FROM web_content WHERE category='#category#'";
        

		return $dbQueries;
	}

    public static function getContent($id)
    {
		$web_content=WebContentToolServiceAdapter::readWebContentByName($id);
		
		if($web_content)
		{
            $content=get_attribute_value($web_content,"content","{}");
            $reportData=json_decode($content,true);
            $title=get_attribute_value($reportData,"title");
            $gridData=get_attribute_value($reportData,"data");
            
            //var_dump($reportData);
            ReportToolsServiceAdapter::renderReportGrid($gridData);
			
           // echo("<br/><hr/>$content");
		}
        else
        {
            $error="<div style='color:red; margin:1em; padding:1em; border:solid 1px #900;'><h2>Error </h2> The content '$id' could not be found.</div>";
            echo($error);
        }
		
	}
    public static function renderReportGrid($gridData)
    {
        //var_dump($gridData);
        
        echo("<table class='table'>");
        foreach($gridData as $row)
        {
            echo("<tr>");
            foreach($row as $col)
            {
                echo("<td>$col</td>");
            }
            echo("</tr>");
        }
        echo("</table>");
        
    }
    public static function getsRowDataScript($row)
    {
        
    }
    public static function getRowDataScript($row)
    {
        //return json_encode($row);
        
        $cols=get_attribute_value($row,"columns",array());
        $style=get_attribute_value($row,"style","");
        $showZero= get_attribute_value($row,"showZero","false");
        
        $columnsData="{showZero:$showZero,style:'$style',columns:[";
        $sep="";
        
        foreach($cols as $col)
        {
            $val=get_attribute_value($col,"value");
            $style=get_attribute_value($col,"style");
            $type=get_attribute_value($col,"type","");
            
            
            $val=$val?$val:"''";
            
            $r="{style:'$style',type:'$type',value:$val}";
            
            $columnsData =$columnsData.$sep.$r;
            $sep=" , ";
        }
        $columnsData =$columnsData."]}";
        return $columnsData;
    }
    public static function renderScript($data)
    {
        echo("\n\t var gridData={};");
        foreach($data as $r=>$d) 
        {
            $dataName="gridData.$r";
            echo("\n\t var $r=[];\n\t");
            foreach($d as $row)
            {
                echo("\n try {\n\t\t");
                echo($r.".push($row);");
                echo("\n } \n catch(err) {console.log(err); }");
            }
            echo("$dataName = {data:$r} \n");
        }
        echo("\n\t return gridData;");
        

    }
   public static function getDataController($type,$name)
   {
       $contentArray=array();
       
       $contentScript=array();
       
       $contents=WebContentToolServiceAdapter::readWebContentByType($type);
       foreach($contents as $c)
       {
           $contentArray[$c["reference"]]=json_decode($c["content"],true);
           $contentScript[$c["reference"]]=array();
       }
       //var_dump($web_content);
       //echo(json_encode($contentArray));
       
       //echo("<br/> <br/>");
        
       foreach($contentArray as $r=>$c)
       {
         //  var_dump($c);
           //echo(json_encode($c));
           //echo("<br/>");
           
           $data=get_attribute_value($c,"data",array());

           if($data)
           {
              foreach($data as $row)
              {
                  $rowData=ReportToolsServiceAdapter::getRowDataScript($row);
                  array_push($contentScript[$r],$rowData);
              }
             // $contentScript[$r]
           }
       }
       //echo(json_encode($contentScript));
       
       //echo("<br/> <br/>");
       ?>
(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "CustomReportService", CustomReportService)
	
     CustomReportService.$inject = ['$q', '$http','$stateParams','$state',"CRUDManagers"];
    
    function CustomReportService($q, $http,$stateParams,$state,CRUDManagers)
    {
        
        var readCustomGridData=function(audit)
        {
<?php ReportToolsServiceAdapter::renderScript($contentScript);
?>    
        }

        return {gridData:readCustomGridData};
    }
    
 }(window.angular));
<?php
   }
	
  }
ReportToolsServiceAdapter::mapServiceRoute($sa);
$dbQueries	=ReportToolsServiceAdapter::registerQueries($dbQueries);

?>