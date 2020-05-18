var bmCoreDependencies={
			"bm.core":["app/core/content/core.controllers.js"]
			//,"bm.crud":["app/crud/crud.services.js"]
					};
					
addDependencyToApp(bmCoreDependencies);

bmCoreRoutes={
			'app.core':
				{
					url: '/core'
					,data : { title: 'Core',layout:"layout-1col.html"}
					,template: "<div ui-view></div>"
					,resolve: []
					,controllers: 'layoutController'
				}
			
			,'app.core.layout2':
				{
					url: '/layout2'
					,data : {pageTitle:"2 Column Layout",pageSubTitle:"Now <i>working in list</i> views"
								,cols:["sidebar","main"]
								,sidebarTitle:'List',sidebarBody:'_layout.list.html',sidebarWidth:2
								,mainBody:"_bmui-view.html",mainWidth:8,rightbarWidth:2 
								,forwardLink:"app.core.layout2.summary"}
					,templateUrl: 'app/core/content/layouts/page.multi.col.php'
					,resolve: []
					//,controller: 'layoutController'
				}	
			,'app.core.layout2.summary':
				{
					url: '/summary'
					,data : {pageTitle:"2 Column Layout",pageSubTitle:"Summary",mainTitle:"Summary of", mainClass:"p-x-md",mainWidth:10,rightbarWidth:1,pageTool:"_transaction.tools.html"}
					,template: "<div class='p-a-lg m-a box text-lg'>Summary</div><div class='p-a-lg m-a box text-lg'>Summary</div><div class='p-a-lg m-a box text-lg'>Summary</div><div class='p-a-lg m-a box text-lg'>Summary</div>"
					,resolve: []
					//,controller: 'layoutController'
				}		
			,'app.core.layout2.detail':
				{
					url: '/detail/{item_id}'
					,data : {pageTitle:"Detail Column Layout",pageSubTitle:"Now <i>Item Detail is displayed</i>",pageTool:"_crud.tools.html"
								//,sidebar:{title:'List',body:'_layout.list.html'}
								,cols:["sidebar","main","rightbar"]
								,mainClass:"card-section p-x-lg" ,mainTitle:"<div class='p-a text-md'>Detail</div>",mainWidth:8
								,rightbarBody:'_layout.list.html',rightbarWidth:2
								}
					,template: "<div class='p-a-lg m-a-lg box text-md'> Detail View {{$state.params.item_id}}</div><div class='p-a-lg m-a-lg box text-md'> Detail View {{$state.params.item_id}}</div><div class='p-a-lg m-a-lg box text-md'> Detail View {{$state.params.item_id}}</div><div class='p-a-lg m-a-lg box text-md'> Detail View {{$state.params.item_id}}</div>"
					,resolve: []
					,controller: 'layoutTestController'
				}	
			,'app.core.layout2.item2':
				{
					url: '/item2'
					,data : {pageTitle:"Detail Column Layout",pageSubTitle:"Now <i>Item 2 is displayed</i>"
								//,sidebar:{title:'List',body:'_layout.list.html'}
								//,main:{title:'Detail',body:"_bmui-view.html"}
								}
					,template: "<div class='p-a m-a box'>Detail View Of Item 2</div>"
					,resolve: []
					,controller: 'layoutTestController'
				}		
			
				
};
					
   addRoutesToApp(bmCoreRoutes);
	 
	// addLookups({erp:{InventoryItem:{serviceUrl:"/LookupServices/InventoryItem/"},Unit:{serviceUrl:"/LookupServices/Unit/"}}});