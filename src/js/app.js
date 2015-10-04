'use strict';
define([
	'angular',
	'angularRoute',
	'app/view1'
], function(angular, angularRoute, view1) {
	return angular.module('myApp', ['ngRoute', 'myApp.view1'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
});
