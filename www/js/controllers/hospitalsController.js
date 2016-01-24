controllers.controller('HospitalsCtrl', function($scope, $location, $compile, $ionicFilterBar) {
  'use strict';

  $scope.hospitals = [];
  $scope.showList = true;
  $scope.showMap = false;
  $scope.mapInitialized = false;

  var filterBarInstance = null;

  /*$scope.locations = {
    "id: 6JRhha5WX9, lat: 0, lng: 1",
    "id: "6JRhha5WX9", lat: 0, lng: 1"
  };*/

  $scope.init = function() {
    findAll();

    //initialize();
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
    //var myLatlng = new google.maps.LatLng(43.07493, -89.381388);
    var myLatlng = new google.maps.LatLng(-15.8240771, -48.0688698);

    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

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

    $scope.mapInitialized = true;
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

  $scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.hospitals,
      cancelText: "Cancelar",
      update: function (filteredItems, filterText) {
        $scope.hospitals = filteredItems;
        console.log(filteredItems);
        if (filterText) {
          console.log(filterText);
        }
      }
    });
  };

  $scope.renderMap = function () {
    $scope.showMap = true;
    $scope.showList = false;

    if (!$scope.mapInitialized) {
      initialize();
    }

    //google.maps.event.trigger($scope.map, 'resize');
  };

  $scope.renderList = function () {
    $scope.showMap = false;
    $scope.showList = true;
  };

});
