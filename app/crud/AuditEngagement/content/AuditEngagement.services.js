(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditEngagementService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditEngagementService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditEngagementService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditEngagementService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditEngagementService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AuditEngagementManager",["AuditEngagementService","DataImportManager",
		function(AuditEngagementService,DataImportManager){
		
		
		function AuditEngagementManager(options)
		{
			this.audit_engagementList=[{}];
			this.editedAuditEngagement="";
		}
		AuditEngagementManager.prototype.editPath={url:"app.crud.audit_engagementEdit",id:"audit_engagement_id"};
		AuditEngagementManager.prototype.listPath={url:"app.crud.audit_engagement"};
		
		AuditEngagementManager.prototype.formData={
				 	list:{title:"Audit Engagements"
                    		,subTitle:"List of Audit Engagements"
                            ,prefix:"audit_engagement",headerStyle:"dker"}
                            
					,detail:{title:"Audit Engagement Detail"
                    	,subTitle:"Edit Audit Engagement"
                        ,prefix:"audit_engagement",headerStyle:"dker"}
					}
		AuditEngagementManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_engagementsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_engagement";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AuditEngagementManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditEngagementManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditEngagementManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditEngagementManager.prototype.saveItem=function(item)
		{
			var _AuditEngagementManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditEngagementManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditEngagementManager.prototype.loadData=function(id)
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
		
		AuditEngagementManager.prototype.save=function(item)
		{
			 return AuditEngagementService.save(item);
		}
		
		AuditEngagementManager.prototype.newAuditEngagement=function()
		{
			return this.editedAuditEngagement={}
		}
        
		AuditEngagementManager.prototype.newItem=function()
		{
			return AuditEngagementService.readNew({});
		}

		AuditEngagementManager.prototype.readDetail=function(id)
		{
			return AuditEngagementService.readDetailById(id);
		}
        
        AuditEngagementManager.prototype.loadNew=function(params)
		{
			var _AuditEngagementManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditEngagementManager.editedAuditEngagement=sr});
		}
        
		AuditEngagementManager.prototype.loadDetail=function(id)
		{
			var _AuditEngagementManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditEngagementManager.editedAuditEngagement=sr});
		}
		
		AuditEngagementManager.prototype.readList=function()
		{
			return AuditEngagementService.readAll();
		}
		
		AuditEngagementManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_engagementManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_engagementManager.audit_engagementsList=sr; return sr;});
		}
		
		AuditEngagementManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditEngagementManager=this;
	 		AuditEngagementService.delete(id)
			.then(_AuditEngagementManager.readList)
	 		.then(function(sr){_AuditEngagementManager.audit_engagementsList=sr});
     	}
		var AuditEngagementManagerFactory={
        	create:function(options)
            	{
                	var _AuditEngagementManager=new AuditEngagementManager(options);
					for(var i in options)
					{
						_AuditEngagementManager[i]=options[i];
					}
					_AuditEngagementManager.buildUploader();
					return _AuditEngagementManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditEngagementManager Factory");
		return AuditEngagementManagerFactory;
		
		}])
             
 }(window.angular));