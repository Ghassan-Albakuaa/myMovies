using Microsoft.EntityFrameworkCore;
using MyMoivesU.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyMoivesU
{
    public class MovieContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Watchlist> Watchlists { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=MovieUDb;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(connectionString)
                .UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // TV Shows
            modelBuilder.Entity<Movie>().HasData(
                new Movie
                {
                    Id = 1,
                    Title = "Friends",
                    Image = "friends.jpg",
                    Season = "10",
                    ViewerDiscretion = "TV-14",
                    Transcript = "how you doin"
                },
                new Movie
                {
                    Id = 2,
                    Title = "Game of Thrones",
                    Image = "gameofthrones.jpg",
                    Season = "8",
                    ViewerDiscretion = "TV-MA",
                    Transcript = "how you doin"
                },
                new Movie
                {
                    Id = 3,
                    Title = "The Marvelous Mrs. Maisel",
                    Image = "maisel.jpg",
                    Season = "4",
                    ViewerDiscretion = "TV-MA",
                    Transcript = "how you doin"
                },
                new Movie
                {
                    Id = 4,
                    Title = "Ozark",
                    Image = "ozark.jpg",
                    Season = "3",
                    ViewerDiscretion = "TV-MA",
                    Transcript = "how you doin"
                });


            // Users
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    Name = "Ghassan",
                    Image = "ghassan.jpg",
                    Password = "123456",
                    Group = "A"
                },
                new User
                {
                    Id = 2,
                    Name = "Nabil",
                    Image = "nabil.jpg",
                    Password = "123654",
                    Group = "B"
                },
                new User
                {
                    Id = 3,
                    Name = "Tatyana",
                    Image = "tatyana.jpg",
                    Password = "124356",
                    Group = "B"
                },
                new User
                {
                    Id = 4,
                    Name = "Erin",
                    Image = "erin.jpg",
                    Password = "213456",
                    Group = "A"

                });
            base.OnModelCreating(modelBuilder);
        }
    }

}

