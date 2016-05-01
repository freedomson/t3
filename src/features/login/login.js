angular.module('Login', [/*'templates-dist'*/])
  .controller('LoginMainController',
        ['$scope','cssInjector','$translate','$rootScope','$timeout',
        function($scope, cssInjector, $translate,  $rootScope, $timeout) {

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
          onClick: onClick
        };

        function updateTranslation(){
          $translate(['EMAIL']).then(function (trans) {
              $scope.vm.email = trans.EMAIL;
          });
        }
        $rootScope.$on('$translateChangeSuccess', function () {
            updateTranslation();
        });

        cssInjector.add("src/features/login/login.css");
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
