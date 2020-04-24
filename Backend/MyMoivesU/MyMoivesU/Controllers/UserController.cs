using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyMoivesU.Models;
using MyMoivesU.Repository;

namespace MyMoivesU.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        IRepository<User> userRepo;

        public UserController(IRepository<User> userRepo)
        {
            this.userRepo = userRepo;
        }

        // GET: api/Placeholder
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return userRepo.GetAll();
        }

        // GET: api/Placeholder/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return userRepo.GetById(id);
        }

        // POST: api/Placeholder
        [HttpPost]
        public IEnumerable<User> Post([FromBody] User value)
        {
            userRepo.Create(value);
            return userRepo.GetAll();
        }

        // PUT: api/Placeholder/5
        [HttpPut("{id}")]
        public IEnumerable<User> Put([FromBody] User value)
        {
            userRepo.Update(value);
            return userRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<User> Delete(int id)
        {
            var user = userRepo.GetById(id);
            userRepo.Delete(user);
            return userRepo.GetAll();
        }
    }
}
