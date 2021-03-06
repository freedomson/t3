angular.module('Floors', ['API.Services'/*'templates-dist'*/])
    .controller('FloorsListController',
        ['SystemDefaults','$location', '$scope', 'Floor', 'cssInjector','$translate','$rootScope',
        function(SystemDefaults, $location, $scope, Floor
          , cssInjector, $translate,  $rootScope) {

            var results = Floor.get({ id: 'root' });

            $scope.vm = {};

            results.$promise.then(function(Floor) {
                //debugger
                // console.log(Floor);
                $scope.vm.floors = Floor.children;
                $scope.vm.floors.forEach(function(item){
                  //console.log(item)
                  item.date = new Date(item.updated);
                  // request a weekday along with a long date
                  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                  item.dateFull = moment(item.date).fromNow();// item.date.toLocaleDateString('pt-PT', options);
                  // → "Donnerstag, 20. Dezember 2012"

                });
                updateTranslation();
                //alert('Success: ' + greeting);
                /*
                $translate(['ROUTE.ERROR']).then(function (trans) {
                    $location.path(trans['ROUTE.ERROR'] + '/' +
                      SystemDefaults.getDefaultError() );
                });
                */


            }, function(reason) {

                $translate(['ROUTE.ERROR']).then(function (trans) {
                    $location.path(trans['ROUTE.ERROR'] + '/' + (reason.status
                      || SystemDefaults.getDefaultError() ) );
                });
                console.log(reason, arguments);
                // alert('Failed: ' + reason);
            });

            function updateTranslation(){
              $scope.vm.floors.forEach(function(item){
                //console.log(item)
                item.date = new Date(item.updated);
                item.dateFull = moment(item.date).fromNow();
                // request a weekday along with a long date
                var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                // console.log($translate.proposedLanguage());
                // item.dateFull = item.date.toLocaleDateString($translate.proposedLanguage(), options);
                // → "Donnerstag, 20. Dezember 2012"

              });
            }

            $rootScope.$on('$translateChangeSuccess', function () {
                updateTranslation();
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
