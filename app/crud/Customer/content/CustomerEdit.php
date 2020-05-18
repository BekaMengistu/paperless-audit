
<div class="padding" bm-ui-permission="app.crud.customer.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{customerManager.formData.detail.headerStyle}} non-select">
            <h2>{{customerManager.formData.detail.title}}</h2>
            <small>{{customerManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="customerManager.saveItem(customerManager.editedCustomer)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="customerManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input type="text" style="width:50%; display:inline;" size="8" class="md-input" ng-model="customerManager.editedCustomer.logo" />
<div class="form-file">
			<img ng-src="files/uploads/{{customerManager.editedCustomer.logo}}" class="w-128 circle">
              <input type="file" nv-file-select="" uploader="uploader">
              <button class="btn white">Upload new picture</button>
            </div>

<!--
<input type="text" style="width:50%; display:inline;" size="8" class="md-input" 
                  ng-model="editedCustomer.logo" 
                  data-autoclose="1" 
                  placeholder="Date"
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                
                  <input type="text" style="width:45%; display:inline;" size="8" class="md-input" 
                  ng-model="editedCustomer.logo" 
                  data-autoclose="0" 
                  placeholder="Time" 
                  data-icon-up="fa fa-chevron-up" 
                  data-icon-down="fa fa-chevron-down" 
                  bs-timepicker>
             --><label class='non-select'>Logo</label></div>
<div class="md-form-group"> <input class='md-input' id='txttelephone_no' ng-model='customerManager.editedCustomer.telephone_no' required><label class='non-select'>Telephone No</label></div>
<div class="md-form-group"> <input class='md-input' id='txtaddress' ng-model='customerManager.editedCustomer.address' required><label class='non-select'>Address</label></div>
<div class="md-form-group"> <input class='md-input' id='txtestablishment' ng-model='customerManager.editedCustomer.establishment' required><label class='non-select'>Establishment</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtcustomer_name' ng-model='customerManager.editedCustomer.customer_name' required><label class='non-select'>Customer Name</label></div>
<div class="md-form-group"> <input class='md-input' id='txtemail' ng-model='customerManager.editedCustomer.email' required><label class='non-select'>Email</label></div>
<div class="md-form-group"> <input class='md-input' id='txtcompany_type' ng-model='customerManager.editedCustomer.company_type' required><label class='non-select'>Company Type</label></div>
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
      <label for="txtLogo" class="col-sm-4 control-label">Logo</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtLogo" ng-model="editedCustomer.logo">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCustomerName" class="col-sm-4 control-label">Customer Name</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCustomerName" ng-model="editedCustomer.customer_name">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtTelephoneNo" class="col-sm-4 control-label">Telephone No</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtTelephoneNo" ng-model="editedCustomer.telephone_no">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtEmail" class="col-sm-4 control-label">Email</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtEmail" ng-model="editedCustomer.email">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAddress" class="col-sm-4 control-label">Address</label>
        <div class="col-sm-7">
            
        	 			<textarea class="form-control" id="txtAddress" ng-model="editedCustomer.address">
            </textarea>
                    
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCompanyType" class="col-sm-4 control-label">Company Type</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCompanyType" ng-model="editedCustomer.company_type">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtEstablishment" class="col-sm-4 control-label">Establishment</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtEstablishment" ng-model="editedCustomer.establishment">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->