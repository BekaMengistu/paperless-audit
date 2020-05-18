
<div class="modal fade" id="modalUploads">
    <div class="top  white b-r" style="height:400px;">
        <div class="row-col">
            <a data-dismiss="modal" class="pull-right text-muted text-lg p-a-sm m-r-sm">×</a>
            <div class="p-a b-b dker">
                <b class="label info pos-rlt m-r-xs"><i class="arrow right b-info pull-in"></i>{{documentManager.uploader.queue.length }}</b> <span class="h5">Uploads</span>
                
            </div>
            <div class="row-row" styles="height:{{window_height}}px;max-height:400px;">
                <div class="row-body p-a">
                    <div class="row-inner">
                        <div class="b-a dker" styles="height:{{window_height*2}}px;">
                            <form uis-jp="parsley">
                                <table class="table white b-a" style="height:{{window_height*2}}px;">
                                    <thead>
                                        <tr>
                                            <th>File</th>
                                            <th>Name</th>
                                            <th>Tags</th>
                                            <th ng-show="documentManager.uploader.isHTML5">Progress</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr ng-repeat="item in documentManager.uploader.queue">
                                            <td><strong>{{ item.file.name }}</strong> {{ item.file.size/1024/1024|number:2 }} MB
                                            	{{item.digitalDocumentData.document_id}} , {{item.digitalDocumentData.system_name}}
                                            </td>
                                            <td><input class='md-input' ng-model="item.digitalDocumentData.document_name" /></td>
                                            <td><input class='md-input' ng-model="item.digitalDocumentData.tags" /></td>
                                            <td ng-show="documentManager.uploader.isHTML5">
                                            	<div class="progress progress-sm m-a-0 m-t-xs">
                                                    <div class="progress-bar info" role="progressbar" ng-style="{ 'width': item.progress + '%' }">
                                                    </div>
                                                </div>
                                             </td>
                                            <td nowrap><button type="button" class="btn btn-sm {{app.setting.theme.primary}}" uib-tooltip="Upload Item" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess"> <i class="fa fa-upload"></i> </button>
                                                <button type="button" class="btn white btn-sm" ng-click="item.cancel()" uib-tooltip="Cancel" ng-disabled="!item.isUploading"> <i class="fa fa-times"></i> </button>
                                                <button type="button" class="btn btn-danger btn-sm" uib-tooltip="Remove Item" ng-click="item.remove()"> <i class="fa fa-trash"></i> </button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-a b-t dker">
            	<div class="row">
                	<div class="col-md-6">
                <button type="button" class="btn btn-addon btn-info" ng-click="documentManager.uploader.uploadAll()" 
                	ng-disabled="!documentManager.uploader.getNotUploadedItems().length"> <i class="fa fa-cloud-upload"></i> Upload all 
                </button>
                <button type="button" class="btn btn-addon white" ng-click="documentManager.uploader.cancelAll()" 
                	ng-disabled="!documentManager.uploader.isUploading"> <i class="fa fa-ban"></i> Cancel all </button>
                <button type="button" class="btn btn-addon white" ng-click="documentManager.uploader.clearQueue()" 
                	ng-disabled="!documentManager.uploader.queue.length"> <i class="fa fa-times"></i> Remove all </button>
                	</div>
                 	<div class="col-md-6">   
                    	<div class="progress progress-striped progress-success">
                            <div class="progress-bar info" role="progressbar" ng-style="{ 'width': documentManager.uploader.progress + '%' }">
                            </div>
                        </div>
                		
                	</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div style="position:fixed;bottom:0;right:0;width:100px;height:60px; z-index:1100;" >
<button class="md-btn md-fab m-b-sm white" ng-show="documentManager.uploader.queue.length" ng-click="documentManager.showUploadList()"><i class="material-icons md-24" >&#xe2c3;</i></button>
</div>
