angular.module('Floors', ['API.Services'/*'templates-dist'*/])
    .controller('FloorsListController',
        ['$scope', 'Floor', 'cssInjector',
        function($scope, Floor, cssInjector) {

            var results = Floor.get({ id: 'root' });

            $scope.vm = {
              loading: true
            };

            results.$promise.then(function(Floor) {
                //debugger
                // console.log(Floor);
                $scope.vm.floors = Floor.children;
                $scope.vm.floors.forEach(function(item){
                  //console.log(item)
                  item.date = new Date(item.updated);
                });

                $scope.vm.loading = false;
                //alert('Success: ' + greeting);
            }, function(reason) {
                console.log(reason, arguments);
                // alert('Failed: ' + reason);
            });

            cssInjector.add("src/features/floors/floors.css");

    }])
  .directive('floors', function ($templateCache) {
    return {
      restrict: 'E',
      templateUrl: 'src/features/floors/floors.html',
      controller: 'FloorsListController'
    };
  });
