angular.module('Contact', [/*'templates-dist'*/])
  .controller('ContactMainController',
        ['$scope','cssInjector',
        function($scope,cssInjector) {

          $scope.vm = {
           contacts : [
            'With Love from Lisbon',
            '2016 & Rolling'
          ]
          };

          cssInjector.add("src/features/contact/contact.css");

    }])
  .directive('contact', function ($templateCache) {
    return {
      scope: {},
      restrict: 'E',
      // template:  $templateCache.get('src/features/branding/contact.html'),
      templateUrl: 'src/features/contact/contact.html',
      controller: 'ContactMainController'
    }
  });
