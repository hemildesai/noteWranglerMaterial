(function () {
  angular.module('NoteWrangler', ['ngMaterial', 'ngRoute', 'ngResource'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('light-green');
  })
  .controller('MainController', function($scope, $timeout, $mdSidenav, $mdUtil, $log) {
    $scope.toggleSideNav = buildToggler();

    function buildToggler() {
      console.log("toggle");
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav('left')
              .toggle()
              .then(function () {
                $log.debug("toggle is done");
              });
          },300);
      return debounceFn;
    };
  });
})();
