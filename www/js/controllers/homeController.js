controllers.controller('HomeCtrl', function($scope, $location) {
  'use strict';

  $scope.init = function () {

  };

  $scope.init();

  $scope.novoProntoSocorro = function () {
    $location.path("/app/setup");
  };

});
