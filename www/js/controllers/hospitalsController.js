controllers.controller('HospitalsCtrl', function($scope, $location) {
  'use strict';

  $scope.hospitals = [];

  $scope.init = function () {
    findAll();
  };

  $scope.init();

  $scope.viewHospitalData = function (hospitalId) {
    $location.path("/app/hospitals/" + hospitalId);
  };

  function findAll() {
    var Hospitais = Parse.Object.extend("Hospitais");
    var query  = new Parse.Query(Hospitais);
    query.ascending("nome");

    return Parse.Promise.when(query.find({
      success: function (results) {

        $scope.$apply(function () {
          $scope.hospitals = results;
        });

      },
      error: function (error) {

      }
    }));
  }

});
