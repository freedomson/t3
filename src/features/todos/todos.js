angular.module('Todos', [/*'templates-dist'*/])
  .directive('todos', function ($templateCache) {
    return {
      restrict: 'E',
      // template: $templateCache.get('src/features/todos/todos.html'),
      templateUrl: 'src/features/todos/todos.html',
      controller: function ($scope) {
        $scope.todos = 
        [
        'Unhas de Gel', 
        'Unhas de Acrílico',
        'Gelinho',
        'Spa Pedicure',
        'Pedicure',
        'Spa Manicure',
        'Manicure',
        'Depilação c/linha',
        'Pintura com Hena',
        'Micropigmentação',
        'Extensões de sobrancelhas',
        'Extensões de pestanas',
        'Permanente pestanas', 
        'Tratamento c/ Parafina'
        ];

        var photos = []; var i=1;
        angular.forEach($scope.todos, function(value, key) {
          this.push({id:''+i++,'title':value,src:value});
        }, photos);
        $scope.photos = photos;

        $scope.addCurrentTodo = function () {
          if ($scope.newTodo) {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = '';
          }
        };
      }
    }
  });