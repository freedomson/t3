angular.module('Error', [/*'templates-dist'*/])
  .controller('ErrorMainController',
        ['SystemDefaults', '$stateParams', '$scope','cssInjector','$translate','$rootScope',
        function(SystemDefaults,$stateParams, $scope, cssInjector, $translate,  $rootScope) {

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
          $translate.use($stateParams.lang.replace("__","").replace("__",""));
          
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
