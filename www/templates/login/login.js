angular.module('weDo.login', [])
.controller('LoginCtrl', function ($scope, $location, AuthService) {
    $scope.login = function () {
      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call login from service
      AuthService.login($scope.loginData.username, $scope.loginData.password)
        // handle success
        .then(function () {
          // console.log(AuthService.getUserStatus());
          $location.path('/api/myGroups');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });
    };
});
