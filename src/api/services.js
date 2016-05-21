angular.module('API.Services', [])
.constant("serviceConfig", {
    // "token": "91595f46-f216-48a2-9a2e-4fd9a4f7fb89",
    "token": "98336894-0299-4e79-b4a3-c95e4e3a23f6",
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
