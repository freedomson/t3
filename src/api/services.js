angular.module('API.Services', [])
.factory(
  'Floor', function($resource) {

  var token = '38280cc6-0d9d-483e-9dbd-2551313ac5b7';
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
