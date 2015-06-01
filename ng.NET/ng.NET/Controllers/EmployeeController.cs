using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Mvc;
using DomainModel;

namespace ng.NET.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            return new List<Employee>()
            {
                new Employee { Fullname = "Alexandra Byrd" },
                new Employee { Fullname = "Bryan Cox" }
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