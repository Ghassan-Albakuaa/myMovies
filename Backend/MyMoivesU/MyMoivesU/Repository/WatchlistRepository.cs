using MyMoivesU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMoivesU.Repository
{
    public class WatchlistRepository : Repository<Watchlist>, IRepository<Watchlist>
    {
        private MovieContext db;
        public WatchlistRepository(MovieContext context) : base(context)
        {
            db = context;
        }

        public override IEnumerable<Watchlist> GetByUserId(int id)
        {
            return db.Watchlists.Where(w => w.UserId == id).ToList();
        }
    }
}
