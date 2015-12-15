controllers.controller('SetupBCtrl', function($scope, $location) {

  $scope.planoSaude = null;
  $scope.planosSaude = [];
  $scope.subtipo = null;
  $scope.subtipos = [];

  $scope.init = function () {
    var PlanosSaude = Parse.Object.extend("PlanosSaude");
    var query = new Parse.Query(PlanosSaude);
    query.ascending("nome");
    query.find({
      success: function (results) {
        $scope.$apply(function () {
          $scope.planosSaude = results;
        });
      },
      error: function (error) {

      }
    });
  };

  $scope.init();

  $scope.continue = function () {
    //alert($scope.planoSaude);
    $location.path("/app/hospitals");
  };

  $scope.pesquisarSubtipos = function () {
    var SubtiposPlanoSaude = Parse.Object.extend("SubtiposPlanoSaude");
    var query = new Parse.Query(SubtiposPlanoSaude);
    query.equalTo("planoSaude", $scope.planoSaude);
    query.ascending("nome");
    query.find({
      success: function (results) {
        $scope.$apply(function () {
          $scope.subtipos = results;
        });
      },
      error: function (error) {

      }
    });
  }

});
