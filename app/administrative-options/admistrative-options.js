'use strict';

angular.module('myApp.admistrative-options', ['ui.router','ngMaterial','myApp.deliver-units'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('admistrative-options',
  {
    name:'admistrative-options',
    url:'/admistrative-options',
    templateUrl: 'administrative-options/admistrative-options.html',
    controller: 'AdmistrativeOptionsCtrl'
  });
}])

.controller('AdmistrativeOptionsCtrl', [function() {

}]);
