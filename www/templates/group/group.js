angular.module('weDo.group', [])

  .controller('GroupCtrl', function ($scope, $http) {

    // var groupId = $stateParams.group_id;

    // when landing on the page, get all groups and show them
    $http.get('/api/myGroups')
      .success(function(data) {
      // console.log('group', groupId);

        $scope.groups = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    $scope.createGroup = function() {
      $http.post('/api/groups', $scope.groupData)
        .success(function(data) {
          console.log($scope.groupData);
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
