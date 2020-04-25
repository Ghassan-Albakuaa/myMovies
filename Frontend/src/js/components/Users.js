export default function Users(users){
   
    return `
    <section class="users">
        <h2>All Users</h2>
        <div class="users__grid_container">
            ${users.map(user => {
            return `
                <div class="users__specific_user">
                    <img class="users__user_image" src="./img/users/${user.image}" alt="${user.image}"></img>
                    <input class="user__id" type="hidden" value="${user.id}">
                    <h4 class="user__name_btn">${user.name} <p class="p_name-hover-btn">>></p></h4>
                </div>
               `
            }).join("")}
        </div>
    </section>
    `
}
