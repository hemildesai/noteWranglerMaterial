(function () {
  angular.module("NoteWrangler").controller('NotesCreateController', function (Note, $scope, $location) {
    $scope.note = {};
    $scope.createNote = function (note) {
      Note.save(note, function () {
        $location.path("/notes");
      });
    }
  });
})();
