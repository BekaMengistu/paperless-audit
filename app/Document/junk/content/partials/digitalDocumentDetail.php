<div style="display:none">
	<input id="btnUploadDoc" type="file" class="btn btn-primary detail-viewer" nv-file-select="" uploader="uploaderSingle">
	<input id="btnUploadDoc2" type="file" multiple="multiple" class="btn btn-primary detail-viewer" nv-file-select="" uploader="uploadManager.uploader">
    
</div>




<div class="paddingss" ng-show="selectedDigitalDocument">
    <div class="box {{selectedDigitalDocument.edited?'doc-editor':'doc-viewer'}}">
        <div class="box-header dker">
            <div class="pull-right">
            	<button class="btn {{app.setting.theme.primary}} editor" uib-tooltip="Save" title="Save" ng-click="saveDigitalDocument(selectedDigitalDocument)"><i class="fa fa-check"></i></button>
            	<button class="btn white editor" uib-tooltip="Cancel" title="Cancel" ng-click="selectedDigitalDocument.edited=false"><i class="fa fa-times"></i></button>
               <!-- <input type="file" class="btn btn-primary detail-viewer" nv-file-select="" uploader="uploader">-->
                 <button class="btn {{app.setting.theme.primary}} detail-viewer" uib-tooltip="Upload Document" ng-click="uploadButtonClick()"><i class="fa fa-cloud-upload"></i></button>
                 <button class="btn {{app.setting.theme.primary}} detail-viewer" uib-tooltip="Upload Multiple Document" ng-click="uploadButtonClick('btnUploadDoc2')"><i class="fa fa-files-o"></i></button>
                <button class="btn {{app.setting.theme.primary}} detail-viewer" uib-tooltip="Edit" title="Edit" ng-click="editDigitalDocument(selectedDigitalDocument)"><i class="fa fa-pencil"></i></button>
                <button class="btn btn-danger detail-viewer" ng-disabled="selectedDigitalDocument.isTemplateBool" uib-tooltip="Delete" title="Delete" ng-click="archiveDigitalDocument(selectedDigitalDocument)"><i class="fa fa-trash-o"></i></button>
                
            </div>
            <h2>Digital Document</h2>
            <small>{{selectedDigitalDocument.document_name}}</small>
        </div>
        <div class="box-body">
            <form uis-jp="parsley">
                <div class="row row-sm">
                    <div class="col-sm-12 col-md-4">
                    	
                        <div class="md-form-group">
                        	<div class="detail-viewer">
                            	<span style="font-weight:bold;">Name:</span><br/>
                            	{{selectedDigitalDocument.document_name}}
                            </div>
                            <div class="editor">
                            	<input class='md-input' id='txtname' ng-model='selectedDigitalDocument.document_name' required>
                            	<label>Name</label>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="col-sm-12 col-md-5">
                        
                        <div class="md-form-group">
                        	<div class="detail-viewer">
                            	<span style="font-weight:bold;">Description:</span><br/>
                            	{{selectedDigitalDocument.description}}
                            </div>
                            <div class="editor">
                            <input class='md-input' id='txtDescription' ng-model='selectedDigitalDocument.description' required>
                            <label>Description</label>
                            </div>
                        </div>
                     </div>
                    <div class="col-sm-12 col-md-3">
                        
                        <div class="md-form-group">
                        	<div class="detail-viewer">
                            	<span style="font-weight:bold;">Tags:</span><br/>
                            	{{selectedDigitalDocument.tags}}
                            </div>
                            <div class="editor">
                            <input class='md-input' id='txttags' ng-model='selectedDigitalDocument.tags' required>
                            <label>Tags</label>
                            </div>
                        </div>
                     </div>
                     <div class="col-sm-12 col-md-4" style="display:none;">
						<div class="md-form-group">
                        	<div class="detail-viewer">
                            	<small>Is Template:</small><br/>
                                <i class="fa fa-check" ng-if="selectedDigitalDocument.isTemplateBool"></i>
                                <i class="fa fa-times" ng-if="!selectedDigitalDocument.isTemplateBool"></i>
                            	{{selectedDigitalDocument.isTemplate}}
                            </div>
                            <div class="editor">
                            <input type="checkbox" class='md-input' id='txtisTemplate' ng-model='selectedDigitalDocument.isTemplateBool' required>
                            <label>Is Template</label>
                            </div>
                        </div>
                    </div>
                    <div class="debug">
                    	{{selectedDigitalDocument.templateDocument}}
                    </div>
                    
                </div>
            </form>
            
            <div ng-show="(selectedDigitalDocument.document_id ||selectedDigitalDocument.isRoot)  && !selectedDigitalDocument.document_path">
            	<div class="row dker">
            	<div class="box-header">
                	<div class="pull-right">
                    <button class="btn {{app.setting.theme.primary}}" uib-tooltip="Add New Content" title="Add New Content" ng-click="addChild(selectedDigitalDocument.document_id)"><i class="fa fa-plus"></i></button>
                    <button class="btn {{app.setting.theme.primary}}" uib-tooltip="Add From Template" title="Add From Template" ng-click="addChildFromTemplate(selectedDigitalDocument.document_id)">
                        <i class="fa fa-copy"></i>
                    </button>

                    </div>
                    <h3>Contents</h3>
                    <small> {{selectedDigitalDocument.children.length}} Items</small>
                </div>
           </div>
           		<div class="row">
                <div class="col-sm-12">
                  
                  <div class="box">
                    <ul class="list inset m-a-0">
                      <li class="list-item" ng-repeat="subDoc in selectedDigitalDocument.children">
                        <a herf class="list-left">
                          <span class="w-40 circle accent">
                            <i class="fa fa-file" ng-if="!subDoc.children.length"></i>
                            <i class="fa fa-folder" ng-if="subDoc.children.length"></i>
                          </span>
                        </a>
                        <div class="list-body">
                          <div><a href>{{subDoc.document_name}}</a></div>
                          <small class="text-muted text-ellipsis">{{subDoc.tags}}</small>
                        </div>
                      </li>
                
                    </ul>
                  </div>
                </div>
            </div>
			</div>
                

            
            
            
            
            <div class="box detail-viewer" ng-if="selectedDigitalDocument.document_id && selectedDigitalDocument.document_path">
            	<iframe width="900" height="400" ng-src="{{'files/uploads/' + selectedDigitalDocument.document_path}}" ></iframe>
            </div>
            
            <div style="display:none;" class="box detail-viewer" ngs-show="(selectedDigitalDocument.digital_document_id ||selectedDigitalDocument.isRoot)  && !selectedDigitalDocument.document_path">
            	<div class="box-header dker">
                	<div class="pull-right">
                    <button class="btn white" title="Add New Content" ng-click="addChild(selectedDigitalDocument.document_id)"><i class="fa fa-plus"></i></button>
                    <button class="btn btn-primary" title="Add From Template" ng-click="addChildFromTemplate(selectedDigitalDocument.document_id)">
                        <i class="fa fa-copy"></i>
                    </button>

                    </div>
                	<h3>Contents</h3>
                    <small> {{selectedDigitalDocument.children.length}} Items</small>
                </div>
                <div class="box-body">
                	<div class="debug">
                		{{templateDocument}}
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4" ng-repeat="subDoc in selectedDigitalDocument.children">
				  <div class="box">
				    <div class="item">
					    <div class="item-bg {{app.setting.theme.primary}} h6">
					    	<p class="p-a">{{subDoc.name}}</p>
					    </div>
					    <div class="p-a p-y-lg pos-rlt">
					    	<img src="assets/images/p0.jpg" class="img-circle w-56" style="margin-bottom: -7rem">
					    </div>
					</div>
				    <div class="p-a">
				    	<a href class="text-md m-t block">{{subDoc.name}}</a>
				    	<p><small>{{subDoc.tags}}</small></p>
				    	
				    	<div class="text-xs">
				    		<i class="fa fa-calendar-o"></i> 
				    		<strong>Thurs, 14 Mar</strong> 
				    		
				    	</div>
				    </div>
				  </div>
				</div>
                	<div class="row"></div>
                	
                </div>
            </div>
        </div>
    </div>
</div>

