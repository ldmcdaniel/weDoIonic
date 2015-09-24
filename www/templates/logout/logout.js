angular.module('weDo.logout', [])
  .controller('LogoutCtrl', function ($scope, $location, AuthService) {

    $scope.logout = function () {
      console.log(AuthService.getUserStatus());
      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/api/login');
        });
    };
  });
