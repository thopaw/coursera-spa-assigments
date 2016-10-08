(function() {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['data', 'shortName'];
function ItemsController(data, shortName) {
  var itemsCtrl = this;
  itemsCtrl.data = data;
  itemsCtrl.shortName = shortName;
}

}());
