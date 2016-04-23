angular.module('PageHome', [/*'templates-dist'*/])
  .controller('PageHomeMainController',
        ['$scope','cssInjector',
        function($scope,cssInjector) {

          $scope.vm = {
           contacts : [
            'With Love from Lisbon',
            '2016 & Rolling'
          ]
          };

          cssInjector.add("src/css/main.css");
          cssInjector.add("src/css/block.css");
          cssInjector.add("src/css/lettering.css");
          cssInjector.add("src/css/button.css");

          cssInjector.add("src/features/page-home/page-home.css");

    }])
  .directive('pageHome', function ($templateCache) {
    return {
      scope: {},
      restrict: 'E',
      // template:  $templateCache.get('src/features/branding/contact.html'),
      templateUrl: 'src/features/page-home/page-home.html',
      controller: 'PageHomeMainController'
    }
  });
