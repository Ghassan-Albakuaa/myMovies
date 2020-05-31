export default function SearchByMovie(movies){
 // var str = "Hello world, welcome to the universe.";
  //var n = str.includes("world");
    
    movies.map(element => {                     
         
        if (element.title == localStorage.Movie___Name)
        {   
          
           sessionStorage.setItem("SMovieId", element.id); 
         
        }
        if (element.transcript.includes(localStorage.Movie___Name))
        {   
          alert("yes");
           sessionStorage.setItem("SMovieId", element.id); 
         
        }
        }).join("");       
       
        
}