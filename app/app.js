'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.admistrative-options',
  'myApp.reports',
  'myApp.user-options',
  'ngMaterial'
]).
config(['$locationProvider', function($locationProvider)
{
  $locationProvider.hashPrefix('!');

}]);
