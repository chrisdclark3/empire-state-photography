/**
 */
(function() {
  'use strict'

  angular
    .module('photo-album.controller', ['five-hundred-px.service'])
    .controller('PhotoAlbumController', PhotoAlbumController)

  PhotoAlbumController.$inject = ['$scope', '$mdMedia', '$mdDialog', '$rootScope', '$timeout', '$window', 'FiveHP', '$state', '$element']

  function PhotoAlbumController($scope, $mdMedia, $mdDialog, $rootScope, $timeout, $window, FiveHP, $state, $element) {

    $scope.selectedCategory = undefined

    $scope.getSelectedText = function(key) {
      return $scope.selectedCategory
    }

    $scope.inCategories = function(c) {
      if ($scope.selectedCategory && (c != $scope.selectedCategory.toString())) {
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
