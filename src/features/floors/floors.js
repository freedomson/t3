angular.module('Floors', ['API.Services'/*'templates-dist'*/])
    .controller('FloorsListController', 
        ['$scope', 'Floor',
        function($scope, Floor) {

            var results = Floor.get({ id: 'root' });

            results.$promise.then(function(Floor) {
                //debugger
                $scope.floors = Floor.children;
                //alert('Success: ' + greeting);
            }, function(reason) {
                console.log(arguments);
                alert('Failed: ' + reason);
            });
    
    }])
  .directive('floors', function ($templateCache) {
    return {
      restrict: 'E',
      templateUrl: 'src/features/floors/floors.html',
      controller: 'FloorsListController'
    };
  });