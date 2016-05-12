angular.module('Config.Services', []).service(
  'SystemDefaults', function($resource,
  $translate, $rootScope, $location, $filter) {

    var config = {
      error : {
        default : 403
      },
      lang: ''
    };
//debugger;
    /*$rootScope.$on('$translateChangeSuccess', function () {
        console.log(arguments);
        //updateTranslation();
    });*/

    var hash = $filter('date')(new Date(), 'yyyy-MM-dd-HH-mm-ss-Z', '+0000')

    $rootScope.$on('$locationChangeStart', function (me,newv,old) {
        var lang = newv.match(/__(.*)__/);
        if( !lang ){

            var parser = document.createElement('a');
            parser.href = newv;

            parser.protocol; // => "http:"
            parser.hostname; // => "example.com"
            parser.port;     // => "3000"
            parser.pathname; // => "/pathname/"
            parser.search;   // => "?search=test"
            parser.hashP = parser.hash.replace("#/", "/");;     // => "#hash"
            parser.host;     // => "example.com:3000"

            me.preventDefault();
            parser.hash;     // => "#hash"
            console.log(parser.hashP);

            $translate(['ROUTE.ERROR']).then(function (trans) {
                console.log(arguments);
            });
            $location.path(parser.hashP+'/__'+$translate.use()+'__/'+hash);


        }
        //updateTranslation();
    });


    $rootScope.$on('$translateChangeSuccess', function () {
        moment.locale($translate.use());
    });


    function getDefaultError(){
      return config.error.default;
    }

    function getLang(){
      return $translate(['BUTTON.CREATE']);
    }

  return {
      brand: 'pliik',
      getLang: getLang,
    getDefaultError : getDefaultError
  };
});
