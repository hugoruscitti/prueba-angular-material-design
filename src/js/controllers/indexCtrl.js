var app = angular.module('app');

app.controller('IndexCtrl', function($scope, $location) {
  $scope.ingresar = function() {
    $location.path('/principal');
  };
});
