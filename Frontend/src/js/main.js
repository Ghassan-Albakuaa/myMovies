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

function home() {
    const homeNav = document.querySelector('.nav__home');
    const mainDiv = document.querySelector('.main_div');
    homeNav.addEventListener('click', function(){
        mainDiv.innerHTML = Home();
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

    mainDiv.addEventListener("click", function() {
        if(event.target.classList.contains('user__name_btn')
        || event.target.classList.contains('users__user_image')){
            const userId = event.target.parentElement.querySelector('.user__id').value;
            //local storage
       //   var vistorId =0;
       //    localStorage.removeItem(vistorId);
       //     localStorage.setItem("vistorId",userId);
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




}

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
}