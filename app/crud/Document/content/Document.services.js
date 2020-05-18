(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "DocumentService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/DocumentService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/DocumentService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/DocumentService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/DocumentService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("DocumentManager",["DocumentService","DataImportManager",
		function(DocumentService,DataImportManager){
		
		
		function DocumentManager(options)
		{
			this.documentList=[{}];
			this.editedDocument="";
		}
		DocumentManager.prototype.editPath={url:"app.crud.documentEdit",id:"document_id"};
		DocumentManager.prototype.listPath={url:"app.crud.document"};
		
		DocumentManager.prototype.formData={
				 	list:{title:"Documents"
                    		,subTitle:"List of Documents"
                            ,prefix:"document",headerStyle:"dker"}
                            
					,detail:{title:"Document Detail"
                    	,subTitle:"Edit Document"
                        ,prefix:"document",headerStyle:"dker"}
					}
		DocumentManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.documentsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="document";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		DocumentManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        DocumentManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		DocumentManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		DocumentManager.prototype.saveItem=function(item)
		{
			var _DocumentManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_DocumentManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		DocumentManager.prototype.loadData=function(id)
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
		
		DocumentManager.prototype.save=function(item)
		{
			 return DocumentService.save(item);
		}
		
		DocumentManager.prototype.newDocument=function()
		{
			return this.editedDocument={}
		}
        
		DocumentManager.prototype.newItem=function()
		{
			return DocumentService.readNew({});
		}

		DocumentManager.prototype.readDetail=function(id)
		{
			return DocumentService.readDetailById(id);
		}
        
        DocumentManager.prototype.loadNew=function(params)
		{
			var _DocumentManager=this;
			return this.newItem()
	 		.then(function(sr){return _DocumentManager.editedDocument=sr});
		}
        
		DocumentManager.prototype.loadDetail=function(id)
		{
			var _DocumentManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _DocumentManager.editedDocument=sr});
		}
		
		DocumentManager.prototype.readList=function()
		{
			return DocumentService.readAll();
		}
		
		DocumentManager.prototype.loadList=function()
		{
			//var vm=this;
			var _documentManager=this;
			return this.readList()
	 		.then(function(sr){return _documentManager.documentsList=sr; return sr;});
		}
		
		DocumentManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _DocumentManager=this;
	 		DocumentService.delete(id)
			.then(_DocumentManager.readList)
	 		.then(function(sr){_DocumentManager.documentsList=sr});
     	}
		var DocumentManagerFactory={
        	create:function(options)
            	{
                	var _DocumentManager=new DocumentManager(options);
					for(var i in options)
					{
						_DocumentManager[i]=options[i];
					}
					_DocumentManager.buildUploader();
					return _DocumentManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------DocumentManager Factory");
		return DocumentManagerFactory;
		
		}])
             
 }(window.angular));