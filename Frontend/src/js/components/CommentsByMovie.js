export default function CommentsByMovie(comments){
    return `
    <h2>All Comments</h2>
    <!--- Add Comments here --->
    <section class="add-comment">
        </br>
        <button class="add-comment__submit">Post a Comment</button>       
        </br>
        <textarea class="add-commentText" type="text" rows="5" cols="33" placeholder="Add a Comment"></textarea>
    </section>
    <div class="comments__grid_container">
        ${comments.map(comments => {
            return `
            <ul class="comments">
                <li>
                    <p>${comments.user.name} writes:<p>
                    <p>${comments.commentText}</p>
                </li>
            </ul>
            `
    }).join("")}
    </div>

    `
}