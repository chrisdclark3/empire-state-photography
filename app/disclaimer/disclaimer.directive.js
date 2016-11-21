/**
 */
(function() {
  'use strict'

  DisclaimerDirective.$inject = []

  function DisclaimerDirective() {
    return {
      restrict: 'AE',
      templateUrl: 'disclaimer/disclaimer.html',
      link: function(scope) {

      }
    }
  }



  angular
    .module('disclaimer.directive', [])
    .directive('disclaimer', DisclaimerDirective)
}());
