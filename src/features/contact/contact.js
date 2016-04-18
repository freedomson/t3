angular.module('Contact', [/*'templates-dist'*/])
  .controller('ContactMainController',
        ['$scope',
        function($scope) {

          $scope.vm = {
           contacts : [
            'Street name'
          ]
          };

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