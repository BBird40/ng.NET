var templateApp = angular.module("templateApp", ["ngRoute", "ui.bootstrap"]);

templateApp.config(
    // this allows the parameters to be minified but 
    //      also allows Angular to notice if those parameters have been minified.
    ["$routeProvider","$locationProvider",
    function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newForm", {
            templateUrl: "app/DemoForm/dfTemplate.html",
            controller: "dfController"
        })
        .when("/updateForm/:id", {
            templateUrl: "app/DemoForm/dfTemplate.html",
            controller: "dfController"
        })
        .otherwise({
           redirectTo: "/home" 
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);

templateApp.controller("HomeController",
    ["$scope", "$location", "DataService",
    function($scope, $location, DataService) {
        
        DataService.getEmployees().then(
            function (results) {
                // on success
                var data = results.data;
            },
            function (results) {
                // on error
                var data = results.data;
            }
        );

        $scope.showCreateForm = function () {
            // used to show in a modal
            //$modal.open({
            //    templateUrl: "app/DemoForm/dfTemplate.html",
            //    controller: "dfController"
            //})

            // Used to open the form in a new page
            $location.path("/newForm");            
        };
        
        $scope.showUpdateForm = function (id) {
            $location.path("/updateForm/" + id);
        };
    }]);