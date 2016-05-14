angular.module('API.Services', [])
.constant("serviceConfig", {
    "token": "c0e1c45e-6ea9-4c1d-b306-a3e6a4d392a8",
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
