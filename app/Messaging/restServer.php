<?php
class MessagingServiceAdapter
{
	public static function mapServiceRoute($sa)
	{
		$sa->mapRoute("get","/MessagingService/readMessagesForDiscussion/:id","MessagingServiceAdapter::readMessagesForDiscussion");
		
		$sa->mapRoute("get","/MessagingService/readDiscussionDetailById/:id","MessagingServiceAdapter::readDiscussionDetailById");
		
		$sa->mapRoute("post","/MessagingService/readDiscussionForEntity/","MessagingServiceAdapter::readDiscussionForEntity");
		
		
		//$sa->mapRoute("get","/LookupServices/Customer/","CustomerServiceAdapter::getLookup"); 
	}
    
	public static function registerQueries($dbQueries)
	{
		$dbQueries["read_messages_for_discussion"] = "SELECT * FROM discussion_message WHERE discussion_id='#discussion_id#' ORDER BY discussion_message_id DESC";
		
		$dbQueries["read_discussion_detail"] = "SELECT * FROM discussion WHERE discussion_id='#discussion_id#'";
		
		$dbQueries["read_discussion_for_entity"] = "SELECT discussion_id FROM discussion WHERE parent_type='#entity_type#' AND  parent_id='#entity_id#'";

		return $dbQueries;
	}
	
	public static function readDiscussionForEntity()
    {
		$param=getPostParams();
		serveData("read_discussion_for_entity",$param,QUERY_FETCH_ONE);
		/*
		$discussionId=dbFetchData("read_discussion_for_entity",$param,QUERY_FETCH_ONE);
		
		if($discussionId)
		{
			MessagingServiceAdapter::readDiscussionDetailById($discussionId["discussion_id"]);
		}
		*/
	}
	public static function readDiscussionDetailById($id)
    {
		$param=array("discussion_id"=>$id);
		
		$discussion=dbFetchData("read_discussion_detail",$param,QUERY_FETCH_ONE);
		
		if($discussion)
		{
			$discussion["messages"]=dbFetchData("read_messages_for_discussion",$param);
		}
       	
		echo(json_encode($discussion));
	   
    }
	
	public static function readMessagesForDiscussion($id)
    {
       serveData("read_messages_for_discussion",array("discussion_id"=>$id));
    }

  }
MessagingServiceAdapter::mapServiceRoute($sa);
$dbQueries	=MessagingServiceAdapter::registerQueries($dbQueries);

?>