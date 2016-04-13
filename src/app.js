angular.module('App', [
    'ui.router', 'ngResource','Branding','Todos',  'api.controllers', 'api.services']);
 // var app = angular.module('TodosApp', ['ngResource','Branding','Todos']);
   
angular.module('App').config(function($stateProvider) {
  $stateProvider.state('paseeos', { // state for showing all movies
    url: '/paseeos',
    templateUrl: 'src/features/paseeos/paseeos.html',
    controller: 'PaseeoListController'
  }).state('viewMovie', { //state for showing single movie
    url: '/movies/:id/view',
    templateUrl: 'partials/movie-view.html',
    controller: 'MovieViewController'
  }).state('newMovie', { //state for adding a new movie
    url: '/movies/new',
    templateUrl: 'partials/movie-add.html',
    controller: 'MovieCreateController'
  }).state('editMovie', { //state for updating a movie
    url: '/movies/:id/edit',
    templateUrl: 'partials/movie-edit.html',
    controller: 'MovieEditController'
  });
}).run(function($state) {
  $state.go('paseeos'); //make a transition to movies state when app starts
});