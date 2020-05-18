
<div class="padding" bm-ui-permission="app.crud.event.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{eventManager.formData.detail.headerStyle}} non-select">
            <h2>{{eventManager.formData.detail.title}}</h2>
            <small>{{eventManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="eventManager.saveItem(eventManager.editedEvent)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="eventManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtevent_name' ng-model='eventManager.editedEvent.event_name' required><label class='non-select'>Event Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtevent_type' ng-model='eventManager.editedEvent.event_type' required><label class='non-select'>Event Type</label></div>
<div class="md-form-group"> <input type="text" style="width:50%; display:inline;" size="8" class="md-input" 
                  ng-model="eventManager.editedEvent.event_time" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
                  <input type="text" style="width:45%; display:inline;" size="8" class="md-input" 
                  ng-model="eventManager.editedEvent.event_time" 
                  data-autoclose="0" 
                  placeholder="Time" 
                  data-icon-up="fa fa-chevron-up" 
                  data-icon-down="fa fa-chevron-down" 
                  bs-timepicker>
                  
             
            <label class='non-select'>Event Time</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_id' ng-model='eventManager.editedEvent.parent_id' required><label class='non-select'>Parent Id</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='eventManager.editedEvent.description' required><label class='non-select'>Description</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_type' ng-model='eventManager.editedEvent.parent_type' required><label class='non-select'>Parent Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtlocation' ng-model='eventManager.editedEvent.location' required><label class='non-select'>Location</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='eventManager.editedEvent.archived' required><label class='non-select'>Archived</label></div>
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
      <label for="txtEventName" class="col-sm-4 control-label">Event Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtEventName" ng-model="editedEvent.event_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	 			<textarea class="form-control" id="txtDescription" ng-model="editedEvent.description">
            </textarea>
                    
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtEventType" class="col-sm-4 control-label">Event Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtEventType" ng-model="editedEvent.event_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentType" class="col-sm-4 control-label">Parent Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentType" ng-model="editedEvent.parent_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtEventTime" class="col-sm-4 control-label">Event Time</label>
        <div class="col-sm-7">
            
        	            <div class="form-group col-sm-5">
            <input type="text" size="8" class="form-control" 
              ng-model="editedEvent.event_time" 
              data-autoclose="1" 
              placeholder="Date"
              data-icon-left="fa fa-chevron-left" 
              data-icon-right="fa fa-chevron-right" 
              bs-datepicker>
            </div>
                     <div class="form-group col-sm-5">
              <input type="text" size="8" class="form-control" 
              ng-model="editedEvent.event_time" 
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
      <label for="txtLocation" class="col-sm-4 control-label">Location</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtLocation" ng-model="editedEvent.location">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentId" class="col-sm-4 control-label">Parent Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentId" ng-model="editedEvent.parent_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedEvent.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->