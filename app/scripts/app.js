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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/academic', {
        templateUrl: 'views/academic.html',
        controller: 'AcademicCtrl',
        controllerAs: 'academic'
      })
      .when('/campus', {
        templateUrl: 'views/campus.html',
        controller: 'CampusCtrl',
        controllerAs: 'campus'
      })
      .when('/social', {
        templateUrl: 'views/social.html',
        controller: 'SocialCtrl',
        controllerAs: 'social'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
