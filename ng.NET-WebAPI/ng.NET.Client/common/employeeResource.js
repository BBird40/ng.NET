(function () {
    'use strict';

    angular.module('templateApp').factory('employeeResource', employeeResource);

    employeeResource.$inject = ['$resource', 'appSettings'];

    function employeeResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/employees/:id");
    }
})();