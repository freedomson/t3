angular.module('Branding', [/*'templates-dist'*/])
  .controller('BrandingMainController',
        ['$scope','cssInjector',
        function($scope, cssInjector) {

          $scope.vm = {
            name : 'Gugabooks',
            slug: 'A book for everyone!',
            logo : 'images/logo.svg'
          };

          cssInjector.add("src/features/branding/branding.css");

    }])
  .directive('branding', function ($templateCache) {
    return {
      scope: {},
      restrict: 'E',
      // template: $templateCache.get('src/features/branding/branding.html'),
      templateUrl: 'src/features/branding/branding.html',
      controller: 'BrandingMainController'
    }
  });
