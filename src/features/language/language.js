angular.module('Language', [/*'templates-dist'*/])
  .controller('LanguageController',
        ['$scope','cssInjector', '$translate',
        function($scope,cssInjector,$translate) {

          $scope.vm = {
            setLang: function(langKey) {
              console.log(arguments);
              $translate.use(langKey);
            }
          };

          cssInjector.add("src/features/language/language.css");

    }])
  .directive('language', function ($templateCache) {
    return {
      scope: {},
      restrict: 'E',
      // template:  $templateCache.get('src/features/branding/contact.html'),
      templateUrl: 'src/features/language/language.html',
      controller: 'LanguageController'
    }
  });
