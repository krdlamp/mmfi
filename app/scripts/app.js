'use strict';

/**
 * @ngdoc overview
 * @name mmfiApp
 * @description
 * # mmfiApp
 *
 * Main module of the application.
 */
angular
  .module('mmfiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/academic', {
        templateUrl: 'views/academic.html',
      })
      .when('/campus', {
        templateUrl: 'views/campus.html',
      })
      .when('/social', {
        templateUrl: 'views/social.html',
      })
      .when('/events', {
        templateUrl: 'views/calendar.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
