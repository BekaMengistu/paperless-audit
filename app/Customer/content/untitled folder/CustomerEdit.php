<div class="padding">
	<div class="box">
    	<div class="box-header dker">
        	<div class="pull-right">
            	<button class="btn btn-primary" 
                	ng-click="customerManager.save(customerManager.editedCustomer)"><i class="fa fa-floppy-o"></i></button>
				<a class="btn btn-default" ui-sref="app.database.Customer"><i class="fa fa-arrow-left"></i></a>
            </div>
			<h2>Customer</h2>
			<small>Here you can edit Customer</small>        
       </div>
		<div class="box-body ">
        	<form>
            	<div class="row row-sm">
            	<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtcustomer_name' ng-model='customerManager.editedCustomer.customer_name' required><label>Customer Name</label></div><div class="md-form-group"> <input class='md-input' id='txtemail' ng-model='customerManager.editedCustomer.email' required><label>Email</label></div><div class="md-form-group"> <input class='md-input' id='txtprofile_picture' ng-model='customerManager.editedCustomer.profile_picture' required><label>Profile Picture</label></div></div><div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txttelephone_no' ng-model='customerManager.editedCustomer.telephone_no' required><label>Telephone No</label></div><div class="md-form-group"> <input class='md-input' id='txtaddress' ng-model='customerManager.editedCustomer.address' required><label>Address</label></div></div>                </div>
            </form>
        </div>    
    
    </div>
</div>
