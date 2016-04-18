angular.module('API.Services', []).factory(
  'Floor', function($resource) {
  var token = '1007e8c0-7a56-488a-b5db-6334a0c8b43c';
  var url = 'http://www.gugamarket.com:80/catalog/children?token='+token+'&node=:id';

  return $resource(url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});