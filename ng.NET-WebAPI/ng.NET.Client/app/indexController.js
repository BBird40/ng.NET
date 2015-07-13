(function () {
    "use strict";
    angular.module("templateApp").controller("indexController", indexController);

    indexController.$inject = ["currentUser"];

    function indexController(currentUser) {
        var vm = this;
        vm.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        };
    }
})();