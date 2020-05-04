import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import apiActions from "./api/apiActions";
import Users from "./components/Users";
import Movies from "./components/Movies";
import UserWatchlistFilter from "./components/UserWatchlistFilter";
import WatchlistGrid from "./components/WatchlistGrid";
import WatchlistUserInfo from "./components/WatchlistUserInfo";
import WatchlistAddMovie from "./components/WatchlistAddMovie";
import WatchlistAddMovieButtonSection from "./components/WatchlistAddMovieButtonSection";
import EditWatchlist from "./components/EditWatchlist";
import MovieSelection from "./components/MovieSelection";
import ReviewAddToWatchlist from "./components/ReviewAddToWatchlist";
import UserLogin from "./components/UserLogin";
import UserLoginWithPassword from "./components/UserLoginWithPassword";
import MovieSelectionShowReviewButton from "./components/MovieSelectionShowReviewButton";
import CommentsByMovie from "./components/CommentsByMovie";
import SearchByMovie from "./components/SearchByMovie";


export default pageBuild

function pageBuild(){
    header();    
    navbar();
    footer();   
    home();
   navUsers();
   navMovies();
   //l 7
}

function header() {
    const header = document.querySelector('.header');
    header.innerHTML = Header();
}
function navbar() {
    const navbar = document.querySelector('.navbar');
    navbar.innerHTML = Navbar();
}

function footer() {
    const footer = document.querySelector('.footer');
    footer.innerHTML = Footer();
}
/*
function home() {
    const homeNav = document.querySelector('.nav__home');
    const mainDiv = document.querySelector('.main_div');
    homeNav.addEventListener('click', function(){
        mainDiv.innerHTML = Home();
    })
}

*/
function home() {
    const homeNav = document.querySelector('.nav__home');
    const mainDiv = document.querySelector('.main_div');
    homeNav.addEventListener('click', function(){
        apiActions.getRequest("http://localhost:57559/api/User",
        users => {
            mainDiv.innerHTML = Home(users);
        }
    )
    })
}



function navUsers() {
    const usersNavButton = document.querySelector(".nav__users");
    const mainDiv = document.querySelector(".main_div");

    usersNavButton.addEventListener("click", function(){
         apiActions.getRequest("http://localhost:57559/api/User",
            users => {          
                mainDiv.innerHTML = Users(users);
            }
        )
    })

    //l 6
    // Goes to specific user from users view
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains('user__name_btn')
        || event.target.classList.contains('users__user_image')){
            const userId = event.target.parentElement.querySelector('.user__id').value;
            //local storage
            var vistorId =0;
            localStorage.removeItem(vistorId);
            localStorage.setItem("vistorId",userId);
            const watchlistGrid = document.createElement('div');
            watchlistGrid.classList.add('watchlist__upper_grid_container');
            watchlistGrid.innerHTML = WatchlistGrid();
            apiActions.getRequest(`http://localhost:57559/api/User/${userId}`,
            user => {
                mainDiv.innerHTML = WatchlistUserInfo(user);
                mainDiv.appendChild(watchlistGrid);
                apiActions.getRequest(`http://localhost:57559/api/Watchlist/User/${userId}`,
                usersWatchlist => {
                    UserWatchlistFilter(usersWatchlist);
                }
                )
            }
        )}
    })

  // Displays add Movie option
  mainDiv.addEventListener("click", function() {
    const watchlistAddMovieSection = mainDiv.querySelector(".watchlist__add_movie");
    if(event.target.classList.contains('watchlist__add_movie_button')){
        apiActions.getRequest("http://localhost:57559/api/Movie",
            movies => {
                watchlistAddMovieSection.innerHTML = WatchlistAddMovie(movies);
            }
        )
    }
})

  // Adds movie to watchlist
  mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('watchlistaddmovie__submit')){
        const userId = document.querySelector('.user__id').value;
        const watchlistAddShowButtonSection = document.querySelector(".watchlist__add_movie");
        const movieId = event.target.parentElement.querySelector('.watchlistaddmovie__movie_id').value;
        const status = event.target.parentElement.querySelector('.watchlistaddmovie__status_choice').value;
  
        var requestBody = {
            Status: status,
            UserId: userId,
            MovieId: movieId
        }
        apiActions.postRequest(
            "http://localhost:57559/api/Watchlist",
            requestBody,
            a => {
                const watchlistGrid = document.createElement('div');
                watchlistGrid.classList.add('watchlist__upper_grid_container');
                watchlistGrid.innerHTML = WatchlistGrid();
                apiActions.getRequest(`http://localhost:57559/api/User/${userId}`,
                user => {
                    mainDiv.innerHTML = WatchlistUserInfo(user);
                    mainDiv.appendChild(watchlistGrid);
                    apiActions.getRequest(`http://localhost:57559/api/Watchlist/User/${userId}`,
                    usersWatchlist => {
                        UserWatchlistFilter(usersWatchlist);
                    }
                    )
                }
            )}
        )
        watchlistAddShowButtonSection.innerHTML = WatchlistAddMovieButtonSection();
    }
})
//////////////////////////////////////////////////////edit////////////////////////////////////////////////////////
 // Get the edit watchlist view
 mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('edit-watchList__submit')){
        const WatchId = event.target.parentElement.querySelector('.watch__id').value;
        //console.log(WatchId);

        apiActions.getRequest(
            `http://localhost:57559/api/Watchlist/${WatchId}`,
            WatchListEdit => {
                //console.log(WatchListEdit);
                mainDiv.innerHTML = EditWatchlist( WatchListEdit);
            }
        )

    }
})

