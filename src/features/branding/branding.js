angular.module('Branding', [/*'templates-dist'*/])
  .controller('BrandingMainController',
        ['$scope','cssInjector','$translate','$rootScope',
        function($scope, cssInjector, $translate,  $rootScope) {

          $scope.vm = {
            name : '',
            slug: '',
            logo : 'images/logo.svg'
          };
          
        function updateTranslation(){
            $translate(['BRAND', 'SLUG']).then(function (trans) {
                $scope.vm.name = trans.BRAND;
                $scope.vm.slug = trans.SLUG;
            });
        }

        $rootScope.$on('$translateChangeSuccess', function () {
            updateTranslation();
        });
            
        cssInjector.add("src/features/branding/branding.css");
        updateTranslation();

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
