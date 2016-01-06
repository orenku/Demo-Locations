angular.module('myLocations.MapCtrl', ['ionic'])

.controller('MapCtrl', ['$scope','$stateParams','Location',function($scope,$stateParams,location) {
  console.log("inside map");

  //set default map center (In real application should be set by device current
  // location using Cordova geolocation plugin)
  var latLng = new google.maps.LatLng(32.1,34.8);
  var locationName = $stateParams.name;

  //override map center if index is provided in $stateParams
  if ($stateParams.lat && $stateParams.lng ) {
    latLng = new google.maps.LatLng($stateParams.lat,$stateParams.lng);
  }

  //set map options
  var mapOptions = {
    center: latLng,
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  //create the map
  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //Add the current marker when the map is ready
  google.maps.event.addListenerOnce($scope.map, 'idle', function(){

    var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
    });

    // Show the name of the place when cliking the marker
    var infoWindow = new google.maps.InfoWindow({
      content: locationName
    });

    google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
    });
  });


}]);
