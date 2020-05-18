<?php //include("CustomerTabNav.php");?>
<style>
	
</style>
    <div class="box nav-active-border b-info">
    	<div class="pull-right p-t p-r">
        	<button ng-show="$state.current.data.showSaves" uib-tooltip="Save" 
            	ng-disabled="!customerManager.editedCustomer.customer_name" 
                ng-click="customerManager.saveItem(customerManager.editedCustomer)" class="btn btn-primary btn-sm">
                	<i class="fa fa-floppy-o"></i>
            </button> &nbsp;
        	
            <a class="btn btn-default btn-sm" uib-tooltip="Back to List" ui-sref="app.customer.list" 
            	bm-ui-permission="app.customer.viewlist" login-user="app.loginUser" bm-app="app">
            	<i class="fa fa-arrow-left"></i>
            </a>
           
             &nbsp;
              &nbsp;  &nbsp;  &nbsp;
        </div>
        <ul class="nav nav-md p-l">
            <li class="nav-item inline" bm-ui-permission="app.customer.edit_detail" login-user="app.loginUser" bm-app="app"> 
            	<a class="nav-link" ui-sref-active="active" ui-sref="app.customer.detail.edit"> 
                	<span class="text-md">Customer Detail</span> <small class="block text-muted hidden-xs">Edit Customer Detail</small> 
                </a> 
            </li>
            <li class="nav-item inline" ng-show="(customer_id/1)!=0"> 
            	<a class="nav-link" ui-sref-active="active" ui-sref="app.customer.detail.documents"> 
                	<span class="text-md">Documents</span> <small class="block text-muted hidden-xs">Manage Customer Documents</small> 
                </a> 
            </li>
            <li class="nav-item inline" ng-show="(customer_id/1)!=0">  
            	<a class="nav-link" ui-sref-active="active" ui-sref="app.customer.detail.audits"> 
                	<span class="text-md">Audit Engagements</span> <small class="block text-muted hidden-xs">Brows Audits done for this customer</small> 
                </a> 
            </li>
            
        </ul>
        
        <div class="b-t  b-info clear"  ui-view >
		</div>
    </div>

