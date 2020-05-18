/**
 * @ngdoc function
 * @name app.controller:AppCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */

(function() {
    'use strict';
    angular
      .module('app')
      .controller('AppCtrl', AppCtrl);

      AppCtrl.$inject  = ['$scope', '$localStorage', '$location', '$rootScope', '$anchorScroll', '$timeout', '$window','$document','$state','userService',"AppService","ApplicationManager"];//.current.data.taskManager];

   function AppCtrl($scope, $localStorage, $location, $rootScope, $anchorScroll, $timeout, $window,$document,$state,userService,AppService,ApplicationManager) 
	 {
			 

		$scope.readLocalStorageData=function(key,defaultVal)
		{
			if (!angular.isDefined($localStorage[key])) 
			{
				$localStorage[key]=defaultVal;
			}
			return $localStorage[key];
		}
		  
		  $scope.scrollTo=function(id)
		  {
			  $location.hash(id);
			  $anchorScroll();
		  }
		  
		  //console.log("AppCtrl");
        var vm = $scope;
        vm.isIE = isIE();
        vm.isSmart = isSmart();
		
		$scope.taskManager="none";
       
        vm.app = {
          name: applicationConfig.name,
          version: applicationConfig.version,
		  mainMenu:applicationConfig.mainMenu,
		  uploadOptions:applicationConfig.uploadOptions,
          // for chart colors
          color: {
            'primary':      '#0cc2aa',
            'accent':       '#a88add',
            'warn':         '#fcc100',
            'info':         '#6887ff',
            'success':      '#6cc788',
            'warning':      '#f77a99',
            'danger':       '#f44455',
            'white':        '#ffffff',
            'light':        '#f1f2f3',
            'dark':         '#2e3e4e',
            'black':        '#2a2b3c'
          },
          setting: {
            theme: {
              primary: 'primary',
              accent: 'accent',
              warn: 'warn'
            },
            folded: false,
            boxed: false,
            container: false,
            themeID: 1,
            bg: ''
          }
        };
		vm.app.subTitle="";
				
		vm.app.status={working:false}
        var setting = vm.app.name+'-Setting';
        // save settings to local storage
        if ( angular.isDefined($localStorage[setting]) ) {
          vm.app.setting = $localStorage[setting];
        } else {
          $localStorage[setting] = vm.app.setting;
        }
        // watch changes
        $scope.$watch('app.setting', function(){
          $localStorage[setting] = vm.app.setting;
        }, true);

        getParams('bg') && (vm.app.setting.bg = getParams('bg'));

        vm.setTheme = setTheme;
        setColor();
				vm.app.setting.headerNav={color:"white",border:"accent",active:"white",header2:{bg:"accent",b_t:"accent"}};
				$scope.app.setting.pageLayouts={col1:"app/core/templates/page.layout.html"};
        
        function setTheme(theme){
          vm.app.setting.theme = theme.theme;
          setColor();
          if(theme.url){
            $timeout(function() {
              $window.location.href = theme.url;
            }, 100, false);
          }
        };

        function setColor(){
          vm.app.setting.color = {
            primary: getColor(vm.app.setting.theme.primary),
            accent: getColor(vm.app.setting.theme.accent),
            warn: getColor(vm.app.setting.theme.warn)
          };
        };

        function getColor(name){
          return vm.app.color[ name ] ? vm.app.color[ name ] : palette.find(name);
        };

			$scope.app.Manager=ApplicationManager.create();
			
			$scope.app.Manager.StateManager.buildStateHierarchy($state.get());
			
			//console.log('Built State Tree',$scope.app.Manager.StateManager.treeManager.tree);
			
			$scope.app.Manager.LookupManager.registerAppLookups(applicationLookups)
			
			$scope.executeStateFunction=function(controller)
			{
				$scope.app.dataLoaded=false;
				var state=$state.current;
				controller=controller?controller:state.controller;
               // console.log("executeStateFunction",controller);
				if(state.controller!=controller){return ;}
				
				var parents = $scope.app.Manager.StateManager.getParentStates(state);
				
             //   console.log("executeStateFunction",parents);
                
				$scope.getRequiredStateLookups(parents);
				
 				$scope.app.executeState(parents,parents.length-1);
			}
			$scope.getRequiredStateLookups=function(states)
			{
				var lookups={};
				for(var i in states)
				{
					var state=states[i];
					if(state.data)
					{
						if(state.data.lookups)
						{
							for(var l in state.data.lookups)
							{
								var lookupName=state.data.lookups[l];
								lookups[lookupName]=lookupName;
							}
						}
					}
				}
				$scope.app.Manager.LookupManager.registerRequiredLookups(lookups);
			}
			$scope.app.resumeExecuteState=function()
            {
                $scope.app.executingPaused=false;
                var ss=$scope.app.executingState;
                if(ss)
                    {
                        
                        $scope.app.executeState(ss.states,ss.index,ss.sps,0);
                        
                    }
            }
			$scope.app.executeState=function(states,index,sps,trialCount)
			{
				trialCount=trialCount?trialCount:0;
				sps=sps?sps:"";
				if(index>=0)
				{
                    if($scope.app.executingPaused)
                    {
                        return;        
                    }
                    $scope.app.executingState={states:states,index:index,sps:sps};
					var state=states[index];
					
					var stateFnName="";
					if(state.data) {stateFnName=state.data.onLoad;}
					stateFnName=stateFnName?stateFnName:"";
					
					//console.log(sps+state.name + "->" + stateFnName);
                    
					var stateFn="";
					if(stateFnName)
					{
						stateFn=$scope.app[stateFnName];
					}
					else
					{
						return $scope.app.executeState(states,index-1,sps+"  ");
					}
					//console.log(sps+state.name + "->" + stateFnName,stateFn?"(exists)":"");
					if(stateFn)
					{
						stateFn()
						.then(function(){$scope.app.executeState(states,index-1,sps+"  ");});
					}
					else
					{
                        
                        //console.log("stateFunction missing",$scope.app.loginUser);
                        var userLoaded=false;
                        if($scope.app.loginUser)
                            {
                                if($scope.app.loginUser.user_id)
                                    {
                                      userLoaded=true;  
                                    }
                            }
                        if(!userLoaded)
                        {
                           // console.log("User Loged Out",$scope.app.loginUser);
                            return;        
                        }
						if(trialCount<5)
						{
							$timeout(function(){$scope.app.executeState(states,index,sps,trialCount+1);},1000);
						}
						else
						{
							$scope.app.executeState(states,index-1,sps+"  ");
						}
					}
				}
                else
                {
                    var fullUrl=$location.absUrl();
                    var hash="#" + $location.url();
                    
                    var baseUrl=fullUrl.replace(hash,"");
                    
                    $scope.afterDataLoad(baseUrl);
                    if($scope.app.loadCount)
                    {
                         $timeout(function(){$scope.app.dataLoaded=true; },$scope.app.loadCount*1000);  
                    }
                    else
                    {
                       $scope.app.dataLoaded=true; 
                    }
                    
                    //console.log(sps + " All Data Loaded");        
                }
			}
			
			//console.log($scope.app.Manager);
			
			$scope.loadViewHooks=function(toState)
			{
				//console.log("---------$scope.loadViewHooks",toState);
				var HooksManager=$scope.app.Manager.HooksManager;
				HooksManager.hooks=[];
				if(toState.data)
				{
					if(toState.data.module && toState.data.viewName)
					{
						HooksManager.loadViewHooks(toState.data.module,toState.data.viewName);
					}
				}
			}
			//$scope.loadViewHooks($state.current);
			baseController(vm,$timeout,userService,AppService);
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) 
			{
         // console.log("$stateChangeSuccess",toState)
					if(toState.data && toState.data.forwardLink)
					{
						$state.go(toState.data.forwardLink);
						return;
					}
                $scope.app.currentState=toState;
					$scope.executeStateFunction(toState.controller);
					
					$scope.pollCount=10;
					$scope.setCurrentStartup(toState.controller);
					$scope.setFullScreen();
			});
		//$rootScope.$on('$afterStateChangeSuccess', openPage);
		
		$scope.setFullScreen=function()
		{
			return;
			if(angular.isDefined(window.screenfull))
			{
				var target=$document[0].body;
				//console.log("setFullScreen",target);
				if(!screenfull.isFullscreen)
				{
					
					screenfull.toggle(target,{})
				}
			}
		}
		
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			$scope.app.headers={};
			$scope.app.Manager.LookupManager.requiredLookupsHash={};
			//console.log('------$routeChangeStart',{toState:toState,state:$state})
        if (typeof(toState) !== 'undefined'){
			
           // $templateCache.remove(toState.templateUrl);
        }
    	});

		
		
		$scope.lookupManager=$scope.app.Manager.LookupManager;
		
		$scope.app.lookups={};
		
		//$scope.app.loginUser={user_type:"guest"}
		
		//$timeout($scope.onPageLoad,8000);
		
		//$scope.onPageLoad();
		
		$scope.appLoadHandlers={current:"",handlers:{}};
		
        $scope.app.loadApplicationData=function()
			 {
				 //console.log("loadApplicationData",$scope.app.Manager.LookupManager.requiredLookupsHash);
				 $scope.app.Manager.UIManager.setActiveColor("default",{primary:"accent"});
				
                return $scope.onApplicationLoad()
				 .then($scope.app.Manager.LookupManager.loadCustomLookups)
				 .then($scope.app.Manager.LookupManager.loadRequiredLookups)
				 .then(function(){
					 $scope.app.lookups=$scope.app.Manager.LookupManager.lookups;
					 $scope.app.lookupsHash=$scope.app.Manager.LookupManager.lookupsHash;
					 return $scope.app.Manager.LookupManager.requiredLookupsHash;
				 
				 });
			 }
		
		$scope.AppCtrlOnLoad=function(sps)
			 {
				 sps=sps?sps:"";
				// console.log(sps + "AppCtrlOnLoad",$scope.app.Manager.LookupManager.requiredLookupsHash);
				 return $scope.app.Manager.LookupManager.loadCustomLookups()
				 .then($scope.app.Manager.LookupManager.loadRequiredLookups)
				 .then(function(){
					 return $scope.app.Manager.LookupManager.requiredLookupsHash;
				 
				 });
				 
				// .then(function(){return $scope.loadViewHooks($state.current);});
			 }
		
		$scope.setCurrentStartup=function(ctrl)
		{
			$scope.appLoadHandlers.current=ctrl;
			//console.log("setCurrentStartup");
			var pollLoaders=function()
			{
				
				$scope.pollCount--;
				var handler=$scope.appLoadHandlers.handlers[ctrl];
				if(handler)
				{
					//console.log("----Found" + $scope.pollCount);
					handler();
				}
				else if($scope.pollCount)
				{
					//console.log("----Not Found" + $scope.pollCount);
					$timeout(pollLoaders,1000);
				}
			}
			//console.log("--pollLoaders");
			pollLoaders();
			//$scope.onAppLoad();
		}
		
        function openPage() {
          // goto top
		 // console.log("openPage");
		  
		  if(Pace)
		  {
			//  Pace.restart();
		  }
          $location.hash('content');
          $anchorScroll();
          $location.hash('');
          // hide open menu
          $('#aside').modal('hide');
          $('body').removeClass('modal-open').find('.modal-backdrop').remove();
          $('.navbar-toggleable-sm').collapse('hide');
        };

        vm.goBack = function () {
          $window.history.back();
        };

        function isIE() {
          return !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
        }

        function isSmart(){
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        function getParams(name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
		//$scope.onAppLoad();

      }
})();
