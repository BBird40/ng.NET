(function() {
    "use strict";
    angular.module("templateApp").controller("homeController", homeController);

    homeController.$inject = ["$scope", "$location", "employeeData"];

    function homeController($scope, $location, employeeData) {
        employeeData.getEmployees().then(
            function (results) {
                // on success
                var data = results.data;
            },
            function (results) {
                // on error
                var data = results.data;
            }
        );

        $scope.showCreateForm = function () {
            $location.path("/newForm");
        };

        $scope.showUpdateForm = function (id) {
            $location.path("/updateForm/" + id);
        };
    }
}());