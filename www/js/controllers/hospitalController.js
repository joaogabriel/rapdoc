controllers.controller('HospitalCtrl', function($scope, $stateParams, $resource) {
  'use strict';

  $scope.hospital = null;
  $scope.situacaoHospital = null;

  $scope.init = function () {
    if ($stateParams.hospitalId) {
      findById($stateParams.hospitalId);
    }
  };

  $scope.init();

  function findById(id) {
    var Hospitais = Parse.Object.extend("Hospitais");
    var query = new Parse.Query(Hospitais);
    query.get(id, {
      success: function (result) {
        $scope.$apply(function () {
          $scope.hospital = result;

          pesquisarInformacoesSobreTempoDeEspera();
        });
      },
      error: function (error) {

      }
    });
  }

  function pesquisarInformacoesSobreTempoDeEspera() {
    var Resource = $resource('resources/situacaoHospitais.json');

    Resource.get(function (data) {
      var situacoes = data.items;

      situacoes.forEach(function(situacao) {
        if (situacao.hospitalId === $scope.hospital.id) {
          $scope.situacaoHospital = situacao;
        }
      });
    });
  }

  $scope.navegar = function () {
    alert('Esta funcionalidade estará disponível em breve.');
  };

});
