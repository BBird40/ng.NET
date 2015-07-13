(function () {
    "use strict";
    angular.module("templateApp").controller("indexController", indexController);

    indexController.$inject = ["$scope", "currentUser"];

    function indexController($scope, currentUser) {
        $scope.isLoggedIn = function () {
            return currentUser.isLoggedIn();
        };
    }
})();