(function () {
    "use strict";
    angular.module("templateApp").controller("loginController", loginController);
    loginController.$inject = ['$scope'];

    function loginController($scope) {
        isLoggedIn = false;
        message = '';
        userData = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        registerUser = function () {
            userData.confirmPassword = userData.password;

            userAccount.registerUser(userData,
                function (data) {
                    confirmPassword = "";
                    message = "...Registration Successful";
                    login();
                }, errorCallback);
        }

        login = function () {

        }

        function errorCallback(response) {
            vm.message = response.statusText + "\r\n";
            if (response.data.modelState) {
                for (var key in response.data.modelState) {
                    vm.message += response.data.modelState[key] + "\r\n";
                }
            }
            if (response.data.exceptionMessage)
                vm.message += response.data.exceptionMessage;
            if (response.data.error)
                vm.message += response.data.error;
        };
    };

})();