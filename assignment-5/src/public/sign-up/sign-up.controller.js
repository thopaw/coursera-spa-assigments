(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.favoriteInvalid = false;
  $ctrl.saved = false;

  $ctrl.submit = function() {
    console.log("Sign Up", $ctrl.user);
    UserService.signUp({});
    $ctrl.saved = false;

    MenuService.getMenuItem($ctrl.user.favorite)
    .then(function(data){
        UserService.signUp($ctrl.user);
        $ctrl.favoriteInvalid = false;
        $ctrl.saved = true;
    })
    .catch(function(error) {
      console.log("Error during reading favorite", error);
      $ctrl.favoriteInvalid = true;
    });

  };

}


})();
