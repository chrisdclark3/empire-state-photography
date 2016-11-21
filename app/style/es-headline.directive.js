/**
 */
(function() {
  'use strict'

  ESHeadlineDirective.$inject = []

  function ESHeadlineDirective() {
    return {
      restrict: 'AE',
      templateUrl: 'style/es-headline.html',
      scope: {
        text: '@',
        underline: '@'
      },
      link: function(scope) {

      }
    }
  }



  angular
    .module('es-headline.directive', [])
    .directive('esHeadline', ESHeadlineDirective)
}());
