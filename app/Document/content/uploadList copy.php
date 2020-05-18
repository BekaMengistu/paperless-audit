
<div class="modal fade" id="modalUploads">

<div class="top  white b-r" style="max-height:600px;">
    <div class="row-col">
    <a data-dismiss="modal" class="pull-right text-muted text-lg p-a-sm m-r-sm">×</a>
    <div class="p-a b-b">
      <b class="label info pos-rlt m-r-xs"><i class="arrow right b-info pull-in"></i>{{documentManager.uploader.queue.length }}</b> <span class="h5">Uploads</span>
    </div>
    
    <div class="row-row" style="min-height:100px;max-height:400px;">
      <div class="row-body p-a">
        <div class="row-inner2">
    
        <div>
        <form uis-jp="parsley">
        <table class="table white b-a">
            <thead>
                <tr>
                    <th>File</th>
                    <th>Name</th>
                    <th>Tags</th>
                    <th ng-show="uploadManager.uploader.isHTML5">Progress</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in documentManager.uploader.queue">
                    <td><strong>{{ item.file.name }}</strong> {{ item.file.size/1024/1024|number:2 }} MB</td>
                    
                    <td>	
                    <input class='md-input' ng-model="item.digitalDocument.name" />
                    </td>
                    <td><input class='md-input' ng-model="item.digitalDocument.tags" /></td>
                    
                    
                    <td ng-show="uploadManager.uploader.isHTML5">
                        <div class="progress progress-sm m-a-0 m-t-xs">
                            <div class="progress-bar info" role="progressbar" ng-style="{ 'width': item.progress + '%' }"></div>
                        </div>
                    </td>

                    <td nowrap>
                        <button type="button" class="btn btn-sm {{app.setting.theme.primary}}" uib-tooltip="Upload Item" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">
                            <i class="fa fa-upload"></i>
                        </button>
                        <button type="button" class="btn white btn-sm" ng-click="item.cancel()" uib-tooltip="Cancel" ng-disabled="!item.isUploading">
                            <i class="fa fa-times"></i>
                        </button>
                        <button type="button" class="btn btn-danger btn-sm" uib-tooltip="Remove Item" ng-click="item.remove()">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </form>
        <div>
          <div>
            <p>Queue progress:</p>
            <progress class="progress progress-striped progress-success" value="{{uploadManager.uploader.progress}}" max="100">
            </progress>
          </div>
        </div>
    </div>
        </div>
      </div>
    </div>
    <div class="p-a b-t">
    	 <button type="button" class="btn btn-addon btn-info" ng-click="uploadManager.uploader.uploadAll()" ng-disabled="!uploadManager.uploader.getNotUploadedItems().length">
            <i class="fa fa-cloud-upload"></i> Upload all
          </button>
          <button type="button" class="btn btn-addon white" ng-click="uploadManager.uploader.cancelAll()" ng-disabled="!uploadManager.uploader.isUploading">
            <i class="fa fa-ban"></i> Cancel all
          </button>
          <button type="button" class="btn btn-addon white" ng-click="uploadManager.uploader.clearQueue()" ng-disabled="!uploadManager.uploader.queue.length">
              <i class="fa fa-times"></i> Remove all
          </button>
          <!--
      <a href="" class="texts-muted"><i class="fa fa-fw fa-twitter"></i> Twitter</a>
      <a href="" class="texts-muted m-h"><i class="fa fa-fw fa-facebook"></i> Facebook</a>
      -->
    </div>
 
  </div>
  </div>
    </div>
    
