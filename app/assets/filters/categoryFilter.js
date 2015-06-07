angular.module('NoteWrangler').filter('categoryFilter', function () {
  return function (collection, category) {
    var newData = [];
    if(category && category.id) {
      for(var i = 0; i < collection.length; i++) {
        if(collection[i].categoryId === category.id) {
          newData.push(collection[i]);
        }
      }
    }
    else {
      newData = collection;
    }
    return newData;
  }
});
