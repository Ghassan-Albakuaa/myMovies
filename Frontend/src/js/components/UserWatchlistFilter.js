export default function UserWatchlistFilter(watchlist){
    return `
      ${watchlist.map(element => {
         
              const watchedShow = document.createElement("p");
              watchedShow.classList.add("watchlist__watched_movie");
              document.querySelector(".watchlist__watched_movies").appendChild(watchedShow);
              watchedShow.innerHTML +=  `<h5 class="watched_movie__title">${element.movie.title} <p class="p_title-hover-btn">>></p></h5>
              <input class="watch__id"  type="hidden" value="${element.id}">
              <input class="watch__Userid"  type="hidden" value="${element.user.id}">`
            + ` <img class="movie__image" src="./img/movies/${element.movie.image}" alt="${element.movie.image}"></img>`
            + ` </br>`
            + ` <input class="watch__tvShowId" type="hidden" value="${element.movieId}">`
            + ` <button class='edit-watchList__submit'>Edit</button>` 
            + ` <button class='addReview-watchList__submit'>Add Review </button>`
            + ` <button class='deleteReview-watchList__submit'>Delete</button>` ;
          
            }).join("")}
            `
        }