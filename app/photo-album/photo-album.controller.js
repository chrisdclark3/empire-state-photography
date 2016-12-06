/**
 */
(function() {
  'use strict'

  angular
    .module('photo-album.controller', ['five-hundred-px.service'])
    .controller('PhotoAlbumController', PhotoAlbumController)

  PhotoAlbumController.$inject = ['$scope', '$mdMedia', '$mdDialog', '$rootScope', '$timeout', '$window', 'FiveHP', '$state', '$element']

  function PhotoAlbumController($scope, $mdMedia, $mdDialog, $rootScope, $timeout, $window, FiveHP, $state, $element) {

    $scope.initializePhotos = function() {
      var el = angular.element(document.getElementById('content-view'))
      $rootScope.columnCount = el[0].clientWidth
      FiveHP.initialize()
    }
    $scope.initializePhotos()

    $window.addEventListener('resize', function() {
      if ($state.current.name === 'app.home') {
        $scope.setPhotos($rootScope.photos)
      }
    })

    $scope.setPhotos = function(photos) {
      var el = angular.element(document.getElementById('content-view'))
      $rootScope.columnCount = el[0].clientWidth
      _.forEach($rootScope.photos, function(photo, idx) {
        photo.ratio = 1
        photo.colSpan = ($rootScope.columnCount / 3)
        photo.rowSpan = photo.ratio * photo.colSpan
        photo.scaledW = photo.rowSpan
        photo.scaledH = photo.colSpan
        _.forEach(photo.tags, function(tag) {
          var value = _.capitalize(tag)
          tag = tag.toUpperCase()
          if (typeof $rootScope.keyWords[tag] === 'undefined') {
            $rootScope.keyWords[tag] = {
              photos: [],
              value: value
            }
            $rootScope.keyWords[tag].photos.push(photo.id)
          } else {
            if (!_.includes($rootScope.keyWords[tag].photos, photo.id)) {
              $rootScope.keyWords[tag].photos.push(photo.id)
            }
          }
        })
      })
      $rootScope.photoAlbumInitialized = true
      $scope.filterPhotos()
    }

    $rootScope.$on('setPhotos', function(e, photos) {
      $scope.setPhotos(photos)
    })

    $scope.filterPhotos = function() {
      $rootScope.selectedPhotos = {}
      if ($scope.keyWordSearch.selectedKeyWords.length < 1) {
        $rootScope.selectedPhotos = $rootScope.photos
      } else {
        _.forEach($scope.keyWordSearch.selectedKeyWords, function(word) {
          _.forEach(word.photos, function(photo) {
            $rootScope.selectedPhotos[photo] = $rootScope.photos[photo]
          })
        })
      }
    }

    $scope.removeChip = function(chip) {
      $timeout(function() {
        $scope.keyWordSearch.selectedKeyWords = _.filter($scope.keyWordSearch.selectedKeyWords, function(kw) {
          return (kw.value !== chip.value)
        })
        $scope.filterPhotos()
      })
    }

    var selectedItemChange = function(item) {
      if (item) {
        var key = item.value.toUpperCase()
        if (typeof $rootScope.keyWords[key].value !== 'undefined') {
          $scope.keyWordSearch.selectedKeyWords.push(item)
          $scope.filterPhotos()
        }
      }
    }

    var searchTextChange = function(item) {
      $scope.filterPhotos()
    }

    var query = function(searchText) {
      if (searchText && searchText.length >= 1) {
        searchText = searchText.toLowerCase()
        var items = []
        _.forEach($rootScope.keyWords, function(key) {
          if (key.value.toLowerCase().indexOf(searchText) !== -1) {
            items.push(key)
          }
        })
        return items
      } else {
        return $rootScope.keyWords
      }
    }

    $scope.keyWordSearch = {
      isDisabled: false,
      noCache: true,
      searchTextChange: searchTextChange,
      selectedItemChange: selectedItemChange,
      searchText: '',
      placeholder: 'Search by keyword / tag',
      selectedItem: '',
      removable: true,
      query: query,
      selectedKeyWords: []
    }

    $scope.showInfo = function(ev, photo) {
      FiveHP.getFullPhoto(photo).then(function(response) {
        $rootScope.currentPhoto = response.data.photo
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $$scope.customFullscreen
        $mdDialog.show({
            controller: 'PhotoController',
            templateUrl: 'photo/photo.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".'
          }, function() {
            $scope.status = 'You cancelled the dialog.'
          })
        $scope.$watch(function() {
          return $mdMedia('xs') || $mdMedia('sm')
        }, function(wantsFullScreen) {
          $scope.customFullscreen = (wantsFullScreen === true)
        })
      })
    }
  }

}());
