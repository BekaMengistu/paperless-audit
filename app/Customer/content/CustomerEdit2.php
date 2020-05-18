<div class="padding" bm-ui-permission="app.customer.edit_detail" login-user="app.loginUser">
	<form class="md">
		<div bm-hook-view view-name="customer.edit" app-manager="app.Manager">
		</div>
		<div class="row row-sm">
			<div class="col-md-4">
				<div class="form-file" style="text-align:center;" ngs-if="customerManager.uploaderBuilt">
					<img ng-src="files/uploads/{{customerManager.editedItem.logo}}" class="w-96 circle ">
					<div class="form-files hover-shadow image-upload-container w-96">
						<input type="file" class="input-file"  nvs-file-select="" uploaders="customerManager.uploader">
					</div>
				</div>
			</div>
			<div class="col-md-8">
				<div class="row">
					<div class="col-md-6">
						<div class="md-form-group">
							<input class='md-input' id='txtcustomer_name' ng-model='customerManager.editedItem.customer_name' required>
							<label>Customer Name</label>
						</div>
					</div>
					<div class="col-md-6">
						<div class="md-form-group">
							<select class='md-input' ng-model="customerManager.editedItem.company_type" 
                        	ng-options="opt.value as opt.label for opt in app.Manager.LookupManager.lookups.CompanyType">
							</select>
							<label>Company Type</label>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="md-form-group">
							<input class='md-input' id='txt_telephone' ng-model='customerManager.editedItem.telephone_no' required>
							<label>Telephone</label>
						</div>
					</div>
					<div class="col-md-6">
						<div class="md-form-group">
							<input class='md-input' id='txtemail' ng-model='customerManager.editedItem.email' required>
							<label>Email</label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row m-t">
			<div ng-repeat="v in app.Manager.HooksManager.allHooks['customer.edit']" ng-init="v.width=(v.width*1)?v.width:6" class="col-md-{{v.width}}" ng-if="v.view" ng-include="v.view">
				{{v}}
			</div>
		</div>
		<div class="row row-sm">
			<div class="col-sm-6">
				<div class="md-form-group">
					<textarea class='md-input' id='txtaddress' ng-model='customerManager.editedItem.address' rows="8"></textarea>
					<label>Address</label>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="md-form-group">
					<textarea class='md-input' id='txtestablishment' ng-model='customerManager.editedItem.establishment' rows="8"></textarea>
					<label>Establishment</label>
				</div>
			</div>
		</div>
	</form>
</div>
