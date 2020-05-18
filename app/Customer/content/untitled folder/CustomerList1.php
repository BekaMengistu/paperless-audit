
<div class="padding">
	<div class="box">
    	<div class="box-header">
			
            <div class="pull-right">
            	<a class="btn btn-default"  ui-sref="app.customerdetail({id:0})">New</a>
                
              Search: <input id="filter_Customer" type="text" class="form-control input-sm w-auto inline m-r"/>
            </div> 
            
			<h2>Customer</h2>
			<small>Here are the list of Customers</small>
        </div>
        <div class="box-body">
                   
		<div class="table-responsive">
		<table class="table m-b-none" ui-jp="footable" data-filter="#filter_Customer" data-page-size="5">
        <thead>
          <tr>
          	<td></td>
            <td style="width:150px;"></td> 
            
    <th >Name</th><th >Telephone No</th><th >Email</th><th >Address</th>    
    </tr>
    </thead>
        <tbody>
    <tr ng-repeat="item in CustomerList">
    	
 		<td></td>
        <td>
         	<a class="btn btn-info btn-xs" href=""  ui-sref="app.customerdetail({id:item.customer_id})">
            	<i class="fa fa-pencil"></i>
            </a>
            <button class="btn btn-danger  btn-xs" ng-click="deleteCustomer(item.customer_id)">
                <i class="fa fa-trash-o"></i>
            </button>
        </td>

            <td>{{item.customer_name}}</td>
        <td>{{item.telephone_no}}</td>
        <td>{{item.email}}</td>
        <td>{{item.address}}</td>
            
        
    </tr>
    </tbody>
        <tfoot class="hide-if-no-paging">
          <tr>
              <td colspan="5" class="text-center">
                  <ul class="pagination"></ul>
              </td>
          </tr>
        </tfoot>
    
</table>
</div>
		</div>

  </div>
</div>



