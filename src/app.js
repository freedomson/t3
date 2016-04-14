angular.module( 'App', [
    'ui.router', 
    'ngResource',
    'Branding',
    'Todos', 
    'Floors',
    'API.Services']);
 // var app = angular.module('TodosApp', ['ngResource','Branding','Todos']);
   
angular.module('App').config(function($stateProvider) {
  $stateProvider.state('home', { // state for showing all movies
    url: '/',
    templateUrl: 'src/features/floors/partial.html',//,
    controller: 'FloorsListController'
  }).state('paseeos', { // state for showing all movies
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
  $state.go('home'); //make a transition to movies state when app starts
});