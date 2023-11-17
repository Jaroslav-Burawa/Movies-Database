// THIS ARRAY CONTAINS DOWNLOADED OBJECTS FROM OMDB API. THEY ARE REPRESENTING 10 BEST RATED MOVIES ON IMDB
const topTenMovies = [
    {"Title":"The Shawshank Redemption","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"142 min","Genre":"Drama","Director":"Frank Darabont","Writer":"Stephen King, Frank Darabont","Actors":"Tim Robbins, Morgan Freeman, Bob Gunton","Plot":"Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.","Language":"English","Country":"United States","Awards":"Nominated for 7 Oscars. 21 wins & 42 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.3/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"9.3","imdbVotes":"2,812,705","imdbID":"tt0111161","Type":"movie","DVD":"15 Aug 2008","BoxOffice":"$28,767,189","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Godfather","Year":"1972","Rated":"R","Released":"24 Mar 1972","Runtime":"175 min","Genre":"Crime, Drama","Director":"Francis Ford Coppola","Writer":"Mario Puzo, Francis Ford Coppola","Actors":"Marlon Brando, Al Pacino, James Caan","Plot":"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.","Language":"English, Italian, Latin","Country":"United States","Awards":"Won 3 Oscars. 30 wins & 31 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.2/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"100/100"}],"Metascore":"100","imdbRating":"9.2","imdbVotes":"1,962,081","imdbID":"tt0068646","Type":"movie","DVD":"01 Aug 2013","BoxOffice":"$136,381,073","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Dark Knight","Year":"2008","Rated":"PG-13","Released":"18 Jul 2008","Runtime":"152 min","Genre":"Action, Crime, Drama","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan, David S. Goyer","Actors":"Christian Bale, Heath Ledger, Aaron Eckhart","Plot":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","Language":"English, Mandarin","Country":"United States, United Kingdom","Awards":"Won 2 Oscars. 162 wins & 164 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"9.0","imdbVotes":"2,797,286","imdbID":"tt0468569","Type":"movie","DVD":"14 Jun 2010","BoxOffice":"$534,987,076","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Schindler's List","Year":"1993","Rated":"R","Released":"04 Feb 1994","Runtime":"195 min","Genre":"Biography, Drama, History","Director":"Steven Spielberg","Writer":"Thomas Keneally, Steven Zaillian","Actors":"Liam Neeson, Ralph Fiennes, Ben Kingsley","Plot":"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.","Language":"English, Hebrew, German, Polish, Latin","Country":"United States","Awards":"Won 7 Oscars. 91 wins & 49 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"95/100"}],"Metascore":"95","imdbRating":"9.0","imdbVotes":"1,415,226","imdbID":"tt0108052","Type":"movie","DVD":"05 Mar 2013","BoxOffice":"$96,898,818","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Lord of the Rings: The Return of the King","Year":"2003","Rated":"PG-13","Released":"17 Dec 2003","Runtime":"201 min","Genre":"Action, Adventure, Drama","Director":"Peter Jackson","Writer":"J.R.R. Tolkien, Fran Walsh, Philippa Boyens","Actors":"Elijah Wood, Viggo Mortensen, Ian McKellen","Plot":"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.","Language":"English, Quenya, Old English, Sindarin","Country":"New Zealand, United States","Awards":"Won 11 Oscars. 215 wins & 124 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"9.0","imdbVotes":"1,927,791","imdbID":"tt0167260","Type":"movie","DVD":"06 Apr 2010","BoxOffice":"$379,427,292","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Godfather Part II","Year":"1974","Rated":"R","Released":"18 Dec 1974","Runtime":"202 min","Genre":"Crime, Drama","Director":"Francis Ford Coppola","Writer":"Francis Ford Coppola, Mario Puzo","Actors":"Al Pacino, Robert De Niro, Robert Duvall","Plot":"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.","Language":"English, Italian, Spanish, Latin, Sicilian","Country":"United States","Awards":"Won 6 Oscars. 17 wins & 21 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"90/100"}],"Metascore":"90","imdbRating":"9.0","imdbVotes":"1,332,142","imdbID":"tt0071562","Type":"movie","DVD":"15 Sep 2012","BoxOffice":"$47,834,595","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"12 Angry Men","Year":"1957","Rated":"Approved","Released":"10 Apr 1957","Runtime":"96 min","Genre":"Crime, Drama","Director":"Sidney Lumet","Writer":"Reginald Rose","Actors":"Henry Fonda, Lee J. Cobb, Martin Balsam","Plot":"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.","Language":"English","Country":"United States","Awards":"Nominated for 3 Oscars. 16 wins & 12 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"100%"},{"Source":"Metacritic","Value":"97/100"}],"Metascore":"97","imdbRating":"9.0","imdbVotes":"837,336","imdbID":"tt0050083","Type":"movie","DVD":"04 Apr 2012","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Pulp Fiction","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"154 min","Genre":"Crime, Drama","Director":"Quentin Tarantino","Writer":"Quentin Tarantino, Roger Avary","Actors":"John Travolta, Uma Thurman, Samuel L. Jackson","Plot":"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","Country":"United States","Awards":"Won 1 Oscar. 69 wins & 72 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.9/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"95/100"}],"Metascore":"95","imdbRating":"8.9","imdbVotes":"2,159,035","imdbID":"tt0110912","Type":"movie","DVD":"21 Apr 2016","BoxOffice":"$107,928,762","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Fight Club","Year":"1999","Rated":"R","Released":"15 Oct 1999","Runtime":"139 min","Genre":"Drama","Director":"David Fincher","Writer":"Chuck Palahniuk, Jim Uhls","Actors":"Brad Pitt, Edward Norton, Meat Loaf","Plot":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.","Language":"English","Country":"Germany, United States","Awards":"Nominated for 1 Oscar. 12 wins & 38 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"79%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"8.8","imdbVotes":"2,247,015","imdbID":"tt0137523","Type":"movie","DVD":"19 Nov 2014","BoxOffice":"$37,030,102","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Lord of the Rings: The Fellowship of the Ring","Year":"2001","Rated":"PG-13","Released":"19 Dec 2001","Runtime":"178 min","Genre":"Action, Adventure, Drama","Director":"Peter Jackson","Writer":"J.R.R. Tolkien, Fran Walsh, Philippa Boyens","Actors":"Elijah Wood, Ian McKellen, Orlando Bloom","Plot":"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.","Language":"English, Sindarin","Country":"New Zealand, United States","Awards":"Won 4 Oscars. 125 wins & 127 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.8","imdbVotes":"1,955,502","imdbID":"tt0120737","Type":"movie","DVD":"28 Jun 2011","BoxOffice":"$316,115,420","Production":"N/A","Website":"N/A","Response":"True"},
]

window.onload = renderTopMovies;

const topMoviesBox = document.getElementById("top-movies-box");

function renderTopMovies() {
    let topTenNumber = 1;
    for (let movie of topTenMovies) {
        topMoviesBox.innerHTML += `
            <div class="result-box">
                <div class="movie-card">
                    <div class="movie-image">
                        <div class="top-ten-number">${topTenNumber}.</div>
                            <img class="movie-poster" src="${movie.Poster}">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">
                            <div><span class="top-ten-number-wide">${topTenNumber}. </span>${movie.Title}</div>
                            <div id="genre">( ${movie.Genre} )</div>
                        </div>
                        <div class="movie-details">
                            <div id="country"><i class="fa-solid fa-globe"></i> ${movie.Country}</div>
                            <div id="year"><i class="fa-solid fa-calendar-days"></i> ${movie.Year}</div>
                            <div>
                                <span><img id="imdb-logo" src="IMDb logo.png"></span>
                                <span id="rating"> ${movie.imdbRating}</span>
                            </div>
                        </div>
                        <div class="movie-plot">${movie.Plot}</div>
                    </div>
                </div>
            </div>
        `;
        topTenNumber ++
    }
}