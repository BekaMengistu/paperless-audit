
<div class="padding" bm-ui-permission="app.crud.discussion.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{discussionManager.formData.detail.headerStyle}} non-select">
            <h2>{{discussionManager.formData.detail.title}}</h2>
            <small>{{discussionManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="discussionManager.saveItem(discussionManager.editedDiscussion)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="discussionManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtuser_id' ng-model='discussionManager.editedDiscussion.user_id' required><label class='non-select'>User Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_type' ng-model='discussionManager.editedDiscussion.parent_type' required><label class='non-select'>Parent Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdiscussion_name' ng-model='discussionManager.editedDiscussion.discussion_name' required><label class='non-select'>Discussion Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='discussionManager.editedDiscussion.archived' required><label class='non-select'>Archived</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input type="text" style="width:50%; display:inline;" size="8" class="md-input" 
                  ng-model="discussionManager.editedDiscussion.post_time" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
                  <input type="text" style="width:45%; display:inline;" size="8" class="md-input" 
                  ng-model="discussionManager.editedDiscussion.post_time" 
                  data-autoclose="0" 
                  placeholder="Time" 
                  data-icon-up="fa fa-chevron-up" 
                  data-icon-down="fa fa-chevron-down" 
                  bs-timepicker>
                  
             
            <label class='non-select'>Post Time</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_id' ng-model='discussionManager.editedDiscussion.parent_id' required><label class='non-select'>Parent Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparticipants' ng-model='discussionManager.editedDiscussion.participants' required><label class='non-select'>Participants</label></div>
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
      <label for="txtUserId" class="col-sm-4 control-label">User Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUserId" ng-model="editedDiscussion.user_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtPostTime" class="col-sm-4 control-label">Post Time</label>
        <div class="col-sm-7">
            
        	            <div class="form-group col-sm-5">
            <input type="text" size="8" class="form-control" 
              ng-model="editedDiscussion.post_time" 
              data-autoclose="1" 
              placeholder="Date"
              data-icon-left="fa fa-chevron-left" 
              data-icon-right="fa fa-chevron-right" 
              bs-datepicker>
            </div>
                     <div class="form-group col-sm-5">
              <input type="text" size="8" class="form-control" 
              ng-model="editedDiscussion.post_time" 
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
      <label for="txtParentType" class="col-sm-4 control-label">Parent Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentType" ng-model="editedDiscussion.parent_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentId" class="col-sm-4 control-label">Parent Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentId" ng-model="editedDiscussion.parent_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDiscussionName" class="col-sm-4 control-label">Discussion Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDiscussionName" ng-model="editedDiscussion.discussion_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParticipants" class="col-sm-4 control-label">Participants</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParticipants" ng-model="editedDiscussion.participants">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedDiscussion.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->