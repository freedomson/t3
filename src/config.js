angular.module('Config.Services', []).service(
  'SystemDefaults', function($resource) {

    var config = {
      error : {
        default : 403
      }
    };

    function getDefaultError(){
      return config.error.default;
    }

  return {
    getDefaultError : getDefaultError
  };
});
