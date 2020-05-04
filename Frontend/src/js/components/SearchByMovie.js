export default function SearchByMovie(movies){
 
    
    movies.map(element => {                     
         
        if (element.title == localStorage.Movie___Name)
        {   
          
           sessionStorage.setItem("SMovieId", element.id); 
         
        }
        }).join("");       
       
        
}