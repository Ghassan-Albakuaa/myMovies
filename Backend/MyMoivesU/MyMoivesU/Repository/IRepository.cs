using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMoivesU.Repository
{
   public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll();
        IEnumerable<T> GetByUserId(int id);
        IEnumerable<T> GetByMovieId(int id);
        T GetById(int id);
        void Create(T obj);
        void Update(T obj);
        void Delete(T obj);
    }
    
}
