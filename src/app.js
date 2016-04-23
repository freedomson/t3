angular.module( 'App', [
    "the-cormoran.angular-loaders",
    'ngLoadingSpinner',
    'oc.lazyLoad',
    'ui.router',
    'ngResource',
    'Branding',
    'Contact',
    'Floors',
    'API.Services',
    'angular.css.injector']);
 // var app = angular.module('TodosApp', ['ngResource','Branding','Todos']);

angular.module('App')

.constant("setup", {
    "version": "0.0.1"
})

.config(function($stateProvider, cssInjectorProvider) {

  cssInjectorProvider.setSinglePageMode(true);

  $stateProvider.state('home', { // state for showing all movies
    url: '/',
    templateUrl: 'src/features/floors/partial.html',//,
    controller: 'FloorsListController'/*,
      resolve: {
        load: ['cssInjector', function (cssInjector) {
          cssInjector.add("src/features/branding/branding.css");
        }]}*/
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
