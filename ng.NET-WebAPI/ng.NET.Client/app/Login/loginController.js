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

            userAccount.registerUser($scope.userData,
                function (data) {
                    $scope.confirmPassword = "";
                    $scope.message = "...Registration Successful";
                    $scope.login();
                }, errorCallback);
        }

        $scope.login = function () {

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