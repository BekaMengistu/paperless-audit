(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditFindingService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditFindingService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditFindingService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditFindingService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditFindingService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AuditFindingManager",["AuditFindingService","DataImportManager",
		function(AuditFindingService,DataImportManager){
		
		
		function AuditFindingManager(options)
		{
			this.audit_findingList=[{}];
			this.editedAuditFinding="";
		}
		AuditFindingManager.prototype.editPath={url:"app.crud.audit_findingEdit",id:"audit_finding_id"};
		AuditFindingManager.prototype.listPath={url:"app.crud.audit_finding"};
		
		AuditFindingManager.prototype.formData={
				 	list:{title:"Audit Findings"
                    		,subTitle:"List of Audit Findings"
                            ,prefix:"audit_finding",headerStyle:"dker"}
                            
					,detail:{title:"Audit Finding Detail"
                    	,subTitle:"Edit Audit Finding"
                        ,prefix:"audit_finding",headerStyle:"dker"}
					}
		AuditFindingManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_findingsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_finding";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AuditFindingManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditFindingManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditFindingManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditFindingManager.prototype.saveItem=function(item)
		{
			var _AuditFindingManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditFindingManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditFindingManager.prototype.loadData=function(id)
		{
			if(id=="list")
				{
					return this.loadList();
				}
                else if(id==0)
				{
					return this.loadNew();
				}
				else
				{
					return this.loadDetail(id);
				}
				
		}
		
		AuditFindingManager.prototype.save=function(item)
		{
			 return AuditFindingService.save(item);
		}
		
		AuditFindingManager.prototype.newAuditFinding=function()
		{
			return this.editedAuditFinding={}
		}
        
		AuditFindingManager.prototype.newItem=function()
		{
			return AuditFindingService.readNew({});
		}

		AuditFindingManager.prototype.readDetail=function(id)
		{
			return AuditFindingService.readDetailById(id);
		}
        
        AuditFindingManager.prototype.loadNew=function(params)
		{
			var _AuditFindingManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditFindingManager.editedAuditFinding=sr});
		}
        
		AuditFindingManager.prototype.loadDetail=function(id)
		{
			var _AuditFindingManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditFindingManager.editedAuditFinding=sr});
		}
		
		AuditFindingManager.prototype.readList=function()
		{
			return AuditFindingService.readAll();
		}
		
		AuditFindingManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_findingManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_findingManager.audit_findingsList=sr; return sr;});
		}
		
		AuditFindingManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditFindingManager=this;
	 		AuditFindingService.delete(id)
			.then(_AuditFindingManager.readList)
	 		.then(function(sr){_AuditFindingManager.audit_findingsList=sr});
     	}
		var AuditFindingManagerFactory={
        	create:function(options)
            	{
                	var _AuditFindingManager=new AuditFindingManager(options);
					for(var i in options)
					{
						_AuditFindingManager[i]=options[i];
					}
					_AuditFindingManager.buildUploader();
					return _AuditFindingManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditFindingManager Factory");
		return AuditFindingManagerFactory;
		
		}])
             
 }(window.angular));