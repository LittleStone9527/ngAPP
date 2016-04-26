'use strict';

/**
 * @ngdoc function
 * @name ngAppApp.controller:ServiceCtrl
 * @description
 * # ServiceCtrl
 * Controller of the ngAppApp
 */
angular.module('ngAppApp')
  .controller('ServiceCtrl', ['$scope', '$timeout', 'githubService', function ($scope, $timeout, githubService) {
    var timeout;
    //通过监视username来响应试图中数据的变化,如果有变化就运行该函数
    $scope.$watch('username', function(newUsername){
      if(newUsername){
        if(timeout) $timeout.cancel(timeout);
        timeout = $timeout(function(){
          //调用对象的事件函数
          githubService.events(newUsername)
            //success函数在数据中封装响应，因此需要调用data.data来获取原始数据
            .success(function(data, state, headers){
              $scope.events = data.data;
            })
        }, 400);
      }
    });

    $scope.setUsername = githubService.setUsername;

    }
  ]);
