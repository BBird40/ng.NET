(function () {
    "use strict";
    angular.module("templateApp").controller("loginController", loginController);
    loginController.$inject = ['$scope', 'userAccount'];

    function loginController($scope, userAccount) {
        $scope.isLoggedIn = false;
        $scope.message = '';
        $scope.userData = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        $scope.registerUser = function () {
            $scope.userData.confirmPassword = $scope.userData.password;

            userAccount.registration.registerUser($scope.userData,
                function (data) {
                    $scope.confirmPassword = "";
                    $scope.message = "...Registration Successful";
                    $scope.login();
                }, errorCallback);
        }

        $scope.login = function () {
            $scope.userData.grant_type = "password";
            $scope.userData.userName = $scope.userData.email;

            userAccount.login.loginUser($scope.userData,
                function (data) {
                    $scope.isLoggedIn = true;
                    $scope.message = "";
                    $scope.password = "";
                    $scope.token = data.access_token;
                }, errorCallback);
        }

        function errorCallback(response) {
            $scope.message = response.statusText + "\r\n";
            if (response.data.modelState) {
                for (var key in response.data.modelState) {
                    $scope.message += response.data.modelState[key] + "\r\n";
                }
            }
            if (response.data.exceptionMessage)
                $scope.message += response.data.exceptionMessage;
            if (response.data.error)
                $scope.message += response.data.error;
        };
    };

})();