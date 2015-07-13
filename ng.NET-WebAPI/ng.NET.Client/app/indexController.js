(function () {
    "use strict";
    angular.module("templateApp").controller("indexController", indexController);

    indexController.$inject = ["currentUser"];

    function indexController(currentUser) {
        isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        };
    }
})();