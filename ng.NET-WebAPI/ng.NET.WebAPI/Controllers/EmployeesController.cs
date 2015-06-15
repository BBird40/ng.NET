using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web.OData;
using DataAccessLayer;
using DomainModel;

namespace ng.NET.WebAPI.Controllers
{    
    public class EmployeesController : ApiController
    {
        // GET api/employees
        [EnableQuery]
        //[ResponseType(typeof(Employee))]
        public IQueryable<Employee> Get()
        {         
            return new EmployeeRepository().Retrieve().AsQueryable();
        }

        public IEnumerable<Employee> Get(string search)
        {            
            return new EmployeeRepository().Retrieve().Where(x => x.Department.Contains(search));
        }

        // GET api/employees/5
        //[ResponseType(typeof(Employee))]
        //[Authorize]
        public Employee Get(int id)
        {
            try
            {
                var productRepository = new EmployeeRepository();
                return id > 0 ? 
                    productRepository.Retrieve().FirstOrDefault(x => x.Id == id) : 
                    productRepository.Create();
            }
            catch (Exception ex)
            {
                return null;
            }

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
