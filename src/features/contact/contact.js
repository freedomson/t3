angular.module('Contact', [/*'templates-dist'*/])
  .controller('ContactMainController',
        ['$scope','cssInjector','$translate','$rootScope',
        function($scope,cssInjector, $translate,  $rootScope) {

          $scope.vm = {
            note:''
          };

            function updateTranslation(){
                $translate(['FOOTER.NOTE']).then(function (trans) {
                    $scope.vm.note = trans['FOOTER.NOTE'];
                });
            }

            $rootScope.$on('$translateChangeSuccess', function () {
                updateTranslation();
            });

            cssInjector.add("src/features/contact/contact.css");
            updateTranslation();

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
