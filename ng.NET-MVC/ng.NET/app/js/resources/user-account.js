(function () {
    "use strict";
    angular.module("templateApp").factory("userAccount", userAccount);
    userAccount.$inject = ['$resource'];

    function userAccount($resource) {
        return {
            registration: $resource("api/Account/Register", null,
            {
                "registerUser": { method: 'POST' },
            }),
            login: $resource("Token", null,
            {
                "loginUser": {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    transformRequest: function (data, headersGetter) {
                        var str = [];
                        for (var d in data)
                            str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
                        return str.join("&");
                    }
                },
            })
        }
    }
})();