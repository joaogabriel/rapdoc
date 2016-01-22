controllers.controller('HospitalsCtrl', function($scope, $location, $compile) {
  'use strict';

  $scope.hospitals = [];

  $scope.init = function() {
    //findAll();

    initialize();
  };

  $scope.init();

  $scope.viewHospitalData = function(hospitalId) {
    $location.path("/app/hospitals/" + hospitalId);
  };

  function findAll() {
    var Hospitais = Parse.Object.extend("Hospitais");
    var query = new Parse.Query(Hospitais);
    query.ascending("nome");

    return Parse.Promise.when(query.find({
      success: function(results) {

        $scope.$apply(function() {
          $scope.hospitals = results;
        });

      },
      error: function(error) {

      }
    }));
  }

  function showMap() {
    // Getting the map selector in DOM
    var div = document.getElementById("map_canvas");

    var myLatLng = {lat: -25.363, lng: 131.044};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(div, {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });

  }

  // Function that return a LatLng Object to Map
  function setPosition(lat, lng) {
    return new plugin.google.maps.LatLng(lat, lng);
  }

  function initialize() {
    var myLatlng = new google.maps.LatLng(43.07493, -89.381388);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);

      alert(map);
    //Marker + infowindow + angularjs compiled ng-click
    var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    $scope.map = map;
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  $scope.centerOnMe = function() {
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };

  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click');
  };

});
