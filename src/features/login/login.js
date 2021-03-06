angular.module('Login', ['API.Services'/*'templates-dist'*/])
  .controller('LoginMainController',
        ['$location','Login','SystemDefaults','$scope','cssInjector','$translate','$rootScope','$timeout',
        function($location, Login, SystemDefaults,$scope, cssInjector, $translate,  $rootScope, $timeout) {

          var emailSent = false;

          // button stops blink
          function onFocus(){
            $scope.vm.animateLogin = false;
          }

        function requestToken(email){

          if (!email) {
            $scope.vm.animateLogin = true;
            return;
          }

          var results = Login.post({},{
            user: email,
            origin: SystemDefaults.domain
          });
          results.$promise.then(function(response) {
              //debugger
              // console.log(arguments);
              $scope.vm.showInput = false;
              emailSent = true;
              updateTranslation(function() {
                $scope.vm.animateLogin = true;
              });

          }, function(reason) {

              $translate(['ROUTE.ERROR']).then(function (trans) {
                  $location.path(trans['ROUTE.ERROR'] + '/' + (reason.status
                    || SystemDefaults.getDefaultError() ) );
              });
              // console.log(reason, arguments);
              // alert('Failed: ' + reason);
          });
        }

        function onClick() {
          $scope.vm.showInput = !$scope.vm.showInput;
          if ($scope.vm.showInput) {
            $timeout(function(){
              document.getElementById('username').focus();
            });
          }
        }
        $scope.vm = {
          text: '',
          email : '',
          showInput: false,
          onClick: onClick,
          requestToken: requestToken,
          onFocus: onFocus,
          animateLogin: false
        };

        cssInjector.add("src/features/login/login.css");

        $timeout(function(){
          onFocus();
          onClick();
        }, 1900);

        function updateTranslation(cb){
          $translate(['SENTMAIL', 'SLOGAN']).then(function (trans) {
            if (emailSent){
              $scope.vm.text = trans['SENTMAIL'];
            } else {
              $scope.vm.text = trans['SLOGAN'];
            }
            if (cb) cb();
          });
        }

        $rootScope.$on('$translateChangeSuccess', function () {
            updateTranslation();
        });

        updateTranslation();
    }])
  .directive('login', function ($templateCache) {
    return {
      scope: {},
      restrict: 'E',
      // template: $templateCache.get('src/features/login/login.html'),
      templateUrl: 'src/features/login/login.html',
      controller: 'LoginMainController'
    }
  });
