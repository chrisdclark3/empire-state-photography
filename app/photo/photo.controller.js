(function() {
  "use strict";

  angular
    .module('photo.controller', [])
    .controller('PhotoController', PhotoController);

  PhotoController.$inject = ['$scope', '$mdDialog', '$rootScope'];

  function PhotoController($scope, $mdDialog, $rootScope) {

    $scope.currentPhoto = $rootScope.currentPhoto
    $scope.currentPhoto.display_url = $scope.currentPhoto.image_url
    $scope.infoEnabled = false

    $scope.toggleInfo = function (value) {
      console.log('$rootScope.currentPhoto', $rootScope.currentPhoto)
      $scope.infoEnabled = (typeof value !== 'undefined') ? value : !$scope.infoEnabled
    }

    $scope.hide = function() {
      $mdDialog.hide()
    }

    $scope.cancel = function() {
      $mdDialog.cancel()
    }

    $scope.answer = function(answer) {
      $mdDialog.hide(answer)
    }
  }


}());
