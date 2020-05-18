<?php
function mapCrudRoute($app)
{
	$app->get("/CourtCaseService/readAll/","CourtCaseService_readAll"); 
    $app->get("/CourtCaseService/readDetailById/:id","CourtCaseService_readDetailById"); 
    $app->delete("/CourtCaseService/delete/:id","CourtCaseService_delete"); 
    $app->post("/CourtCaseService/save/","CourtCaseService_save"); 
    
	$app->get("/CustomerService/readAll/","CustomerService_readAll"); 
    $app->get("/CustomerService/readDetailById/:id","CustomerService_readDetailById"); 
    $app->delete("/CustomerService/delete/:id","CustomerService_delete"); 
    $app->post("/CustomerService/save/","CustomerService_save"); 
    
	$app->get("/DocumentService/readAll/","DocumentService_readAll"); 
    $app->get("/DocumentService/readDetailById/:id","DocumentService_readDetailById"); 
    $app->delete("/DocumentService/delete/:id","DocumentService_delete"); 
    $app->post("/DocumentService/save/","DocumentService_save"); 
    
	$app->get("/EventService/readAll/","EventService_readAll"); 
    $app->get("/EventService/readDetailById/:id","EventService_readDetailById"); 
    $app->delete("/EventService/delete/:id","EventService_delete"); 
    $app->post("/EventService/save/","EventService_save"); 
    
}


	/*--------------------------------        court_case        --------------------------------*/

	$dbQueries["readcourt_case"] = "SELECT * FROM court_case";

	$dbQueries["readcourt_caseDetailById"] = "SELECT * FROM court_case WHERE case_id = '#case_id#' ";

	$dbQueries["deletecourt_case"] = "DELETE FROM court_case WHERE case_id = '#case_id#' ";

	$dbQueries["addcourt_case"] = "INSERT INTO court_case 
	 ( customer_id, case_name, case_description, case_type, practice_area, file_number, court, case_start, case_end, case_status) 
	 VALUES ( '#customer_id#', '#case_name#', '#case_description#', '#case_type#', '#practice_area#', '#file_number#', '#court#', '#case_start#', '#case_end#', '#case_status#')";

	$dbQueries["updatecourt_case"] = "UPDATE court_case SET  
	  customer_id='#customer_id#', case_name='#case_name#', case_description='#case_description#', case_type='#case_type#', practice_area='#practice_area#', file_number='#file_number#', court='#court#', case_start='#case_start#', case_end='#case_end#', case_status='#case_status#' WHERE case_id='#case_id#'";


	/*--------------------------------        customer        --------------------------------*/

	$dbQueries["readcustomer"] = "SELECT * FROM customer";

	$dbQueries["readcustomerDetailById"] = "SELECT * FROM customer WHERE customer_id = '#customer_id#' ";

	$dbQueries["deletecustomer"] = "DELETE FROM customer WHERE customer_id = '#customer_id#' ";

	$dbQueries["addcustomer"] = "INSERT INTO customer 
	 ( customer_name, telephone_no, email, address, profile_picture) 
	 VALUES ( '#customer_name#', '#telephone_no#', '#email#', '#address#', '#profile_picture#')";

	$dbQueries["updatecustomer"] = "UPDATE customer SET  
	  customer_name='#customer_name#', telephone_no='#telephone_no#', email='#email#', address='#address#', profile_picture='#profile_picture#' WHERE customer_id='#customer_id#'";


	/*--------------------------------        document        --------------------------------*/

	$dbQueries["readdocument"] = "SELECT * FROM document ORDER BY document_id DESC";

	$dbQueries["readdocumentDetailById"] = "SELECT * FROM document WHERE document_id = '#document_id#' ";
	
	$dbQueries["readdocumentForParent"] = "SELECT * FROM document WHERE parent_id = '#parent_id#' AND parent_type = '#parent_type#' ORDER BY document_id DESC";
	

	$dbQueries["deletedocument"] = "DELETE FROM document WHERE document_id = '#document_id#' ";

	$dbQueries["adddocument"] = "INSERT INTO document 
	 ( document_name, document_category_id, parent_type, document_path, tags, parent_id, archived,description,mime_type) 
	 VALUES ( '#document_name#', '#document_category_id#', '#parent_type#', '#document_path#', '#tags#', '#parent_id#', '#archived#','#description#','#mime_type#')";

	$dbQueries["updatedocument"] = "UPDATE document SET  
	  document_name='#document_name#', document_category_id='#document_category_id#', parent_type='#parent_type#', document_path='#document_path#', tags='#tags#', parent_id='#parent_id#', archived='#archived#' WHERE document_id='#document_id#'";


	/*--------------------------------        event        --------------------------------*/

	$dbQueries["readevent"] = "SELECT * FROM event";

	$dbQueries["readeventDetailById"] = "SELECT * FROM event WHERE event_id = '#event_id#' ";

	$dbQueries["readEventForParent"] = "SELECT * FROM event WHERE parent_id = '#parent_id#' AND parent_type = '#parent_type#' ORDER BY event_time DESC";
	
	
	$dbQueries["deleteevent"] = "DELETE FROM event WHERE event_id = '#event_id#' ";

	$dbQueries["addevent"] = "INSERT INTO event 
	 ( event_name, event_type, parent_type, event_time, location, parent_id, archived) 
	 VALUES ( '#event_name#', '#event_type#', '#parent_type#', '#event_time#', '#location#', '#parent_id#', '#archived#')";

	$dbQueries["updateevent"] = "UPDATE event SET  
	  event_name='#event_name#', event_type='#event_type#', parent_type='#parent_type#', event_time='#event_time#', location='#location#', parent_id='#parent_id#', archived='#archived#' WHERE event_id='#event_id#'";


    function CourtCaseService_readAll()
    {
    	serveData("readcourt_case");
    } 
    function CourtCaseService_readDetailById($id)
    {
		$result=dbFetchData("readcourt_caseDetailById",array("case_id"=>$id),QUERY_FETCH_ONE);
		if(count($result))
		{
			$result["documents"]=dbFetchData("readdocumentForParent",array("parent_id"=>$id,"parent_type"=>"case"));
			$result["events"]=dbFetchData("readEventForParent",array("parent_id"=>$id,"parent_type"=>"case"));
			
			
		}
		echo(json_encode($result));
      // serveData("readcourt_caseDetailById",array("case_id"=>$id));
    } 
    function CourtCaseService_delete($id)
    {
       serveData("deletecourt_case",array("case_id"=>$id));
    } 
    function CourtCaseService_save()
    {
    	$params=getPostParams();
        $result= addOrUpdateData($params,"case_id","addcourt_case","updatecourt_case");
		echo(json_encode($result));
    }
    
  
    function CustomerService_readAll()
    {
    	serveData("readcustomer");
    } 
    function CustomerService_readDetailById($id)
    {
       serveData("readcustomerDetailById",array("customer_id"=>$id));
    } 
    function CustomerService_delete($id)
    {
       serveData("deletecustomer",array("customer_id"=>$id));
    } 
    function CustomerService_save()
    {
    	$params=getPostParams();
        $result= addOrUpdateData($params,"customer_id","addcustomer","updatecustomer");
		echo(json_encode($result));
    }
    
  
    function DocumentService_readAll()
    {
    	serveData("readdocument");
    } 
    function DocumentService_readDetailById($id)
    {
       serveData("readdocumentDetailById",array("document_id"=>$id));
    } 
    function DocumentService_delete($id)
    {
       serveData("deletedocument",array("document_id"=>$id));
    } 
    function DocumentService_save()
    {
    	$params=getPostParams();
        $result= addOrUpdateData($params,"document_id","adddocument","updatedocument");
		echo(json_encode($result));
    }
    
  
    function EventService_readAll()
    {
    	serveData("readevent");
    } 
    function EventService_readDetailById($id)
    {
		$result=dbFetchData("readeventDetailById",array("event_id"=>$id),QUERY_FETCH_ONE);
		if(count($result))
		{
			$result["documents"]=dbFetchData("readdocumentForParent",array("parent_id"=>$id,"parent_type"=>"event"));
			//$result["events"]=dbFetchData("readEventForParent",array("parent_id"=>$id,"parent_type"=>"case"));
			
			
		}
		echo(json_encode($result));
      // serveData("readeventDetailById",array("event_id"=>$id));
    } 
    function EventService_delete($id)
    {
       serveData("deleteevent",array("event_id"=>$id));
    } 
    function EventService_save()
    {
    	$params=getPostParams();
        $result= addOrUpdateData($params,"event_id","addevent","updateevent");
		echo(json_encode($result));
    }
    
  