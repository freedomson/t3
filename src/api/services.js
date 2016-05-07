angular.module('API.Services', [])
.factory(
  'Floor', function($resource) {

  var token = '6222c1c4-a269-4702-926a-110f4a4de031';
  var url = 'https://www.gugamarket.com/catalog/children?token='+token+'&node=:id';

  return $resource(url, { id: '@_id' }, {
    get: {
        method: 'GET',
        transformResponse: function(data, headers){
            data = angular.fromJson(data);
            return data;
        }
    },
    update: {
      method: 'PUT'
    }
  });
});
