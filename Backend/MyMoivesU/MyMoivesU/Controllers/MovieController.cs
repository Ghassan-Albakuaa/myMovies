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
    public class MovieController : ControllerBase
    {
        IRepository<Movie> movieRepo;

        public MovieController(IRepository<Movie> movieRepo)
        {
            this.movieRepo = movieRepo;
        }

        // GET: api/Placeholder
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return movieRepo.GetAll();
        }

        // GET: api/Placeholder/5
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            return movieRepo.GetById(id);
        }

        // POST: api/Placeholder
        [HttpPost]
        public IEnumerable<Movie> Post([FromBody] Movie value)
        {
            movieRepo.Create(value);
            return movieRepo.GetAll();
        }

        // PUT: api/Placeholder/5
        [HttpPut("{id}")]
        public IEnumerable<Movie> Put([FromBody] Movie value)
        {
            movieRepo.Update(value);
            return movieRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<Movie> Delete(int id)
        {
            var tvShow = movieRepo.GetById(id);
            movieRepo.Delete(tvShow);
            return movieRepo.GetAll();
        }
    }
}
