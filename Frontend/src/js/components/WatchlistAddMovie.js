//import UserLogin from "./UserLogin"
var flag = 0;
export default function WatchlistAddMovie(movies) {
 
    return `
    <p>Choose a show</p>
    <select class="watchlistaddshow__show_id" type="dropdown">
    ${movies.map(movie => {
        flag = 0;
        movie.watchlists.forEach(element => {
         if(movie.id == element.movieId && element.userId == localStorage.LoginhUserId)
         {
           flag =1;
         }
        })
          
       if(flag == 0)
        return `
            <option value=${movie.id}>${movie.title}</option>
            `
        })}
    </select>
    <p>Choose a status</p>
    <select class="watchlistaddmovie__status_choice" type="dropdown">
        <option value="ToBeWatched">To Be Watched</option>
        <option value="Watching">Watching</option>
        <option value="Watched">Watched</option>
    </select>
    <br>
    <button class="watchlistaddmovie__submit">Add Movie</button>
    `
    
}

