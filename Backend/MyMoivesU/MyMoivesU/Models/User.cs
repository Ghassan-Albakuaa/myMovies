using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MyMoivesU.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Group { get; set; }
        public string Password { get; set; }
        public string Image { get; set; }


        [JsonIgnore]
        public virtual IList<Watchlist> Watchlists { get; set; }
        [JsonIgnore]
        public virtual IList<Comment> Comments { get; set; }


        public User()
        {
        }

        public User(int id, string name, string password, string group, string image)
        {
            Id = id;
            Name = name;
            Group = group;
            Password = password;
            Image = image;
        }
    }
}
