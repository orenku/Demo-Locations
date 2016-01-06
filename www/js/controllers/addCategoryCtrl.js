angular.module('myLocations.AddCategoryCtrl', [])

.controller('AddCategoryCtrl', ['$scope','Category',function($scope,Category) {

  $scope.newCategory = {};

  //addCategory - adds a new category to the category list
  $scope.addCategory = function() {
    $scope.status = Category.add($scope.newCategory.name);
  };

  //get available categories
  $scope.getCategories = function() {
    return Category.getAll();
  };
}])
