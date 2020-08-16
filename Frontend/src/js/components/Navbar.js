export default function Navbar() {

    return `
    <table class='navbar_list'  id='user'>
             <tr class='navbarlist'>
                <td class='nav__home side-nav__item'>Log In</td>
                <td class='nav__users side-nav__item'>Members</td>
                <td class='nav__movies side-nav__item'>Movies</td>
                <td class='nav__aboutus side-nav__item'>About Us</td>
             </tr>
        </table>
    
        ` 
 }
 /*
 
    return `
 <nav class='navbar_list'>
          <div class='navbarlist'>
             <div class='nav__home'>Home</div>
             <div class='nav__users'>Users</div>
             <div class='nav__tvshows'>Tv Shows</div>
             <div class='nav__aboutus'>About Us</div>
          </div>
     </nav>
     ` 
 }
 */