(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = [];
function UserService() {
  var service = this;
  var signedUp = false;
  var user = undefined;

  service.isSignedUp = function() {
    return signedUp;
  };

  service.signUp = function(newUser) {
    user = newUser;
    signedUp = true;
  };

  service.user = function() {
    return user;
  };

}
})();
