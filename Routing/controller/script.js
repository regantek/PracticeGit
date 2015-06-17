var App = angular.module('RoutingExample',['ngRoute','ngStorage']);

App.controller('HomeCtrl',function($scope){
	
});

App.controller('WorkCtrl',function($scope,$localStorage){
	console.log($localStorage.myData);
	$scope.image = $localStorage.myData.largeImage;	
});

App.controller('ContactCtrl',function($scope,$location,$localStorage){
	$scope.data  = $localStorage.myData;

});

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
	})
	.when('/work', {
		templateUrl: 'views/bio.html',
		controller: 'WorkCtrl'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl'
	})
	.otherwise({ redirectTo: '/' });
});