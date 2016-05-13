angular.module('Login', ['API.Services'/*'templates-dist'*/])
  .controller('LoginMainController',
        ['Login','SystemDefaults','$scope','cssInjector','$translate','$rootScope','$timeout',
        function(Login, SystemDefaults,$scope, cssInjector, $translate,  $rootScope, $timeout) {

        function requestToken(email){

          var results = Login.post({},{
            user: email,
            origin: SystemDefaults.domain
          });
          results.$promise.then(function(response) {
              //debugger
              console.log(arguments);

          }, function(reason) {

              $translate(['ROUTE.ERROR']).then(function (trans) {
                  $location.path(trans['ROUTE.ERROR'] + '/' + (reason.status
                    || SystemDefaults.getDefaultError() ) );
              });
              console.log(reason, arguments);
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
          email : '',
          showInput: false,
          onClick: onClick,
          requestToken: requestToken
        };

        cssInjector.add("src/features/login/login.css");

        $timeout(function(){
          onClick();
        }, 3000);

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
