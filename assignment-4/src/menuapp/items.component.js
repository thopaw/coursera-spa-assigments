(function() {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/items.template.html',
    restricts: 'E',
    bindings: {
      items: '<'
    }
  });

}());
