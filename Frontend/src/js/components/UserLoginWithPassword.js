export default function UserLoginWithPassword(users){
    
  
 
    users.map(element => {                
       
        if(element.name == localStorage.LoginhUsername && element.password == localStorage.LoginhUserpassword)
        {
            sessionStorage.setItem("Search__Id", element.id); 
            sessionStorage.setItem("Group", element.group); 
        }
        
        }).join("");  
     //    alert("group = "+ sessionStorage.Group )
   
}