// Perform edit watchlist PUT and return watchlist view
mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('update-watchList__submit')){
        const watchId = event.target.parentElement.querySelector('.watch__id').value;
        const userId = event.target.parentElement.querySelector('.user__id').value;
        const movieId = event.target.parentElement.querySelector('.movie__id').value;
        const review = event.target.parentElement.querySelector('.update-review').value;
        const rating = event.target.parentElement.querySelector('.update-rating').value;
        const status = event.target.parentElement.querySelector('.update-status').value;
    
        const WatchData = {
            Id: watchId,
            UserId: userId,
            MovieId: movieId,
            Review: review,
            Rating: rating,
            Status: status
            };

            //console.log(WatchData);

  apiActions.putRequest(
    `http://localhost:57559/api/Watchlist/${watchId}`,
    WatchData,
    a => {
        const watchlistGrid = document.createElement('div');
        watchlistGrid.classList.add('watchlist__upper_grid_container');
        watchlistGrid.innerHTML = WatchlistGrid();
        apiActions.getRequest(`http://localhost:57559/api/User/${userId}`,
        user => {
            mainDiv.innerHTML = WatchlistUserInfo(user);
            mainDiv.appendChild(watchlistGrid);
            apiActions.getRequest(`http://localhost:57559/api/Watchlist/User/${userId}`,
            usersWatchlist => {
                UserWatchlistFilter(usersWatchlist);
            }
            )
        }
    )}
   )
}
})

/////////////////////////////////////////////////////end////////////edit///////////////////////////////////////// 

 /////////////////////////////////////////////////////////////////////// // Delete a movie from a user's watchlist
  mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('deleteReview-watchList__submit')){
        const WatchId = event.target.parentElement.querySelector('.watch__id').value;
        const WatchUserId = event.target.parentElement.querySelector('.watch__Userid').value;
        localStorage.setItem("User__Id",WatchUserId);
        //alert("UserId ="+ localStorage.User__Id);
        //console.log(WatchId);

        apiActions.deleteRequest(
            `http://localhost:57559/api/Watchlist/${WatchId}`,
        a => {
            const watchlistGrid = document.createElement('div');
            watchlistGrid.classList.add('watchlist__upper_grid_container');
            watchlistGrid.innerHTML = WatchlistGrid();
            apiActions.getRequest(`http://localhost:57559/api/User/${WatchUserId}`,
            user => {
                mainDiv.innerHTML = WatchlistUserInfo(user);
                mainDiv.appendChild(watchlistGrid);
                apiActions.getRequest(`http://localhost:57559/api/Watchlist/User/${localStorage.User__Id}`,
                usersWatchlist => {
                    UserWatchlistFilter(usersWatchlist);
                }
                )
            }
        )}
        )
    }
})
////////////////////////////////////////////////////////end delete/////////////////////////////////////////////////////

