(function () {
  angular.module("NoteWrangler").controller('NotesEditController', function (Note, User, Category, $scope, $routeParams, $location) {
    $scope.note = Note.get({id: $routeParams.id});
    $scope.canSubmit = false;
    $scope.categories = Category.query();
    $scope.users = User.query();
    $scope.saveNote = function(note) {
      $scope.canSubmit = true;
      note.$update().finally(function () {
        $scope.canSubmit = false;
        $location.path("/notes/"+note.id)
      });
    }
  })
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });
})();
