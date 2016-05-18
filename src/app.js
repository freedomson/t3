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
    'Language',
    'Login',
    'Error',
    'Config.Services',
    'Modal']);
 // var app = angular.module('TodosApp', ['ngResource','Branding','Todos']);

angular.module('App')

.constant("setup", {
    "version": "0.0.1"
})

.config(function($translateProvider,$locationProvider,
  $stateProvider, cssInjectorProvider) {

  $locationProvider.html5Mode(false);
  cssInjectorProvider.setSinglePageMode(true);
//debugger;
  // add translation table
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider
    .translations('pt-PT', translationsPtPT)
    .translations('pt-BR', translationsPtPT)
    .translations('en-US', translationsEnUS)
    // .preferredLanguage('en_US')
    .fallbackLanguage('en-US')
    .uniformLanguageTag('bcp47')
    .determinePreferredLanguage();

/*
  $routeTranslator = {
    'error' : function() {
       try {
          return $translateProvider.translations()[$translateProvider.preferredLanguage()]['ROUTE.ERROR'];
       } catch(e){
          return 'error';
       }
    }()
  }


  try {
      //$translateProvider.translations()[$translateProvider.preferredLanguage()]['ROUTE.ERROR']
      //A.each$translateProvider.translations();

      var t = $translateProvider.translations();

      angular.forEach( t, function(value,key,all){

        $stateProvider
        // error
        // ----------------------------------------------
        .state('error'+key, { // state for showing all movies
            url: '/'+value['ROUTE.ERROR']+'/:id/:lang/:date',
            templateUrl: 'src/features/error/error.html',//,
            controller: 'ErrorMainController'
        });

      });
  } catch(ex){
      console.log(ex)
  }
  */
$stateProvider
// error
// ----------------------------------------------
.state('error', { // state for showing all movies
    url: '/error/:id',
    templateUrl: 'src/features/error/error.html',//,
    controller: 'ErrorMainController'
})
.state('error-pt', { // state for showing all movies
    url: '/erro/:id',
    templateUrl: 'src/features/error/error.html',//,
    controller: 'ErrorMainController'
});

  $stateProvider
  // home
  // ----------------------------------------------
  .state('home', { // state for showing all movies
    url: '',
    templateUrl: 'src/features/page-home/page-home.html',//,
    controller: 'PageHomeMainController'
  }).
  // todo
  // ----------------------------------------------
  state('viewMovie', { //state for showing single movie
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
