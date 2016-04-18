angular.module('Branding', [/*'templates-dist'*/])
  .controller('BrandingMainController',
        ['$scope',
        function($scope) {

          $scope.vm = {  
            name : 'Team',
            logo : 'images/logo.svg'   
          };
 
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