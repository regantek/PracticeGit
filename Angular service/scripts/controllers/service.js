'use strict';

/**
 * @ngdoc function
 * @name reganApp.service:shareData
 * @description
 * # shareData
 * Service of the reganApp
 */
angular.module('reganApp')
  .service('shareData', function () {
  	this.fname='';
  	this.lname='';
  	this.email='';
  	this.phone='';
  	this.locat='';
  	this.depart='';
  	this.retrn='';
  });