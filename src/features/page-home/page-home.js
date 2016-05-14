angular.module('PageHome', [/*'templates-dist'*/])
  .controller('PageHomeMainController',
        ['$scope','cssInjector','$rootScope','$translate',
        function($scope,cssInjector,$rootScope,$translate) {

            $scope.vm = {
              labelCreate   : ''
            };

            function updateTranslation(){
                $translate(['BUTTON.CREATE']).then(function (trans) {
                    $scope.vm.labelCreate = trans['BUTTON.CREATE'];
                });
            }

            $rootScope.$on('$translateChangeSuccess', function () {
                updateTranslation();
            });

            cssInjector.add("src/css/main.css");
            cssInjector.add("src/css/block.css");
            cssInjector.add("src/css/lettering.css");
            cssInjector.add("src/css/button.css");
            cssInjector.add("src/css/color.css");

            cssInjector.add("src/vendor/animate/animate.min.css");

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
