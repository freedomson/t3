angular.module('Branding', [/*'templates-dist'*/])
  .directive('branding', function ($templateCache) {
    return {
      restrict: 'E',
      // template: $templateCache.get('src/features/branding/branding.html'),
      templateUrl: 'src/features/branding/branding.html',
      controller: function ($scope) {
      	var vm;
        $scope.vm = {
        	name : 'bbeauty.today',
          logo : 'images/logos.svg'
        }
      }
    }
  });