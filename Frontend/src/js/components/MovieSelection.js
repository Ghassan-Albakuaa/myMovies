export default function MoveSelection(tvShow) {
    return `
        <div class="tvShow__grid_container">
            <div class="tvShowSelection__tvShow_info">
                <h2 class="tvshow__individual-title">${tvShow.title}</h2>
                <h4># of Seasons: ${tvShow.season} - Rated: ${tvShow.viewerDiscretion}</h4>
                <img class="tvShow__images" src="./img/movies/${tvShow.image}" alt="${tvShow.image}"></img>
                <input class="movie__id" type="hidden" value="${tvShow.id}">
                </br>
                </br>
                <section class="tvShowSelection__button_section"> 
                    <button class="view-comment__submit">View Comments <p>*Contains Spoilers!*</p></button>    
                </section> 
            </div>
            <div class="tvShowSelection__text_area">
                <h3>Popular Reviews</h3>
                <hr>
                ${tvShow.watchlists.map(value => {
                    if(value.review != null)
                    {
                        if (value.review != "")
                        {
                            return `
                            <div class="tvShowSelection__specific_user"
                                <p></p>
                                <h4 class="users__name_btn">Name: ${value.user.name}</h4>
                                <h4 class="users__show__rating">Rating: ${value.rating}</h4>
                                <h4 class="users__show_review">Review: ${value.review}</h4>
                                <input class="users__id" type="hidden" value="${value.userId}">
                            </div>
                            <hr>
                            `
                        }
                    }
                }).join("")}
            </div>
        </div>
    `
}







/*
export default function MovieSelection(movie) {
    return `
        <div class="movie__grid_container">
            <div class="movieSelection__movie_info">
                <h2 class="movie__individual-title">${movie.title}</h2>
                <h4># of Seasons: ${movie.season} - Rated: ${movie.viewerDiscretion}</h4>
                <img class="movie__images" src="./img/movies/${movie.image}" alt="${movie.image}"></img>
                <input class="movie__id" type="hidden" value="${movie.id}">
                </br>
                
                </br>
                <section class="movieSelection__button_section"> 
                    <button class="view-comment__submit">View Comments <p>*Contains Spoilers!*</p></button>    
                </section> 
            </div>
            <div class="movieSelection__text_area">
                <h3>Popular Reviews</h3>
                <hr>
                ${movie.watchlists.map(value => {
                    if(value.review != null)
                    {
                        if (value.review != "")
                        {
                            return `
                            <div class="movieSelection__specific_user"
                                <p></p>
                                <h4 class="users__name_btn">Name: ${value.user.name}</h4>
                                <h4 class="users__movie__rating">Rating: ${value.rating}</h4>
                                <h4 class="users__movie_review">Review: ${value.review}</h4>
                                <input class="users__id" type="hidden" value="${value.userId}">
                            </div>
                            <hr>
                            `
                        }
                    }
                }).join("")}
            </div>
        </div>
    `
}
*/