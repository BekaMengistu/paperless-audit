(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditClientTrialbalanceService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditClientTrialbalanceService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditClientTrialbalanceService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditClientTrialbalanceService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditClientTrialbalanceService/delete/" + id, {},"delete");}
			};
	})	
	.factory("AuditClientTrialbalanceManager",["AuditClientTrialbalanceService","DataImportManager",
		function(AuditClientTrialbalanceService,DataImportManager){
		
		
		function AuditClientTrialbalanceManager(options)
		{
			this.audit_client_trialbalanceList=[{}];
			this.editedAuditClientTrialbalance="";
		}
		AuditClientTrialbalanceManager.prototype.editPath={url:"app.crud.audit_client_trialbalanceEdit",id:"audit_client_trialbalance_id"};
		AuditClientTrialbalanceManager.prototype.listPath={url:"app.crud.audit_client_trialbalance"};
		
		AuditClientTrialbalanceManager.prototype.formData={
				 	list:{title:"Audit Client Trialbalances",subTitle:"List of Audit Client Trialbalances",prefix:"audit_client_trialbalance",headerStyle:""}
					,detail:{title:"Audit Client Trialbalance Detail",subTitle:"Edit Audit Client Trialbalance",prefix:"audit_client_trialbalance",headerStyle:"dker"}
					}
		
		AuditClientTrialbalanceManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_client_trialbalancesList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_client_trialbalance";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
		AuditClientTrialbalanceManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditClientTrialbalanceManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditClientTrialbalanceManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditClientTrialbalanceManager.prototype.saveItem=function(item)
		{
			var _AuditClientTrialbalanceManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditClientTrialbalanceManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
		AuditClientTrialbalanceManager.prototype.loadData=function(id)
		{
			if(id=="list")
				{
					this.loadList();
				}
				else if(id/1)
				{
					this.loadDetail(id);
				}
				else if(id==0)
				{
					this.newAuditClientTrialbalance();
				}
		}
		
		AuditClientTrialbalanceManager.prototype.save=function(item)
		{
			 return AuditClientTrialbalanceService.save(item);
		}
		
		AuditClientTrialbalanceManager.prototype.newAuditClientTrialbalance=function()
		{
			return this.editedAuditClientTrialbalance={}
		}
		
		AuditClientTrialbalanceManager.prototype.readDetail=function(id)
		{
			return AuditClientTrialbalanceService.readDetailById(id);
		}
		AuditClientTrialbalanceManager.prototype.loadDetail=function(id)
		{
			var _AuditClientTrialbalanceManager=this;
			return this.readDetail(id)
	 		.then(function(sr){_AuditClientTrialbalanceManager.editedAuditClientTrialbalance=sr});
		}
		
		AuditClientTrialbalanceManager.prototype.readList=function()
		{
			return AuditClientTrialbalanceService.readAll();
		}
		
		AuditClientTrialbalanceManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_client_trialbalanceManager=this;
			return this.readList()
	 		.then(function(sr){_audit_client_trialbalanceManager.audit_client_trialbalancesList=sr; return sr;});
		}
		
		AuditClientTrialbalanceManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditClientTrialbalanceManager=this;
	 		AuditClientTrialbalanceService.delete(id)
			.then(_AuditClientTrialbalanceManager.readList)
	 		.then(function(sr){_AuditClientTrialbalanceManager.audit_client_trialbalancesList=sr});
     	}
		var AuditClientTrialbalanceManagerFactory={create:function(options){return new AuditClientTrialbalanceManager(options)}};
		//console.log("/n-----------------------------------------------AuditClientTrialbalanceManager Factory");
		return AuditClientTrialbalanceManagerFactory;
		
		}])
             
 }(window.angular));