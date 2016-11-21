/**
 */
(function() {

  'use strict'

  angular
    .module('contact.controller', [])
    .controller('ContactController', ContactController)

  ContactController.$inject = ['MAPS', '$state', '$rootScope', '$scope']

  function ContactController(MAPS, $state, $rootScope, $scope) {

    $scope.initMap = function() {
      if ($rootScope.mapInitialized) {
        var el = document.getElementById('map')
        var center = {
          lat: MAPS.CENTER.LAT,
          lng: MAPS.CENTER.LNG
        }
        var options = {
          center: center,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(el, options)

        var marker = new google.maps.Marker({
          position: center,
          map: map,
          title: 'Empire State Photography'
        });
      }
    }
  }

}());
