(function () {
    "use strict";
    angular.module("common.services").factory("userAccount", userAccount);
    userAccount.$inject = ['$resource', 'appSettings'];

    function userAccount($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/Account/Register", null,
        {
            "registerUser": { method: 'POST' },
        });
    }
})();