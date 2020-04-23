using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace MyMoivesU.Models
{
    public class Comment
    {  
        public int Id { get; set; }
        public string CommentText { get; set; }

        [JsonIgnore]
        public virtual User User { get; set; }
        public int UserId { get; set; }

        [JsonIgnore]
        public virtual Movie Movie { get; set; }
        public int MovieId { get; set; }

        public Comment()
        {
        }

        public Comment(int id, string commentText)
        {
            Id = id;
            CommentText = commentText;
        }
    }
}
