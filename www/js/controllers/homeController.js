controllers.controller('HomeCtrl', function($scope, $location) {

  $scope.init = function () {

  };

  $scope.init();

  $scope.novoProntoSocorro = function () {
    $location.path("/app/setup");
  };

});
