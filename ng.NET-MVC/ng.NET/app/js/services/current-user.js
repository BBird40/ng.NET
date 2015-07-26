(function () {
    "use strict";
    angular.module("templateApp").factory("currentUser", currentUser);

    function currentUser() {
        var profile = {
            isLoggedIn: false,
            username: "",
            token: ""
        };

        var setProfile = function (username, token) {
            profile.username = username;
            profile.token = token;
            profile.isLoggedIn = true;
        };

        var getProfile = function () {
            return profile;
        };

        var isLoggedIn = function () {
            return profile.isLoggedIn;
        };

        return {
            setProfile: setProfile,
            getProfile: getProfile,
            isLoggedIn: isLoggedIn
        };
    };
})();