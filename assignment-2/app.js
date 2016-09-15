'use strict';
(function (){
	
	// Define the Module
	var module = angular.module('ShoppingListCheckOff',[]);
	
	// Include the Controllers
	module.controller('ToBuyShoppingController', ToBuyShoppingController);
	module.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
	
	// Define the Services
	module.factory('items', ItemsService);

	// Define Controller	
	ToBuyShoppingController.$inject = ['$scope', 'items'];
	function ToBuyShoppingController($scope, items) {
		$scope.name = "Test";
		
		$scope.getItems = function() {
			return items.itemsToBuy;
		};
		
	};
	
	// Define Controller	
	AlreadyBoughtShoppingController.$inject = ['$scope', 'items'];
	function AlreadyBoughtShoppingController($scope, items) {
	};
	
	// Define Service
	ItemsService.$inject = [];
	function ItemsService() {
		return function() {
			var itemsToBuy = [ { name: 'cookies', quantity: 10 }, { name: 'milk', quantity: 3 } ];
			var itemsBought = [];
		};
	};

}());