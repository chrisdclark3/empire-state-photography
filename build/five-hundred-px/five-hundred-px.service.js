(function() {

  'use strict'

  FiveHPService.$inject = ['$timeout', '$q', '$http', '$rootScope', 'FIVE_HUNDRED_PX', '$mdMedia']

  function FiveHPService($timeout, $q, $http, $rootScope, FIVE_HUNDRED_PX, $mdMedia) {

    var SVC = {
      initialized: false
    }

    SVC.initialize = function() {
      if (!SVC.initialized) {
        SVC.getPhotos().then(function(response) {
          $rootScope.photos = {}
          var categories = {
            0: 'Uncategorized',
            10: 'Abstract',
            11: 'Animals',
            5: 'Black and White',
            1: 'Celebrities',
            9: 'City and Architecture',
            15: 'Commercial',
            16: 'Concert',
            20: 'Family',
            14: 'Fashion',
            2: 'Film',
            24: 'Fine Art',
            23: 'Food',
            3: 'Journalism',
            8: 'Landscapes',
            12: 'Macro',
            18: 'Nature',
            4: 'Nude',
            7: 'People',
            19: 'Performing Arts',
            17: 'Sport',
            6: 'Still Life',
            21: 'Street',
            26: 'Transportation',
            13: 'Travel',
            22: 'Underwater',
            27: 'Urban Exploration',
            25: 'Wedding'
          }
          $rootScope.categories = {}
          _.forEach(response.data.photos, function(photo) {
            $rootScope.photos[photo.name] = photo
            if (typeof $rootScope.categories[photo.category] === 'undefined') {
              $rootScope.categories[photo.category] = categories[photo.category]
            }
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
          username: 'chrisdclark3'
        }
      })
    }

    SVC.getPhotos = function(vals) {
      var params = {
        consumer_key: FIVE_HUNDRED_PX.KEY,
        image_size: 440,
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
