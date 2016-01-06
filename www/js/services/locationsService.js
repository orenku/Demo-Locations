angular.module('myLocations.locationService', [])

.factory('Location', ['Category',function(category) {


  // A location object has the following format:
  // {
  //  name: string
  //  address: string
  //  coordinates: {lat,lng},
  //  category: string
  // }

  //locations serves as the data base in this examnple. In real life app
  //the database is probably an external one, with this service being used for
  //accessing its data
  var locations = [];
  var categories=category.getAll();

  //Fill the 'database' with some dummy data for testing
  setDummyData ();

  //For testing purpose, create a list of dummy locations
  function setDummyData() {
    for (var i=0;i<10;i++) {
      var locationItem = {
        name : "name-"+i,
        address : "address "+i,
        category : categories[i%4].name,
        location : {lat:32.1+Math.random(),lng:34.8+Math.random()}
      };


      locations.push(locationItem);
    }
  }


  //for the sake of simplicity, we assume that each location name is unique
  //In real life scenario, where we connect to a real database, a unique ID
  //could be generated for each location entry in the database
  //In this example deleting a location from the databe is done via the 'naem'
  //field which is assumed to be unique
  return {
    getAll: function() {
      return locations;
    },

    //removeByName - Deletes a location from the locations array, by name
    //assuming that each location name is unique.
    removeByName: function(name) {
      // if all fields are present, check if name is unique
      for (var i=0;i<locations.length;i++) {
        if (locations[i].name == name)
          locations.splice(i, 1);
      }
    },


    //get location #index
    get: function(index) {
      if (index>=0 && index<locations.length)
        return locations[index];
      else
        return null;
    },

    //for the sake of this example, assume that location Name is the unique key
    add: function(newLocation) {
      if (!newLocation.hasOwnProperty("name") || newLocation.name == "")
        return ("Please set a Name for the new location");
      if (!newLocation.hasOwnProperty("address") || newLocation.address == "")
        return ("Please set an Address for the new location");
      if (!newLocation.hasOwnProperty("category") || newLocation.category == "")
        return ("Please set a Category for the new location");
      if (!newLocation.hasOwnProperty("lat") || newLocation.lat == "")
        return ("Please set the location latitude");
      if (!newLocation.hasOwnProperty("lng") || newLocation.lng == "")
        return ("Please set the location longitude");

      // if all fields are present, check if name is unique
      for (var i=0;i<locations.length;i++) {
        console.log("i=",i);
        console.log("location[i].name = ",locations[i].name);
        console.log(newLocation.name);
        if (locations[i].name == newLocation.name)
          return ("Location already exists");
      }

      //if all validations are OK, add the new location to the database
      //in our case the local location array
      //create a new instance
      var locObj = {
        name: newLocation.name,
        address: newLocation.address,
        category: newLocation.category,
        location: {
          lat: newLocation.lat,
          lng: newLocation.lng
        }
      }

      var newLength = locations.push(locObj);
      return ("New location added");
    }
  };
}]);
