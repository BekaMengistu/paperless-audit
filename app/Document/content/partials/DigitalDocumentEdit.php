<div class="padding">
    <div class="box">
        <div class="box-header dker">
            <div class="pull-right">
                <button class="btn btn-primary" ng-click="saveDigitalDocument()"><i class="fa fa-floppy-o"></i></button>
                
            </div>
            <h2>Digital Document</h2>
            <small>Here you can edit Digital Document</small>
        </div>
        <div class="box-body ">
            <form ui-jp="parsley">
                <div class="row row-sm">
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txtname'  ng-model='editedDigitalDocument.name' required>
                            <label>Name</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txttags' ng-model='editedDigitalDocument.tags' required>
                            <label>Tags</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtfile_path' ng-model='editedDigitalDocument.file_path' required>
                            <label>File Path</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        
                        <div class="md-form-group">
                            <input type="text" style="width:50%; display:inline;" size="8" class="md-input" ng-model="editedDigitalDocument.thumbnail_image" />
                            <div class="form-file">
                                <img ng-src="assets/images/docs/{{editedDigitalDocument.thumbnail_image}}" class="img-circle">
                                <input type="file" nv-file-select="" uploader="uploader">
                                <button class="btn white">Upload new picture</button>
                            </div>
                            <label>Thumbnail Image</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtis_archived' ng-model='editedDigitalDocument.is_archived' required>
                            <label>Is Archived</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
