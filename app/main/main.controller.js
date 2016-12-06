(function() {
  "use strict";

  angular
    .module('main.controller', ['five-hundred-px.service'])
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'FiveHP', '$timeout', '$state', '$mdUtil', '$mdSidenav', '$rootScope', 'MAPS', '$window'];

  function MainController($scope, FiveHP, $timeout, $state, $mdUtil, $mdSidenav, $rootScope, MAPS, $window) {

    $scope.toggleMenu = function(navID) {
      return $mdUtil.debounce(function() {
        $mdSidenav(navID).toggle();
      }, 300);
    };

    window.initMap = function() {
      $rootScope.mapInitialized = true
      $timeout(function() {
        $rootScope.initMap()
      })
    }

    $rootScope.initMap = function() {
      if ($rootScope.mapInitialized && $state.current.name === 'app.contact') {
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
