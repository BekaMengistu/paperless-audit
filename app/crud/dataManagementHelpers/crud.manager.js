(function(angular) {
    "use strict";
	
	angular.module( "app")
	
	.service ("CrudDataManager",["$state",function(state)
		{
			var createDataManager=function(options)
			{
				var data_manager={items:[],itemsHash:{},editedItem:{},title:"Data Manager",state:{},reloadDetailAfterSave:false,makeHash:false}
				
				data_manager.crudService=options.crudService;
				//data_manager.detailEditor={url:options.detailEditor.url,id:options.detailEditor.id}
				
				
				data_manager.readList=function(){return data_manager.crudService.readAll()};
			
				data_manager.save=function(params){return data_manager.crudService.save(params)}
				
				data_manager.delete=function(params){return data_manager.crudService.delete(params)}
				
				data_manager.readDetail=function(params){return data_manager.crudService.readDetailById(params)}
				
				data_manager.readNew=options.readNew
				
				data_manager.createNew=function(){return {}}
				
				data_manager.afterDetailLoaded=function(sr){return sr;}
				
				data_manager.afterListLoaded=function(sr){return sr;}
				
				data_manager.afterInsert=function(sr) { data_manager.navigateToDetail(sr);}
				data_manager.afterDelete=function(sr) { return data_manager.loadList();}
				data_manager.afterUpdate=function(sr) { return sr;}
                
                data_manager.onBeforeSave=function(sr){return sr;}
				
				
				data_manager.onAfterSave=function(sr){
					if(data_manager.reloadDetailAfterSave)
					{
						return data_manager.loadDetail(data_manager.detail_id)
					}
					return sr;
					}
				
				data_manager.getDetailUrl=function(item)
				{
					var param={};
					param[data_manager.detailEditor.id]=item[id];
				}
				
				data_manager.navigateToDetail=function(item)
				{
					
					var param={};
					var val=item;
					
					if(typeof(item)=="object")
					{
						val=item[data_manager.detailEditor.id];
					}
					param[data_manager.detailEditor.id]=val;
					
					state.go(data_manager.detailEditor.url,param);
				}
				
				
				
				data_manager.loadData=function(id)
				{
					switch(id)
					{
						case "list": return data_manager.loadList()
						case "0": return data_manager.loadNew()
						default: return data_manager.loadDetail(id)
					}
				}
				
				data_manager.loadNew=function()
				{
					var param = data_manager.createNew();
					return data_manager.readNew(param).then(function(sr){data_manager.items.push(param);  data_manager.editedItem=sr; return data_manager.afterDetailLoaded(sr)});
				}
				
				data_manager.loadList=function()
				{
					 return data_manager.readList().then(function(sr){ 
					 		data_manager.items=sr; data_manager.afterListLoaded(sr); 
					 		if(data_manager.makeHash)
							{
								data_manager.itemsHash=buildHash(sr,"item",data_manager.detailEditor.id);
							}
					 return sr});
				}
				data_manager.loadDetail=function(id)
				{
					data_manager.detail_id=id;
					return data_manager.readDetail(id).then(function(sr){data_manager.editedItem=sr; return data_manager.afterDetailLoaded(sr)});
				}
				
				data_manager.saveItem=function(param)
				{
                    data_manager.onBeforeSave(param);
					var idFld=data_manager.detailEditor.id;
					param=param?param:data_manager.editedItem;
					var itemId=param[idFld];
					 return data_manager.save(param).then(function(sr)
					 	{
							
							var savedId=sr[idFld];
							console.log("Item Saved",itemId,savedId);
							//data_manager.state.params[idFld]=savedId;
							if(itemId==savedId)
							{
								return data_manager.onAfterSave(sr);
							}
							data_manager.navigateToDetail(sr);
							/*
							if(sr.lastInsertId/1) 
							{data_manager.afterInsert(sr.lastInsertId);}
							else
							{
								return data_manager.onAfterSave(sr);
							}
							return sr;*/
						});
				}
				
				data_manager.deleteItem=function(id)
				{
					if(confirm("Are you sure?"))
					{
						return data_manager.delete(id)
						.then(data_manager.afterDelete);
					}
				}
				data_manager.editItem=function(id)
				{
					var param={};
					param[data_manager.detailEditor.id]=id;
					state.go(data_manager.detailEditor.url,param);
				}
				data_manager.createItem=function(id)
				{
					data_manager.editItem(0);
				}
				inherit(data_manager,options)
				
				return data_manager;
			}
		
			return {create:function(options) {return createDataManager(options);}
			,listDetailEditor:function(data_manager){
					var createListDetailEditor=function(dm)
					{
						dm.editedItemIndex=-1;
			 
					 dm.onAddItem=function()
					 {
						 
						 for(var i=dm.items.length;i>0;i--)
						 {
							 dm.items[i]=dm.items[i-1];
						 }
						 var newItem=dm.createNew();
							 dm.items[0]=newItem;
							 dm.onEditItem(0);
							 
					 }
			 
			 			dm.onEditItem=function(index) { dm.editedItemIndex=index; }
			 			dm.cancelEdit=function(index) { dm.editedItemIndex=-1;}
						dm.onAfterSave=function(item) {dm.loadList(); dm.cancelEdit(); return item;}	
					}
					return createListDetailEditor(data_manager);
				
				}
			}
		}])
	
             
 }(window.angular));
