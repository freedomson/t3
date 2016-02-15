angular.module('Branding', [])
  .directive('branding', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/features/branding/branding.html',
      controller: function ($scope) {
      	var vm;
        $scope.vm = { 
        	name : 'bbeauty.today',
          logo : 'images/logo.svg'
        }
      }
    }
  })
  .directive('contact', function () {
    return {
      restrict: 'E',
      templateUrl: 'src/features/branding/contact.html',
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