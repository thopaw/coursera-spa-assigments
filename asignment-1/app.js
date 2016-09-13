'use strict';

// Define the module
var module = angular.module('LunchCheck', []);
module.controller('LunchCheckController', ['$scope', function($scope) {
	
	
	var msg_empty = "Please enter data first";
	var msg_ok = "Enjoy!";
	var msg_too_much = "Too much!";
	
	var max_amount = 3;
	
	
	$scope.verifyItems = function() {
		if($scope.items) {
			var numberOfItems = $scope.items.split(",").filter(function(element) {
				return element && element.trim().length > 0;
			}).length;
			if(numberOfItems <= max_amount) {
				return true;				
			}
		}
		return false;
	}	
		
	$scope.message = "";
	
	$scope.check = function() {
		if($scope.items) {
			if($scope.verifyItems()) {
				$scope.message = msg_ok;
			} else {
				$scope.message = msg_too_much;
			}			
		} else {
			$scope.message = msg_empty;
		}		
	};
}]);