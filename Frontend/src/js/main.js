import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default pageBuild

function pageBuild(){
   
    home();
    navbar();

}

function home() {
    const homeNav = document.querySelector('.nav__home');
    const mainDiv = document.querySelector('.main_div');
    homeNav.addEventListener('click', function(){
        mainDiv.innerHTML = Home();
    })
}

function navbar() {
    const navbar = document.querySelector('.navbar');
    navbar.innerHTML = Navbar();
}