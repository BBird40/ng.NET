(function() {
    "use strict";
    angular.module("templateApp").controller("employeeListController", employeeListController);

    employeeListController.$inject = ['employeeResource'];

    function employeeListController(employeeResource) {
        var vm = this;
        vm.searchCriteria = "WebDev";

        employeeResource.query(function(data) {
            vm.employees = data;
        });
    }
}());