(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "AuditManagementLetterService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/AuditManagementLetterService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/AuditManagementLetterService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/AuditManagementLetterService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/AuditManagementLetterService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("AuditManagementLetterManager",["AuditManagementLetterService","DataImportManager",
		function(AuditManagementLetterService,DataImportManager){
		
		
		function AuditManagementLetterManager(options)
		{
			this.audit_management_letterList=[{}];
			this.editedAuditManagementLetter="";
		}
		AuditManagementLetterManager.prototype.editPath={url:"app.crud.audit_management_letterEdit",id:"audit_management_letter_id"};
		AuditManagementLetterManager.prototype.listPath={url:"app.crud.audit_management_letter"};
		
		AuditManagementLetterManager.prototype.formData={
				 	list:{title:"Audit Management Letters"
                    		,subTitle:"List of Audit Management Letters"
                            ,prefix:"audit_management_letter",headerStyle:"dker"}
                            
					,detail:{title:"Audit Management Letter Detail"
                    	,subTitle:"Edit Audit Management Letter"
                        ,prefix:"audit_management_letter",headerStyle:"dker"}
					}
		AuditManagementLetterManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.audit_management_lettersList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="audit_management_letter";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		AuditManagementLetterManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        AuditManagementLetterManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		AuditManagementLetterManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		AuditManagementLetterManager.prototype.saveItem=function(item)
		{
			var _AuditManagementLetterManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_AuditManagementLetterManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		AuditManagementLetterManager.prototype.loadData=function(id)
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
		
		AuditManagementLetterManager.prototype.save=function(item)
		{
			 return AuditManagementLetterService.save(item);
		}
		
		AuditManagementLetterManager.prototype.newAuditManagementLetter=function()
		{
			return this.editedAuditManagementLetter={}
		}
        
		AuditManagementLetterManager.prototype.newItem=function()
		{
			return AuditManagementLetterService.readNew({});
		}

		AuditManagementLetterManager.prototype.readDetail=function(id)
		{
			return AuditManagementLetterService.readDetailById(id);
		}
        
        AuditManagementLetterManager.prototype.loadNew=function(params)
		{
			var _AuditManagementLetterManager=this;
			return this.newItem()
	 		.then(function(sr){return _AuditManagementLetterManager.editedAuditManagementLetter=sr});
		}
        
		AuditManagementLetterManager.prototype.loadDetail=function(id)
		{
			var _AuditManagementLetterManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _AuditManagementLetterManager.editedAuditManagementLetter=sr});
		}
		
		AuditManagementLetterManager.prototype.readList=function()
		{
			return AuditManagementLetterService.readAll();
		}
		
		AuditManagementLetterManager.prototype.loadList=function()
		{
			//var vm=this;
			var _audit_management_letterManager=this;
			return this.readList()
	 		.then(function(sr){return _audit_management_letterManager.audit_management_lettersList=sr; return sr;});
		}
		
		AuditManagementLetterManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _AuditManagementLetterManager=this;
	 		AuditManagementLetterService.delete(id)
			.then(_AuditManagementLetterManager.readList)
	 		.then(function(sr){_AuditManagementLetterManager.audit_management_lettersList=sr});
     	}
		var AuditManagementLetterManagerFactory={
        	create:function(options)
            	{
                	var _AuditManagementLetterManager=new AuditManagementLetterManager(options);
					for(var i in options)
					{
						_AuditManagementLetterManager[i]=options[i];
					}
					_AuditManagementLetterManager.buildUploader();
					return _AuditManagementLetterManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------AuditManagementLetterManager Factory");
		return AuditManagementLetterManagerFactory;
		
		}])
             
 }(window.angular));