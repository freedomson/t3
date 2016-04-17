angular.module('Contact', [/*'templates-dist'*/])
  .controller('ContactMainController',
        ['$scope',
        function($scope) {

          var vm;
          $scope.contacts = [
            '+351 964 970 230',
            'salon@bbeauty.today',
            'bbeauty.today',
            'Holmes Place | Miraflores'
          ];

    }])
  .directive('contact', function ($templateCache) {
    return {
      restrict: 'E',
      // template:  $templateCache.get('src/features/branding/contact.html'),
      templateUrl: 'src/features/contact/contact.html',
      controller: 'ContactMainController'
    }
  });