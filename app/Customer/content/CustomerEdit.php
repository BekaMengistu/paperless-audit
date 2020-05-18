<style>
    .grid-editor tbody tr td {padding-bottom: 0;}
    .grid-editor .md-input, .grid-editor input {borders-bottom: none;}
</style>
<div class="padding" bm-ui-permission="app.customer.edit_detail" login-user="app.loginUser">
    <form class="md" name="editCustomerForm" ng-submit="onSaveClick()">
        <div styles="text-align:right" class="pull-right">
            <button type="submit" ngs-click="onSaveClick()" class="btn btn-primary" ngs-disabled="editCustomerForm.$invalid">
                <i class="fa fa-floppy-o"></i>
            </button>
        </div>
        <div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-4">
                    <div class="form-file" style="text-align:center;" ng-if="customerManager.uploaderBuilt">
                    <img ng-src="files/uploads/{{customerManager.editedCustomer.logo}}" class="w-128 circle" style="height:128px; width:128px; border:solid 3px #BBB;">
                    <div class="form-files" style="width:128px;height:128px; margin:auto; margin-top:-128px;position:relative; cursor:help;borders:solid 1px #000;border-radius:50%;">
                        <input type="file" style="width:128px;height:128px;cursor:pointer;opacity:0.0; borders:solid 1px #C30;position:absolute;left:0;" nv-file-select="" uploader="customerManager.uploader">
                    </div>
                </div>
                    </div>
                    <div class="col-md-8">
                        <div class="md-form-group">
                            <input class='md-input' ng-model='customerManager.editedCustomer.customer_name' ng-pattern-restrict="^[A-Za-z0-9_-\s\.]*$" required>
                            <label>* Customer Name</label>
                        </div>
                            
                        <div class="md-form-group">
                            <input class="md-input" ng-model="customerManager.editedCustomer.general_manager" ng-pattern-restrict="^[A-Za-z0-9_-\s\.]*$" />
                            <label>General Manager</label>
                        </div>
                              
                    </div>
                </div>
                <div class="rows p-t" >
                    <div class="md-form-group">
                            <select class='md-input' ng-model="customerManager.editedCustomer.company_type" ng-options="opt.audit_company_type_id as opt.name for opt in companyTypesLookup" required>
                            </select>
                            <label>* Company Type</label>
                        </div>
                <div class="md-form-group">
                            <textarea class='md-input' id='txtestablishment' ng-model='customerManager.editedCustomer.establishment' rows="4"></textarea>
                            <label>Establishment</label>
                        </div>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <fieldset>
                    <legend>&nbsp;Contact Information&nbsp;</legend>
                    <!--{{customerManager.editedCustomer.extra}}-->
                    <div class="p-x p-b">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="md-form-group">
                                    <textarea class='md-input' id='txtaddress' ng-model='customerManager.editedCustomer.address' rows="8" required="required"></textarea>
                                    <label>* Address</label>
                                    <!--
                                    {{customerManager.editedCustomer.extra}}-->
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form-group">
                                    <input class='md-input' id='txt_telephone' ng-model='customerManager.editedCustomer.telephone_no'>
                                    <br/>&nbsp;
                                    <input class='md-input' ng-model='customerManager.editedCustomer.extra.telephone_no[0]'>
                                    <label>Telephone</label>
                                </div>
                                <div class="md-form-group">
                                    <input class='md-input' id='txtemail' ng-model='customerManager.editedCustomer.email'>
                                    <br/>&nbsp;
                                    <input class='md-input' ng-model='customerManager.editedCustomer.extra.email[0]'>
                                    <label>Email</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </fieldset>
            </div>
        </div>
        <div class="row p-t">
            <div class="col-md-6">
                <fieldset class="ng-scope">
                    <legend style="">&nbsp;Business Information&nbsp;</legend>
                    <div class="p-x p-b">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="md-form-group">
                                    <input class="md-input" ng-model="customerManager.editedCustomer.tin" required="required">
                                    <label>* TIN</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form-group">
                                    <input class="md-input" id="txtemail" ng-model="customerManager.editedCustomer.vat_reg_no">
                                    <label>VAT</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="md-form-group">
                                    <input class="md-input" ng-model="customerManager.editedCustomer.commercial_registratio_no" required="">
                                    <label>* Commercial Reg. No</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="md-form-group">
                                    <input class="md-input" ng-model="customerManager.editedCustomer.commercial_reg_issued_by">
                                    <!--<select ng-options="opt.description as opt.name for opt in customLookups.licensing_agency" class="md-input" 
                                            ng-model="customerManager.editedCustomer.commercial_reg_issued_by" >
                                    </select>-->
                                    <label>Issued By</label>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class="p-x p-t dker"><strong> Business Licence (S)</strong></div>
                        
                        <table class="table table-condensed grid-editor">
                        <thead>
                            <tr class="dker"><td></td><td>#</td><th>No.</th><th>Issued By</th><th>Issue Date</th></tr>
                        </thead>
                        <tbody>
                            <tr  ng-show="!customerManager.editedCustomer.extra.business_license.length">
                                <td colspan="4" class="p-a text-sm">
                                    No record. Enter  information below and click the 
                                    <labe class="label info"><i class="fa fa-plus"></i> </labe>
                                    button.</td>
                            </tr>
                            <tr class="hover-shadow hover-target" ng-repeat="item in customerManager.editedCustomer.extra.business_license track by $index">
                                <td>
                                    <span class="hover-show">
                                    <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
                                            ng-click="deleteExtraRow('business_license',$index)"> 
                                	<i class="fa fa-trash-o"></i> 
                                 </button>
                                        </span>
                                </td>
                                <td>{{$index+1}}</td>
                                <td><input class="md-input" ng-model="item.no"></td>
                                <td>
                                    <input class="md-input" ng-model="item.issued_by"/>
                                </td>
                                <td>
                                <input type="text" size="8" class="md-input" 
                  ng-model="item.issued_date" 
                  data-autoclose="0" 
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                                </td>
                                
                                
                            </tr>
                            <tr>
                                
                                <td class="p-t-md">
                                    <button class="btn btn-info btn-sm" ng-click="addExtraRow('business_license',newLicense)"><i class="fa fa-plus"></i></button>
                                </td>
                                <td></td>
                                <td class="p-t-md"><input class="md-input" ng-model="newLicense.no"></td>
                                <td class="p-t-md">
                                    <input ng-model="newLicense.issued_by" class="md-input"/>
                                </td>
                                <td class="p-t-md">
                                <input type="text" size="8" class="md-input" 
                  ng-model="newLicense.issued_date" 
                  data-autoclose="0" 
                  data-icon-left="fa fa-chevron-left" 
                  data-icon-right="fa fa-chevron-right" 
                  bs-datepicker>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        
                        
                </fieldset>
            </div>
            <div class="col-md-6">
                <fieldset class="ng-scope">
                    <legend style="">&nbsp;Shareholder Information&nbsp;</legend>
                    <table class="table table-condensed grid-editor">
                        <thead>
                            <tr class="dker"><td></td><td>#</td><th>Name</th><th>Nationality</th><th>No. of Shares</th><th>Par Value</th><th>Total</th></tr>
                        </thead>
                        <tbody>
                            <tr  ng-show="!customerManager.editedCustomer.extra.shareholders.length">
                                <td colspan="6" class="p-a text-sm">
                                    No record. Enter information below and click the 
                                    <labe class="label info"><i class="fa fa-plus"></i> </labe>
                                    button.</td>
                            </tr>
                            <tr class="hover-shadow hover-target" ng-repeat="item in customerManager.editedCustomer.extra.shareholders track by $index">
                                <td>
                                    <span class="hover-show">
                                    <button uib-tooltip="Delete" class="btn btn-danger  btn-xs" 
                                            ng-click="deleteExtraRow('shareholders',$index);calculateShareTotal()"> 
                                	<i class="fa fa-trash-o"></i> 
                                 </button>
                                        </span>
                                </td>
                                <td>{{$index+1}}</td>
                                <td><input class="md-input" ng-model="item.name"></td>
                                <td><input class="md-input" ng-model="item.nationality"></td>
                                <td><input class="md-input" ng-model="item.shares" ng-change="calculateShareTotal(item)"></td>
                                <td><input class="md-input" ng-model="item.par_value" ng-change="calculateShareTotal(item)"></td>
                                <td class="number">
                                    {{item.total|number:2}}
                                </td>
                                
                            </tr>
                            <tr ng-show="customerManager.editedCustomer.extra.shareholders.length">
                                <td colspan="6" class="p-t text-right">Total</td>
                                <td class="p-t text-right">{{customerManager.editedCustomer.extra.shareTotal|number:2}} </td>
                            </tr>
                            <tr>
                                <td class="p-t-md">
                                    <button class="btn btn-info btn-sm" ng-click="addShareholder(newShareholder)"><i class="fa fa-plus"></i></button>
                                </td>
                                <td></td>
                                <td class="p-t-md"><input class="md-input" ng-model="newShareholder.name"></td>
                                <td class="p-t-md"><input class="md-input" ng-model="newShareholder.nationality"></td>
                                <td class="p-t-md"><input class="md-input" ng-model="newShareholder.shares"></td>
                                <td class="p-t-md"><input class="md-input" ng-model="newShareholder.par_value"></td>
                                <td class="p-t-md"></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>
        </div>
        
        
        
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
</div>
<!--ng-options="opt.description as opt.name for opt in customLookups.licensing_agency"-->