const baseURL = "https://www.omdbapi.com";
const apiKey = "a999ed3e";
const searchInput = document.getElementById("search-input");
const searchBar = document.getElementById("search-bar");
const result = document.querySelector(".result"); // SEARCHING RESULTS
const loadingSpinner = document.getElementById("loader");

searchBar.addEventListener("submit", function(e) {
    getIdsFromWatchlist();
    e.preventDefault();
    loadingSpinner.style.display = "block";
    displayMovies();
    searchInput.value = "";
});

// PURPOSE OF THIS FUNCTION IS TO FETCH LIST OF MOVIES BY SEARCH VALUE AND GET THEIR IDs...
async function getMovieIds() { 
    
    const apiUrl = `${baseURL}/?s=${searchInput.value}&apikey=${apiKey}`;        
    
    try {
        result.innerHTML = ``
        const response = await fetch(apiUrl);
        const data = await response.json();
        const Ids = data.Search.map(function(movie) {
            return movie.imdbID
        })
        return Ids // RETURNING ARRAY OF IDs
    }
    catch {
        result.innerHTML = `<p id="no-result"><i class="fa-regular fa-face-sad-tear"></i>We couldn´t find any result. Try Different search!</p>`
    }
}

// THIS FUNCTION TAKES THE IDS AND EXTRACT ALL NECESSARY DATA ABOUT THE SEARCHED MOVIES
async function extractMoviesData() {
    const Ids = await getMovieIds();
    const moviesArray = [];

    for (let movieId of Ids) {
        const apiUrl = `${baseURL}/?i=${movieId}&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        moviesArray.push(data);
    }
    return moviesArray;
}

// EXTRACTING WATCHLIST IDS FOR THE PURPOSE OF INDICATING THAT MOVIE IS ALREADY IN WATCHLIST AFTER SEARCH 
function getIdsFromWatchlist() {
    let myList = JSON.parse(localStorage.getItem("Watchlist"));
    if (!myList) {
        return [];
    }
    return myList.map(movie => movie.imdbID);
}

// DISPLAING MOVIES TO THE DOM
async function displayMovies() {
    try {
        const searchedMovies = await extractMoviesData();
        const watchlistIds = getIdsFromWatchlist();

        for (let movie of searchedMovies) {
            const isOnWatchlist = watchlistIds.includes(movie.imdbID);

            result.innerHTML +=
                `
                <div class="result-box" ${isOnWatchlist ? 'style="background-color: lightgreen;"' : ''}>

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
                                <div class="add-to-watchlist" data-watchlist="${movie.imdbID}" style="color: ${isOnWatchlist ? '#51c57d' : ''};">
                                    <i class="fa-solid fa-plus" style="display: ${isOnWatchlist ? 'none' : 'inline'}"></i> 
                                    <i class="fa-regular fa-circle-check" style="display: ${isOnWatchlist ? 'inline' : 'none'}"></i>
                                    ${isOnWatchlist ? 'In My Watchlist' : 'Add To Watchlist'}
                                </div>
                            </div>
                            <div class="movie-plot">${movie.Plot}</div>
                        </div>

                    </div>

                </div>
                `;
        }
    } finally {
        loadingSpinner.style.display = "none";
    }
}

const myWatchlist = JSON.parse(localStorage.getItem("Watchlist")) || [];

document.addEventListener("click", async function(e) {

    if (e.target.dataset.watchlist) {
        const apiUrl = `${baseURL}/?i=${e.target.dataset.watchlist}&apikey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const isDuplicate = myWatchlist.some(function (likedMovie) {
            return likedMovie.imdbID === data.imdbID;
          });
          
        if (!isDuplicate) {
            myWatchlist.unshift(data);
            localStorage.setItem("Watchlist", JSON.stringify(myWatchlist));
            const currentMovie = document.querySelector(`[data-watchlist="${data.imdbID}"]`);
            currentMovie.style.color = "#51c57d";
            currentMovie.style.cursor = "default";
            currentMovie.innerHTML = `<i class="fa-regular fa-circle-check"></i> Added to Watchlist`;

            document.getElementById("add-notification").style.display = "inline"; // DISPLAYING NOTIFICATION
            setTimeout(function() {
                document.getElementById("add-notification").style.display = "none";
            }, 1000); // HIDING IT AFTER A SECOND...
        }
        else {
            const currentMovie = document.querySelector(`[data-watchlist="${data.imdbID}"]`);
            currentMovie.style.color = "#61cafb";
            currentMovie.style.cursor = "default";
            currentMovie.innerHTML = `<i class="fa-regular fa-circle-check"></i> Already in Watchlist`;
        }
    }
});

// Refactor???

