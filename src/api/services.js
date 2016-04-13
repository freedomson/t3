angular.module('api.services', []).factory('Paseeo', function($resource) {
    
  var url = 'http://www.gugamarket.com:80/catalog/children?token=1bf2ed0b-863c-4230-ad12-5d69623294b5&node=:id';
  
  return $resource(url, { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});