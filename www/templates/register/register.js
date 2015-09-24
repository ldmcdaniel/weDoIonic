angular.module('weDo.register', [])
  .controller('RegisterCtrl', function ($scope, $location, AuthService) {
    console.log(AuthService.getUserStatus());
    $scope.register = function () {
      // initial values
      $scope.error = false;
      $scope.disabled = true;
      // call register from service
      AuthService.register($scope.userData.username, $scope.userData.password)
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.userData = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.userData = {};
        });
    };
});

// angular.module('weDo.register', [])
//   .controller('RegisterCtrl', function ($scope, $http, $ionicPopup, $state) {
//     $scope.userData = {};

//     // when submitting the register user form, send the text to the node API
//     $scope.registerUser = function() {
//       console.log($scope.userData.email);
//       if($scope.userData.name.first === undefined) {
//         $ionicPopup.alert({title: 'You must enter a first name!'});
//       } else if ($scope.userData.name.last === undefined) {
//         $ionicPopup.alert({title: 'You must enter a last name!'});
//       } else if ($scope.userData.username === undefined) {
//         $ionicPopup.alert({title: 'You must enter a username!'});
//       } else if ($scope.userData.email === undefined) {
//         $ionicPopup.alert({title: 'Email address is not valid!'});
//       } else if ($scope.userData.password.length < 5) {
//         $ionicPopup.alert({title: 'Passsword must be at least 5 characters!'});
//       } else if ($scope.userData.password !== $scope.userData.password_confirm) {
//         $ionicPopup.alert({title: 'Passswords must match!'});
//       } else {
//       $http.post('/api/register', $scope.userData)
//         .success(function(data) {
//           $scope.userData = {}; // clear the form so our user is ready to enter another
//           $scope.users = data;
//           $state.go('app.login');
//         })
//         .error(function(data) {
//           $ionicPopup.alert({title: 'All fields are required!'});
//           console.log('Error: ' + data);
//         });
//       }
//     };

//   })
