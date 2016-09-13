'use strict';

// Define the module
var module = angular.module('LunchCheck', []);
module.controller('LunchCheckController', ['$scope', function($scope) {


	var msg_empty = "Please enter data first";
	var msg_ok = "Enjoy!";
	var msg_too_much = "Too much!";

	var max_amount = 3;

	$scope.message = "";
	$scope.messageClass = "";

	$scope.check = function(items) {
		if(items) {
			var numberOfItems = $scope.items.split(",").filter(function(element) {
				return element && element.trim().length > 0;
			}).length;
			if(numberOfItems <= max_amount) {
				$scope.message = msg_ok;
			} else {
				$scope.message = msg_too_much;
			}
			$scope.messageClass = "green";
		} else {
			$scope.message = msg_empty;
			$scope.messageClass = "red";
		}
	};
}]);
