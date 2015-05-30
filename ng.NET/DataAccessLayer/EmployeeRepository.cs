using System.Collections.Generic;
using System.Linq;
using System.Web.Hosting;
using DomainModel;
using Newtonsoft.Json;

namespace DataAccessLayer
{
    /// <summary>
    /// Stores the data in a json file so that no database is required for this
    /// sample application
    /// </summary>
    public class EmployeeRepository
    {
        private readonly string _filepath = HostingEnvironment.MapPath(@"~/employee.json");

        /// <summary>
        /// Creates a new employee with default values
        /// </summary>
        /// <returns></returns>
        public Employee Create()
        {
            return new Employee();
        }

        /// <summary>
        /// Retrieves the list of employees.
        /// </summary>
        /// <returns></returns>
        public List<Employee> Retrieve()
        {
            if (_filepath != null)
            {
                var json = System.IO.File.ReadAllText(_filepath);            
                return JsonConvert.DeserializeObject<List<Employee>>(json);
            }

            return null;
        }

        /// <summary>
        /// Saves a new employee.
        /// </summary>
        /// <param name="employee"></param>
        /// <returns></returns>
        public Employee Save(Employee employee)
        {
            // Read in the existing employees
            var employees = Retrieve();

            // Assign a new Id
            var maxId = employees.Max(p => p.Id);
            employee.Id = maxId + 1;
            employees.Add(employee);

            WriteData(employees);
            return employee;
        }

        /// <summary>
        /// Updates an existing employee
        /// </summary>
        /// <param name="id"></param>
        /// <param name="employee"></param>
        /// <returns></returns>
        public Employee Save(int id, Employee employee)
        {
            // Read in the existing employees
            var employees = Retrieve();

            // Locate and replace the item
            var itemIndex = employees.FindIndex(e => e.Id == employee.Id);
            if (itemIndex < 0)                            
                return null;

            employees[itemIndex] = employee;
            WriteData(employees);
            return employee;
        }

        private void WriteData(List<Employee> employees)
        {
            if (_filepath != null)
                System.IO.File.WriteAllText(_filepath, JsonConvert.SerializeObject(employees, Formatting.Indented));            
        }

    }
}