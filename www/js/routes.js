configs.config(function ($stateProvider, $urlRouterProvider, $ionicFilterBarConfigProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.setup', {
      url: '/setup',
      views: {
        'menuContent': {
          templateUrl: 'templates/setup.html',
          controller: 'SetupBCtrl'
        }
      }
    })

    .state('app.hospitals', {
      url: '/hospitals',
      views: {
        'menuContent': {
          templateUrl: 'templates/hospitals.html',
          controller: 'HospitalsCtrl'
        }
      }
    })

    .state('app.hospital', {
      url: '/hospitals/:hospitalId',
      views: {
        'menuContent': {
          templateUrl: 'templates/hospital.html',
          controller: 'HospitalCtrl'
        }
      }
    })

    .state('app.tell-a-friend', {
      url: '/tell-a-friend',
      views: {
        'menuContent': {
          templateUrl: 'templates/tell-a-friend.html'
        }
      }
    })

    .state('app.prefs', {
      url: '/prefs',
      views: {
        'menuContent': {
          templateUrl: 'templates/prefs.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

  $ionicFilterBarConfigProvider.placeholder('Pesquise');

});
configs.config( [
    '$compileProvider',
    function( $compileProvider )
    {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|comgooglemaps):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);
