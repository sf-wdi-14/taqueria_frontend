'use strict';

/**
 * @ngdoc overview
 * @name taqueriaFrontendApp
 * @description
 * # taqueriaFrontendApp
 *
 * Main module of the application.
 */
var app = angular
  .module('taqueriaFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  
app.config(function ($routeProvider) {
    $routeProvider
      .when('/tacos', {
        templateUrl: 'views/tacos/index.html',
        controller: 'TacosCtrl'
      })
      .when('/tacos/new', {
        templateUrl: 'views/tacos/new.html',
        controller: 'NewTacoCtrl'
      })
      .when('/tacos/:id', {
        templateUrl: 'views/tacos/show.html',
        controller: 'TacoCtrl'
      })
      .when('/tacos/:id/edit', {
        templateUrl: 'views/tacos/edit.html',
        controller: 'EditTacoCtrl'
      })
      .otherwise({
        redirectTo: '/tacos'
      });
  });
