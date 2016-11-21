(function() {
  "use strict";

  angular
    .module('app.config', [
      'app.constants',
      'ngAnimate',
      'ngMessages',
      'ngAria',
      'ngMaterial',
      'ngRoute'
    ])
    .config(Config)
    .run(Run)

  Config.$inject = ['$locationProvider', '$httpProvider', '$mdThemingProvider', 'MATERIAL_DESIGN']

  function Config($locationProvider, $httpProvider, $mdThemingProvider, MATERIAL_DESIGN) {
    $locationProvider.html5Mode(true).hashPrefix('*');


    $httpProvider.defaults.useXDomain = true

    $mdThemingProvider.definePalette('empirePrimary', MATERIAL_DESIGN.PRIMARY)
    $mdThemingProvider.definePalette('empireAccent', MATERIAL_DESIGN.ACCENT)
    $mdThemingProvider.definePalette('empireWarn', MATERIAL_DESIGN.WARN)
    $mdThemingProvider.definePalette('empireBackground', MATERIAL_DESIGN.BACKGROUND)


    // Remove until UI requirements are set
    $mdThemingProvider
      .theme('default')
      .primaryPalette('empirePrimary')
      .accentPalette('empireAccent')
      .warnPalette('empireWarn')
      .backgroundPalette('empireBackground')

    $mdThemingProvider.alwaysWatchTheme(true);
  }

  Run.$inject = ['MAPS', '$rootScope', '$state']

  function Run(MAPS, $rootScope, $state) {

  }

}());
