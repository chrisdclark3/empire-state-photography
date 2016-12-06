(function() {

  'use strict'

  FiveHPService.$inject = ['$timeout', '$q', '$http', '$rootScope', 'FIVE_HUNDRED_PX', '$mdMedia']

  function FiveHPService($timeout, $q, $http, $rootScope, FIVE_HUNDRED_PX, $mdMedia) {

    var SVC = {}

    $rootScope.photoAlbumInitialized = false

    SVC.initialize = function() {
      if (!$rootScope.photosInitialized) {
        SVC.getPhotos().then(function(response) {
          $rootScope.photos = {}
          $rootScope.keyWords = {}
          _.forEach(response.data.photos, function(photo) {
            $rootScope.photos[photo.id] = photo
          })
          $rootScope.$broadcast('setPhotos', $rootScope.photos)
        }, function(error) {})
      }
    }

    SVC.getFullPhoto = function(photo) {
      return $http({
        method: 'GET',
        url: 'https://api.500px.com/v1/photos/' + photo.id,
        params: {
          consumer_key: FIVE_HUNDRED_PX.KEY,
          image_size: 4,
          username: 'bookings11'
        }
      })
    }

    SVC.getPhotos = function(vals) {
      var params = {
        consumer_key: FIVE_HUNDRED_PX.KEY,
        rpp: 100,
        image_size: 440,
        tags: 1,
        username: FIVE_HUNDRED_PX.USERNAME
      }
      if (typeof vals !== 'undefined') {
        _.forEach(vals, function(value, idx) {
          params[idx] = value
        })
      }
      return $http({
        method: 'GET',
        url: 'https://api.500px.com/v1/photos?feature=user',
        params: params
      })
    }

    return SVC
  }

  angular
    .module('five-hundred-px.service', ['app.constants'])
    .service('FiveHP', FiveHPService)

}());
