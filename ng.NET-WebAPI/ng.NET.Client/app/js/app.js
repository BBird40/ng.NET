var templateApp = angular.module("templateApp", ["ngRoute", "ui.bootstrap", "common.services"]);

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