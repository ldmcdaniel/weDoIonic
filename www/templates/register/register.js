angular.module('weDo.register', [])
  .controller('RegisterCtrl', function ($scope, $http) {
    $scope.userData = {};

    // when landing on the page, get all todos and show them
    // $http.get('/api/users')
    //   .success(function(data) {
    //     $scope.users = data;
    //     // console.log(data);
    //   })
    //   .error(function(data) {
    //     console.log('Error: ' + data);
    //   });

    // when submitting the add form, send the text to the node API
    $scope.createUser = function() {
      $http.post('/api/users', $scope.userData)
        .success(function(data) {
          $scope.userData = {}; // clear the form so our user is ready to enter another
          $scope.users = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    // delete a todo after checking it
    // $scope.deleteUser = function(id) {
    //   $http.delete('/api/users/' + id)
    //     .success(function(data) {
    //       $scope.users = data;
    //       // console.log(data);
    //     })
    //     .error(function(data) {
    //       console.log('Error: ' + data);
    //     });
    // };
  })
