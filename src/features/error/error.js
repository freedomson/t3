angular.module('Error', [/*'templates-dist'*/])
  .controller('ErrorMainController',
        ['$stateParams', '$scope','cssInjector','$translate','$rootScope',
        function($stateParams, $scope, cssInjector, $translate,  $rootScope) {

          $scope.vm = {
            code : null
          };

          $scope.vm.code = $stateParams.id;

          cssInjector.add("src/css/main.css");
          cssInjector.add("src/css/block.css");
          cssInjector.add("src/css/lettering.css");
          cssInjector.add("src/css/button.css");
          cssInjector.add("src/css/color.css");

          cssInjector.add("src/features/error/error.css");

    }])
  .directive('error', function ($templateCache) {
    return {
      scope: {},
      restrict: 'E',
      // template: $templateCache.get('src/features/error/error.html'),
      templateUrl: 'src/features/error/error.html',
      controller: 'ErrorMainController'
    }
  });
