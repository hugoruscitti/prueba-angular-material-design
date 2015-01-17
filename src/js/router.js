var app = angular.module('app');

app.config(function($routeProvider) {
  $routeProvider.
  when('/index', {
    controller: 'IndexCtrl',
    templateUrl: 'templates/index.html'
  }).
  when('/principal', {
    controller: 'PrincipalCtrl',
    templateUrl: 'templates/principal.html'
  }).
  otherwise({
    redirectTo:'/index'
  });
});