///////////////////////////////////////////////////////////add review//////////////////////////////////////////////
// Get the add review view
mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('addReview-watchList__submit')){
        const WatchId = event.target.parentElement.querySelector('.watch__id').value;
        //console.log(WatchId);

        apiActions.getRequest(
            `http://localhost:57559/api/Watchlist/${WatchId}`,
            ReviewAdd => {
                //console.log(ReviewAdd);
                mainDiv.innerHTML = ReviewAddToWatchlist(ReviewAdd);
            }
        )

    }
})

// Perform add review to a particular show PUT request
mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('addReview-watchList__submit')){
        const watchId = event.target.parentElement.querySelector('.watch__id').value;
        const userId = document.querySelector('.user__id').value;
        const movieId = document.querySelector('.movie__id').value;
        const review = event.target.parentElement.querySelector('.update-review').value;
        const rating = event.target.parentElement.querySelector('.update-rating').value;
        const status = event.target.parentElement.querySelector('.update-status').value;

        const WatchData = {
            Id: watchId,
            UserId: userId,
            MovieId: movieId,
            Review: review,
            Rating: rating,
            Status: status
            };
            //console.log(WatchData);
        apiActions.putRequest(
        `http://localhost:57559/api/Watchlist/${watchId}`,
        WatchData,
        a => {
            apiActions.getRequest(`http://localhost:57559/api/movie/${movieId}`,
            movie => {
                mainDiv.innerHTML = MovieSelection(movie);
                }
            )}
        )
    }
})
////////////////////////////////////////////////////////////end///////////////////////////review///////////////////
/////////////////////////////////////////////log in//////////////////////////////////////////////////////////////

 mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('Search-addReview-watchList__submit')){
    const user___Id = event.target.parentElement.querySelector('.Login-add-__username').value;  

    localStorage.setItem("LoginhUserId",user___Id);      
            apiActions.getRequest("http://localhost:57559/api/User",
            users => {
                mainDiv.innerHTML = UserLogin(users);
                const watchlistGrid = document.createElement('div');
                watchlistGrid.classList.add('watchlist__upper_grid_container');
                watchlistGrid.innerHTML = WatchlistGrid();
                apiActions.getRequest(`http://localhost:57559/api/User/${localStorage.LoginhUserId}`,
                user => {
                mainDiv.innerHTML = WatchlistUserInfo(user);
                mainDiv.appendChild(watchlistGrid);
                
                apiActions.getRequest(`http://localhost:57559/api/Watchlist/User/${localStorage.LoginhUserId}`,
                    usersWatchlist => {
                        UserWatchlistFilter(usersWatchlist);
                    }
                    )
                }
                )
            }
        )
    }
})
//////////////////////////////////////////////end/////////////////////////////////////////////////////////////////
////////////////// Go to specific movie when movie title is clicked on in watchlist//////////////////////////////////
 
mainDiv.addEventListener("click", function() {
    if(event.target.classList.contains("watched_movie__title")
    || event.target.classList.contains("watching_movie__title")
    || event.target.classList.contains("tobewatched_movie__title")){
        const movieId = event.target.parentElement.querySelector(".watch__movieId").value;
        apiActions.getRequest(`http://localhost:57559/api/movie/${movieId}`,
        movie => {
            mainDiv.innerHTML = MovieSelection(movie);
        }
    )
    }
})

//////////////////////////////////////////////log in with password///////////////////////////////////////////////////
mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('Login-withPassword__submit')){
    const user___name = event.target.parentElement.querySelector('.add-username').value;  
    const user___password = event.target.parentElement.querySelector('.add-password').value;  

    localStorage.setItem("LoginhUsername",user___name); 
    localStorage.setItem("LoginhUserpassword",user___password);   
    
    apiActions.getRequest("http://localhost:57559/api/User",
    users => {
        mainDiv.innerHTML = UserLoginWithPassword(users);
        
        const watchlistGrid = document.createElement('div');
        watchlistGrid.classList.add('watchlist__upper_grid_container');
        watchlistGrid.innerHTML = WatchlistGrid();
        apiActions.getRequest(`http://localhost:57559/api/User/${sessionStorage.Search__Id}`,
        user => {
        mainDiv.innerHTML = WatchlistUserInfo(user);
        mainDiv.appendChild(watchlistGrid);
        
        apiActions.getRequest(`http://localhost:57559/api/Watchlist/User/${sessionStorage.Search__Id}`,
            usersWatchlist => {
                UserWatchlistFilter(usersWatchlist);
            }
            )
        }
        )
    }
)
}
})


