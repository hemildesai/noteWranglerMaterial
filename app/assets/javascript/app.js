(function () {
  angular.module('NoteWrangler', ['ngMaterial', 'ngRoute', 'ngResource', 'ngGravatar'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('light-green');
  })
  .config(function(GravatarProvider){
    GravatarProvider.setSize(400);
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
          },10);
      return debounceFn;
    };
  });
})();
