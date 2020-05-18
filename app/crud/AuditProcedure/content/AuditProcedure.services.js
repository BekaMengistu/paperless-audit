(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditProcedureService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditProcedureService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditProcedureService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditProcedureService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditProcedureService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AuditProcedureManager",["AuditProcedureService","DataImportManager",
		function(AuditProcedureService,DataImportManager){
		
		
		function AuditProcedureManager(options)
		{
			this.audit_procedureList=[{}];
			this.editedAuditProcedure="";
		}
		AuditProcedureManager.prototype.editPath={url:"app.crud.audit_procedureEdit",id:"audit_procedure_id"};
		AuditProcedureManager.prototype.listPath={url:"app.crud.audit_procedure"};
		
		AuditProcedureManager.prototype.formData={
				 	list:{title:"Audit Procedures"
                    		,subTitle:"List of Audit Procedures"
                            ,prefix:"audit_procedure",headerStyle:"dker"}
                            
					,detail:{title:"Audit Procedure Detail"
                    	,subTitle:"Edit Audit Procedure"
                        ,prefix:"audit_procedure",headerStyle:"dker"}
					}
		AuditProcedureManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_proceduresList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_procedure";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AuditProcedureManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditProcedureManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditProcedureManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditProcedureManager.prototype.saveItem=function(item)
		{
			var _AuditProcedureManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditProcedureManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditProcedureManager.prototype.loadData=function(id)
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
		
		AuditProcedureManager.prototype.save=function(item)
		{
			 return AuditProcedureService.save(item);
		}
		
		AuditProcedureManager.prototype.newAuditProcedure=function()
		{
			return this.editedAuditProcedure={}
		}
        
		AuditProcedureManager.prototype.newItem=function()
		{
			return AuditProcedureService.readNew({});
		}

		AuditProcedureManager.prototype.readDetail=function(id)
		{
			return AuditProcedureService.readDetailById(id);
		}
        
        AuditProcedureManager.prototype.loadNew=function(params)
		{
			var _AuditProcedureManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditProcedureManager.editedAuditProcedure=sr});
		}
        
		AuditProcedureManager.prototype.loadDetail=function(id)
		{
			var _AuditProcedureManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditProcedureManager.editedAuditProcedure=sr});
		}
		
		AuditProcedureManager.prototype.readList=function()
		{
			return AuditProcedureService.readAll();
		}
		
		AuditProcedureManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_procedureManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_procedureManager.audit_proceduresList=sr; return sr;});
		}
		
		AuditProcedureManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditProcedureManager=this;
	 		AuditProcedureService.delete(id)
			.then(_AuditProcedureManager.readList)
	 		.then(function(sr){_AuditProcedureManager.audit_proceduresList=sr});
     	}
		var AuditProcedureManagerFactory={
        	create:function(options)
            	{
                	var _AuditProcedureManager=new AuditProcedureManager(options);
					for(var i in options)
					{
						_AuditProcedureManager[i]=options[i];
					}
					_AuditProcedureManager.buildUploader();
					return _AuditProcedureManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditProcedureManager Factory");
		return AuditProcedureManagerFactory;
		
		}])
             
 }(window.angular));