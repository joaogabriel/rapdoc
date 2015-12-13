controllers.controller('SetupBCtrl', function($scope, $location) {

  $scope.init = function () {

  };

  $scope.init();

  $scope.continue = function () {
    $location.path("/app/hospitals");
  };

});
