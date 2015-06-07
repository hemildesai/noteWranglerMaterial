angular.module('NoteWrangler').directive('nwCategorySelector', function (Category) {
  return {
    replace: true,
    restrict: 'E',
    require: "?ngModel",
    templateUrl: 'assets/templates/directives/nwCategorySelector.html',
    link: function(scope, element, attrs, ngModelCtrl) {
      var activeCategory = {};
      scope.cs = Category.query();

      scope.isActive = function (c) {
        return activeCategory && activeCategory.id === c.id;
      };

      scope.toggleCategory = function(c) {
        if(c === activeCategory) {
          activeCategory = {};
        }
        else {
          activeCategory = c;
        }
        ngModelCtrl.$setViewValue(activeCategory);
      };

      ngModelCtrl.$render = function() {
        activeCategory = ngModelCtrl.$viewValue;
      };
    }
  };
});
