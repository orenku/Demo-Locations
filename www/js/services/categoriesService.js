angular.module('myLocations.categoriesService', [])

.factory('Category', function() {

  //catefories array serves as a databas in this demo app
  var categories = [
    {name:'Restaurant'},
    {name:'Cafe'},
    {name:'Bank'},
    {name:'Attraction'}
  ];

  return {
    //get all available categories
    getAll: function() {
      return categories;
    },

    //removeByName - Deletes a location from the locations array, by name
    //assuming that each category name is unique.
    removeByName: function(name) {
      // if all fields are present, check if name is unique
      for (var i=0;i<categories.length;i++) {
        if (categories[i].name == name) {
          categories.splice(i, 1);
          return;
        }
      }
    },

    //add a new category name.
    //Make sure there are no duplicates. In real life app key uniqueness should
    //be handled by the database
    add: function(newCategory) {

      for (var i=0;i<categories.length;i++) {
        if (categories[i].name==newCategory)
          return ("Category already exists");
      }

      //in cae this is a new category, just add it to the 'database'
      categories.push({name:newCategory});
      return ("New category created");
    }
  };
});
