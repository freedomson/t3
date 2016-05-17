angular.module('API.Services', [])
.constant("serviceConfig", {
    "token": "31cf4267-49d0-4408-84b3-5884b7e52579",
    "url": "https://www.gugamarket.com"
})
.factory(
  'Floor', function($resource, serviceConfig) {
    var url = serviceConfig.url+'/catalog/children?token='+serviceConfig.token+'&node=:id';

  return $resource(url, { id: '@_id' }, {
    get: {
        method: 'GET',
        withCredentials: false,
        transformResponse: function(data, headers, status){

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
        transformResponse: function(data, headers, status){
            switch (status){
              case 401:
                data = {error: data, code: status};
                break;
              case 200:
                data = angular.fromJson(data);
            }

            return data;
        }
    }
  });
});
//  https://www.gugamarket.com:443/user/getTokenByMail
