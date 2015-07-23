
// Handles data interaction with the server
templateApp.factory('employeeDataService',
    ["$http",
    function ($http) {

        var getEmployees = function () {
            return $http.get("api/Employee/Get");
        };

        var getEmployee = function (id) {
            if (id === 111) {
                return {                    
                    id: 111,
                    fullname: "Jimmy Ellington",
                    notes: "Two middle names...that's odd.",
                    favoriteHobby: "Programming",
                    happiness: 7,
                    isContractor: true,
                    contractingCompany: "J.E.T. LLC",
                    department: "Web Development",
                    dateHired: "11/4/2014",
                    breakTime: "1/1/2015 2:45 PM",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeekes: true,
                    payrollType: "none"                    
                };
            }
            return undefined;
        };

        var insertEmployee = function(newEmployee) {
            return $http.post("api/Employee/Create", newEmployee);
        };
        
        var updateEmployee = function (employee) {
            return true;
        };

        var hobbies = [
            "Sleeping",
            "Video Games",
            "Reading",
            "Programming",
            "Watching TV",
            "Exercising"
        ];

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployees: getEmployees,
            getEmployee: getEmployee,
            getHobbies: hobbies
        };
}]);