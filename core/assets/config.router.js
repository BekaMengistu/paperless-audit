(function() {
    'use strict';
    angular
      .module('app')
      .run(runBlock)
      .config(config);

      runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
      function runBlock($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }

      config.$inject =  ['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG'];
      function config( $stateProvider,   $urlRouterProvider,   MODULE_CONFIG ) {
        
        var p = getParams('layout'),
            l = p ? p + '.' : '',
            layout = 'core/views/layout/layout.'+l+'php',
			
            dashboard = 'core/views/dashboard/dashboard.'+l+'html';
//console.log(layout);
        $urlRouterProvider
          .otherwise('/app/audit/list');
		var appState=$stateProvider
          .state('app', { controller:'AppCtrl', url: '/app', resolve:load(['angularFileUpload']),data:{onLoad:"loadApplicationData"},
            views: { '': {templateUrl: layout}}
          });
      
			var resetValues={forwardLink:"",onLoad:""};
			      
			for(var i in applicationRoutes)
				{    
					
						var r=applicationRoutes[i];
						var uroute={};
						for(var j in r)
						{
							uroute[j]=r[j];
						}
						uroute.data=uroute.data?uroute.data:{};
						
						for(var rv in resetValues)
						{
							uroute.data[rv]=uroute.data[rv]?uroute.data[rv]:"";
						}
					//	uroute.data.forwardLink=uroute.data.forwardLink?uroute.data.forwardLink:"";
						uroute.resolve=load(r.resolve);
					//	var fields=["abstract","url",
						
						appState=appState.state(i,uroute);
						//appState=appState.state(i,{abstract:r.abstract,url:r.url,controller:r.controller,data:r.data,template:r.template,templateUrl:r.templateUrl,resolve:load(r.resolve)});
					
				}
		  appState.state('app.dashboard', {
              url: '/dashboard',
              templateUrl: dashboard,
              data : { title: 'Dashboard' },
              controller: "ChartCtrl",
              resolve: load(['scripts/controllers/chart.js','angularFileUpload'])
            });
             
             	
 

            
 function load(srcs, callback) {
          return {
              deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                  var deferred = $q.defer();
                  var promise  = false;
                  srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                  if(!promise){
                    promise = deferred.promise;
                  }
                  angular.forEach(srcs, function(src) {
                    promise = promise.then( function(){
                      angular.forEach(MODULE_CONFIG, function(module) {
                        if( module.name == src){
                          src = module.module ? module.name : module.files;
                        }
                      });
                      return $ocLazyLoad.load(src);
                    } );
                  });
                  deferred.resolve();
                  return callback ? promise.then(function(){ return callback(); }) : promise;
              }]
          }
        }

        function getParams(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
      }
})();
            
           