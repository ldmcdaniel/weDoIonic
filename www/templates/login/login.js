angular.module('weDo.login', [])
  .controller('LoginCtrl', function ($scope, $http, $ionicPopup) {

    $scope.loginUser = function () {
      // $http.get('/api/users', $scope.loginData)
      //   .success(function(data) {
      //     $scope.login = data;
      //     console.log(data);
      //   })
      //   .error(function(data) {
      //     console.log('Error: ' + data);
      //   });
      $http.post('/api/users', $scope.loginData)
        .success(function(data) {
          // $scope.userData = {}; // clear the form so our user is ready to enter another
          $scope.login = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    }



  })
