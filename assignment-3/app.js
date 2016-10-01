(function() {
  'use strict';

  var module = angular.module('NarrowItDown', []);
  module.controller('NarrowItDownController', NarrowItDownController);
  module.service('MenuSearchService', MenuSearchService);
  module.directive('foundItems', FoundItemsDirective);
  module.directive('itemsLoaderIndicator', ItemsLoaderIndicatorDirective);
  module.constant('ApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");

  function ItemsLoaderIndicatorDirective() {
    var ddo = {
      templateUrl: 'loadingIndicator.html',
      restrict: 'E',
      scope: {
        loading: '<'
      }
    };
    return ddo;
  }

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
    };
    return ddo;
  }

  FoundItemsDirectiveController.$inject = [];
  function FoundItemsDirectiveController() {
    var ctrl = this;
  }

  MenuSearchService.$inject = ['$http', 'ApiUrl'];
  function MenuSearchService($http, ApiUrl) {

    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var options = {
        url: ApiUrl
      };
      return $http(options).then(function (result) {
        var foundItems = [];
        for(var i =0; i < result.data.menu_items.length; i++) {
          var menu = result.data.menu_items[i];
          if(menu.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            foundItems.push(menu);
          }
        }
        return foundItems;
      });
    }

  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    narrow.items = [];
    narrow.message = ""

    narrow.remove = function(index) {
      console.log("remove from list", index);
      narrow.items.splice(index,1);
    };

    narrow.loading = false;

    narrow.search = function() {
      console.log("Search for", narrow.searchTerm);
      narrow.loading = true;
      narrow.items = [];
      if(narrow.searchTerm) {
        MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
        .then(function(items) {
          narrow.items = items;
          narrow.loading = false;
          if(items.length == 0) {
            narrow.message="Nothing found";
          } else {
            narrow.message="";
          }
        })
        .catch(function(error) {
          console.log("Error",error);
          narrow.error = error;
        }).finally(function() {
          narrow.loading = false;
        });
      } else {
        narrow.message="Nothing found";
        narrow.loading = false;
      }

    };

  }

}());
