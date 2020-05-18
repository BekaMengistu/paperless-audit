(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditAccountGroupingService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditAccountGroupingService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditAccountGroupingService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditAccountGroupingService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditAccountGroupingService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
            ,export:function(type,id){return excuteService($q,$http,"api/DataImportExportService/exportTable/" + type + "/" + id, {},"get");}
			};
	})	
	.factory("AuditAccountGroupingManager",["AuditAccountGroupingService","DataImportManager","$window",
		function(AuditAccountGroupingService,DataImportManager,$window){
		
		
		function AuditAccountGroupingManager(options)
		{
			this.audit_account_groupingList=[{}];
			this.editedAuditAccountGrouping="";
		}
		AuditAccountGroupingManager.prototype.editPath={url:"app.crud.audit_account_groupingEdit",id:"audit_account_grouping_id"};
		AuditAccountGroupingManager.prototype.listPath={url:"app.crud.audit_account_grouping"};
		
		AuditAccountGroupingManager.prototype.formData={
				 	list:{title:"Audit Account Groupings"
                    		,subTitle:"List of Audit Account Groupings"
                            ,prefix:"audit_account_grouping",headerStyle:"dker"}
                            
					,detail:{title:"Audit Account Grouping Detail"
                    	,subTitle:"Edit Audit Account Grouping"
                        ,prefix:"audit_account_grouping",headerStyle:"dker"}
					}
		AuditAccountGroupingManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_account_groupingsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_account_grouping";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        AuditAccountGroupingManager.prototype.export=function(type)
		{
            AuditAccountGroupingService.export(type,"audit_account_grouping")
           .then(function(sr){$window.location.href=sr.filePath;});
		}
        
		AuditAccountGroupingManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditAccountGroupingManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditAccountGroupingManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditAccountGroupingManager.prototype.saveItem=function(item)
		{
			var _AuditAccountGroupingManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditAccountGroupingManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditAccountGroupingManager.prototype.loadData=function(id)
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
		
		AuditAccountGroupingManager.prototype.save=function(item)
		{
			 return AuditAccountGroupingService.save(item);
		}
		
		AuditAccountGroupingManager.prototype.newAuditAccountGrouping=function()
		{
			return this.editedAuditAccountGrouping={}
		}
        
		AuditAccountGroupingManager.prototype.newItem=function()
		{
			return AuditAccountGroupingService.readNew({});
		}

		AuditAccountGroupingManager.prototype.readDetail=function(id)
		{
			return AuditAccountGroupingService.readDetailById(id);
		}
        
        AuditAccountGroupingManager.prototype.loadNew=function(params)
		{
			var _AuditAccountGroupingManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditAccountGroupingManager.editedAuditAccountGrouping=sr});
		}
        
		AuditAccountGroupingManager.prototype.loadDetail=function(id)
		{
			var _AuditAccountGroupingManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditAccountGroupingManager.editedAuditAccountGrouping=sr});
		}
		
		AuditAccountGroupingManager.prototype.readList=function()
		{
			return AuditAccountGroupingService.readAll();
		}
		
		AuditAccountGroupingManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_account_groupingManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_account_groupingManager.audit_account_groupingsList=sr; return sr;});
		}
		
		AuditAccountGroupingManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditAccountGroupingManager=this;
	 		AuditAccountGroupingService.delete(id)
			.then(_AuditAccountGroupingManager.readList)
	 		.then(function(sr){_AuditAccountGroupingManager.audit_account_groupingsList=sr});
     	}
		var AuditAccountGroupingManagerFactory={
        	create:function(options)
            	{
                	var _AuditAccountGroupingManager=new AuditAccountGroupingManager(options);
					for(var i in options)
					{
						_AuditAccountGroupingManager[i]=options[i];
					}
					_AuditAccountGroupingManager.buildUploader();
					return _AuditAccountGroupingManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditAccountGroupingManager Factory");
		return AuditAccountGroupingManagerFactory;
		
		}])
             
 }(window.angular));