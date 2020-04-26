export default function WatchlistGrid(){
    
   // if(localStorage.LoginhUserId == localStorage.vistorId)
    return ` 
    <section class="watchlist__add_show">
        <button class="watchlist__add_show_button">Add a show to your list</button>
    </section>
    <div class="watchlist__grid_items_container">
        <div class="watchlist__watching_shows">
            <h3>Watching</h3>
            <hr>
        </div>
        <div class="watchlist__tobewatched_shows">
            <h3>To Be Watched</h3>
            <hr>
        </div>
        <div class="watchlist__watched_shows">
            <h3>Watched</h3>
            <hr>
        </div>
    </div>
    `
    
}