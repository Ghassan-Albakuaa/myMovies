export default function Movies(movies){
   
    return `
    <section class="movies">
        <h2>All Movies</h2>
        <div class="movies__grid_container">
            ${movies.map(movie => {
            return `
                <div class="movies__specific_movie">
                    <img class="movies__movie_image" src="./img/movies/${movie.image}" alt="${movie.image}"></img>
                    <input class="user__id" type="hidden" value="${movie.id}">
                    <h4 class="user__name_btn">${movie.title} <p class="p_name-hover-btn">>></p></h4>
                </div>
               `
            }).join("")}
        </div>
    </section>
    `
}