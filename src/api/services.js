angular.module('API.Services', []).factory(
  'Floor', function($resource) {
  var token = '4422d7f6-c102-4f3d-abcf-3eba7f4f241f';
  var url = 'http://www.gugamarket.com:80/catalog/children?token='+token+'&node=:id';

  return $resource(url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});