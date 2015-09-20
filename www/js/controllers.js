angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $http) {
    $scope.userData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/users')
      .success(function(data) {
        $scope.users = data;
        // console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  })
