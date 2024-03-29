export default function Movies(tvShows){
    var WatchedSum =0;
    var WatchingSum =0;
    var RatingSum =0;
    var Watched =[];
    var ToBeWatched =[];
    var Watching =[];
    var Count = 0; 
    var Stars=0;
    return `
    <section class="tvShows">
        <h2>All TV Shows</h2>
        <div class="tvShows__grid_container">
            ${tvShows.map(tvShow => {   
                WatchedSum=0;  
                WatchingSum=0; 
                Stars=0;  
                Count = 0;  
                WatchingSum =0;
                RatingSum=0;

                  tvShow.watchlists.forEach(element => {
                    if(tvShow.id == element.tvShowId)
                    {
                        if(element.status == "Watched")
                        {
                            Watched.push(element.user.name , tvShow.title ,element.rating);
                            WatchedSum ++;
                            if(element.rating != null)
                            {
                              RatingSum +=  eval (element.rating);                              
                              Count++;          
                            }
                        }
                        if(element.status == "ToBeWatched")
                        {
                            ToBeWatched.push(element.user.name , tvShow.title );                          
                        }
                        if(element.status == "Watching")
                        {
                            Watching.push(element.user.name , tvShow.title );
                            WatchingSum ++;
                        }
                    }     
                 });     
                 Stars = (RatingSum / Count);
                 if(Stars >= 1)
                 {
                    if(Stars >= 1 && Stars <2)
                    return `             
                    <div class="movies__specific_tvShow">
                        <h4 class="movies__show_title">${tvShow.title} <p class="p_title-hover-btn">>></p></h4>
                        <img class="movies__show_image" src="./img/movies/${tvShow.image}" alt="TvShow Image">
                        <h5 class="stars_rating">
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h5>
                        <input class="movies__id" type="hidden" value="${tvShow.id}">
                    <div class="dropdown-content">
                        <h4>Watching</h4>
                        <h3>${WatchingSum}</h3>
                        <hr class="hr_dropdown">
                        <h3>${WatchedSum}</h3>
                        <h4>Watched</h4>
                    </div>
                </div>
                   `
                   if(Stars >= 2 && Stars <3)
                   return `             
                   <div class="movies__specific_tvShow">
                        <h4 class="movies__show_title">${tvShow.title} <p class="p_title-hover-btn">>></p></h4>
                        <img class="movies__show_image" src="./img/movies/${tvShow.image}" alt="TvShow Image">
                        <h5 class="stars_rating">
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h5>
                        <input class="movies__id" type="hidden" value="${tvShow.id}">
                    <div class="dropdown-content">
                        <h4>Watching</h4>
                        <h3>${WatchingSum}</h3>
                        <hr class="hr_dropdown">
                        <h3>${WatchedSum}</h3>
                        <h4>Watched</h4>
                    </div>
                </div>
                  `
                  if(Stars >= 3 && Stars <4)
                  return `             
                  <div class="movies__specific_tvShow">
                        <h4 class="movies__show_title">${tvShow.title} <p class="p_title-hover-btn">>></p></h4>
                        <img class="movies__show_image" src="./img/movies/${tvShow.image}" alt="TvShow Image">
                        <h5 class="stars_rating">
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h5>
                        <input class="tvShow__id" type="hidden" value="${tvShow.id}">
                    <div class="dropdown-content">
                    <h4>Watching</h4>
                        <h3>${WatchingSum}</h3>
                        <hr class="hr_dropdown">
                        <h3>${WatchedSum}</h3>
                        <h4>Watched</h4>                        
                    </div>
                </div>
                 `
                  
                 if(Stars >= 4 && Stars <5)
                return `             
                <div class="movies__specific_tvShow">
                        <h4 class="movies__show_title">${tvShow.title} <p class="p_title-hover-btn">>></p></h4>
                        <img class="movies__show_image" src="./img/movies/${tvShow.image}" alt="TvShow Image">
                        <h5 class="stars_rating">
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h5>
                        <input class="movies__id" type="hidden" value="${tvShow.id}">
                    <div class="dropdown-content">
                    <h4>Watching</h4>
                        <h3>${WatchingSum}</h3>
                        <hr class="hr_dropdown">
                        <h3>${WatchedSum}</h3>
                        <h4>Watched</h4>
                    </div>
                </div>
               `
                
               if(Stars >= 5)
               return `             
               <div class="movies__specific_tvShow">
                        <h4 class="movies__show_title">${tvShow.title} <p class="p_title-hover-btn">>></p></h4>
                        <img class="movies__show_image" src="./img/movies/${tvShow.image}" alt="TvShow Image">
                        <h5 class="stars_rating">
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h5>
                        <input class="movies__id" type="hidden" value="${tvShow.id}">
                    <div class="dropdown-content">
                        <h4>Watching</h4>
                        <h3>${WatchingSum}</h3>
                        <hr class="hr_dropdown">
                        <h3>${WatchedSum}</h3>
                        <h4>Watched</h4>
                    </div>
                </div>
              `
                 }
               else 
             
               return `             
               <div class="tvShows__specific_tvShow">
                        <h4 class="movies__show_title">${tvShow.title} <p class="p_title-hover-btn"></p></h4>
                        <img class="movies__show_image" src="./img/movies/${tvShow.image}" alt="TvShow Image">
                        <input class="movies__id" type="hidden" value="${tvShow.id}">
                    <div class="dropdown-content">
                        <h4>Watching</h4>
                        <h3>${WatchingSum}</h3>
                        <hr class="hr_dropdown">
                        <h3>${WatchedSum}</h3>
                        <h4>Watched</h4>
                    </div>
                </div>
              `
            }).join("")}
        </div>
    </section>
    `
}





