(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "LookupService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/LookupService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/LookupService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/LookupService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/LookupService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("LookupManager",["LookupService","DataImportManager",
		function(LookupService,DataImportManager){
		
		
		function LookupManager(options)
		{
			this.lookupList=[{}];
			this.editedLookup="";
		}
		LookupManager.prototype.editPath={url:"app.crud.lookupEdit",id:"lookup_id"};
		LookupManager.prototype.listPath={url:"app.crud.lookup"};
		
		LookupManager.prototype.formData={
				 	list:{title:"Lookups"
                    		,subTitle:"List of Lookups"
                            ,prefix:"lookup",headerStyle:"dker"}
                            
					,detail:{title:"Lookup Detail"
                    	,subTitle:"Edit Lookup"
                        ,prefix:"lookup",headerStyle:"dker"}
					}
		LookupManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.lookupsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="lookup";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		LookupManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        LookupManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		LookupManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		LookupManager.prototype.saveItem=function(item)
		{
			var _LookupManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_LookupManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		LookupManager.prototype.loadData=function(id)
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
		
		LookupManager.prototype.save=function(item)
		{
			 return LookupService.save(item);
		}
		
		LookupManager.prototype.newLookup=function()
		{
			return this.editedLookup={}
		}
        
		LookupManager.prototype.newItem=function()
		{
			return LookupService.readNew({});
		}

		LookupManager.prototype.readDetail=function(id)
		{
			return LookupService.readDetailById(id);
		}
        
        LookupManager.prototype.loadNew=function(params)
		{
			var _LookupManager=this;
			return this.newItem()
	 		.then(function(sr){return _LookupManager.editedLookup=sr});
		}
        
		LookupManager.prototype.loadDetail=function(id)
		{
			var _LookupManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _LookupManager.editedLookup=sr});
		}
		
		LookupManager.prototype.readList=function()
		{
			return LookupService.readAll();
		}
		
		LookupManager.prototype.loadList=function()
		{
			//var vm=this;
			var _lookupManager=this;
			return this.readList()
	 		.then(function(sr){return _lookupManager.lookupsList=sr; return sr;});
		}
		
		LookupManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _LookupManager=this;
	 		LookupService.delete(id)
			.then(_LookupManager.readList)
	 		.then(function(sr){_LookupManager.lookupsList=sr});
     	}
		var LookupManagerFactory={
        	create:function(options)
            	{
                	var _LookupManager=new LookupManager(options);
					for(var i in options)
					{
						_LookupManager[i]=options[i];
					}
					_LookupManager.buildUploader();
					return _LookupManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------LookupManager Factory");
		return LookupManagerFactory;
		
		}])
             
 }(window.angular));