angular.module('Config.Services', []).service(
  'Floor', function($resource) {

  var token = 'd0d915a8-95a8-4d0d-b89a-24823016c782';
  var url = 'https://www.gugamarket.com/catalog/children?token='+token+'&node=:id';

  return $resource(url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});
