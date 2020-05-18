
<div class="padding" bm-ui-permission="app.crud.discussion_message.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{discussion_messageManager.formData.detail.headerStyle}} non-select">
            <h2>{{discussion_messageManager.formData.detail.title}}</h2>
            <small>{{discussion_messageManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="discussion_messageManager.saveItem(discussion_messageManager.editedDiscussionMessage)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="discussion_messageManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdiscussion_id' ng-model='discussion_messageManager.editedDiscussionMessage.discussion_id' required><label class='non-select'>Discussion Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtuser_id' ng-model='discussion_messageManager.editedDiscussionMessage.user_id' required><label class='non-select'>User Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtrecipients' ng-model='discussion_messageManager.editedDiscussionMessage.recipients' required><label class='non-select'>Recipients</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input type="text" style="width:50%; display:inline;" size="8" class="md-input" 
                  ng-model="discussion_messageManager.editedDiscussionMessage.message_time" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
                  <input type="text" style="width:45%; display:inline;" size="8" class="md-input" 
                  ng-model="discussion_messageManager.editedDiscussionMessage.message_time" 
                  data-autoclose="0" 
                  placeholder="Time" 
                  data-icon-up="fa fa-chevron-up" 
                  data-icon-down="fa fa-chevron-down" 
                  bs-timepicker>
                  
             
            <label class='non-select'>Message Time</label></div>
<div class="md-form-group"> <input class='md-input' id='txtmessage_body' ng-model='discussion_messageManager.editedDiscussionMessage.message_body' required><label class='non-select'>Message Body</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='discussion_messageManager.editedDiscussionMessage.archived' required><label class='non-select'>Archived</label></div>
</div>
                </div>
            </form>
        </div>
    </div>
</div>

<!--
<form class="form-horizontal" role="form" style="margin:10px;">
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDiscussionId" class="col-sm-4 control-label">Discussion Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDiscussionId" ng-model="editedDiscussionMessage.discussion_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtMessageTime" class="col-sm-4 control-label">Message Time</label>
        <div class="col-sm-7">
            
        	            <div class="form-group col-sm-5">
            <input type="text" size="8" class="form-control" 
              ng-model="editedDiscussionMessage.message_time" 
              data-autoclose="1" 
              placeholder="Date"
              data-icon-left="fa fa-chevron-left" 
              data-icon-right="fa fa-chevron-right" 
              bs-datepicker>
            </div>
                     <div class="form-group col-sm-5">
              <input type="text" size="8" class="form-control" 
              ng-model="editedDiscussionMessage.message_time" 
              data-autoclose="0" 
              placeholder="Time" 
              data-icon-up="fa fa-chevron-up" 
              data-icon-down="fa fa-chevron-down" 
              bs-timepicker>
            </div>    
                    
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtUserId" class="col-sm-4 control-label">User Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUserId" ng-model="editedDiscussionMessage.user_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtMessageBody" class="col-sm-4 control-label">Message Body</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtMessageBody" ng-model="editedDiscussionMessage.message_body">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtRecipients" class="col-sm-4 control-label">Recipients</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtRecipients" ng-model="editedDiscussionMessage.recipients">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedDiscussionMessage.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->