
<div class="padding" bm-ui-permission="app.crud.task.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{taskManager.formData.detail.headerStyle}} non-select">
            <h2>{{taskManager.formData.detail.title}}</h2>
            <small>{{taskManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="taskManager.saveItem(taskManager.editedTask)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="taskManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txttask_name' ng-model='taskManager.editedTask.task_name' required><label class='non-select'>Task Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtassgnee_id' ng-model='taskManager.editedTask.assgnee_id' required><label class='non-select'>Assgnee Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_id' ng-model='taskManager.editedTask.parent_id' required><label class='non-select'>Parent Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtpriority' ng-model='taskManager.editedTask.priority' required><label class='non-select'>Priority</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='taskManager.editedTask.archived' required><label class='non-select'>Archived</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input type="text" style="width:50%; display:inline;" size="8" class="md-input" 
                  ng-model="taskManager.editedTask.created_time" 
                  data-autoclose="0" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
                  <input type="text" style="width:45%; display:inline;" size="8" class="md-input" 
                  ng-model="taskManager.editedTask.created_time" 
                  data-autoclose="0" 
                  placeholder="Time" 
                  data-icon-up="fa fa-chevron-up" 
                  data-icon-down="fa fa-chevron-down" 
                  bs-timepicker>
                  
             
            <label class='non-select'>Created Time</label></div>
<div class="md-form-group"> <input class='md-input' id='txtparent_type' ng-model='taskManager.editedTask.parent_type' required><label class='non-select'>Parent Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txttask_status' ng-model='taskManager.editedTask.task_status' required><label class='non-select'>Task Status</label></div>
<div class="md-form-group"> <input class='md-input' id='txtcreated_by' ng-model='taskManager.editedTask.created_by' required><label class='non-select'>Created By</label></div>
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
      <label for="txtTaskName" class="col-sm-4 control-label">Task Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtTaskName" ng-model="editedTask.task_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCreatedTime" class="col-sm-4 control-label">Created Time</label>
        <div class="col-sm-7">
            
        	            <div class="form-group col-sm-5">
            <input type="text" size="8" class="form-control" 
              ng-model="editedTask.created_time" 
              data-autoclose="1" 
              placeholder="Date"
              data-icon-left="fa fa-chevron-left" 
              data-icon-right="fa fa-chevron-right" 
              bs-datepicker>
            </div>
                     <div class="form-group col-sm-5">
              <input type="text" size="8" class="form-control" 
              ng-model="editedTask.created_time" 
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
      <label for="txtAssgneeId" class="col-sm-4 control-label">Assgnee Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAssgneeId" ng-model="editedTask.assgnee_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentType" class="col-sm-4 control-label">Parent Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentType" ng-model="editedTask.parent_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtParentId" class="col-sm-4 control-label">Parent Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentId" ng-model="editedTask.parent_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtTaskStatus" class="col-sm-4 control-label">Task Status</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtTaskStatus" ng-model="editedTask.task_status">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtPriority" class="col-sm-4 control-label">Priority</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtPriority" ng-model="editedTask.priority">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCreatedBy" class="col-sm-4 control-label">Created By</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCreatedBy" ng-model="editedTask.created_by">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedTask.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->