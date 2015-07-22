using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.OData;
using DataAccessLayer;
using BusinessLayer;

namespace ng.NET.WebAPI.Controllers
{    
    public class EmployeesController : ApiController
    {
        // GET api/employees
        [EnableQuery]
        [ResponseType(typeof(Employee))]
        public IHttpActionResult Get()
        {         
            return Ok(new EmployeeRepository().Retrieve().AsQueryable());
        }

        public IEnumerable<Employee> Get(string search)
        {            
            return new EmployeeRepository().Retrieve().Where(x => x.Department.Contains(search));
        }

        // GET api/employees/5
        [ResponseType(typeof(Employee))]
        //[Authorize]
        public IHttpActionResult Get(int id)
        {
            Employee employee;
            var employeeRepository = new EmployeeRepository();

            if (id > 0)
            {
                employee = employeeRepository.Retrieve().FirstOrDefault(e => e.Id == id);
                if(employee == null)
                    return NotFound();
            }
            else
            {
                employee = employeeRepository.Create();
            }

            return Ok(employee);
        }

        // POST api/employees
        [ResponseType(typeof(Employee))]
        public IHttpActionResult Post([FromBody]Employee product)
        {
            try
            {
                if (product == null)
                    return BadRequest("Employee cannot be null");

                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var newEmployee = new EmployeeRepository().Save(product);
                if (newEmployee == null)
                    return Conflict();

                return Created(Request.RequestUri + newEmployee.Id.ToString(), newEmployee);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // PUT api/employees/5
        [ResponseType(typeof(Employee))]
        public IHttpActionResult Put(int id, [FromBody]Employee product)
        {
            try
            {
                if (product == null)
                    return BadRequest("Employee cannot be null");

                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var updatedEmployee = new EmployeeRepository().Save(id, product);                
                if (updatedEmployee == null)                
                    return NotFound();
                
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // DELETE api/employees/5
        public void Delete(int id)
        {
        }
    }
}
