(function () {
  angular.module("NoteWrangler").controller('NotesIndexController', function (Note, $scope) {
    $scope.notes = Note.query();
    $scope.search = {};
  })
  .config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();
  });
})();
