
<div class="padding content-editor" bm-ui-permission="app.crud.web_content.edit" login-user="app.loginUser">
    <div class="box">
       
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="web_contentManager.saveItem(web_contentManager.editedWebContent)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="New" ng-click="web_contentManager.createItem()" 
                    	class="btn btn-default btn-xs"> &nbsp;<i class="fa fa-plus"></i>&nbsp; </button>
            
            <button uib-tooltip="To List" ng-click="web_contentManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm m-4 m-b">
                    <div class="col-sm-4">
                        <div class="md-form-group">
                            <input class='md-input' id='txtreference' ng-model='web_contentManager.editedWebContent.reference' required>
                            <label class='non-select'>Name</label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="md-form-group">
                            <input class='md-input' id='txtreference' ng-model='web_contentManager.editedWebContent.category' required>
                            <label class='non-select'>Category</label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="md-form-group">
                            <input class='md-input'  ng-model='web_contentManager.editedWebContent.content_type' required>
                            <label class='non-select'>Type</label>
                        </div>
                    </div>
                    
                    <div class="col-sm-2">
                        <div class="md-form-group">
                            <input class='md-input' ng-model='web_contentManager.editedWebContent.web_content_id' required>
                            <label class='non-select'>Id</label>
                        </div>
                    </div>
                </div>
                
                <div class="row row-sm">
                    <div class="col-sm-12">
                    	<summernote ng-model="web_contentManager.editedWebContent.content" config="webContentEditorOptions"> </summernote>
                        
                    </div>
                    
                    
                </div>
            </form>
        </div>
    </div>
    <div  ng-if="contentUrl" ng-include="contentUrl">
                    </div>
</div>
