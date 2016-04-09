angular.module('templates-dist', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("src/features/branding/branding.html",
    "<div class=branding><img src={{vm.logo}} alt=\"{{vm.name}}\"></div>");
  $templateCache.put("src/features/branding/contact.html",
    "<ul class=contact>ddddfguuuu d24ffdd<li class=contact-item ng-repeat=\"contact in contacts\">{{ contact }}</li></ul>");
  $templateCache.put("src/features/todos/todos.html",
    "<form id=todo-form ng-submit=addCurrentTodo() ng-if=false>Enter new todo here: <input ng-model=newTodo placeholder=\"enter new todo\"></form>d<ul><li class=todo ng-repeat=\"todo in todos\">{{ todo }}</li></ul>");
}]);
