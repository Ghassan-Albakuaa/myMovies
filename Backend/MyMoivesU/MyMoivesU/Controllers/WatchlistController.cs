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
    public class WatchlistController : ControllerBase
    {
        IRepository<Watchlist> watchlistRepo;

        public WatchlistController(IRepository<Watchlist> watchlistRepo)
        {
            this.watchlistRepo = watchlistRepo;
        }

        // GET: api/Watchlist
        [HttpGet]
        public IEnumerable<Watchlist> Get()
        {
            return watchlistRepo.GetAll();
        }

        // GET: api/Watchlist/5
        [HttpGet("{id}")]
        public Watchlist Get(int id)
        {
            return watchlistRepo.GetById(id);
        }

        // GET: api/Watchlist/User/5
        [HttpGet("User/{userId}")]
        public IEnumerable<Watchlist> GetWatchlistByUser(int userId)
        {
            return watchlistRepo.GetByUserId(userId);
        }

        // POST: api/Watchlist
        [HttpPost]
        public IEnumerable<Watchlist> Post([FromBody] Watchlist value)
        {
            watchlistRepo.Create(value);
            return watchlistRepo.GetByUserId(value.UserId);
        }

        // PUT: api/Watchlist/5
        [HttpPut("{id}")]
        public IEnumerable<Watchlist> Put([FromBody] Watchlist value)
        {
            watchlistRepo.Update(value);
            return watchlistRepo.GetAll();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IEnumerable<Watchlist> Delete(int id)
        {
            var watchlist = watchlistRepo.GetById(id);
            watchlistRepo.Delete(watchlist);
            return watchlistRepo.GetAll();
        }
    }
}
