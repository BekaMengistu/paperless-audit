
<div class="padding" bm-ui-permission="app.crud.user.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{userManager.formData.detail.headerStyle}} non-select">
            <h2>{{userManager.formData.detail.title}}</h2>
            <small>{{userManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="userManager.saveItem(userManager.editedUser)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="userManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input type="text" style="width:50%; display:inline;" size="8" class="md-input" ng-model="userManager.editedUser.profile_picture" />
<div class="form-file">
			<img ng-src="files/uploads/{{userManager.editedUser.profile_picture}}" class="w-128 circle">
              <input type="file" nv-file-select="" uploader="uploader">
              <button class="btn white">Upload new picture</button>
            </div>

<!--
<input type="text" style="width:50%; display:inline;" size="8" class="md-input" 
                  ng-model="editedUser.profile_picture" 
                  data-autoclose="1" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
                  <input type="text" style="width:45%; display:inline;" size="8" class="md-input" 
                  ng-model="editedUser.profile_picture" 
                  data-autoclose="0" 
                  placeholder="Time" 
                  data-icon-up="fa fa-chevron-up" 
                  data-icon-down="fa fa-chevron-down" 
                  bs-timepicker>
             --><label class='non-select'>Profile Picture</label></div>
<div class="md-form-group"> <input type='password' class='md-input' id='txtpassword' ng-model='userManager.editedUser.password' required><label class='non-select'>Password</label></div>
<div class="md-form-group"> <input class='md-input' id='txtemail' ng-model='userManager.editedUser.email' required><label class='non-select'>Email</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaddress' ng-model='userManager.editedUser.address' required><label class='non-select'>Address</label></div>
<div class="md-form-group"> <input class='md-input' id='txtstatus' ng-model='userManager.editedUser.status' required><label class='non-select'>Status</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtuser_name' ng-model='userManager.editedUser.user_name' required><label class='non-select'>User Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtfull_name' ng-model='userManager.editedUser.full_name' required><label class='non-select'>Full Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txttelephone_no' ng-model='userManager.editedUser.telephone_no' required><label class='non-select'>Telephone No</label></div>
<div class="md-form-group"> <input class='md-input' id='txtuser_type' ng-model='userManager.editedUser.user_type' required><label class='non-select'>User Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtis_archived' ng-model='userManager.editedUser.is_archived' required><label class='non-select'>Is Archived</label></div>
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
      <label for="txtProfilePicture" class="col-sm-4 control-label">Profile Picture</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtProfilePicture" ng-model="editedUser.profile_picture">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtUserName" class="col-sm-4 control-label">User Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUserName" ng-model="editedUser.user_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtPassword" class="col-sm-4 control-label">Password</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtPassword" ng-model="editedUser.password">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtFullName" class="col-sm-4 control-label">Full Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtFullName" ng-model="editedUser.full_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtEmail" class="col-sm-4 control-label">Email</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtEmail" ng-model="editedUser.email">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtTelephoneNo" class="col-sm-4 control-label">Telephone No</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtTelephoneNo" ng-model="editedUser.telephone_no">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAddress" class="col-sm-4 control-label">Address</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAddress" ng-model="editedUser.address">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtUserType" class="col-sm-4 control-label">User Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtUserType" ng-model="editedUser.user_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtStatus" class="col-sm-4 control-label">Status</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtStatus" ng-model="editedUser.status">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtIsArchived" class="col-sm-4 control-label">Is Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtIsArchived" ng-model="editedUser.is_archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->