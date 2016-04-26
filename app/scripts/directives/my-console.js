'use strict';

/**
 * @ngdoc directive
 * @name ngAppApp.directive:myConsole
 * @description
 * # myConsole
 */
angular.module('ngAppApp')
  .directive('myConsole', function () {
    return {
      templateUrl: 'views/common/console.html',
      restrict: 'E',
      replace: true
    };
  });
