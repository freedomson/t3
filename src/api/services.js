angular.module('API.Services', [])
.constant("serviceConfig", {
    "token": "38280cc6-0d9d-483e-9dbd-2551313ac5b7",
    "url": "https://www.gugamarket.com"
})
.factory(
  'Floor', function($resource, serviceConfig) {
    var url = serviceConfig.url+'/catalog/children?token='+serviceConfig.token+'&node=:id';

  return $resource(url, { id: '@_id' }, {
    get: {
        method: 'GET',
        withCredentials: false,
        transformResponse: function(data, headers){
            data = angular.fromJson(data);
            return data;
        }
    }
  });
})
.factory(
  'Login', function($resource, serviceConfig) {

  var url = serviceConfig.url+'/user/getTokenByMail';

  return $resource(url, {}, {
    post: {
        method: 'POST',
        withCredentials: false,
        transformResponse: function(data, headers){
            data = angular.fromJson(data);
            return data;
        }
    }
  });
});
//  https://www.gugamarket.com:443/user/getTokenByMail
