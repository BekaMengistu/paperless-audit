(function(angular) {
    "use strict";
	
	angular.module( "app")
	
	.service ("ApplicationManager",["$q","$http",'$ocLazyLoad',"$window",function($q,$http,$ocLazyLoad,$window)
		{
			var app_manager={ 
						restServices:{
					readViewHooks :function(module,view)
					{		var param=module;
							if(view){param=param+"." + view;}
							return excuteService($q,$http,"api/CoreAppService/readViewHooks/" + param, {},"get");
					}
					,readLookupsByNames :function(param){return excuteService($q,$http,"api/LookupServices/readLookupsByNames/", param,"post");}
					,readLookupByName :function(id){return excuteService($q,$http,"api" + id, {},"get");}

					,readLookupByType :function(id){return excuteService($q,$http,"api/CustomeLookupService/readLookupByType/" + id, {},"get");}
					
					,readLookupTypes :function(){return excuteService($q,$http,"api/CustomeLookupService/readLookupTypes/", {},"get");}
					,readAllLookupsByTypes:function(){return excuteService($q,$http,"api/CustomeLookupService/readAllLookupsByTypes/", {},"get");}
					
												}
				};
				var createLayoutManager=function(options)
				{
					var layoutManager={sectionTypes:{}}
					layoutManager.sectionTypes.sidebar={width:2,class:"side-bar",headers:{title:"Side bar"},content:{template:"demo-list-1.html"}}
					layoutManager.sectionTypes.main={width:8,class:"card-section",innerClass:"box",header:{title:"Main Section"},content:{template:"detail-view.html"}}
					layoutManager.sectionTypes.no_title={width:2,class:"no-title",header:{title:""},content:{template:"detail-view.html"}}
					
					layoutManager.sectionTypes.other={width:12,content:{template:"demo-list-1.html"}}
					
					layoutManager.getCrudPageTemplate=function(templateOptions)
					{
						var sidebar={type:"side_bar_list", class:"side_bar_list",width:3,content:{template:"crud.items.list.html"},header:{template:"default-list-header.html"}};
						var main_detail={type:"main",width:9,header:{title:"Detail"},content:{template:"detail-view.html"}};
						
						var template={page:{title:"Date Entry",subTitle:"Brows and manage",tool:"crud.tools.html"},columns:{sidebar:sidebar,main:main_detail}};
						
						templateOptions=templateOptions?templateOptions:{};
						
						inherit(template,templateOptions);
						
						template.columns=layoutManager.getSections(template.columns);

						return template;
					}
					layoutManager.getSinglePageTemplate=function(templateOptions)
					{
						templateOptions=templateOptions?templateOptions:{};
						var template={page:{title:""}}
						var type=getAttributeValue(templateOptions,"type","no_title")
						var single=layoutManager.getSingleSection(type,{width:12});
						
						template.columns={main:single};
						inherit(template,templateOptions);
						console.log("getSinglePageTemplate",template);
						return template;
					}
					
					layoutManager.getLayout=function(cols_count)
					{
						cols_count=cols_count?cols_count:2;
						
						var col_sizes=[[12],[3,9],[2,8,2]]; 
						
						var template={page:{title:"Page Title",subTitle:"Sub Title"}}
						
						var sidebar={width:2,class:"side-bar",header:{title:"Side bar"},content:{template:"demo-list-1.html"}}
						var main={width:8,class:"card-section",header:{title:"Main Section"},content:{template:"demo-detail-1.html"}}
						var no_title={width:2,classs:"no-title",headers:{title:"Side bar"},content:{template:"demo-list-1.html"}}
						
						var cols=[[main],[sidebar,main],[sidebar,main,no_title]];
						
						var temp_col=cols[cols_count-1];
						
						for(var i=0;i<cols_count;i++)
						{
							//temp_col.push(cols[i]);
						}
						
						var temp_2col={
													sidebar:sidebar
													,main:main
													,no_title:no_title
													}
						template.columns=temp_col;
						return template;
						
					}
					layoutManager.getSingleSection=function(section_type,params)
					{
						var section=layoutManager.sectionTypes[section_type];
						section=section?section:layoutManager.sectionTypes.other;
						return inherit(section,params);
					}
					
					layoutManager.getSections=function(section_defs)
					{
						var sections={};
						for(var i in section_defs)
						{
							sections[i]=layoutManager.getSingleSection(section_defs[i].type,section_defs[i])
						}
						return sections;
					}
					
					return layoutManager;
				}
				var createStateManager=function()
				{
					var stateManager={statesHash:{},stateNames:{}}
					stateManager.getParentStates=function(currentState)
					{
						var parents=[];
						
						var getStateParent=function(s)
						{
							var state=stateManager.statesHash[s.name];
							parents.push(state);
							
							var stateData=stateManager.stateNames[s.name];
							var pcode=stateData.parent_id;
							var parent=stateManager.statesHash[pcode];
							if(parent)
							{
								getStateParent(parent);
							}

						}
						getStateParent(currentState);
						return parents;
					}
					stateManager.buildStateHierarchy=function(states,currentState)
					{
						for(var i in states)
						{
							var s=states[i];
							
							
							var statesArry=s.name.split(".");
							var parent_code="";
							var sep="";
							for(var j =0;j<statesArry.length-1;j++)
							{
								parent_code=parent_code+sep + statesArry[j];
								sep=".";
							}
							if(s.name)
							{
								stateManager.statesHash[s.name]=s;
								stateManager.stateNames[s.name]={id:s.name,parent_id:parent_code,label:s.name};
							}
						}
						stateManager.treeManager=new TreeManager();
						
						var treeOptions={idField:"code",parentId:"parent_code",label:"code",includeFields:[]}
						
						stateManager.treeManager.makeTree(stateManager.stateNames,{});
						
						return stateManager.treeManager.tree;
					}
					return stateManager;
				}
				var createUIManager=function()
						{
							var uiManager={tabs:{},tabArray:[],activeColor:"default",colorThemes:{default:{primary:"info"}}}
							uiManager.setActiveColor=function(name,theme)
							{
								uiManager.activeColorTheme=theme;
							}
							uiManager.registerTabs=function(parentTab,tabItems)
							{
								uiManager.tabs[parentTab]=uiManager.tabs[parentTab]?uiManager.tabs[parentTab]:{};
								uiManager.tabArray[parentTab]=[];
								for(var i in tabItems)
								{
									uiManager.tabs[parentTab][i]=tabItems[i];
								}
								
								for(var i in uiManager.tabs[parentTab])
								{
									uiManager.tabArray[parentTab].push(uiManager.tabs[parentTab][i]);
								}
							}
							return uiManager;
						}
						
							
						var createHooksManager=function()
						{
							var hooksManager={hooks:{},allHooks:{}}
							
							hooksManager.loadDependencyScripts=function(index)
							{
								if(index>=hooksManager.hooksArray.length)
								{
									return index;
								}
								var currentHook=hooksManager.hooksArray[index];
								if(!currentHook.script)
								{
									return hooksManager.loadDependencyScripts(index+1);
								}
								$window.hookScripts[currentHook.hookName]={};
								
								return $ocLazyLoad.load(currentHook.script)
								.then(function(sr){
									
									console.log("Hook Script Loaded " + index,currentHook.script,$window.hookScripts[currentHook.hookName]);
									var currentHookScriptFunction=$window.hookScripts[currentHook.hookName][currentHook.afterLoad];
									if(currentHookScriptFunction)
									{
										currentHookScriptFunction(app_manager);
									}
									return hooksManager.loadDependencyScripts(index+1);
									})
							}
							hooksManager.afterHookLoad=function(sr)
							{
								hooksManager.hooks=sr
								var hooksArray=[];
								for(var i in sr)
								{
									sr[i].hookName=i;
									hooksArray.push(sr[i]);
								}
								hooksManager.hooksArray=hooksArray;
								return hooksManager.loadDependencyScripts(0);
							}
							hooksManager.loadViewHooks=function(module,view)
							{
								$window.hookScripts=$window.hookScripts?$window.hookScripts:{};
								
								$window.hookScripts[module]={};
								$window.hookScripts[module][view]={};
								app_manager.restServices.readViewHooks(module,view)
								.then(hooksManager.afterHookLoad)
								
							}
							hooksManager.loodHookScripts=function(view,hooks)
							{
								$window.hookScripts=$window.hookScripts?$window.hookScripts:{};
								var hooksArray=[];
								for(var i in hooks)
								{
									if(hooks[i].script)
									{
										hooks[i].hookName=view+"." + i;
										hooksArray.push(hooks[i])
									}
								}
								
								var loadHookScript=function(index)
								{
									if(index>=hooksArray.length) { return index;}
									
									var currentHook=hooksArray[index];
									$window.hookScripts[currentHook.hookName]={};
									
									return $ocLazyLoad.load(currentHook.script)
									.then(function(sr){
										
										console.log("Hook Script Loaded " + index,currentHook.script,$window.hookScripts[currentHook.hookName]);
										var currentHookScriptFunction=$window.hookScripts[currentHook.hookName][currentHook.afterLoad];
										if(currentHookScriptFunction)
										{
											currentHookScriptFunction(app_manager);
										}
										return loadHookScript(index+1);
										})
								}
								return loadHookScript(0);
							}

							hooksManager.setViewHooks=function(view,hooks)
							{
								//hooksManager.allHooks[view]=getAttributeValue(hooksManager.allHooks,view,hooks);
								hooksManager.allHooks[view]=getAttributeValue(hooksManager.allHooks,view,hooks);
								
								hooksManager.loodHookScripts(view,hooksManager.allHooks[view]);
								//hooksManager.allHooks[view]=hooks;
								return hooksManager.allHooks[view];
							}
							hooksManager.readViewHooks=function(view)
							{
								
								return app_manager.restServices.readViewHooks(view)
								.then( function(sr){return hooksManager.setViewHooks(view,sr);})
								
							}
							return hooksManager;
						}
			var createLookupManager=function()
			{
				var lookupManager={lookupNames:{},lookups:{},lookupsHash:{},appLookupNames:{},requiredLookups:[],requiredLookupsHash:{}};
				
				lookupManager.afterCustomLookupLoad=function(sr)
				{
					for(var i in sr.lookupNames)
					{
						var lun=sr.lookupNames[i].lookup_type;
						
						lookupManager.lookupNames[lun]=lun;
						lookupManager.appLookupNames[lun]={name:lun,type:"custom"}
						
					}
					for(var i in sr.lookupValues)
					{
						var luv=sr.lookupValues[i];
						var lun=i;
						var lupArray=[];
						
						for(var j in luv)
						{
							lupArray.push({value:luv[j].description,label:luv[j].name});
						}
						lookupManager.lookups[lun]=lupArray;
					}
				}
				lookupManager.loadCustomLookups=function()
				{
					return app_manager.restServices.readAllLookupsByTypes()
					.then(lookupManager.afterCustomLookupLoad);
				}
				lookupManager.loadLookups=function(lookupNames)
				{
					var lookupsHash={};
					for(var i in lookupNames)
					{
						var lupInfo=getAttributeValue(lookupManager.appLookupNames,lookupNames[i],lookupNames[i])
						lookupsHash[lookupNames[i]]=lupInfo;
					}
					return app_manager.restServices.readLookupsByNames(lookupsHash)
					.then(lookupManager.afterLookupsLoad);
				}
				lookupManager.loadRequiredLookups=function(lookupNames)
				{
					lookupNames=lookupNames?lookupNames:lookupManager.requiredLookupsHash;
					return app_manager.restServices.readLookupsByNames(lookupNames)
					.then(lookupManager.afterLookupsLoad);
				}
				lookupManager.afterLookupsLoad=function(sr)
				{
					for(var i in sr)
					{
						lookupManager.afterLookupLoad(i,sr[i])
					}
					return sr;
				}
				lookupManager.registerAppLookups=function(lookups)
				{
					for(var i in lookups)
					{
						lookups[i].name=i;
						lookupManager.appLookupNames[i]=lookups[i];
					}
				}
				lookupManager.afterLookupLoad=function(lupName,lupArray)
				{
					lookupManager.lookups[lupName]=lupArray;
					lookupManager.lookupsHash[lupName]=buildHash(lupArray,"item","value");
					return lupArray;
					
				}
				lookupManager.registerRequiredLookups=function(lupNames)
				{
					for(var i in lupNames)
					{
						lookupManager.requiredLookupsHash[lupNames[i]]=lupNames[i];
					}
				}
				lookupManager.loadLookup=function(lupName)
				{
					var lookupInfo=lookupManager.appLookupNames[lupName];
					return app_manager.restServices.readLookupByName(lookupInfo.serviceUrl)
					.then(function(sr){return lookupManager.afterLookupLoad(lupName,sr)});
					
				}
				return lookupManager;
			}
			
			app_manager.HooksManager=	createHooksManager();
			app_manager.LookupManager =	createLookupManager();
			app_manager.UIManager =	createUIManager();
			app_manager.StateManager=createStateManager();
			app_manager.LayoutManager=createLayoutManager();
			
			return {create:function(){return app_manager},LayoutManager:createLayoutManager};				
			 
        
}]).directive( "bmHookView", [function()
	{
		return {
			templateUrl: 'app/core/templates/hooked_views.html'
 			,restrict: 'A'
 			,link: function($scope, $element, $attrs) 
			{
				$scope.$watch($attrs.appManager,function(value){
					//console.log("bmHookView2",$attrs.appManager,value)
					var appManager=value;
					appManager.HooksManager.readViewHooks($attrs.viewName)
					
					});
 			}
			,controllers:['$scope', '$element', '$attrs',function($scope, $element, $attrs){
					$scope.hooks={};
					$scope.$watch($attrs.appManager, function(newVal, oldVal) {
						console.log("bmHookView",newVal,oldVal,$scope.appManager)
						if($scope.appManager && $scope.appManager.HooksManager)
						{
							
							$scope.appManager.HooksManager.readViewHooks($scope.viewInfo.view)
							.then(function(sr){$scope.hooks=sr;});
							
						}
					})
				}]
		
 
			};
	}])
	.directive( "bmCrudListDetail", [function()
	{
		return { templateUrl: 'app/core/templates/page.multi.col.html',restrict: 'A' }
	}])
	.directive( "bmPageLayout", [function()
	{
		return {
			templateUrl: 'app/core/templates/page.fixed.title.html'
 			,restrict: 'E'
			,transclude: 'element'
			,replace: true
 			,link: function($scope, $element, $attrs) 
			{
				$scope.$watch($attrs.appManager,function(value){
					//console.log("bmHookView2",$attrs.appManager,value)
					var appManager=value;
					appManager.HooksManager.readViewHooks($attrs.viewName)
					
					});
 			}
			,controllers:['$scope', '$element', '$attrs',function($scope, $element, $attrs){
					$scope.hooks={};
					$scope.$watch($attrs.appManager, function(newVal, oldVal) {
						console.log("bmHookView",newVal,oldVal,$scope.appManager)
						if($scope.appManager && $scope.appManager.HooksManager)
						{
							
							$scope.appManager.HooksManager.readViewHooks($scope.viewInfo.view)
							.then(function(sr){$scope.hooks=sr;});
							
						}
					})
				}]
			};
	}])
	.directive( "bmHookView2", [function()
	{
		return {
			templateUrl: 'app/core/templates/hooked_views.html'
 			,restrict: 'A'
			,scope: {viewInfo:'=',appManager:'='}
 			,link: function($scope, $element, $attrs) 
			{
				
 			}
			,controller:['$scope', '$element', '$attrs',function($scope, $element, $attrs){
					$scope.hooks={};
					$scope.$watch($attrs.appManager, function(newVal, oldVal) {
						//console.log("bmHookView",newVal,oldVal,$scope.appManager)
						if($scope.appManager && $scope.appManager.HooksManager)
						{
							
							$scope.appManager.HooksManager.readViewHooks($scope.viewInfo.view)
							.then(function(sr){$scope.hooks=sr;});
							
						}
					})
				}]
		
 
			};
	}])	
	
.directive( "bmTabHeader", [function()
	{
		return {
			templateUrl: 'app/core/templates/tab-header.html'
 			,restrict: 'A'
			,scope: {tabs:'=',bmApp:'='}
 			,link: function($scope, $element, $attrs) 
			{
				
 			}
			,controller:['$scope', '$element', '$attrs',function($scope, $element, $attrs){
				//$scope.acctEditorTitle=$attrs.tabs
				}]
		/* /link  */
		
 
			};
	}])	
.controller('layoutController', layoutController)
	
.controller('layoutTestController', layoutTestController)
	layoutController.$inject = ['$scope','$rootScope', '$http', '$filter','$stateParams','$state','$localStorage','$timeout'];
	layoutTestController.$inject = ['$scope','$rootScope', '$http', '$filter','$stateParams','$state','$localStorage','$timeout'];

	function layoutTestController($scope,$rootScope,$http, $filter,$stateParams,$state,$localStorage,$timeout)
		{
		}
	function layoutController($scope,$rootScope,$http, $filter,$stateParams,$state,$localStorage,$timeout)
		{
			$scope.column_count=$stateParams.column_count;
			console.log("layout ",$scope.app.Manager.LayoutManager,$scope.column_count);
			$scope.template={title:"Multi Column ",columns:[]};
			
			var columnDefs=[
				{
					col1:{width:12,header:{titles:"Detail",color:"white"},content:{color:"white",template:"demo-detail-1.html"}}
				}
				,{
					col1:{width:3,header:{title:"list",color:"accent"},content:{template:"demo-list-1.html"}}
					,col2:{width:9,header:{title:"Detail",color:"white"},content:{color:"white",template:"demo-detail-1.html"}}
				}]
			
			for(var i=0;i<$scope.column_count*1;i++)
			{
				$scope.template.columns[i]={};
			}
			$scope.template.columns=columnDefs[$scope.column_count*1-1];
			$scope.template=$scope.app.Manager.LayoutManager.getLayout($scope.column_count);
			//console.log(""
		}
	
             
 }(window.angular));