angular.module('myLocations.CategoryCtrl', [])

.controller('CategoryCtrl', ['$scope','Category',function($scope,Category) {

  //get available categories
  $scope.getCategories = function() {
    return Category.getAll();
  };
}])
