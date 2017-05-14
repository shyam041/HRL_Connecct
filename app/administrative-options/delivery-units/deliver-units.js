'use strict';

angular.module('myApp.deliver-units', ['ui.router','ngMaterial'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('admistrative-options.deliver-units',
  {
    name:'admistrative-options.deliver-units',
    url:'/deliver-units',
    templateUrl: 'admistrative-options/deliver-units/deliver-units.html',
    controller: 'DeliverUnitsCtrl'
  });
}])

.controller('DeliverUnitsCtrl', [function() {

}]);
