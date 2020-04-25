import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import apiActions from "./api/apiActions";
import Users from "./components/Users";
import Movies from "./components/Movies";

export default pageBuild

function pageBuild(){
    header();    
    navbar();
    footer();   
    home();
   navUsers();
   navMovies();
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
}