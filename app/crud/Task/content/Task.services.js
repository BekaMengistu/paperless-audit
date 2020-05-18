(function(angular) {
    "use strict";
	
	angular.module( "app")
	.service( "TaskService", function( $q,$http )
	{
		return {
			readAll :function(){return excuteService($q,$http,"api/TaskService/readAll/", {},"get");}
    		,readDetailById: function(id){return excuteService($q,$http,"api/TaskService/readDetailById/" + id, {},"get");}
    		,save : function(params){return excuteService($q,$http,"api/TaskService/save/", params,"post");}
    		,delete: function(id){return excuteService($q,$http,"api/TaskService/delete/" + id, {},"delete");}
            ,readNew : function(params){return simulateService($q, params);}
			};
	})	
	.factory("TaskManager",["TaskService","DataImportManager",
		function(TaskService,DataImportManager){
		
		
		function TaskManager(options)
		{
			this.taskList=[{}];
			this.editedTask="";
		}
		TaskManager.prototype.editPath={url:"app.crud.taskEdit",id:"task_id"};
		TaskManager.prototype.listPath={url:"app.crud.task"};
		
		TaskManager.prototype.formData={
				 	list:{title:"Tasks"
                    		,subTitle:"List of Tasks"
                            ,prefix:"task",headerStyle:"dker"}
                            
					,detail:{title:"Task Detail"
                    	,subTitle:"Edit Task"
                        ,prefix:"task",headerStyle:"dker"}
					}
		TaskManager.prototype.buildUploader=function()
		{
			var __this=this;
			var importCallBack=function(isr)
			{
				return __this.readList()
				.then(function(sr){__this.tasksList=sr; return sr;})
			}
			this.dataImportManager=DataImportManager.create();
			 
			this.dataImportManager.importOptions.dataTable="task";
			
			this.dataImportManager.afterImportDone = importCallBack;
			
			this.dataImportManager.buildUploader();
			
		}
        
        
		TaskManager.prototype.showList=function()
		{
			this.state.go(this.listPath.url);
		}
        TaskManager.prototype.editItem=function(id)
		{
			var param={};
			param[this.editPath.id]=id;
			this.state.go(this.editPath.url,param);
		}
		TaskManager.prototype.createItem=function()
		{
			this.editItem(0);
		}
		TaskManager.prototype.saveItem=function(item)
		{
			var _TaskManager=this;
			this.save(item)
			.then( function( si )
			{
				if(si.lastInsertId/1)
				{
					_TaskManager.editItem(si.lastInsertId/1);
				}
				return si;
			});
		}
        
        
		TaskManager.prototype.loadData=function(id)
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
		
		TaskManager.prototype.save=function(item)
		{
			 return TaskService.save(item);
		}
		
		TaskManager.prototype.newTask=function()
		{
			return this.editedTask={}
		}
        
		TaskManager.prototype.newItem=function()
		{
			return TaskService.readNew({});
		}

		TaskManager.prototype.readDetail=function(id)
		{
			return TaskService.readDetailById(id);
		}
        
        TaskManager.prototype.loadNew=function(params)
		{
			var _TaskManager=this;
			return this.newItem()
	 		.then(function(sr){return _TaskManager.editedTask=sr});
		}
        
		TaskManager.prototype.loadDetail=function(id)
		{
			var _TaskManager=this;
			return this.readDetail(id)
	 		.then(function(sr){return _TaskManager.editedTask=sr});
		}
		
		TaskManager.prototype.readList=function()
		{
			return TaskService.readAll();
		}
		
		TaskManager.prototype.loadList=function()
		{
			//var vm=this;
			var _taskManager=this;
			return this.readList()
	 		.then(function(sr){return _taskManager.tasksList=sr; return sr;});
		}
		
		TaskManager.prototype.deleteItem=function(id)
     	{
			if(!confirm("Are you sure?"))
			{
				return;
			}
			var _TaskManager=this;
	 		TaskService.delete(id)
			.then(_TaskManager.readList)
	 		.then(function(sr){_TaskManager.tasksList=sr});
     	}
		var TaskManagerFactory={
        	create:function(options)
            	{
                	var _TaskManager=new TaskManager(options);
					for(var i in options)
					{
						_TaskManager[i]=options[i];
					}
					_TaskManager.buildUploader();
					return _TaskManager;
                    
                	
                }
            };
		//console.log("/n-----------------------------------------------TaskManager Factory");
		return TaskManagerFactory;
		
		}])
             
 }(window.angular));