/*
export default function Movies(movies){
   
    return `
    <section class="movies">
        <h2>All Movies</h2>
        <div class="movies__grid_container">
            ${movies.map(movie => {
            return `
                <div class="movies__specific_movie">
                    <img class="movies__show_image" src="./img/movies/${movie.image}" alt="${movie.image}"></img>
                    <input class="movie__id" type="hidden" value="${movie.id}">
                    <h4 class="movies__show_title">${movie.title} <p class="p_name-hover-btn">>></p></h4>
                </div>
               `
            }).join("")}
        </div>
    </section>
    `
}
*/
//////////////////////////////////////
/*
export default function Movies(movies){
    var  WatchedSum =0;
    var WatchingSum =0;
    var RatingSum =0;
    var Count = 0; 
    var Stars=0;
    return `
    <section class="movies">
        <h2>All Movies</h2>
        <div class="movies__grid_container">
            ${movies.map(movie => {   
                WatchedSum=0;  
                WatchingSum=0; 
                Stars=0;  
                Count = 0;  
                WatchingSum =0;
                RatingSum=0;

                movie.watchlists.forEach(element => {
                    if(movie.id == element.movieId)
                    {
                        if(element.status == "Watched")
                        {
                         //   Watched.push(element.user.name , movie.title ,element.rating);
                            WatchedSum ++;
                            if(element.rating != null)
                            {
                              RatingSum +=  eval (element.rating);                              
                              Count++;          
                            }
                        }
                        if(element.status == "ToBeWatched")
                        {
                         //   ToBeWatched.push(element.user.name , movie.title );                          
                        }
                        if(element.status == "Watching")
                        {
                        //    Watching.push(element.user.name , movie.title );
                            WatchingSum ++;
                        }
                    }     
                 });     
                 Stars = (RatingSum / Count);
                 if(Stars >= 1)
                 {
                    if(Stars >= 1 && Stars <2)
                    return `             
                    <div class="movies__specific_movie">
                    <article>
                        <h4 class="movies__movie_title">${movie.title} <p class="p_title-hover-btn"></p></h4>
                        <img class="movies__movie_image" src="./img/movies/${movie.image}" alt="Movie Image">
                        <br>
                        <h3>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h3>
                        <input class="movie__id" type="hidden" value="${movie.id}">
                    </article>
                    <div class="dropdown-content">
                         <h3>Watched = ${WatchedSum}</h3><br>
                         <h3>Watching = ${WatchingSum}</h3>
                    </div>
                </div>
                   `
                   if(Stars >= 2 && Stars <3)
                   return `             
                   <div class="movies__specific_movie">
                    <article>
                        <h4 class="movies__movie_title">${movie.title} <p class="p_title-hover-btn"></p></h4>
                        <img class="movies__movie_image" src="./img/movies/${movie.image}" alt="Movie Image">
                        <br>
                        <h3>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h3>
                        <input class="movie__id" type="hidden" value="${movie.id}">
                    </article>
                    <div class="dropdown-content">
                         <h3>Watched = ${WatchedSum}</h3><br>
                         <h3>Watching = ${WatchingSum}</h3>
                    </div>
                </div>
                  `
                  if(Stars >= 3 && Stars <4)
                  return `             
                  <div class="movies__specific_movie">
                    <article>
                        <h4 class="movies__movie_title">${movie.title} <p class="p_title-hover-btn"></p></h4>
                        <img class="movies__movie_image" src="./img/movies/${movie.image}" alt="Movie Image">
                        <br>
                        <h3>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h3>
                        <input class="movie__id" type="hidden" value="${movie.id}">
                    </article>
                    <div class="dropdown-content">
                         <h3>Watched = ${WatchedSum}</h3><br>
                         <h3>Watching = ${WatchingSum}</h3>
                    </div>
                </div>
                 `
                  
                 if(Stars >= 4 && Stars <5)
                return `             
                <div class="movies__specific_movie">
                    <article>
                        <h4 class="movies__movie_title">${movie.title} <p class="p_title-hover-btn"></p></h4>
                        <img class=movies__movie_image" src="./img/movies/${movie.image}" alt="Movie Image">
                        <br>
                        <h3>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h3>
                        <input class="movie__id" type="hidden" value="${movie.id}">
                    </article>
                    <div class="dropdown-content">
                         <h3>Watched = ${WatchedSum}</h3><br>
                         <h3>Watching = ${WatchingSum}</h3>
                    </div>
                </div>
               `
                
               if(Stars >= 5)
               return `             
               <div class="movie__specific_movie">
                    <article>
                        <h4 class="movies__movie_title">${movie.title} <p class="p_title-hover-btn"></p></h4>
                        <img class="movies__movie_image" src="./img/movies/${movie.image}" alt="Movie Image">
                        <br>
                        <h3>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        <img width="25px" src="https://clipartmag.com/images/stars-transparent-background-21.gif"/>
                        </h3>
                        <input class="movie__id" type="hidden" value="${movie.id}">
                    </article>
                    <div class="dropdown-content">
                         <h3>Watched = ${WatchedSum}</h3><br>
                         <h3>Watching = ${WatchingSum}</h3>
                    </div>
                </div>
              `
                 }
               else 
             
               return `             
               <div class="movies__specific_movie">
                    <article>
                        <h4 class="movies__movie_title">${movie.title} <p class="p_title-hover-btn"></p></h4>
                        <img class="movie__movie_image" src="./img/movies/${movie.image}" alt="Movie Image">
                        <input class="movie__id" type="hidden" value="${movie.id}">
                    </article>
                    <div class="dropdown-content">
                         <h3>Watched = ${WatchedSum}</h3><br>
                         <h3>Watching = ${WatchingSum}</h3>
                    </div>
                </div>
              `
            }).join("")}
        </div>
    </section>
    `
}
*/