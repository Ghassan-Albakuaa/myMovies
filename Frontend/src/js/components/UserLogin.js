export default function UserLogin(users){
    
    localStorage.vistorId=localStorage.LoginhUserId;   
    users.map(element => {                
        if (element.id == localStorage.LoginhUserId)
        {      
            sessionStorage.setItem("Search__Id", element.id);     
        }
        }).join("");       
   
}