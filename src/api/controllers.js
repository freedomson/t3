angular.module('api.controllers', []).controller('PaseeoListController', 
    function($scope, $state, /*popupService,*/ $window, Paseeo) {
        //$scope.Paseeos = Paseeo.query(); //fetch all Paseeos. Issues a GET to /api/Paseeos
        var results = Paseeo.get({ id: 'root' });

        results.$promise.then(function(paseeo) {
            //debugger
            $scope.paseeos = paseeo.children;
            //alert('Success: ' + greeting);
        }, function(reason) {
            console.log(arguments);
            alert('Failed: ' + reason);
        });
        /*
        $scope.deletePaseeo = function(Paseeo) { // Delete a Paseeo. Issues a DELETE to /api/Paseeos/:id
            if (popupService.showPopup('Really delete this?')) {
            Paseeo.$delete(function() {
                $window.location.href = ''; //redirect to home
            });
            }
        };
        */
}).controller('PaseeoViewController', function($scope, $stateParams, Paseeo) {
  $scope.Paseeo = Paseeo.get({ id: $stateParams.id }); //Get a single Paseeo.Issues a GET to /api/Paseeos/:id
}).controller('PaseeoCreateController', function($scope, $state, $stateParams, Paseeo) {
  $scope.Paseeo = new Paseeo();  //create new Paseeo instance. Properties will be set via ng-model on UI

  $scope.addPaseeo = function() { //create a new Paseeo. Issues a POST to /api/Paseeos
    $scope.Paseeo.$save(function() {
      $state.go('Paseeos'); // on success go back to home i.e. Paseeos state.
    });
  };
}).controller('PaseeoEditController', function($scope, $state, $stateParams, Paseeo) {
  $scope.updatePaseeo = function() { //Update the edited Paseeo. Issues a PUT to /api/Paseeos/:id
    $scope.Paseeo.$update(function() {
      $state.go('Paseeos'); // on success go back to home i.e. Paseeos state.
    });
  };

  $scope.loadPaseeo = function() { //Issues a GET request to /api/Paseeos/:id to get a Paseeo to update
    $scope.Paseeo = Paseeo.get({ id: $stateParams.id });
  };

  $scope.loadPaseeo(); // Load a Paseeo which can be edited on UI
});