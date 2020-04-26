export default function WatchlistUserInfo(user){
    return `
    <div class="watchlist_header">
        <h2>${user.name}'s Watchlist</h2>
        <input class="user__id" type="hidden" value="${user.id}">
    </div>
    `
}