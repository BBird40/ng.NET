// sets up the $scope variable.

templateApp.controller('dfController',
    ["$scope", "$window", "$routeParams", "DataService", 'employeeResource',
    function dfController($scope, $window, $routeParams, DataService, employeeResource) {

        if ($routeParams.id)
            employeeResource.query({ id: $routeParams.id }, function(data) {
                $scope.employee = data;
            });
        else
            employeeResource.query({ id: 0 }, function (data) {
                $scope.employee = data;
            });
                
        // create a copy to be used to revert user input
        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.hobbies = DataService.getHobbies;

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
                    },
                    function (results) {
                        // on error
                        $scope.hasFormError = true;
                        $scope.serverSideErrors = results.statusText;
                    });
            } else {
                // update
                $scope.editableEmployee.$update({ id: $scope.editableEmployee.productId },
                    function (data) {
                    $scope.employee = angular.copy($scope.editableEmployee);
                    $window.history.back();
                    },
                    function(data) {
                        // on error
                        $scope.hasFormError = true;
                        $scope.serverSideErrors = results.statusText;
                    });
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