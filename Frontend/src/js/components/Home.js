export default function Home(users) {
    return `    
    <div class="upper_homepage">
    <div class="homepage__container">
        <p class="homepage-description">My Movies helps you connect with friends and family, in order to figure out what to watch next on your favorite streaming platform. Review movies, create a personalized watchlist, and get social after your binging in a spoiler-safe space!</p>
        <div class="login__grid_container">
            <select  id="list" name="u"  class="Login-add-__username" type="dropdown">
                ${users.map(user => {
                        return `
                        <option class="add-username__userId" value="${user.id}">${user.name}</option>               
                     `
                }).join("")}
            </select>
            <button class='Search-addReview-watchList__submit'>Log in</button>

<br><br>
<label for="uname"><b>Username</b></label>
<input  class="add-username" type="text" placeholder="Enter Username" name="uname" required>

<label for="psw"><b>Password</b></label>
<input  class="add-password" type="password" placeholder="Enter Password" name="psw" required>


<button class='Login-withPassword__submit'>Log in</button>
         </div> 

         <br><br>
<label for="uname"><b></b></label>
<input  class="movie__title" type="text" placeholder="Search Movie" name="movie" required>
<button class='search__submit'>Search</button>


         </div> 





    </div>
    </div>
    `
}
/*
<br><br>
<input  class="movie__transcript" type="text" placeholder="Search Movie" name="movieT" required>
<button class='search_transcript__submit'>Search</button>

*/