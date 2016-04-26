'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:MyDialogCtrl
 * @description
 * # MyDialogCtrl
 * Controller of the ngAppApp
 */
angular.module('ngAppApp')
  .controller('MyDialogCtrl', function ($scope,ngDialog) {
    $scope.goToSettings = function(){
      ngDialog.open({
        template:'views/dialog/dialog.html'
      })
    };
  });
