angular.module('Branding', [/*'templates-dist'*/])
  .controller('BrandingMainController',
        ['$scope',
        function($scope) {

          var vm;
          $scope.vm = {
            name : '5bbeauty.today',
            logo : 'images/logo.svg'
          };

    }])
  .directive('branding', function ($templateCache) {
    return {
      restrict: 'E',
      // template: $templateCache.get('src/features/branding/branding.html'),
      templateUrl: 'src/features/branding/branding.html',
      controller: 'BrandingMainController'
    }
  });