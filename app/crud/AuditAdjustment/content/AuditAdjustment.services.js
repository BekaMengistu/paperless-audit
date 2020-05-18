(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditAdjustmentService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditAdjustmentService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditAdjustmentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditAdjustmentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditAdjustmentService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AuditAdjustmentManager",["AuditAdjustmentService","DataImportManager",
		function(AuditAdjustmentService,DataImportManager){
		
		
		function AuditAdjustmentManager(options)
		{
			this.audit_adjustmentList=[{}];
			this.editedAuditAdjustment="";
		}
		AuditAdjustmentManager.prototype.editPath={url:"app.crud.audit_adjustmentEdit",id:"audit_adjustment_id"};
		AuditAdjustmentManager.prototype.listPath={url:"app.crud.audit_adjustment"};
		
		AuditAdjustmentManager.prototype.formData={
				 	list:{title:"Audit Adjustments"
                    		,subTitle:"List of Audit Adjustments"
                            ,prefix:"audit_adjustment",headerStyle:"dker"}
                            
					,detail:{title:"Audit Adjustment Detail"
                    	,subTitle:"Edit Audit Adjustment"
                        ,prefix:"audit_adjustment",headerStyle:"dker"}
					}
		AuditAdjustmentManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_adjustmentsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_adjustment";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AuditAdjustmentManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditAdjustmentManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditAdjustmentManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditAdjustmentManager.prototype.saveItem=function(item)
		{
			var _AuditAdjustmentManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditAdjustmentManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditAdjustmentManager.prototype.loadData=function(id)
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
		
		AuditAdjustmentManager.prototype.save=function(item)
		{
			 return AuditAdjustmentService.save(item);
		}
		
		AuditAdjustmentManager.prototype.newAuditAdjustment=function()
		{
			return this.editedAuditAdjustment={}
		}
        
		AuditAdjustmentManager.prototype.newItem=function()
		{
			return AuditAdjustmentService.readNew({});
		}

		AuditAdjustmentManager.prototype.readDetail=function(id)
		{
			return AuditAdjustmentService.readDetailById(id);
		}
        
        AuditAdjustmentManager.prototype.loadNew=function(params)
		{
			var _AuditAdjustmentManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditAdjustmentManager.editedAuditAdjustment=sr});
		}
        
		AuditAdjustmentManager.prototype.loadDetail=function(id)
		{
			var _AuditAdjustmentManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditAdjustmentManager.editedAuditAdjustment=sr});
		}
		
		AuditAdjustmentManager.prototype.readList=function()
		{
			return AuditAdjustmentService.readAll();
		}
		
		AuditAdjustmentManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_adjustmentManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_adjustmentManager.audit_adjustmentsList=sr; return sr;});
		}
		
		AuditAdjustmentManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditAdjustmentManager=this;
	 		AuditAdjustmentService.delete(id)
			.then(_AuditAdjustmentManager.readList)
	 		.then(function(sr){_AuditAdjustmentManager.audit_adjustmentsList=sr});
     	}
		var AuditAdjustmentManagerFactory={
        	create:function(options)
            	{
                	var _AuditAdjustmentManager=new AuditAdjustmentManager(options);
					for(var i in options)
					{
						_AuditAdjustmentManager[i]=options[i];
					}
					_AuditAdjustmentManager.buildUploader();
					return _AuditAdjustmentManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditAdjustmentManager Factory");
		return AuditAdjustmentManagerFactory;
		
		}])
             
 }(window.angular));