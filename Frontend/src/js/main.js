import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import apiActions from "./api/apiActions";

export default pageBuild

function pageBuild(){
    header();    
    navbar();
    footer();   
    home();

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
