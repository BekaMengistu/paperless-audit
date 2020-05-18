
<div class="padding" bm-ui-permission="app.crud.lookup.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{lookupManager.formData.detail.headerStyle}} non-select">
            <h2>{{lookupManager.formData.detail.title}}</h2>
            <small>{{lookupManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="lookupManager.saveItem(lookupManager.editedLookup)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="lookupManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtlookup_type' ng-model='lookupManager.editedLookup.lookup_type' required><label class='non-select'>Lookup Type</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='lookupManager.editedLookup.description' required><label class='non-select'>Description</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtname' ng-model='lookupManager.editedLookup.name' required><label class='non-select'>Name</label></div>
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
      <label for="txtLookupType" class="col-sm-4 control-label">Lookup Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtLookupType" ng-model="editedLookup.lookup_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtName" class="col-sm-4 control-label">Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtName" ng-model="editedLookup.name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedLookup.description">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->