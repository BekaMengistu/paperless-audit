<?php
class AuditServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/AuditService/mapTbFromPrevEngagement/:audit_engagement_id","AuditServiceAdapter::mapTbFromPrevEngagement"); 
		
		$sa->mapRoute("post","/AuditService/saveFinding/","AuditServiceAdapter::saveFinding"); 
        
        $sa->mapRoute("get","/AuditService/deleteYearEndAdjustments/:audit_engagement_id","AuditServiceAdapter::deleteYearEndAdjustments"); 
		
		$sa->mapRoute("post","/AuditService/saveExtraData/","AuditServiceAdapter::saveExtraData"); 
		
		$sa->mapRoute("get" , "/AuditService/checkAuditExists/:customer/:year","AuditServiceAdapter::checkAuditExists"); 
		
		$sa->mapRoute("get" , "/AuditService/readAuditsForCustomer/:id","AuditServiceAdapter::readAuditsForCustomer"); 
		
		$sa->mapRoute("get" , "/AuditService/readAllAudits/:archived","AuditServiceAdapter::readAllAudits"); 
		
		$sa->mapRoute("get" , "/AuditService/readAllAudits2/","AuditServiceAdapter::readAllAudits"); 
		
		$sa->mapRoute("get" , "/AuditService/readAuditClientTrialbalance/:id","AuditServiceAdapter::readAuditClientTrialbalance"); 
		
		$sa->mapRoute("get","/AuditService/readAuditCompanyTypes/","AuditServiceAdapter::readAuditCompanyTypes"); 
		
		$sa->mapRoute("get","/AuditService/readAuditFindingCounts/:id","AuditServiceAdapter::readAuditFindingCounts"); 
		
		$sa->mapRoute("get","/AuditService/readAuditFindinigs/:audit_id/:audit_procedure_id","AuditServiceAdapter::readAuditFindinigs"); 
		
		$sa->mapRoute("post","/AuditService/readAuditFindingsForAccount/","AuditServiceAdapter::readAuditFindingsForAccount"); 
		
		$sa->mapRoute("post","/AuditService/readAuditFindingForAccountProcedure/","AuditServiceAdapter::readAuditFindingForAccountProcedure"); 
		
		$sa->mapRoute("get","/AuditService/readAuditTransactionCounts/:id","AuditServiceAdapter::readAuditTransactionCounts"); 
		
		$sa->mapRoute("get","/AuditService/readAuditTransactionsForAccount/:audit_id/:parent_code","AuditServiceAdapter::readAuditTransactionsForAccount"); 
	
		$sa->mapRoute("get","/AuditService/readFullAuditDetail/:audit_id","AuditServiceAdapter::readFullAuditDetail"); 

		$sa->mapRoute("get","/AuditService/readAuditAdjustments/:audit_id","AuditServiceAdapter::readAuditAdjustments"); 
		
		$sa->mapRoute("get","/AuditService/readAllGroupingKeys/","AuditServiceAdapter::readAllGroupingKeys"); 
		
		$sa->mapRoute("get","/AuditService/readCompanyTypeGroupingKeys/","AuditServiceAdapter::readCompanyTypeGroupingKeys"); 
		
		$sa->mapRoute("post","/AuditService/saveCompanyTypeGroupingKeys/","AuditServiceAdapter::saveCompanyTypeGroupingKeys"); 

		$sa->mapRoute("post","/AuditService/insertVerficationCodeToFile/","AuditServiceAdapter::insertVerficationCodeToFile"); 


		
		
		
		
		
    	    
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["readaudit_client_trialbalanceForAudit"] = "SELECT * FROM audit_client_trialbalance WHERE audit_engagement_id='#audit_engagement_id#'";
		
		$dbQueries["read_audit_finding_count"] = "SELECT audited_item_type , audited_item_id, COUNT(audit_finding_id) as finding_count  FROM audit_finding WHERE audit_id='#audit_id#' GROUP BY audited_item_type , audited_item_id";
		
		$dbQueries["read_audit_finding_for_account_procedure"] = "SELECT * FROM audit_finding WHERE audit_id='#audit_id#' AND audit_procedure_id='#audit_procedure_id#' AND audited_item_type= '#audited_item_type#' AND audited_item_id='#audited_item_id#'";

		$dbQueries["read_audit_management_letter_for_account_procedure"] = "SELECT * FROM audit_management_letter WHERE audit_id='#audit_id#' AND audit_procedure_id='#audit_procedure_id#' AND audited_item_type= '#audited_item_type#' AND audited_item_id='#audited_item_id#'";
		
		
		
		$dbQueries["read_audit_company_types_lookup"] = "SELECT * FROM audit_company_type";
		
		
		$dbQueries["read_audit_findings_for_account"] = "SELECT * FROM audit_finding WHERE audit_id='#audit_id#'  AND parent_id= '#parent_id#'";
		
		$dbQueries["readaudit_finding"] = "SELECT * FROM audit_finding";
		
		$dbQueries["read_audit_transaction_count"] = "SELECT parent_code,count(parent_code) as transactions FROM audit_transaction WHERE audit_id='#audit_id#' GROUP BY parent_code";
		
		$dbQueries["read_audit_transaction_for_account"] = "SELECT * FROM audit_transaction WHERE audit_id='#audit_id#' AND parent_code= '#parent_code#' ORDER BY debit DESC, credit DESC";
		
		
		$dbQueries["AuditRead_transactionsCount"] = "SELECT COUNT(audit_id) as txns FROM audit_transaction	 WHERE audit_id='#audit_engagement_id#'";

		$dbQueries["AuditRead_procedures"] = "SELECT * FROM audit_procedure";

		$dbQueries["AuditRead_account_grouping"] = "SELECT * FROM audit_account_grouping WHERE archived=0";
		
		$dbQueries["AuditRead_engagement_detail"] = "SELECT * FROM audit_engagement WHERE audit_engagement_id='#audit_engagement_id#'";
		
		$dbQueries["AuditRead_findings"] = "SELECT * FROM audit_finding WHERE audit_id='#audit_engagement_id#'";
		
		$dbQueries["AuditRead_adjustment"] = "SELECT * FROM audit_adjustment WHERE audit_id='#audit_engagement_id#' ORDER BY audit_adjustment_id DESC";
		
		$dbQueries["AuditRead_management_letters"] = "SELECT * FROM audit_management_letter WHERE audit_id='#audit_engagement_id#' AND content!='' ORDER BY audited_item_id";
		
		$dbQueries["AuditRead_disclosure_notes"] = "SELECT * FROM audit_management_letter WHERE audit_id='#audit_engagement_id#' AND disclosure_note!='' ORDER BY audited_item_id";
		
		

		$dbQueries["AuditRead_qualification_points"] = "SELECT * FROM audit_management_letter WHERE audit_id='#audit_engagement_id#' AND qualification_point!='' ORDER BY display_order";
		
		$dbQueries["AuditRead_procedures_on_engagement"] = "SELECT DISTINCT audit_procedure_id FROM audit_finding WHERE audit_id='#audit_engagement_id#' ORDER BY audit_procedure_id";
		
		$dbQueries["AuditRead_customer"] = "SELECT * FROM customer WHERE customer_id='#customer_id#'";
		
		$dbQueries["AuditRead_company_type_key"] = "SELECT * FROM company_type_key";
	
		$dbQueries["AuditAddCompany_type_key"] = "INSERT INTO company_type_key (grouping_code,audit_company_type_id,allowed) 
					VALUES ('#grouping_code#','#audit_company_type_id#','#allowed#')";
	
		$dbQueries["AuditUpdateCompany_type_key"] = "UPDATE company_type_key SET grouping_code='#grouping_code#', audit_company_type_id='#audit_company_type_id#'
			,allowed='#allowed#' WHERE company_type_key_id='#company_type_key_id#'";
		
		$dbQueries["AuditReadValidMappingKeys"]= "SELECT audit_account_grouping.grouping_code, audit_account_grouping.grouping_name
					,audit_account_grouping.account_type, audit_account_grouping.mapping_hint
		, company_type_key.audit_company_type_id, company_type_key.allowed 
		FROM audit_account_grouping INNER JOIN company_type_key ON audit_account_grouping.grouping_code=company_type_key.grouping_code	 
		WHERE audit_company_type_id='#company_type#' AND allowed=1";
		
		$dbQueries["Audit_read_all"] = "SELECT * FROM audit_engagement";
		
		$dbQueries["Audit_read_active"] = "SELECT * FROM audit_engagement WHERE archived=0 ORDER BY audit_engagement_id DESC";
		
		$dbQueries["read_customer_audits"] = "SELECT * FROM audit_engagement WHERE customer_id='#customer_id#'";
		
		
		
		$dbQueries["check_customer_exists"] = "SELECT COUNT(customer_id) as audits FROM audit_engagement WHERE customer_id='#customer_id#' 
				AND closing_date LIKE '#year#%' ";
		
		$dbQueries["audit_update_extra_data"] = "UPDATE audit_client_trialbalance SET extra='#extra#' WHERE audit_client_trialbalance_id='#audit_client_trialbalance_id#'";
		
		$dbQueries["read_audit_detail"] = "SELECT * FROM audit_engagement WHERE audit_engagement_id='#audit_engagement_id#'";
		
		$dbQueries["read_previous_engagements"] = "SELECT audit_engagement_id FROM audit_engagement WHERE customer_id='#customer_id#' AND schedules_date<'#schedules_date#' ORDER BY schedules_date";

		$dbQueries["read_previous_engagement_mapping"] = "SELECT DISTINCT account_id,parent_code FROM audit_client_trialbalance WHERE audit_engagement_id IN #audit_engagement_ids#
		AND parent_code!=''";
		
		$dbQueries["update_previous_engagement_mapping"] = "UPDATE audit_client_trialbalance SET parent_code='#parent_code#' 
				WHERE account_id='#account_id#' AND audit_engagement_id='#audit_engagement_id#'";
				
		$dbQueries["read_unmapped_tb_count"] = "SELECT COUNT(account_id) as unmapped_count FROM audit_client_trialbalance WHERE audit_engagement_id='#audit_engagement_id#' GROUP BY audit_engagement_id";
			
        $dbQueries["delete_year_end_txn"] = "DELETE FROM audit_adjustment WHERE audit_id='#audit_engagement_id#' AND adjustment_type='Year End Txns'" ;
		//SELECT COUNT(customer_id) as audits FROM audit_engagement WHERE customer_id=1 AND closing_date LIKE '2019%' GROUP BY customer_id
		
		//SELECT audit_account_grouping.grouping_code as gp,audit_account_grouping.grouping_name, company_type_key.allowed,company_type_key.audit_company_type_id,company_type_key.company_type_key_id FROM audit_account_grouping,company_type_key 	 WHERE audit_account_grouping.grouping_code=company_type_key.grouping_code AND company_type_key.allowed=1 AND company_type_key.audit_company_type_id=1	
		return $dbQueries;
	}
    public static function deleteYearEndAdjustments($id)
    {
        $r=dbFetchData("delete_year_end_txn",array("audit_engagement_id"=>$id),QUERY_UPDATE);
        //echo("Delete Year End txn for $id");
    }
	public static function mapTbFromPrevEngagement($audit_engagement_id)
	{
		//read_audit_detail
		$engagementParam=array("audit_engagement_id"=>$audit_engagement_id);
		$engagement=dbFetchData("read_audit_detail",$engagementParam,QUERY_FETCH_ONE);
		
		if(!$engagement)
		{
			return;
		}
		$customer_id=$engagement["customer_id"];
		$schedules_date=$engagement["schedules_date"];
		
		$prevEngagements=dbFetchData("read_previous_engagements",array("customer_id"=>$customer_id,"schedules_date"=>$schedules_date));
		
		$engagmentListStr="(";
		$sep="";
		foreach($prevEngagements as $item)
		{
			$engagmentListStr.=$sep."\"".$item["audit_engagement_id"]."\"";
			$sep=",";
		}
		$engagmentListStr.=")";
		$prevMapping=dbFetchData("read_previous_engagement_mapping",array("audit_engagement_ids"=>$engagmentListStr));
		
		foreach($prevMapping as $map)
		{
			$account_id=get_attribute_value($map,"account_id");
			$parent_code=get_attribute_value($map,"parent_code");
			
			$r=dbFetchData("update_previous_engagement_mapping",array("audit_engagement_id"=>$audit_engagement_id,"account_id"=>$account_id,"parent_code"=>$parent_code),QUERY_UPDATE);
		}
		
		//echo($engagmentListStr);
		serveData("read_unmapped_tb_count",$engagementParam,QUERY_FETCH_ONE);
		//echo(json_encode($prevMapping));
	}
	public static function saveFinding()
	{
		$params=getPostParams();
		if($params)
		{
			$params["extra_data"]=get_attribute_value($params,"extra_data");
			$params["extra_data"]=json_encode($params["extra_data"]);
		}
		$result=CrudServiceAdapter::_AuditFinding_save($params);
		echo(json_encode($result));
	}
	public static function saveExtraData()
	{
		$params=getPostParams();
		$result=array();
		foreach($params as $item)
		{
			$r=dbFetchData("audit_update_extra_data",$item,QUERY_UPDATE);
			array_push($result,$r);
		}
		echo(json_encode($result));
	}
	
	public static function checkAuditExists($id,$year)
	{
		serveData("check_customer_exists",array("customer_id"=>$id,"year"=>$year),QUERY_FETCH_ONE);
	}
	
	public static function readAllAudits($archived)
	{
		if($archived)
		{
			serveData("Audit_read_all");
		}
		else
		{
			serveData("Audit_read_active");
		}
	}
	
	public static function readAuditsForCustomer($id)
	{
		serveData("read_customer_audits",array("customer_id"=>$id));
	}
	
	public static function insertVerficationCodeToFile()
{
	
	
	$params=getPostParams();
	$folder=get_attribute_value($params,"folder");
	$fileName=get_attribute_value($params,"fileName");
	$imageFileName=get_attribute_value($params,"imageFileName","qrcode.png");
	$verficationCode=get_attribute_value($params,"verficationCode","");

	
	$reportData=get_attribute_value($params,"reportData","");
	
	$excelFile="../".$folder.$fileName;
	$tempFile="../".$folder."_$".$fileName;
	$imageFile="../".$folder.$imageFileName;
	
	$ret=array("success"=>true,"excelFile"=>$excelFile,"message"=>"");
	$ret["imageFile"]=$imageFile;
	
	$topLeft=array("Coordinates"=>"A1","width"=>60,"height"=>60);
	
	$topRight=array("Coordinates"=>"H1","width"=>64,"height"=>64);
	
	$topRightLandscape=array("Coordinates"=>"H1","width"=>100,"height"=>100);
	$verification=array("Coordinates"=>"D13","width"=>100,"height"=>100);
	
	$insertionPlaces=array(
        "Info"=>array($topRight)
		,"General"=>array($topRight)
        
		,"001Verfication"=>array($verification,$topRight)
		,"QR"=>array($topRight)
		,"TOC"=>array($topRight)
		,"Content"=>array($topRight)
		,"BS"=>array($topRight)
		,"PL"=>array($topRight)
		,"CF"=>array($topRight)
		,"SCE"=>array($topRight)
		,"NOTES"=>array($topRight)
		,"NE LVAP"=>array($topRight)
		,"Cover"=>array($topRight)
		,"Opinion"=>array($topRight)
		,"NW"=>array($topRight)
		,"LVAP"=>array($topRight)
		
		
	);
	
	if(!is_file($excelFile))
	{
		$ret["success"]=false;
		$ret["message"]="File not found: $folder".$fileName;
	}
	elseif(!is_file($imageFile))
	{
		$ret["success"]=false;
		$ret["message"]="File not found: $folder".$imageFileName;
	}
	else
	{
		$objReader = new PHPExcel_Reader_Excel2007();
		$objPHPExcel = $objReader->load($excelFile);
		$sheetList = $objReader->listWorksheetNames($excelFile);
		
		//$ret["sheetList"]=$sheetList;
		foreach($sheetList as $si=>$sheetName)
		{
			$sheetInsertion=get_attribute_value($insertionPlaces,$sheetName);
			if($sheetInsertion)
			{
				$ret[$sheetName]="Inserted";
				$objPHPExcel->setActiveSheetIndex($si);
				foreach($sheetInsertion as $img)
				{
					
					$objDrawing = new PHPExcel_Worksheet_Drawing();
					$objDrawing->setName('Verification Code');
					$objDrawing->setDescription('Verification Code');
					$objDrawing->setPath($imageFile);
					
					$objDrawing->setCoordinates($img["Coordinates"]);

					$objDrawing->setOffsetX($img["height"]);
					
					$objDrawing->setHeight($img["height"]);
					$objDrawing->setWidth($img["width"]);
					
					
					$objDrawing->setWorksheet($objPHPExcel->getActiveSheet());
				}
			}
		}
		$objWriter = new PHPExcel_Writer_Excel2007($objPHPExcel);
			//$objWriter = new PHPExcel_Writer_Excel5($objPHPExcel);
		
		$status=$objWriter->save($tempFile);
		
		$objPHPExcel->disconnectWorksheets();
		unset($objPHPExcel);
		
		copy($tempFile, $excelFile);
	}
	//$ret["reports"]=updateReportsRegistry($reportData);
	echo(json_encode($ret));
	
}
	
	public static function saveCompanyTypeGroupingKeys()
	{
		$params=getPostParams();
        $result= addOrUpdateData($params,"company_type_key_id","AuditAddCompany_type_key","AuditUpdateCompany_type_key");
		echo(json_encode($result));
		
		serveData("AuditRead_company_type_key");
	}
	
	
	public static function readCompanyTypeGroupingKeys()
	{
		serveData("AuditRead_company_type_key");
	}
	public static function readAllGroupingKeys()
	{
		serveData("AuditRead_account_grouping");
	}
	
	public static function readAuditCompanyTypes()
	{
		serveData("read_audit_company_types_lookup");
	}
	
	public static function buildHash($data,$id_fld,$prefix="item")
	{
		$result=array();
		foreach($data as $item)
		{
			$id=get_attribute_value($item,$id_fld);
			if($id)
			{
				$result[$prefix.$id]=$item;
			}
			
		}
		return $result;
	}
	
	public static function readAuditAdjustments($id)
	{
		serveData("AuditRead_adjustment",array("audit_engagement_id"=>$id));
	}
	
	public static function readFullAuditDetail($id)
	{
		$param1=array("audit_engagement_id"=>$id);
		$param2=array("audit_id"=>$id);
		
		$engagement=dbFetchData("AuditRead_engagement_detail",$param1,QUERY_FETCH_ONE);
		
		$result=array();
		$accountGroupings=dbFetchData("AuditRead_account_grouping");
		$auditProcedures=dbFetchData("AuditRead_procedures");
		
		$clientTB=array();

		if($engagement)
		{
			$engagementData=array();
			foreach($engagement as $f=>$v)
			{
				$engagementData[$f]=$v;
			}
			$engagementData["verification_code"]=hash('crc32',$id);
			$engagement["engagementInfo"]=$engagementData;
			$engagement["validMappingKeys"]= dbFetchData("AuditReadValidMappingKeys",array("company_type"=>$engagementData["company_type"]))  ;
			
			$txnCount=dbFetchData("AuditRead_transactionsCount",$param1,QUERY_FETCH_ONE);
			
			$clientTB=dbFetchData("readaudit_client_trialbalanceForAudit",$param1);
			
			
			
			$engagement["txnCount"]=$txnCount["txns"];
			
			$engagement["clientTB"]=$clientTB;

            //$engagement["customer"] =dbFetchData("AuditRead_customer",array("customer_id"=>$engagementData["customer_id"]),QUERY_FETCH_ONE);
			
            $engagement["customer"]=CrudServiceAdapter::_Customer_readDetailById($engagementData["customer_id"]);
            
			$findings=dbFetchData("AuditRead_findings",$param1);
			$engagement["adjustments"]=dbFetchData("AuditRead_adjustment",$param1);
			$engagement["managementLetters"]=dbFetchData("AuditRead_management_letters",$param1);
			$engagement["disclosureNotes"]=dbFetchData("AuditRead_disclosure_notes",$param1);
			$engagement["qualificationPoints"]=dbFetchData("AuditRead_qualification_points",$param1);
			
			$engagement["appliedProcedures"]=dbFetchData("AuditRead_procedures_on_engagement",$param1);
			
			foreach($findings as $f=>$finding)
			{
				$finding["ex"]="data";
				$finding["extra_data"]=json_decode($finding["extra_data"]);
				$findings[$f]=$finding;
			}
			$engagement["findings"]=$findings;
			
			
			$transactionCounts=dbFetchData("read_audit_transaction_count",$param2);
			$transactionCountsHash=AuditServiceAdapter::buildHash($transactionCounts,"parent_code");
			
			foreach($clientTB as $i=> $acct)
			{
				$txnCountData=get_attribute_value($transactionCountsHash,"item".$acct["account_id"]);
				$txnCount=0;
				if($txnCountData)
				{
					$txnCount=$txnCountData["transactions"];
				}
				$acct["txnCount"]=$txnCount;
				$clientTB[$i]=$acct;
			}
			
			$auditedEntities=array("GK"=>$accountGroupings,"acct"=>$clientTB);
			$auditedEntities=AuditServiceAdapter::setFindingsCountForAccounts($id,$auditedEntities);
			
			$engagement["clientTB"]=$auditedEntities["acct"];
			$accountGroupings=$auditedEntities["GK"];
			//$result=$transactionCountsHash;//$engagement["clientTB"];
			//$result=$engagement["clientTB"];
			//$result=$auditedEntities;
			
		}
		
		//$result=array("accountGroupings"=>$accountGroupings,"auditProcedures"=>$auditProcedures);
		
		$result=array("engagement"=>$engagement,"accountGroupings"=>$accountGroupings,"auditProcedures"=>$auditProcedures);
        //$result= $engagement["customer"];
		echo(json_encode($result));
	}
	
	public static function setFindingsCountForAccounts($auditId,$entities)
	{
		$entityTypeIds=array("GK"=>"grouping_code","acct"=>"account_id","txn"=>"audit_transaction_id");
		
		$findingsCounts=dbFetchData("read_audit_finding_count",array("audit_id"=>$auditId));
		$findingCountsHash=array();
		foreach($findingsCounts as $f)
		{
			$findingCountsHash[$f["audited_item_type"].$f["audited_item_id"]]=$f["finding_count"];
		}
		foreach($entities as $e=>$entityData)
		{
			$entityIdField=get_attribute_value($entityTypeIds,$e);
			foreach($entityData as $ai=>$acct)
			{ 
				$entityId=get_attribute_value($acct,$entityIdField);
				
				$acct["entity_type"]=$e;
				$acct["id"]=$entityId;
				$acct["findingsCount"]=0;
				
				$af=get_attribute_value($findingCountsHash,$e.$entityId);
				if($af)
				{
					$acct["findingsCount"]=$af;
				}
				$entityData[$ai]=$acct;
			}
			$entities[$e]=$entityData;
		}
		return $entities;
	}
	
	
	
	
	public static function readAuditTransactionsForAccount($audit_id,$parent_code)
    {
		$result=dbFetchData("read_audit_transaction_for_account",array("audit_id"=>$audit_id,"parent_code"=>$parent_code));
		
		$auditedEntities=array("txn"=>$result);
		$auditedEntities=AuditServiceAdapter::setFindingsCountForAccounts($audit_id,$auditedEntities);
		
		echo(json_encode($auditedEntities["txn"]));
		
       //serveData("read_audit_transaction_for_account",array("audit_id"=>$audit_id,"parent_code"=>$parent_code));
    } 
	
	public static function readAuditTransactionCounts($id)
    {
       serveData("read_audit_transaction_count",array("audit_id"=>$id));
    } 
	
	public static function readAuditFindingsForAccount()
    {
		$params=getPostParams();
	   	
		$result=dbFetchData("read_audit_findings_for_account",$params);

	   	echo(json_encode($result));
    } 
	
	
	public static function readAuditFindingForAccountProcedure()
    {
		$params=getPostParams();
	   	
		$auditFinding=dbFetchData("read_audit_finding_for_account_procedure",$params,QUERY_FETCH_ONE);
		
		if($auditFinding)
		{
			$auditFinding["extra_data"]=$auditFinding["extra_data"]?$auditFinding["extra_data"]:"{}";
			
			$auditFinding["extra_data"]=json_decode($auditFinding["extra_data"]);
		}
		
		$auditManagementLetter=dbFetchData("read_audit_management_letter_for_account_procedure",$params,QUERY_FETCH_ONE);
		
	   	
		$auditFinding=$auditFinding?$auditFinding:$params;
		
		$auditManagementLetter=$auditManagementLetter?$auditManagementLetter:$params;
		
		$result=array("auditFinding"=>$auditFinding,"auditManagementLetter"=>$auditManagementLetter);
	   
	   	echo(json_encode($result));
    } 
	
	public static function readAuditFindingCounts($id)
    {
       serveData("read_audit_finding_count",array("audit_id"=>$id));
	  // $findingsCountsHash=AuditServiceAdapter::setFindingsCountForAccounts($id);
	   //echo(json_encode($findingsCountsHash));
    } 
    
    public static function readAuditClientTrialbalance($id)
    {
       serveData("readaudit_client_trialbalanceForAudit",array("audit_engagement_id"=>$id));
    } 
    
}

AuditServiceAdapter::mapServiceRoute($sa);
$dbQueries	=AuditServiceAdapter::registerQueries($dbQueries);

?>