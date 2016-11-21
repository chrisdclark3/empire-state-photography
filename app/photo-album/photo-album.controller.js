/**
 */
(function() {
  'use strict'

  angular
    .module('photo-album.controller', ['five-hundred-px.service'])
    .controller('PhotoAlbumController', PhotoAlbumController)

  PhotoAlbumController.$inject = ['$scope', '$mdMedia', '$mdDialog', '$rootScope', '$timeout', '$window', 'FiveHP', '$state', '$element']

  function PhotoAlbumController($scope, $mdMedia, $mdDialog, $rootScope, $timeout, $window, FiveHP, $state, $element) {

    $scope.selectedCategories = []

    $scope.getSelectedText = function(key) {
      return $scope.selectedCategories
    }

    $scope.inCategories = function(c) {
      if ($scope.selectedCategories.length > 0 && (c != $scope.selectedCategories.toString())) {
        return false
      } else {
        return true
      }
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
