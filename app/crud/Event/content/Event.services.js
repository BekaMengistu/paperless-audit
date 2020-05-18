(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "EventService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/EventService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/EventService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/EventService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/EventService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("EventManager",["EventService","DataImportManager",
		function(EventService,DataImportManager){
		
		
		function EventManager(options)
		{
			this.eventList=[{}];
			this.editedEvent="";
		}
		EventManager.prototype.editPath={url:"app.crud.eventEdit",id:"event_id"};
		EventManager.prototype.listPath={url:"app.crud.event"};
		
		EventManager.prototype.formData={
				 	list:{title:"Events"
                    		,subTitle:"List of Events"
                            ,prefix:"event",headerStyle:"dker"}
                            
					,detail:{title:"Event Detail"
                    	,subTitle:"Edit Event"
                        ,prefix:"event",headerStyle:"dker"}
					}
		EventManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.eventsList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="event";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		EventManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        EventManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		EventManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		EventManager.prototype.saveItem=function(item)
		{
			var _EventManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_EventManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		EventManager.prototype.loadData=function(id)
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
		
		EventManager.prototype.save=function(item)
		{
			 return EventService.save(item);
		}
		
		EventManager.prototype.newEvent=function()
		{
			return this.editedEvent={}
		}
        
		EventManager.prototype.newItem=function()
		{
			return EventService.readNew({});
		}

		EventManager.prototype.readDetail=function(id)
		{
			return EventService.readDetailById(id);
		}
        
        EventManager.prototype.loadNew=function(params)
		{
			var _EventManager=this;
			return this.newItem()
	 		.then(function(sr){return _EventManager.editedEvent=sr});
		}
        
		EventManager.prototype.loadDetail=function(id)
		{
			var _EventManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _EventManager.editedEvent=sr});
		}
		
		EventManager.prototype.readList=function()
		{
			return EventService.readAll();
		}
		
		EventManager.prototype.loadList=function()
		{
			//var vm=this;
			var _eventManager=this;
			return this.readList()
	 		.then(function(sr){return _eventManager.eventsList=sr; return sr;});
		}
		
		EventManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _EventManager=this;
	 		EventService.delete(id)
			.then(_EventManager.readList)
	 		.then(function(sr){_EventManager.eventsList=sr});
     	}
		var EventManagerFactory={
        	create:function(options)
            	{
                	var _EventManager=new EventManager(options);
					for(var i in options)
					{
						_EventManager[i]=options[i];
					}
					_EventManager.buildUploader();
					return _EventManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------EventManager Factory");
		return EventManagerFactory;
		
		}])
             
 }(window.angular));