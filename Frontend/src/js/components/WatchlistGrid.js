export default function WatchlistGrid(){
    
   // if(localStorage.LoginhUserId == localStorage.vistorId)
    return ` 
    <section class="watchlist__add_movie">
        <button class="watchlist__add_movie_button">Add a movie to your list</button>
    </section>
    <div class="watchlist__grid_items_container">
        <div class="watchlist__watching_movies">
            <h3>Watching</h3>
            <hr>
        </div>
        <div class="watchlist__tobewatched_movies">
            <h3>To Be Watched</h3>
            <hr>
        </div>
        <div class="watchlist__watched_movies">
            <h3>Watched</h3>
            <hr>
        </div>
    </div>
    `
    
}