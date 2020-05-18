buildDependencyArray();

//console.log("applicationDependencies",applicationDependencies);

// lazyload config
(function() {
    'use strict';
    angular
      .module('app')
      .constant('MODULE_CONFIG', applicationDependencies
        
      )
      .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
          $ocLazyLoadProvider.config({
              debug: false,
              events: false,
              modules: MODULE_CONFIG,
			  cache: false
          });
      }]);
})();

