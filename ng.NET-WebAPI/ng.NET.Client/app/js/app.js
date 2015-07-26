var templateApp = angular.module("templateApp", ["ngRoute", "ui.bootstrap", "ngResource"]);

templateApp.constant("appSettings",
    {
        serverPath: "http://localhost:6147/"
    });

templateApp.config(
    // this allows the parameters to be minified but 
    //      also allows Angular to notice if those parameters have been minified.
    ["$routeProvider","$locationProvider",
    function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/views/home.html",
            controller: "homeController"
        })
        .when("/newForm", {
            templateUrl: "app/views/employee-form.html",
            controller: "employeeFormController"
        })
        .when("/updateForm/:id", {
            templateUrl: "app/views/employee-form.html",
            controller: "employeeFormController"
        })
        .otherwise({
           redirectTo: "/home" 
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);