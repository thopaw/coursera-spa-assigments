(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['ApiUrl', '$http'];
  function MenuDataService(ApiUrl, $http) {
    var service = this;

    service.getAllCategories = function() {
      var options = {
        url: ApiUrl+"categories.json"
      };
      return $http(options).then(function (result) {
        return result.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      var options = {
        url: ApiUrl+"menu_items.json?category="+categoryShortName
      };
      return $http(options).then(function(result) {
          return result.data;
      });

    };
  }

}());
