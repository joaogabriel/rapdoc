// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('rapdoc', ['ionic', 'ngResource', 'rapdoc.controllers', 'rapdoc.services', 'rapdoc.configs',
                         'ionic-toast', 'jett.ionic.filter.bar'])

  .run(function ($ionicPlatform) {

    Parse.initialize("jJi7ieISirkMdNhjSZSZXNXeWFVxu6RIa325ppld", "CmiTE9DdjO4UfFieRZ01euQY4bN0gdFMTgRxJ7pu");

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  });

var configs = angular.module('rapdoc.configs', ['jett.ionic.filter.bar']);
var controllers = angular.module('rapdoc.controllers', []);
var services = angular.module('rapdoc.services', []);
