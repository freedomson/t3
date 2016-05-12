angular.module('Login', [/*'templates-dist'*/])
  .controller('LoginMainController',
        ['SystemDefaults','$scope','cssInjector','$translate','$rootScope','$timeout',
        function(SystemDefaults,$scope, cssInjector, $translate,  $rootScope, $timeout) {

        function onClick() {
          $scope.vm.showInput = !$scope.vm.showInput;
          if ($scope.vm.showInput) {
            $timeout(function(){
              document.getElementById('username').focus();
            });
          }
        }
        $scope.vm = {
          brand: SystemDefaults.brand,
          email : '',
          showInput: false,
          onClick: onClick
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
