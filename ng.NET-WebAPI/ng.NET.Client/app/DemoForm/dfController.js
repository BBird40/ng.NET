// sets up the $scope variable.

templateApp.controller('dfController',
    ["$scope", "$window", "$routeParams", "employeeData", 'employeeResource',
    function dfController($scope, $window, $routeParams, employeeData, employeeResource) {

        function errorCallback(response) {
            $scope.serverSideErrors = response.statusText + "\r\n";
            if (response.data.modelState) {
                for (var key in response.data.modelState) {
                    $scope.serverSideErrors += response.data.modelState[key] + "\r\n";
                }
            }
            if (response.data.exceptionMessage)
                $scope.serverSideErrors += response.data.exceptionMessage;
        };

        var employeeId = 0;
        if ($routeParams.id)
            employeeId = $routeParams.id;

        employeeResource.get({ id: employeeId }, function (data) {
            $scope.employee = data;
            // create a copy to be used to revert user input
            $scope.editableEmployee = angular.copy($scope.employee);
        }, errorCallback);                        

        $scope.hobbies = employeeData.getHobbies;

        // great for dynamically making fields required.
        $scope.shouldShowFullName = function() {
            return true;
        };

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / 10);
        };
        
        $scope.submitForm = function () {
            $scope.$broadcast('show-errors-event');

            if ($scope.employeeForm.$invalid)
                return;

            if ($scope.editableEmployee.id === 0) {
                //insert new
                $scope.editableEmployee.$save(
                    function (results) {
                        // on success
                        $scope.employee = angular.copy($scope.editableEmployee);
                        // this is best used when the template is loaded on a page; not in a modal
                        $window.history.back();
                    },errorCallback);
            } else {
                // update
                $scope.editableEmployee.$update({ id: $scope.editableEmployee.id },
                    function (data) {
                    $scope.employee = angular.copy($scope.editableEmployee);
                    $window.history.back();
                    },errorCallback);
            }            
        };

        $scope.cancelForm = function() {
            //$modalInstance.dismiss();
            // this is best used when the template is loaded on a page; not in a modal
            $window.history.back();
        };

        $scope.resetForm = function() {
            $scope.$broadcast('hide-errors-event');
        };
    }]);