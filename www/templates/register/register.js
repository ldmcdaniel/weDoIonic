angular.module('weDo.register', [])
  .controller('RegisterCtrl', function ($scope, $http, $ionicPopup) {
    $scope.userData = {};

    // when submitting the register user form, send the text to the node API
    $scope.registerUser = function() {
      if ($scope.userData.password !== $scope.userData.password_confirm) {
        $ionicPopup.alert({title: 'Passswords must match!'});
      } else {
      $http.post('/api/register', $scope.userData)
        .success(function(data) {
          $scope.userData = {}; // clear the form so our user is ready to enter another
          $scope.users = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
      }
    };

  })
