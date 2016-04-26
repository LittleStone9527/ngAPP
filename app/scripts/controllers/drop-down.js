'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:DropDownCtrl
 * @description
 * # DropDownCtrl
 * Controller of the ngAppApp
 */
angular.module('ngAppApp')
  .controller('DropDownCtrl', function ($scope) {
    $scope.value = false;
    $scope.toggleSwitch = function (ID) {
      if($scope.value == ID){
        $scope.value = !$scope.value;
      }else {
        $scope.value = ID
      }
    };
  });
