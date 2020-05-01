export default function UserWatchlistFilter(watchlist){
    return `
      ${watchlist.map(element => {
        if(element.status == "Watched" ){
              const watchedShow = document.createElement("p");
              watchedShow.classList.add("watchlist__watched_movie");
              document.querySelector(".watchlist__watched_movies").appendChild(watchedShow);
              watchedShow.innerHTML +=  `<h5 class="watched_movie__title">${element.movie.title} <p class="p_title-hover-btn"></p></h5>
              <input class="watch__id"  type="hidden" value="${element.id}">
              <input class="watch__Userid"  type="hidden" value="${element.user.id}">`
            + ` <img class="movie__image" src="./img/movies/${element.movie.image}" alt="${element.movie.image}"></img>`
            + ` </br>`
            + ` <input class="watch__movieId" type="hidden" value="${element.movieId}">`
            + ` <button class='edit-watchList__submit'>Edit</button>` 
            + ` <button class='addReview-watchList__submit'>Add Review </button>`
            + ` <button class='deleteReview-watchList__submit'>Delete</button>` ;
        }

        if(element.status == "Watching" ){
          const watchedShow = document.createElement("p");
          watchedShow.classList.add("watchlist__watching_movie");
          document.querySelector(".watchlist__watching_movies").appendChild(watchedShow);
          watchedShow.innerHTML +=  `<h5 class="watched_movie__title">${element.movie.title} <p class="p_title-hover-btn"></p></h5>
          <input class="watch__id"  type="hidden" value="${element.id}">
          <input class="watch__Userid"  type="hidden" value="${element.user.id}">`
        + ` <img class="movie__image" src="./img/movies/${element.movie.image}" alt="${element.movie.image}"></img>`
        + ` </br>`
        + ` <input class="watch__movie" type="hidden" value="${element.movieId}">`
        + ` <button class='edit-watchList__submit'>Edit</button>`        
        + ` <button class='deleteReview-watchList__submit'>Delete</button>` ;
    }

    if(element.status == "ToBeWatched" ){
      const watchedShow = document.createElement("p");
      watchedShow.classList.add("watchlist__tobewatched_movie");
      document.querySelector(".watchlist__tobewatched_movies").appendChild(watchedShow);
      watchedShow.innerHTML +=  `<h5 class="watched_movie__title">${element.movie.title} <p class="p_title-hover-btn"></p></h5>
      <input class="watch__id"  type="hidden" value="${element.id}">
      <input class="watch__Userid"  type="hidden" value="${element.user.id}">`
    + ` <img class="movie__image" src="./img/movies/${element.movie.image}" alt="${element.movie.image}"></img>`
    + ` </br>`
    + ` <input class="watch__movie" type="hidden" value="${element.movieId}">`
    + ` <button class='edit-watchList__submit'>Edit</button>`        
    + ` <button class='deleteReview-watchList__submit'>Delete</button>` ;
}
            }).join("")}
            `
        }