'use strict';

/**
 * @ngdoc service
 * @name ngAppApp.githubService
 * @description
 * # githubService
 * Service in the ngAppApp.
 */
/*angular.module('ngAppApp')
  .factory('githubService', ['$http', function ($http) {
    var githubUrl = 'https://api.github.com';
    var githubUsername;

    var runUserRequest = function (username, path) {
      return $http({
        method: 'JSONP',
        url: githubUrl + '/users/' + username + '/' + path + '?callback=JSON_CALLBACK'
      });
    };

    return {
      events: function (username) {
        return runUserRequest(username, 'events');
      },
      //在服务中增加一个方法，保存当前github用户名
      setUsername: function (username) {
        githubUsername = username;
      }
    };
  }]);*/



//lru: least recently used
var lru = $cacheFactory('lru',{
  capacity: 20//缓存的请求数量
});
//http请求
$http.get('/api/users.json', { cache: lru})
  .success(function(){})
  .error(function(){});


angular.module('myApp',[])
  .config(function($httpProvider, $cacheFactory){
    $httpProvider.defaults.cache = $cacheFactory('lru',{
      capacity:20
    })
  });


