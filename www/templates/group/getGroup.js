angular.module('weDo.getGroup', [])
  .controller('GetGroupCtrl', function ($stateParams, $scope, $http) {

    var groupId = $stateParams.group_id;

    $http.get('/api/myGroups/' + groupId, $scope.group)
        .success(function(data) {
          $scope.group = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });

  })
