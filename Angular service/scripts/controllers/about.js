'use strict';

/**
 * @ngdoc function
 * @name reganApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reganApp
 */
angular.module('reganApp')
  .controller('AboutCtrl', function ($scope,shareData) {
  	$scope.submit1=function(){
    shareData.Locat=$scope.locat;
    shareData.Depart=$scope.depart;
    shareData.Retrn=$scope.retrn;
    
  	};
    
  });
