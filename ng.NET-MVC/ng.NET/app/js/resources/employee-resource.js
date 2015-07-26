(function () {
    'use strict';
    angular.module('templateApp').factory('employeeResource', employeeResource);
    employeeResource.$inject = ['$resource'];

    /*
        employeeReource communicates to the server over "api/employees/:id". The id being a parameter.
        The second parameter specifies any default parameters, there are none so pass null.
        The third parameter specifies a custom action.
    **/
    function employeeResource($resource) {
        return $resource("api/employees/:id", null,
        {
            'update': { method: 'PUT' }
        });
    }
})();