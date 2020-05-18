
<div class="padding" bm-ui-permission="app.crud.web_content.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{web_contentManager.formData.detail.headerStyle}} non-select">
            <h2>{{web_contentManager.formData.detail.title}}</h2>
            <small>{{web_contentManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="web_contentManager.saveItem(web_contentManager.editedWebContent)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="web_contentManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtreference' ng-model='web_contentManager.editedWebContent.reference' required><label class='non-select'>Reference</label></div>
<div class="md-form-group"> <input class='md-input' id='txtarchived' ng-model='web_contentManager.editedWebContent.archived' required><label class='non-select'>Archived</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtcontent' ng-model='web_contentManager.editedWebContent.content' required><label class='non-select'>Content</label></div>
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
      <label for="txtReference" class="col-sm-4 control-label">Reference</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtReference" ng-model="editedWebContent.reference">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtContent" class="col-sm-4 control-label">Content</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtContent" ng-model="editedWebContent.content">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtArchived" class="col-sm-4 control-label">Archived</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtArchived" ng-model="editedWebContent.archived">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->