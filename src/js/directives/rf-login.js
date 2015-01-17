var app = angular.module('app');


app.directive('rfLogin', function() {
  return {
    restrict: "E",
    transclude: true,
    controller: function($scope) {
      $scope.data = {};
      $scope.data.nombre = "";
      $scope.data.password = "";
    },
    scope: {
    },
    templateUrl: "templates/directives/rf-login.html",
    link: function(scope, element) {
    }
  };
});
