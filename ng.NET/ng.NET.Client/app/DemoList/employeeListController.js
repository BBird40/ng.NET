(function() {
    "use strict";
    angular.module("templateApp").controller("EmployeeListController", ["employeeResource", employeeListController]);
    
    function employeeListController(employeeResource) {
        var vm = this;

        employeeResource.query(function(data) {
            vm.employees = data;
        });
    }
}());