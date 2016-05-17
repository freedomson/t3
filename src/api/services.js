angular.module('API.Services', [])
.constant("serviceConfig", {
    "token": "99673512-ead7-41af-93cf-bfb335543ae8",
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
