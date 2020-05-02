export default function UserLoginWithPassword(users){
    
  //  localStorage.vistorId=localStorage.LoginhUserId;  
 
    users.map(element => {                
       
        if(element.name == localStorage.LoginhUsername && element.password == localStorage.LoginhUserpassword)
        {
            sessionStorage.setItem("Search__Id", element.id); 
        }
        
        }).join("");  
        alert("pass"+ sessionStorage.Search__Id)     
   
}