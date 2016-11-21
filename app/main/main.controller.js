(function() {
  "use strict";

  angular
    .module('main.controller', ['five-hundred-px.service'])
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'FiveHP', '$timeout', '$state', '$mdUtil', '$mdSidenav', '$rootScope', 'MAPS', '$window'];

  function MainController($scope, FiveHP, $timeout, $state, $mdUtil, $mdSidenav, $rootScope, MAPS, $window) {

    $scope.init = function() {
      FiveHP.initialize()
    }

    if (typeof $rootScope.photoAlbumInitialized === 'undefined') {
      $scope.init()
    }

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

    $scope.sizePhotos = function(photos) {
      var el = angular.element(document.getElementById('content-view'))
      $rootScope.columnCount = el[0].clientWidth
      _.forEach($rootScope.photos, function(photo, idx) {
        photo.ratio = 1
        photo.colSpan = ($rootScope.columnCount / 3)
        photo.rowSpan = photo.ratio * photo.colSpan
        photo.scaledW = photo.rowSpan
        photo.scaledH = photo.colSpan

      })
      $rootScope.photoAlbumInitialized = true
    }

    $rootScope.$on('setPhotos', function(e, photos) {
      $scope.sizePhotos(photos)
    })

    $window.addEventListener('resize', function() {
      if ($state.current.name === 'app.home') {
        $scope.sizePhotos($rootScope.photos)
      }
    })
  }

}());
