'use strict';

/**
 * @ngdoc function
 * @name reganApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reganApp
 */
angular.module('reganApp')
  .controller('ContactCtrl', function ($scope,shareData) {
//$scope.submit1=function(){
	$scope.name1=shareData.Firstname;
	$scope.name2=shareData.Lname;
	$scope.EMAIL=shareData.Email;
	$scope.PHONE=shareData.Phone;
	$scope.LOCAT=shareData.Locat;
	$scope.DEPART=shareData.Depart;
	$scope.RETRN=shareData.Retrn;
//}
  	

    
  });