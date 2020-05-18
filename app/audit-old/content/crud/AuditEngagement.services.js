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
			};
	})	
	.factory("AuditEngagementManager",["AuditEngagementService",
		function(AuditEngagementService){
		
		
		function AuditEngagementManager(options)
		{
			this.audit_engagementList=[{}];
			this.editedAuditEngagement="";
		}
		AuditEngagementManager.prototype.editPath={url:"app.crud.audit_engagementEdit",id:"audit_engagement_id"};
		AuditEngagementManager.prototype.listPath={url:"app.crud.audit_engagement"};
		
		AuditEngagementManager.prototype.formData={
				 	list:{title:"Audit Engagements",subTitle:"List of Audit Engagements",prefix:"audit_engagement",headerStyle:""}
					,detail:{title:"Audit Engagement Detail",subTitle:"Edit Audit Engagement",prefix:"audit_engagement",headerStyle:"dker"}
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
					this.loadList();
				}
				else if(id/1)
				{
					this.loadDetail(id);
				}
				else if(id==0)
				{
					this.newAuditEngagement();
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
		
		AuditEngagementManager.prototype.readDetail=function(id)
		{
			return AuditEngagementService.readDetailById(id);
		}
		AuditEngagementManager.prototype.loadDetail=function(id)
		{
			var _AuditEngagementManager=this;
			return this.readDetail(id)
	 		.then(function(sr){_AuditEngagementManager.editedAuditEngagement=sr});
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
	 		.then(function(sr){_audit_engagementManager.audit_engagementsList=sr; return sr;});
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
		var AuditEngagementManagerFactory={create:function(options){return new AuditEngagementManager(options)}};
		//console.log("/n-----------------------------------------------AuditEngagementManager Factory");
		return AuditEngagementManagerFactory;
		
		}])
             
 }(window.angular));