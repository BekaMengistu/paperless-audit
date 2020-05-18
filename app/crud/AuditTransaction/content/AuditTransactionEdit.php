
<div class="padding" bm-ui-permission="app.crud.audit_transaction.edit" login-user="app.loginUser">
    <div class="box">
        <div class="box-header {{audit_transactionManager.formData.detail.headerStyle}} non-select">
            <h2>{{audit_transactionManager.formData.detail.title}}</h2>
            <small>{{audit_transactionManager.formData.detail.subTitle}}</small>
        </div>
        <div class="box-tool">
            <button uib-tooltip="Save" ng-click="audit_transactionManager.saveItem(audit_transactionManager.editedAuditTransaction)"
                    	class="btn btn-primary btn-sm"><i class="fa fa-floppy-o"></i></button>
            &nbsp;
            <button uib-tooltip="To List" ng-click="audit_transactionManager.showList()"
                    	class="btn btn-default btn-sm"><i class="fa fa-arrow-left"></i></button>
            &nbsp;  &nbsp;  &nbsp;
        </div>
        <div class="box-body ">
            <form>
                <div class="row row-sm">
                    <div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtparent_code' ng-model='audit_transactionManager.editedAuditTransaction.parent_code' required><label class='non-select'>Parent Code</label></div>
<div class="md-form-group"> <input class='md-input' id='txttxn_date' ng-model='audit_transactionManager.editedAuditTransaction.txn_date' required><label class='non-select'>Txn Date</label></div>
<div class="md-form-group"> <input class='md-input' id='txtjrnl' ng-model='audit_transactionManager.editedAuditTransaction.jrnl' required><label class='non-select'>Jrnl</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdebit' ng-model='audit_transactionManager.editedAuditTransaction.debit' required><label class='non-select'>Debit</label></div>
<div class="md-form-group"> <input class='md-input' id='txtbalance' ng-model='audit_transactionManager.editedAuditTransaction.balance' required><label class='non-select'>Balance</label></div>
</div>
<div class="col-sm-6"><div class="md-form-group"> <input class='md-input' id='txtaudit_id' ng-model='audit_transactionManager.editedAuditTransaction.audit_id' required><label class='non-select'>Audit Id</label></div>
<div class="md-form-group"> <input class='md-input' id='txtreference' ng-model='audit_transactionManager.editedAuditTransaction.reference' required><label class='non-select'>Reference</label></div>
<div class="md-form-group"> <input class='md-input' id='txtdescription' ng-model='audit_transactionManager.editedAuditTransaction.description' required><label class='non-select'>Description</label></div>
<div class="md-form-group"> <input class='md-input' id='txtcredit' ng-model='audit_transactionManager.editedAuditTransaction.credit' required><label class='non-select'>Credit</label></div>
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
      <label for="txtParentCode" class="col-sm-4 control-label">Parent Code</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtParentCode" ng-model="editedAuditTransaction.parent_code">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtAuditId" class="col-sm-4 control-label">Audit Id</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtAuditId" ng-model="editedAuditTransaction.audit_id">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtTxnDate" class="col-sm-4 control-label">Txn Date</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtTxnDate" ng-model="editedAuditTransaction.txn_date">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtReference" class="col-sm-4 control-label">Reference</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtReference" ng-model="editedAuditTransaction.reference">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtJrnl" class="col-sm-4 control-label">Jrnl</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtJrnl" ng-model="editedAuditTransaction.jrnl">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDescription" class="col-sm-4 control-label">Description</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDescription" ng-model="editedAuditTransaction.description">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtDebit" class="col-sm-4 control-label">Debit</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtDebit" ng-model="editedAuditTransaction.debit">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtCredit" class="col-sm-4 control-label">Credit</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtCredit" ng-model="editedAuditTransaction.credit">
    		        
        </div>
    </div> 
    </div>
  <div class="col-md-6">
    <div class="form-group">
      <label for="txtBalance" class="col-sm-4 control-label">Balance</label>
        <div class="col-sm-7">
            
        	    		<input type="text" class="form-control" id="txtBalance" ng-model="editedAuditTransaction.balance">
    		        
        </div>
    </div> 
    </div>


          
</form>
-->