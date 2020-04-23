using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MyMoivesU.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Season { get; set; }
        public string ViewerDiscretion { get; set; }
        public string Transcript { get; set; }

        [JsonIgnore]
        public virtual IList<Watchlist> Watchlists { get; set; }
        [JsonIgnore]
        public virtual IList<Comment> Comments { get; set; }

        public Movie()
        {
        }

        public Movie(int id, string title, string image, string season, string viewerDiscretion , string transcript)
        {
            Id = id;
            Title = title;
            Image = image;
            Season = season;
            ViewerDiscretion = viewerDiscretion;
            Transcript = transcript;
        }
    }
}
