(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditTransactionService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditTransactionService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditTransactionService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditTransactionService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditTransactionService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AuditTransactionManager",["AuditTransactionService","DataImportManager",
		function(AuditTransactionService,DataImportManager){
		
		
		function AuditTransactionManager(options)
		{
			this.audit_transactionList=[{}];
			this.editedAuditTransaction="";
		}
		AuditTransactionManager.prototype.editPath={url:"app.crud.audit_transactionEdit",id:"audit_transaction_id"};
		AuditTransactionManager.prototype.listPath={url:"app.crud.audit_transaction"};
		
		AuditTransactionManager.prototype.formData={
				 	list:{title:"Audit Transactions"
                    		,subTitle:"List of Audit Transactions"
                            ,prefix:"audit_transaction",headerStyle:"dker"}
                            
					,detail:{title:"Audit Transaction Detail"
                    	,subTitle:"Edit Audit Transaction"
                        ,prefix:"audit_transaction",headerStyle:"dker"}
					}
		AuditTransactionManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_transactionsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_transaction";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AuditTransactionManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditTransactionManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditTransactionManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditTransactionManager.prototype.saveItem=function(item)
		{
			var _AuditTransactionManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditTransactionManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditTransactionManager.prototype.loadData=function(id)
		{
			if(id=="list")
				{
					return this.loadList();
				}
				else if(id/1)
				{
					return this.loadDetail(id);
				}
				else if(id==0)
				{
					return this.loadNew();
				}
		}
		
		AuditTransactionManager.prototype.save=function(item)
		{
			 return AuditTransactionService.save(item);
		}
		
		AuditTransactionManager.prototype.newAuditTransaction=function()
		{
			return this.editedAuditTransaction={}
		}
        
		AuditTransactionManager.prototype.newItem=function()
		{
			return AuditTransactionService.readNew({});
		}

		AuditTransactionManager.prototype.readDetail=function(id)
		{
			return AuditTransactionService.readDetailById(id);
		}
        
        AuditTransactionManager.prototype.loadNew=function(params)
		{
			var _AuditTransactionManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditTransactionManager.editedAuditTransaction=sr});
		}
        
		AuditTransactionManager.prototype.loadDetail=function(id)
		{
			var _AuditTransactionManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditTransactionManager.editedAuditTransaction=sr});
		}
		
		AuditTransactionManager.prototype.readList=function()
		{
			return AuditTransactionService.readAll();
		}
		
		AuditTransactionManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_transactionManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_transactionManager.audit_transactionsList=sr; return sr;});
		}
		
		AuditTransactionManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditTransactionManager=this;
	 		AuditTransactionService.delete(id)
			.then(_AuditTransactionManager.readList)
	 		.then(function(sr){_AuditTransactionManager.audit_transactionsList=sr});
     	}
		var AuditTransactionManagerFactory={
        	create:function(options)
            	{
                	var _AuditTransactionManager=new AuditTransactionManager(options);
					for(var i in options)
					{
						_AuditTransactionManager[i]=options[i];
					}
					_AuditTransactionManager.buildUploader();
					return _AuditTransactionManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditTransactionManager Factory");
		return AuditTransactionManagerFactory;
		
		}])
             
 }(window.angular));