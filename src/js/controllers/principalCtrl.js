var app = angular.module('app');

app.controller('PrincipalCtrl', function($scope, $location) {
  $scope.regresar = function() {
    $location.path('/index');
  };
});
