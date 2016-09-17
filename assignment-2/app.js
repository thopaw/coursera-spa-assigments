'use strict';
(function (){

	// Define the Module
	var module = angular.module('ShoppingListCheckOff',[]);

	// Include the Controllers
	module.controller('ToBuyShoppingController', ToBuyShoppingController);
	module.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
	// Include Service
	module.service('ItemsService', ItemsService);

	// Define Controller
	ToBuyShoppingController.$inject = ['ItemsService'];
	function ToBuyShoppingController(ItemsService) {
		var toBuy = this;

		toBuy.items = ItemsService.getItemsToBuy();

		toBuy.buyItem = function(index) {
			ItemsService.buyItem(index);
		}

		toBuy.newItem = function() {
			ItemsService.addItem(toBuy.newQuantity, toBuy.newName);
			toBuy.newQuantity = undefined;
			toBuy.newName = undefined;
		}

	};

	// Define Controller
	AlreadyBoughtShoppingController.$inject = ['ItemsService'];
	function AlreadyBoughtShoppingController(ItemsService) {
		var bought = this;

		bought.items = ItemsService.getBoughtItems()
	};

	// Define Service
	function ItemsService() {
		var service = this;

		var itemsToBuy = [
			{ name: 'cookies', quantity: 10 },
			{ name: 'milk', quantity: 3 },
			{ name: 'apple', quantity: 4 },
			{ name: 'banana', quantity: 7 },
			{ name: 'grapes', quantity: 1 },
			{ name: 'bread', quantity: 2 }
	  ];
		var itemsBought = [];

		service.getItemsToBuy = function() {
			return itemsToBuy;
		};

		service.addItem = function(quantity, name) {
			if(quantity && name) {
				itemsToBuy.push({ name: name, quantity: quantity});
			}
		}

		service.buyItem = function (index) {
			var boughtItem = itemsToBuy[index];
			itemsBought.push(itemsToBuy[index]);
			itemsToBuy.splice(index,1);
		};

		service.getBoughtItems = function() {
			return itemsBought;
		};
	};

}());
