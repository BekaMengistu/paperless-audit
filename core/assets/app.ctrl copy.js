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

      AppCtrl.$inject  = ['$scope', '$localStorage', '$location', '$rootScope', '$anchorScroll', '$timeout', '$window','$state','$templateCache','userService',"AppService"];//.current.data.taskManager];

      function AppCtrl($scope, $localStorage, $location, $rootScope, $anchorScroll, $timeout, $window,$state,$templateCache,userService,AppService) {
		  
		  $scope.scrollTo=function(id)
		  {
			  $location.hash(id);
			  $anchorScroll();
		  }
		  
		  console.log("AppCtrl");
        var vm = $scope;
        vm.isIE = isIE();
        vm.isSmart = isSmart();
		
		$scope.taskManager="none";
        // config
		/*
		var uploader = $scope.uploader = {url: 'files/upload.php'};
			
			uploader.onAfterAddingFile = function(fileItem) {
                console.info('onAfterAddingFile', fileItem);
				fileItem.upload();
            };			
			
			uploader.onSuccessItem = function(fileItem, response, status, headers) {
                //console.info('onSuccessItem', fileItem, response, status, headers);
				console.info('onSuccessItem', {response: response, status:status, headers:headers});
				//$scope.editedUser.profile_picture=response.fileName;
				
				//$scope.saveUser();
				//$scope.selectedDigitalDocument.file_path=fileItem.file.name;
				//$scope.saveDigitalDocument($scope.selectedDigitalDocument);
            };
		*/
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

        $rootScope.$on('$stateChangeSuccess', openPage);
		
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			console.log('...............$routeChangeStart',toState)
        if (typeof(toState) !== 'undefined'){
			
            $templateCache.remove(toState.templateUrl);
        }
    	});

		baseController(vm,$timeout,userService,AppService);
		
		//$scope.app.loginUser={user_type:"guest"}
		
		//$timeout($scope.onPageLoad,8000);
		
		$scope.onPageLoad();
		
        function openPage() {
          // goto top
		  console.log("openPage");
		  
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

      }
})();
