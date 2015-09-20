angular.module('weDo.group', [])

  .controller('GroupCtrl', function ($scope, $http) {
    $scope.groupData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/groups')
      .success(function(data) {
        $scope.groups = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    // when submitting the add form, send the text to the node API
    $scope.createGroup = function() {
      $http.post('/api/groups', $scope.groupData)
        .success(function(data) {
          $scope.groupData = {}; // clear the form so our user is ready to enter another
          $scope.groups = data;
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    // delete a todo after checking it
    $scope.deleteGroup = function(id) {
      $http.delete('/api/groups/' + id)
        .success(function(data) {
          $scope.groups = data;
          // console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };
  })
