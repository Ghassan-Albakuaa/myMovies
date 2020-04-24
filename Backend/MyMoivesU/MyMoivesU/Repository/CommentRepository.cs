using MyMoivesU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMoivesU.Repository
{
    public class CommentRepository : Repository<Comment>, IRepository<Comment>
    {
        private MovieContext db;
        public CommentRepository(MovieContext context) : base(context)
        {
            db = context;
        }
        public override IEnumerable<Comment> GetByTvShowId(int id)
        {
            return db.Comments.Where(w => w.MovieId == id).ToList();
        }
    }
}
