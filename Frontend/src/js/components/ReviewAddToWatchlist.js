export default function ReviewAddToWatchlist(watch){
    
    return `
     <section class="update-Watched">
     <h4>${watch.movie.title}</h4><br> 
     
     <label >Rating</label><br>
     
     <select class="update-rating" type="dropdown">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>     
     <option value="4">4</option>
     <option value="5">5</option>   
     </select><br>
     
     <label>Review</label><br>
     <textarea class="update-review" rows="4" cols="50" ></textarea><br>
     
     <input class="update-status" type="hidden" value="${watch.status}">
     <input class="watch__id" type="hidden" value="${watch.id}">
     <input class="user__id" type="hidden" value="${watch.userId}">
     <input class="movie__id" type="hidden" value="${watch.movieId}">
        
     <button class="addReview-watchList__submit">Add Review</button>
     </section>
 
 `;
}