////////////////////////////////////////////end////////////////////////////////log in with password//////////////////
}
/////////////////////////////////////////////////////////////////////////

function navMovies() {
    const usersNavButton = document.querySelector(".nav__movies");
    const mainDiv = document.querySelector(".main_div");

    usersNavButton.addEventListener("click", function(){
         apiActions.getRequest("http://localhost:57559/api/Movie",
         movies => {          
                mainDiv.innerHTML = Movies(movies);
            }
        )
    })

    //l 7

     // Goes to a specific movie from Movies 
     mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("movies__show_title")
        || event.target.classList.contains("movies__show_image")){
            const movieId = event.target.parentElement.querySelector('.movie__id').value;
            apiActions.getRequest(`http://localhost:57559/api/Movie/${movieId}`,
            movie => {
                mainDiv.innerHTML = MovieSelection(movie);
            }
        )
        }
    })


 // Go to user's watchlist when user name is clicked on in MovieSelection view
 mainDiv.addEventListener("click", function() {
    if(event.target.classList.contains("users__name_btn")){
        const userId = event.target.parentElement.querySelector(".users__id").value;
        const watchlistGrid = document.createElement('div');
        watchlistGrid.classList.add('watchlist__upper_grid_container');
        watchlistGrid.innerHTML = WatchlistGrid();
        apiActions.getRequest(`http://localhost:57559/api/User/${userId}`,
        user => {
            mainDiv.innerHTML = WatchlistUserInfo(user);
            mainDiv.appendChild(watchlistGrid);
            apiActions.getRequest(`http://localhost:57559/api/Watchlist/User/${userId}`,
            usersWatchlist => {
                UserWatchlistFilter(usersWatchlist);
            }
            )
        }
    )
    }
})

//////////////////////////////////// // Add event listener to Click comments button and load all comments
   ////////////////////////////////// // Also loads add more comments at the bottom of the comments
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("view-comment__submit")){
            const movieId = document.querySelector(".movie__id").value;          
            const commentTextArea = document.querySelector(".movieSelection__text_area");
            const movieButtonSection = document.querySelector(".movieSelection__button_section");
            apiActions.getRequest(`http://localhost:57559/api/Comment/Movie/${movieId}`,
                comments =>{
                    commentTextArea.innerHTML = CommentsByMovie(comments);
                }
            )
            movieButtonSection.innerHTML = MovieSelectionShowReviewButton();
        }
    })

    
    // Returns to the main movie view after clicking review button
    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("movieSelection__reload_reviews")){
            const movieId = document.querySelector('.movie__id').value;
            apiActions.getRequest(`http://localhost:57559/api/movie/${movieId}`,
            movie => {
                mainDiv.innerHTML = MovieSelection(movie);
            }
        )
        }
    })

     // POST request to add comment to a specific show
     mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains("add-comment__submit")){
            const movieId = document.querySelector(".movie__id").value;
            const userId = localStorage.LoginhUserId;
            const commentText = document.querySelector(".add-commentText").value;
            const commentTextArea = document.querySelector(".movieSelection__text_area");
            var requestBody = {
                UserId: userId,
                MovieId: movieId,
                CommentText: commentText
            }
            console.log(requestBody);
            apiActions.postRequest(`http://localhost:57559/api/Comment/`,
                requestBody,
                a => {
                    apiActions.getRequest(`http://localhost:57559/api/Comment/movie/${movieId}`,
                    comments => {
                    commentTextArea.innerHTML = CommentsByMovie(comments);
                })
                }
            )
        }
    })

    ////////////////////////////////////////////////search by movies///////////////////////////////////////

  
mainDiv.addEventListener("click", function(){
    if(event.target.classList.contains('search__submit')){
    const movie___name = event.target.parentElement.querySelector('.movie__title').value; 
    localStorage.setItem("Movie___Name", movie___name);    
    
    apiActions.getRequest("http://localhost:57559/api/movie",
    movies => {
        mainDiv.innerHTML = SearchByMovie(movies);        
       
        apiActions.getRequest(`http://localhost:57559/api/movie/${sessionStorage.SMovieId}`,
        movie => {
        mainDiv.innerHTML = MovieSelection(movie);
   
        }
        )
    }
)
}
})


////////////////////////////////////////////end////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
}