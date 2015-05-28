using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace ng.NET.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            return new List<Employee>()
            {
                new Employee { FullName = "Alexandra Byrd" },
                new Employee { FullName = "Bryan Cox" }
            };
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