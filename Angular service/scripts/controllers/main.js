'use strict';

/**
 * @ngdoc function
 * @name reganApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reganApp
 */
 var app=angular.module('reganApp');
  app.controller('MainCtrl', function ($scope,shareData) {
  	
  	$scope.submit=function(){
    shareData.Firstname=$scope.fname;
    shareData.Lname=$scope.lname;
    shareData.Email=$scope.email;
    shareData.Phone=$scope.phone;
  	};
    
    
  });
  /*app.service('shareData', function () {
  	this.fname="";
  	this.lname="";
  	this.email="";
  	this.phone="";
  	
    
  });*/

