angular.module('API.Services', []).factory(
  'Floor', function($resource) {
  var token = '10d0e84e-285f-4f7b-b03e-69898ace90fe';
  var url = 'http://www.gugamarket.com:80/catalog/children?token='+token+'&node=:id';

  return $resource(url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});