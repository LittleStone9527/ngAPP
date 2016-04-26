'use strict';

/**
 * @ngdoc overview
 * @name ngAppApp
 * @description
 * # ngAppApp
 *
 * Main module of the application.
 */
angular
  .module('ngAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngDialog'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('main');
    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "views/main.html"
      })
      .state('info-1', {
        url: "/info-1",
        templateUrl: "views/info/info-1.html"
      })
      .state('house', {
        url: "/house",
        templateUrl: "views/house.html"
      })
      .state('find', {
        url: "/find",
        templateUrl: "views/find.html"
      })
      .state('index', {
        url: "/index",
        templateUrl: "views/private/index.html"
      })
  })
  .controller("defaultCtrl", function ($scope) {
    $scope.templateUrl = {
      header: 'views/common/header.html'
    }
  });
/*
 * .config(function ($routeProvider) {
 $routeProvider
 .when('/', {
 templateUrl: 'views/main.html',
 controller: 'MainCtrl',
 controllerAs: 'main'
 })
 .when('/about', {
 templateUrl: 'views/about.html',
 controller: 'AboutCtrl',
 controllerAs: 'about'
 })
 .otherwise({
 redirectTo: '/'
 });
 })
 * */