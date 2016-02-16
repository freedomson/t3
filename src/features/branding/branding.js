angular.module('Branding', ['templates-dist'])
  .directive('branding', function ($templateCache) {
    return {
      restrict: 'E',
      template: $templateCache.get('src/features/branding/branding.html'),
      controller: function ($scope) {
      	var vm;
        $scope.vm = { 
        	name : 'bbeauty.today',
          logo : 'images/logo.svg'
        }
      }
    }
  })
  .directive('contact', function ($templateCache) { 
    return {
      restrict: 'E',
      template:  $templateCache.get('src/features/branding/contact.html'),
      controller: function ($scope) {
      	var vm;
        $scope.contacts = [ 
        	'+351 964 970 230',
        	'salon@bbeauty.today',
        	'bbeauty.today',
        	'Holmes Place | Miraflores'
        ]
      }
    }
  });