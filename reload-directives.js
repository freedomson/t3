(function () {

  function nonAngularKey(key) {
    return !/^\$/.test(key);
  }

  function nonMethod(obj, key) {
    return typeof obj[key] !== 'function';
  }

  function deepClone(x) {
    return JSON.parse(JSON.stringify(x));
  }

  function getRootModule() {
    return document.querySelector('[ng-app]').attributes['ng-app'];
  }

  // returns all element directive names found in page
  function getAllDirectives() {

  }

  function jsToHtml(string){
    return string.replace('js', 'html');
  }

  function getRemoteScope($timeout, $rootScope, $compile, $http, directive, path){
    this.directive = directive;
    this.$compile = $compile;
    this.$timeout = $timeout;
    var me = this;
    console.log(directive);
    $http({
    method: 'GET',
    url: path
    }).then(
      angular.bind(this,
      function successCallback(response) {
      var directive = this.directive;
      var directiveCopy = directive[0].toUpperCase() + directive.substring(1).toLowerCase();
      var out = response.data.replace(new RegExp(directive, 'g'), directive + '__');
      out = out.replace(new RegExp(directiveCopy, 'g'), directiveCopy + '__');
      out = out.replace(new RegExp('__/', 'g'), '/');
      out = out.replace(new RegExp('__.html', 'g'), '.html');
      console.log(out);
      console.log(this.directive + '---' + directiveCopy);
      var m = eval(out);
      console.log(m);
      var generatedTemplate = '<'+directive+'__'+'></'+directive+'__'+'>';
      var nscope = $rootScope.$new();

      // console.log(this.$compile(generatedTemplate)(nscope))
      var el = document.body.appendChild(this.$compile(generatedTemplate)(nscope)[0]);
      console.log(el);
      this.$timeout( function() {
        console.log(angular.element(document.querySelector(directiveCopy + '__')).scope());
      },0);
      // this callback will be called asynchronously
      // when the response is available
    }), function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
     console.log('Network error!');
    });
  }

  // returns true if reloads a directive from given path
  function reloadAngularDirectiveTemplate(inPathArg) {
    var originalPath = angular.copy(inPathArg);
    var path = jsToHtml(originalPath);
    var injector = angular.element(document.body).injector();
    var $templateCache = injector.get('$templateCache');
    //$templateCache.removeAll();
    //console.log('presence');
    console.log(path);

    if (!$templateCache.get(path)) {
       console.log('Template not found:' + path);
      return;
    }

    var appModule = getRootModule();
    if (!appModule || !appModule.value) {
      console.log('Could not find root module');
      return;
    }

    console.log('We have template cache!');
    $templateCache.remove(path);

    appModule = String(appModule.value);

    console.log('app module', appModule);

    // TODO grab all directives provided by all modules
    // see https://github.com/bahmutov/ng-ast
    // look at each module's _invokeQueue to see if there is a directive
    // keep walking down the dependent modules (requires)

    var directiveName = (path.split('\\').pop().split('/').pop()).split('.')[0];
    console.log('Directive match: ' + directiveName );

    var $compile = injector.get('$compile');
    var $timeout = injector.get('$timeout');
    var $compile = injector.get('$compile');
    var $rootScope = injector.get('$rootScope');
    var $http = injector.get('$http');
    var directive = document.querySelector(directiveName);
    console.log('Directive', directive);
    if (!directive){
        console.log('**** ERROR: Unknown directive!');
        return;
    }

    var scope = angular.element(directive).scope();

    var ownProperties = Object.keys(scope)
      .filter(nonAngularKey)
      .filter(nonMethod.bind(null, scope));

    var clonedOwnScope = ownProperties.map(function (key) {
      return deepClone(scope[key]);
    });

    console.log('existing scope', scope);

    if (originalPath.indexOf('.js')){
      var remoteScope = getRemoteScope($timeout, $rootScope, $compile, $http, directiveName, originalPath);
      console.log(remoteScope);
    }

    var compileFn = $compile(directive);
    var returns = compileFn(scope);

    // todo: when is template updated?

    $timeout(function () {
      console.log('restoring scope data', clonedOwnScope);
      ownProperties.forEach(function (key, k) {
        scope[key] = clonedOwnScope[k];
      });
    }, 100);

    return true;
  }

  function ngTemplateReloadPlugin(window, options) {
    this.window = window;
    this.options = options;
  }
  ngTemplateReloadPlugin.identifier = 'ngTemplate';
  ngTemplateReloadPlugin.prototype.reload = function (path) {
    var result = reloadAngularDirectiveTemplate(path);
    console.log('need to reload ng template?', path, result);
    return result;
  };

  setTimeout(function () {
    if (typeof LiveReload !== 'undefined') {
      if (!LiveReload.hasPlugin(ngTemplateReloadPlugin.identifier)) {
        LiveReload.addPlugin(ngTemplateReloadPlugin);
        console.log('Registered ng hot template live reload plugin');
      }
    }
  }, 50);

}());
