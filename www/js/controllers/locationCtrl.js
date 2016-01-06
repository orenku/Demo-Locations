angular.module('myLocations.controllers', [])

.controller('LocationsCtrl', ['$scope','$state','Location','Category',function($scope,$state,Location,Category) {
  $scope.locations = Location.getAll();
  $scope.selectedItemIdx;  //holds the index of the selected item
  $scope.filter = {};
  $scope.filter.categoryFilter="All";
  $scope.groupItems=true;

  //Called each time the user selects an item in the location list.
  $scope.locationSelected = function(index) {
    $scope.selectedItemIdx = index;
    console.log('selected location #',index);
  }

  //delete a location from the locations list.
  //Since this is the current selected item, we need to cler the
  // 'selectedItemIdx' variable, by setting it to -1;
  $scope.deleteLocation = function() {
    var index = $scope.selectedItemIdx;

    if (index != -1) {
      console.log('deleting item #'+index);
      Location.removeByName($scope.locations[index].name);
      $scope.selectedItemIdx = -1;
    }
    else {
      console.log('No item selected for deletion')
    }
  }

  //add an item to the location list.
  //this functions opens an ionic popover element, so the
  //user can fill in all related location data
  $scope.addNewLocation = function() {
    $state.go('addLocation')
  }

  //get available categories
  $scope.getCategories = function() {
    return Category.getAll();
  };

  //allow filtering list of locations by Category
  $scope.categoryFilter = function(element) {
    if (!$scope.filter.categorySelector || $scope.filter.categorySelector =="All")
      return true;
    return element.category == $scope.filter.categorySelector ? true : false;
  };

  //Order location list by category
  //if 'groupBy' input value equals 'true', return the sorting key
  //that ng-repeat sorts by. In our case 'category'
  $scope.getOrderType = function(groupBy) {
    if (groupBy == true)
      return 'category';
  }

}])
