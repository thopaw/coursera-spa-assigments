(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'dish', 'ApiPath'];
function MyInfoController(user, dish, ApiPath) {
  var $ctrl = this;

  $ctrl.user = user;
  $ctrl.dish = dish;
  $ctrl.image = "";
  $ctrl.isSignedUp = user != undefined;

  console.log("Dish", dish);

  if(user) {
    $ctrl.image = ApiPath + '/images/'+user.favorite+'.jpg';
  }

}


})();
