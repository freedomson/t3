angular.module('Modal', ['API.Services'/*'templates-dist'*/])
  .controller('ModalMainController',
        ['$location','SystemDefaults','$scope','cssInjector','$translate','$rootScope','$timeout',
        function($location, SystemDefaults,$scope, cssInjector, $translate,  $rootScope, $timeout) {


        $scope.vm = {
        };

        cssInjector.add("src/features/modal/modal.css");

    }])
  .directive('modal', function ($templateCache) {
    return {
      scope: {},
      restrict: 'E',
      // template: $templateCache.get('src/features/login/login.html'),
      templateUrl: 'src/features/modal/modal.html',
      controller: 'ModalMainController'
    }
  });
