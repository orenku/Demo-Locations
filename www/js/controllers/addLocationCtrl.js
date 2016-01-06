angular.module('myLocations.AddLocationCtrl', [])

.controller('AddLocationCtrl', ['$scope','Location','Category',function($scope,Location,Category) {
  console.log('inside CategoriesCtrl');

  $scope.newLocation = {};
  //addLocation - adds a location to the location list
  // it is assumed that the location object added is a valid one
  // (tested for validity in the addLocation popover)
  $scope.addLocation = function() {
    $scope.status = Location.add($scope.newLocation);
  };

  //get available categories
  $scope.getCategories = function() {
    return Category.getAll();
  };

}])
