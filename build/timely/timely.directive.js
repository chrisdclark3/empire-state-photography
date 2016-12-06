/**
 */
(function() {
  'use strict'

  TimelyDirective.$inject = ['$compile', '$rootScope']

  function TimelyDirective($compile, $rootScope) {
    return {
      restrict: 'A',
      link: function(scope) {

        scope.bookAppointment = function() {
          var bookingButton = new timelyButton('empirestatephotography1', {
            "product":"485025:SV",
            "dontCreateButton": true
          })
          bookingButton.start()
        }
      }
    }
  }



  angular
    .module('timely.directive', [])
    .directive('timelyButton', TimelyDirective)
}());
