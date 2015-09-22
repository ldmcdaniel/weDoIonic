angular.module('weDo.login', [])
  .controller('LoginCtrl', function ($scope, $http, $ionicPopup) {

    $scope.loginUser = function () {
      $http.get('/api/login', $scope.loginData)
        .success(function(data) {
          $scope.login = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    }
  })
