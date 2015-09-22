angular.module('weDo.group', [])

  .controller('GroupCtrl', function ($stateParams, $scope, $http) {

    var groupId = $stateParams.group_id;

    // when landing on the page, get all groups and show them
    $http.get('/api/myGroups')
      .success(function(data) {
      console.log('group', groupId);

        $scope.groups = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

    // when submitting the add form, send the text to the node API
    // $scope.getGroup = function () {
    //   console.log('Scope.group?: ', $scope.group);
    //   $http.get('/api/myGroups/' + groupId, $scope.group)
    //     .success(function(data) {
    //       $scope.group = data;
    //     })
    //     .error(function(data) {
    //       console.log('Error: ' + data);
    //     });
    // };

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
