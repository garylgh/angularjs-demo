'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('myApp.view1', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'public/view/view1.html',
			controller: 'View1Ctrl'
		});
	}])
	.controller('View1Ctrl', ["$scope", function($scope) {
		$scope.aa = '这事一段代码';
        console.log('ctrl1');
	}]);
});
