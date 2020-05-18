<?php
$header_style=isset($_REQUEST["header_style"])?$_REQUEST["header_style"]:"white";
?>

<div class="box">
    <!--Box Header -->
    <div class="box-header dker2 <?php echo($header_style);?>">
        <div class="pull-right" style="padding-right:100px;">
            <button uib-tooltip="Save" class="btn btn-sm btn-primary" ng-click="saveCustomer()"><i class="fa fa-floppy-o"></i></button>
        </div>
        <h3>{{editedCustomer.customer_name}}</h3>
        <small>{{editedCustomer.email}}</small>
    </div>
    
    <!--/Box Header -->
    
    <div class="box-body dker2">
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txtcustomer_name' ng-model='editedCustomer.customer_name' required>
                            <label>Customer Name</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtemail' ng-model='editedCustomer.email' required>
                            <label>Email</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtprofile_picture' ng-model='editedCustomer.profile_picture' required>
                            <label>Profile Picture</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="md-form-group">
                            <input class='md-input' id='txttelephone_no' ng-model='editedCustomer.telephone_no' required>
                            <label>Telephone No</label>
                        </div>
                        <div class="md-form-group">
                            <input class='md-input' id='txtaddress' ng-model='editedCustomer.address' required>
                            <label>Address</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
