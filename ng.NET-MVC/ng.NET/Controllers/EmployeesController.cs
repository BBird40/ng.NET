using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Mvc;
using BusinessLayer;
using DataAccessLayer;

namespace ng.NET.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            return new EmployeeRepository().Retrieve();
        }

        public IEnumerable<Employee> Get(string search)
        {
            return new EmployeeRepository().Retrieve().Where(x => x.Department.Contains(search));
        }

        public ActionResult Create(Employee employee)
        {
            if(ModelState.IsValid)
                return new HttpStatusCodeResult(HttpStatusCode.Created, "New Employee Created!");

            // best to encapsulate only server side errors here
            // cannot connect to the database, file, permissions issues, etc.
            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError, "Creating a new employee failed.");
        }
    }
}