// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'weDo.menu',
  'weDo.login',
  'weDo.group',
  'weDo.register',
  'weDo.landing',
  'weDo.getGroup'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login/login.html',
          controller: 'LoginCtrl'
        }
      }
    })
    .state('app.myGroups', {
      url: '/myGroups',
      views: {
        'menuContent': {
          templateUrl: 'templates/group/myGroups.html',
          controller: 'GroupCtrl'
        }
      }
    })
    // .state('app.group', {
    //   url: '/myGroups/:group_id',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/group/group.html',
    //       controller: 'GroupCtrl'
    //     }
    //   }
    // })
    .state('app.getGroup', {
      url: '/myGroups/:group_id',
      views: {
        'menuContent': {
          templateUrl: 'templates/group/group.html',
          controller: 'GetGroupCtrl'
        }
      }
    })
    .state('app.landing', {
      url: '/',
      views: {
        'menuContent': {
          templateUrl: 'templates/landing/landing.html',
          controller: 'LandingCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/');
});
