angular.module('API.Services', []).factory(
  'Floor', function($resource) {
  var token = '18125ede-48f3-4f6c-909e-97c4ddb293be';
  var url = 'http://www.gugamarket.com:80/catalog/children?token='+token+'&node=:id';
  
  return $resource(url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});