/**
 */
(function() {
  'use strict'

  NavigationDirective.$inject = ['$compile', '$rootScope']

  function NavigationDirective($compile, $rootScope) {
    return {
      restrict: 'AE',
      templateUrl: 'navigation/navigation.html',
      link: function(scope) {

      }
    }
  }



  angular
    .module('navigation.directive', [])
    .directive('navigation', NavigationDirective)
}());
