angular.module('Nav', [])
  .directive('nav', function ($route,$location) {
    var ids=[];
    return {
      scope : {
        on:'=',
        navid:'@',
        infx:'@',
        outfx:'@'
      },
      controller: function ($scope,$element,$timeout,$rootScope) {


      },
      link: function($scope, $element, attrs, tabsCtrl) {
        last=ids.pop();
        // console.log(last);
        ids[$scope.$id]=angular.element($element);
        $scope.element=$element;
        $scope.outfx = 'slideOutLeft';// $scope.outfx ? $scope.outfx : 'rollOut';
        $scope.infx  = 'slideInLeft';//$scope.infx ? $scope.infx : 'rollIn';
        //console.log($scope,ids);
        ids[$scope.$id].addClass('show animated ' + $scope.infx);

        var c='';
        $scope.$on('$locationChangeStart', function(event, next, current) {

             last=ids.pop();

             if (angular.isDefined(last)) {

               console.log(arguments);
               event.preventDefault();
               last.removeClass($scope.infx);
               last.addClass($scope.outfx);
               last.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function(){ 
                  var n=next.substr(next.indexOf('#')+1,next.length);
                  
                  $location.url(n);
                  $route.reload();
                }
               );
             }
        });
      },
    }
  });