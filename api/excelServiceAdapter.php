<?php
class ExcelServiceAdapter
{
	public static function registerQueries($dbQueries)
	{
		
		//$dbQueries["readActiveDigital_document"] = "SELECT * FROM document WHERE archived!=1  ORDER BY isTemplate, document_id DESC";
			return $dbQueries;
		
	}
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("post","/ExcelService/readExcelData/","ExcelServiceAdapter::readExcelData"); 
		$sa->mapRoute("get","/ExcelService/readData/:file","ExcelServiceAdapter::serveExcelData"); 
		$sa->mapRoute("post","/DataImportExportService/import/Excel/","ExcelServiceAdapter::importToDb"); 
		
		$sa->mapRoute("post","/DataImportExportService/export/Excel/","ExcelServiceAdapter::exportToExcel"); 
		$sa->mapRoute("get","/DataImportExportService/exportTable/Excel/:table","ExcelServiceAdapter::exportTable"); 
        
	}
     public static function readFullExcelData($filePath)
	{
		$excelFile="../".$filePath;
		
        
        
		$objReader = new PHPExcel_Reader_Excel2007();
        
        $sheetList = $objReader->listWorksheetNames($excelFile);
        
		$objPHPExcel = $objReader->load($excelFile);
		//$objPHPExcel->setActiveSheetIndex($sheetIndex);
		
		$excelData=array();
        foreach($sheetList as $i=>$sheetName)
        {
            $sheetData = $objPHPExcel->getSheet($i)->toArray(null,true,true,true);
            array_push($excelData,$sheetData);
            //$excelData[$sheetName]=$sheetData;
        }
		
		//return array("excelFile"=>$excelFile,"isFile"=>is_file($excelFile));
		return array("sheetsList"=>$sheetList,"excelData"=>$excelData);

	}
    public static function excelFileToObject($filePath,$data_dictionary="")
    {
        
      $entityList=array();
      $excelFileData=ExcelServiceAdapter::readFullExcelData($filePath); 
      foreach($excelFileData["excelData"] as $i=>$excelData)
      {
          $sheetEntityList=ExcelServiceAdapter::formatExcelToObj($excelData,$data_dictionary);
          $entityList = array_merge ($entityList, $sheetEntityList);
      }
      $entityListClean=array(); 
      foreach($entityList as $entity)
      {
          $is_empty=true;
          foreach($entity as $fldValue)
          {
              if($fldValue)
              {
                  $is_empty=false;
              }
          }
          if(!$is_empty)
          {
             array_push($entityListClean,$entity); 
          }
      } /**/
      return $entityListClean;
    }
	public static function exportTable($table)
	{
        $dbQueries1=array("getAllRecords"=>"SELECT * FROM $table");
        $queryParam=array();

        $queryResult=_runQueryWithData($dbQueries1,"getAllRecords",$queryParam,QUERY_FETCH_ALL);
        
        $sheetRows=array();
        
        foreach($queryResult as $index => $row)
        {
            $firstRow=array();
            $rowData=array();
            foreach($row as $fld=>$val)
            {
                if($index==0)
                {
                    array_push($firstRow,$fld);
                }
                array_push($rowData,$val);
            }
            if($index==0)
                {
                    array_push($sheetRows,$firstRow);
                }
            array_push($sheetRows,$rowData);
        }
        
        $sheetData=array("name"=>$table,"startRow"=>1,"data"=>$sheetRows);
        $exportParam=array("outputFile"=>"$table.xlsx","templateFile"=>"empty.xlsx","sheets"=>array("table"=>$sheetData));
        
        $result=ExcelServiceAdapter::_exportToExcel($exportParam);
		echo(json_encode($result));
        
	}
	public static function exportToExcel()
	{
		$params=getPostParams();
		$result=ExcelServiceAdapter::_exportToExcel($params);
		echo(json_encode($result));
	}
	public static function _exportToExcel($params)
	{
		$unique=uniqid("");
		
		
		
		$exportFolder=get_attribute_value($params,"exportFolder","files/outputFiles/");
		
		$templateFolder="files/templateFiles/";
		
		$templateFile=get_attribute_value($params,"templateFile","defaultTemplate.xlsx");
		
		$outputFile=get_attribute_value($params,"outputFile","export$unique.xlsx");
		
		$outputPath=$exportFolder.$outputFile;
		
		$tempData=ExcelServiceAdapter::readTemplateFile("../".$templateFolder.$templateFile);
		
		$objPHPExcel=$tempData["objPHPExcel"];
		$sheetList=$tempData["sheetList"];
		
		
		
		$result=array();//$params;
		// Add some data
		foreach($sheetList as $si=>$sn)
		{
			$dataSheet= get_attribute_value($params["sheets"],$sn);
			if($dataSheet)
			{
				$objPHPExcel->setActiveSheetIndex($si);
				$startRow=get_attribute_value($dataSheet,"startRow","5");
				
				$objPHPExcel->getActiveSheet()->fromArray($dataSheet["data"],NULL,"A$startRow");
				
				$dataSheet["written"]=true;
				$result[$sn]="Updated";
			}
		}
		foreach($params["sheets"] as $sheet)
		{
			$written=get_attribute_value($result,$sheet["name"]);
			if(!$written)
			{
				$worksheet=new PHPExcel_Worksheet($objPHPExcel,$sheet["name"]);
				$startRow=get_attribute_value($sheet,"startRow","5");
				$worksheet->fromArray($sheet["data"],NULL, "A$startRow");
				$objPHPExcel->addSheet($worksheet);
				$result[$sheet["name"]]="Created";
			}
		}
		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');

		$objWriter->save("../".$outputPath);
		
		//ExcelServiceAdapter::outputExcel($objPHPExcel);
		$result["filePath"]=$outputPath;
		$result["exportDone"]=true;
		return $result;
	}
	public static function  readTemplateFile($path)
	{
		$objPHPExcel=null;
		$sheetList=array();
		if(is_file($path))
		{
			$objReader = new PHPExcel_Reader_Excel2007();
			$objPHPExcel = $objReader->load($path);
			$sheetList = $objReader->listWorksheetNames($path);
		}
		else
		{
			$objPHPExcel=ExcelServiceAdapter::createExcel();
		}
		return array("objPHPExcel"=>$objPHPExcel,"sheetList"=>$sheetList);
	}
	public static function createExcel()
	{
		$objPHPExcel = new PHPExcel();

		// Set document properties
		$objPHPExcel->getProperties()->setCreator("HT Paperless Audit System")
							 ->setLastModifiedBy("HT Paperless Audit System")
							 ->setTitle("Audit Document")
							 ->setSubject("Audit Document")
							 ->setDescription("This file is generated by Paperless Audit System.")
							 ->setKeywords("office 2007 openxml php")
							 ->setCategory("Test result file");
		return $objPHPExcel;
		
	}
	public  static function outputExcel($objPHPExcel)
	{
		// Redirect output to a client’s web browser (Excel2007)
		header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		header('Content-Disposition: attachment;filename="01simple.xlsx"');
		header('Cache-Control: max-age=0');
		// If you're serving to IE 9, then the following may be needed
		header('Cache-Control: max-age=1');
		
		// If you're serving to IE over SSL, then the following may be needed
		header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
		header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
		header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
		header ('Pragma: public'); // HTTP/1.0
		
		$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
		$objWriter->save('php://output');
	}
	public static function importToDb()
	{
		
		$params=getPostParams();
		$filePath1=get_attribute_value($params,"filePath");
		$sheetIndex=get_attribute_value($params,"sheetIndex",0);
		$dataTable=get_attribute_value($params,"dataTable");
		$fields_list=get_attribute_value($params,"fields_list","");
		$eraseExisting=get_attribute_value($params,"eraseExisting","");
		$queryAfterImport=get_attribute_value($params,"queryAfterImport","");
        $syncQuery=get_attribute_value($params,"syncQuery","");
        
        $filesPath=$filePath1;
        if(gettype($filePath1)!="array")
        {
            $filesPath=array($filePath1);
        }
        
        
		/* Online test
        $result=array("files"=>$filesPath);
        foreach($filesPath as $filePath)
        {
            $excelFile="../".$filePath;
            $result[$filePath]=is_file($excelFile);
        }
        echo(json_encode($result));
        return;
       /Online test 
       */
		
        
        if($eraseExisting)
		{
			$deleteSql="DELETE FROM $dataTable ".get_attribute_value($params,"eraseCriteria","");
			
           // $deleteSql="TRUNCATE $dataTable ";
                
			$dbQueries1=array("deleteSql"=>$deleteSql);

            _runQueryWithData($dbQueries1,"deleteSql",array());
            if($syncQuery)
            {
                CrudHelperApi::saveAuditTrial(array("query_data"=>$deleteSql));
            }
           // return;
		}
        $entityList=array();
        $insertedEntity=array();
        foreach($filesPath as $filePath)
        {
		  $fileEntityList=ExcelServiceAdapter::excelFileToObject($filePath,$fields_list);
          $entityList=array_merge ($entityList, $fileEntityList);
          foreach($fileEntityList as $obj)
            {
                $saveResult=CrudHelperApi::addOrUpdateTable($obj,$dataTable,$dataTable."_id","add".$dataTable,"update".$dataTable,true);
                array_push($insertedEntity,$saveResult);
            }    
            
        }
        if($queryAfterImport)
		{
			$dbQueries1=array("afterImport"=>$queryAfterImport);
            _runQueryWithData($dbQueries1,"afterImport",array());
            if($syncQuery)
            {
                CrudHelperApi::saveAuditTrial(array("query_data"=>$queryAfterImport));
            }
		}
            
		
        echo(json_encode($entityList));
		
		
		
	}
	
    public static function importToDb2()
	{
		
		$params=getPostParams();
		$filePath=get_attribute_value($params,"filePath");
		$sheetIndex=get_attribute_value($params,"sheetIndex",0);
		$dataTable=get_attribute_value($params,"dataTable");
		$fields_list=get_attribute_value($params,"fields_list","");
		$eraseExisting=get_attribute_value($params,"eraseExisting","");
		$queryAfterImport=get_attribute_value($params,"queryAfterImport","");
		
		if($eraseExisting)
		{
			$deleteSql="DELETE FROM $dataTable ".get_attribute_value($params,"eraseCriteria","");
			
			$dbQueries1=array("deleteSql"=>$deleteSql);
		
			
			
            //_runQueryWithData($dbQueries1,"deleteSql",array());
		}
		
		$sheetData = ExcelServiceAdapter::readExcelData($filePath,$sheetIndex);
        
        $objList=ExcelServiceAdapter::formatExcelToObj($sheetData,$fields_list);
		
        foreach($objList as $obj)
        {
            //CrudHelperApi::addOrUpdateTable($obj,$dataTable,$dataTable."_id","add".$dataTable,"update".$dataTable,true);
        }
        echo(json_encode($objList));
		
		
		
	}
	
	public static function serveExcelData($file)
	{
		$sheetData = ExcelServiceAdapter::readExcelData($file);
		$ret =ExcelServiceAdapter::formatExcelToObj($sheetData);
		echo(json_encode($ret));
	}
	//$sheetList = $objReader->listWorksheetNames($path);
   
	public static function readExcelData($filePath,$sheetIndex=0)
	{
		$excelFile="../".$filePath;
		
		$objReader = new PHPExcel_Reader_Excel2007();
		$objPHPExcel = $objReader->load($excelFile);
		//$objPHPExcel->setActiveSheetIndex($sheetIndex);
		
		$sheetData = $objPHPExcel->getSheet($sheetIndex)->toArray(null,true,false,true);
		
		//return array("excelFile"=>$excelFile,"isFile"=>is_file($excelFile));
		return $sheetData;

	}
	public static function getExcelFieldsList($excelData)
	{
		$fields=array();
		foreach($excelData as $col=>$fn)
		{
			if($fn)
			{
				$fields[$fn]=array("col"=>$col);
			}
		}
		return $fields;
	}

	public static function formatDataValue($val,$field)
	{
		$dataType=get_attribute_value($field,"dataType");
        $fixedValue=get_attribute_value($field,"value");
		if($dataType=="uniqueId")
		{
			//$val=uniqid("E");
           // $val="E".microtime(true);
		}
		elseif($dataType=="number")
		{
			$val=str_replace(",","",$val);
            $val=str_replace(")","",$val);
            $val=str_replace("(","-",$val);
		}
        elseif($fixedValue)
		{
			$val=$fixedValue;
		}
		return $val;
	}
	public static function formatExcelToTabel($excelData,$separateHeader=0,$fields_list="")
	{
		$headerData=array();
		$bodyData=array();
		$index=0;
		
		if(!$fields_list)
		{
			$fields_list=ExcelServiceAdapter::getExcelFieldsList($excelData["1"]);
		}
		
		foreach($excelData as $r)
		{
			$rowData=array();
			foreach($fields_list as $field)
			{
				$col=get_attribute_value($field,"col");
				
				$val=$defValue=get_attribute_value($field,"value","___No");
				
				
				
				if($defValue=="___No")
				{
					$val=get_attribute_value($r,$col);
					$val=$val!=null?$val:"";
				}
				else
				{
					$val=$defValue;
				}
				$val=ExcelServiceAdapter::formatDataValue($val,$field);
				array_push($rowData,$val);
			}
			/*foreach($r as $v)
			{
				$val=$v!=null?$v:"";
				array_push($rowData,$val);
			}*/
			
			if($index>0 || !$separateHeader)
			{
				array_push($bodyData,$rowData);
			}
			else
			{
				$headerData=$rowData;
			}
			
			//array_push($bodyData,$rowData);
			$index++;
		}
		return array("header"=>$headerData,"body"=>$bodyData,"fields_list"=>$fields_list);
	}
	public static function formatExcelToObj2($excelData,$dataDictionary="")
	{
        //$dataDictionary="";
		if(!$dataDictionary)
		{
			$firstRow=get_attribute_value($excelData,"1");
			$dataDictionary=array();
			if($firstRow)
			{
				foreach($firstRow as $ci=>$cn)
				{
					$dataDictionary[$ci]=$cn;
				}
			}
			else
			{
				return $dataDictionary;
			}
		}
        //return array($dataDictionary,$dataDictionary2);
		$ret=array();
		foreach($excelData as $i=>$r)
		{
			$rowData=array();//$r;
			if($i/1>1)
			{
				foreach($r as $c=>$v)
				{
					$fldName=get_attribute_value($dataDictionary,$c,$c);
					$rowData[$fldName]=$v;
				}
				array_push($ret,$rowData);
				//array_push($ret,$r);
			}
		}
		return $ret;
	}
    public static function formatExcelToObj($excelData,$dataDictionary="")
	{
        //$dataDictionary="";
		if(!$dataDictionary)
		{
			$firstRow=get_attribute_value($excelData,"1");
			$dataDictionary=array();
			if($firstRow)
			{
				foreach($firstRow as $ci=>$cn)
				{
                    $dataDictionary[$cn]=array("col"=>$ci);
					//$dataDictionary[$ci]=$cn;
				}
			}
			else
			{
				return $dataDictionary;
			}
		}
       // return $dataDictionary;
		//$ret=array($dataDictionary);
        $ret=array();
		foreach($excelData as $i=>$r)
		{
			$rowData=array();//$r;
			if($i/1>1)
			{
				foreach($dataDictionary as $fieldName=>$fieldAttrib)
				{
                    $dataCol=get_attribute_value($fieldAttrib,"col");
                    $val=get_attribute_value($r,$dataCol);
                    
					$val=ExcelServiceAdapter::formatDataValue($val,$fieldAttrib);
					$rowData[$fieldName]=$val;
				}
				array_push($ret,$rowData);
				//array_push($ret,$r);
			}
		}
		return $ret;
	}
	
}
ExcelServiceAdapter::mapServiceRoute($sa);
$dbQueries = ExcelServiceAdapter::registerQueries($dbQueries);

?>