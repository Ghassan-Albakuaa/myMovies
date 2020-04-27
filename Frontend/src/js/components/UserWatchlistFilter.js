export default function UserWatchlistFilter(watchlist){
    return `
      ${watchlist.map(element => {
         
              const watchedShow = document.createElement("p");
              watchedShow.classList.add("watchlist__watched_show");
              document.querySelector(".watchlist__watched_shows").appendChild(watchedShow);
              watchedShow.innerHTML +=  `<h5 class="watched_show__title">${element.movie.title} <p class="p_title-hover-btn">>></p></h5>
              <input class="watch__id"  type="hidden" value="${element.id}">
              <input class="watch__Userid"  type="hidden" value="${element.user.id}">`
            + ` <img class="tvShow__image" src="./img/tvshows/${element.movie.image}" alt="${element.movie.image}"></img>`
            + ` </br>`
            + ` <input class="watch__tvShowId" type="hidden" value="${element.movieId}">`
            + ` <button class='edit-watchList__submit'>Edit</button>` 
            + ` <button class='addReview-watchList__submit'>Add Review </button>`
            + ` <button class='deleteReview-watchList__submit'>Delete</button>` ;
          
            }).join("")}
            `
        }