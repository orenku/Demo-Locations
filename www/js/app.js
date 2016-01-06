// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myLocations', [
  'ionic',
  'myLocations.controllers',
  'myLocations.MapCtrl',
  'myLocations.CategoryCtrl',
  'myLocations.AddLocationCtrl',
  'myLocations.AddCategoryCtrl',
  'myLocations.locationService',
  'myLocations.categoriesService',
  'uiGmapgoogle-maps'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Use AngularUI Router ui-router

  // Define the various app states
  // Each state has its own controller in controllers.js
  $stateProvider

  .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

  .state('tab.categories', {
    url: '/categories',
    views: {
      'categories': {
        templateUrl: 'templates/categories.html',
        controller: 'CategoryCtrl'
      }
    }
  })

  .state('tab.locations', {
    url: '/locations',
    views: {
      'locations': {
        templateUrl: 'templates/locations.html',
        controller: 'LocationsCtrl'
      }
    },
    cache: false
  })
  .state('addLocation', {
    url: '/addLocation',
        templateUrl: 'templates/addLocation.html',
        controller: 'AddLocationCtrl'
  })
  .state('map', {
    url: '/map/:lat?lng?name',
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl',
        cache: false
  })
  .state('addCategory', {
    url: '/addCategory',
        templateUrl: 'templates/addCategory.html',
        controller: 'AddCategoryCtrl',
        cache: false

  });

  // if none of the above states are matched, goto Locations
  $urlRouterProvider.otherwise('/tab/locations');
});
