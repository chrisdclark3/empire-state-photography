/**
 */
(function() {
  'use strict'

  LogoDirective.$inject = ['$compile', '$rootScope']

  function LogoDirective($compile, $rootScope) {
    return {
      restrict: 'AE',
      templateUrl: 'logo/logo.html',
      link: function(scope, el) {

      }
    }
  }



  angular
    .module('logo.directive', [])
    .directive('logo', LogoDirective)
}());

