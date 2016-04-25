var translationsEnUs = {
  PT: 'Portuguese',
  EN_US: 'American English',
  HEADLINE: 'What an awesome module!',
  PARAGRAPH: 'Srsly!',
  NAMESPACE: {
    PARAGRAPH: 'And it comes with awesome features!'
  }
};

var translationsPt = {
  PT: 'Português',
  EN_US: 'Inglês Americano',
  HEADLINE: 'Ola pt',
  PARAGRAPH: 'Srsly!',
  NAMESPACE: {
    PARAGRAPH: 'And it comes with awesome features!'
  }
};

angular.module( 'App', [
    "angular-centered",
    "the-cormoran.angular-loaders",
    'ngLoadingSpinner',
    'oc.lazyLoad',
    'ui.router',
    'ngResource',
    'Branding',
    'Contact',
    'Floors',
    'API.Services',
    'angular.css.injector',
    'pascalprecht.translate',
    'PageHome',
    'Language']);
 // var app = angular.module('TodosApp', ['ngResource','Branding','Todos']);

angular.module('App')

.constant("setup", {
    "version": "0.0.1"
})

.config(function($translateProvider,$locationProvider,
  $stateProvider, cssInjectorProvider) {

  $locationProvider.html5Mode(true);
  cssInjectorProvider.setSinglePageMode(true);

  // add translation table
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider
    .translations('pt', translationsPt)
    .translations('en_US', translationsEnUs)
    // .preferredLanguage('en_US')
    .fallbackLanguage('en_US')
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();

  $stateProvider
  // home
  // ----------------------------------------------
  .state('home', { // state for showing all movies
    url: '/:lang',
    templateUrl: 'src/features/page-home/page-home.html',//,
    controller: 'PageHomeMainController'

  // todo
  // ----------------------------------------------
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
