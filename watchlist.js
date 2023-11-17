const myWatchlistEl = document.querySelector(".my-movies"); // MY WATCHLIST
let myList = JSON.parse(localStorage.getItem("Watchlist"));

window.onload = renderWatchlist();

function renderWatchlist() {

    myWatchlistEl.innerHTML = "";

    for (let movie of myList)
    
    myWatchlistEl.innerHTML += 
            `
            <div class="result-box">

                <div class="movie-card">

                    <div class="movie-image">
                        <img class="movie-poster" src="${movie.Poster}">
                    </div>

                    <div class="movie-info">
                        <div class="movie-title">
                            <div>${movie.Title}</div>
                            <div id="genre">( ${movie.Genre} )</div>
                            
                        </div>
                        <div class="movie-details">
                            <div id="country"><i class="fa-solid fa-globe"></i> ${movie.Country}</div>
                            <div id="year"><i class="fa-solid fa-calendar-days"></i> ${movie.Year}</div>
                            <div>
                                <span><img id="imdb-logo" src="IMDb logo.png"></span>
                                <span id="rating"> ${movie.imdbRating}</span>
                            </div>
                            <div class="remove-from-watchlist" data-watchlist="${movie.imdbID}"><i class="fa-solid fa-xmark"></i> Remove from watchlist</div>
                        </div>
                        <div class="movie-plot">${movie.Plot}</div>
                    </div>

                </div>

            </div>
            `
            document.getElementById("remove-notification").style.display = "none";
}

document.addEventListener("click", function(e) {
    if(e.target.classList.contains("remove-from-watchlist")) {
        removeFromWatchist(e.target.dataset.watchlist);
    }
 })

 function removeFromWatchist(id) {
    const updatedList = myList.filter(function(film) {
        return film.imdbID !== id;
    })
    localStorage.setItem("Watchlist", JSON.stringify(updatedList));
    myList = updatedList;
    document.getElementById("remove-notification").style.display = "inline";
    setTimeout(renderWatchlist, 1000);
}