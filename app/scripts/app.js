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
      .otherwise({
        redirectTo: '/tacos'
      });
  });
