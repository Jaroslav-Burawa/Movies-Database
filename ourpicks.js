// THIS ARRAY CONTAINS DOWNLOADED OBJECTS FROM OMDB API. THEY ARE REPRESENTING OUR PICKS
const ourPicksArray = [
    {"Title":"The Matrix","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Lana Wachowski, Lilly Wachowski","Writer":"Lilly Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss","Plot":"Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.","Language":"English","Country":"United States, Australia","Awards":"Won 4 Oscars. 42 wins & 52 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"83%"},{"Source":"Metacritic","Value":"73/100"}],"Metascore":"73","imdbRating":"8.7","imdbVotes":"1,999,515","imdbID":"tt0133093","Type":"movie","DVD":"01 Jan 2009","BoxOffice":"$172,076,928","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Grave of the Fireflies","Year":"1988","Rated":"Not Rated","Released":"26 Jul 1989","Runtime":"89 min","Genre":"Animation, Drama, War","Director":"Isao Takahata","Writer":"Akiyuki Nosaka, Isao Takahata","Actors":"Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi","Plot":"The story of Seita and Setsuko, two young Japanese siblings, living in the declining days of World War II. When an American firebombing separates the two children from their parents, the two siblings must rely completely on one another while they struggle to fight for their survival.","Language":"Japanese","Country":"Japan","Awards":"3 wins","Poster":"https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"100%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.5","imdbVotes":"298,010","imdbID":"tt0095327","Type":"movie","DVD":"11 Mar 2017","BoxOffice":"$516,962","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Spirited Away","Year":"2001","Rated":"PG","Released":"28 Mar 2003","Runtime":"125 min","Genre":"Animation, Adventure, Family","Director":"Hayao Miyazaki","Writer":"Hayao Miyazaki","Actors":"Daveigh Chase, Suzanne Pleshette, Miyu Irino","Plot":"Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse is the evil witch Yubaba, who is intent on keeping all trespassers as captive workers, including Chihiro. Chihiro must rely on Haku to save her parents in hopes of returning to their world.","Language":"Japanese","Country":"Japan","Awards":"Won 1 Oscar. 58 wins & 31 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"96/100"}],"Metascore":"96","imdbRating":"8.6","imdbVotes":"816,975","imdbID":"tt0245429","Type":"movie","DVD":"19 Dec 2019","BoxOffice":"$15,205,725","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"12 Angry Men","Year":"1957","Rated":"Approved","Released":"10 Apr 1957","Runtime":"96 min","Genre":"Crime, Drama","Director":"Sidney Lumet","Writer":"Reginald Rose","Actors":"Henry Fonda, Lee J. Cobb, Martin Balsam","Plot":"The defense and the prosecution have rested, and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, AND each other. Based on the play, all of the action takes place on the stage of the jury room.","Language":"English","Country":"United States","Awards":"Nominated for 3 Oscars. 16 wins & 12 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"100%"},{"Source":"Metacritic","Value":"97/100"}],"Metascore":"97","imdbRating":"9.0","imdbVotes":"837,336","imdbID":"tt0050083","Type":"movie","DVD":"04 Apr 2012","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Gladiator","Year":"2000","Rated":"R","Released":"05 May 2000","Runtime":"155 min","Genre":"Action, Adventure, Drama","Director":"Ridley Scott","Writer":"David Franzoni, John Logan, William Nicholson","Actors":"Russell Crowe, Joaquin Phoenix, Connie Nielsen","Plot":"Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.","Language":"English","Country":"United States, United Kingdom, Malta, Morocco","Awards":"Won 5 Oscars. 60 wins & 104 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"80%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"8.5","imdbVotes":"1,573,055","imdbID":"tt0172495","Type":"movie","DVD":"15 Jun 2011","BoxOffice":"$187,705,427","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"One Flew Over the Cuckoo's Nest","Year":"1975","Rated":"R","Released":"19 Nov 1975","Runtime":"133 min","Genre":"Drama","Director":"Milos Forman","Writer":"Lawrence Hauben, Bo Goldman, Ken Kesey","Actors":"Jack Nicholson, Louise Fletcher, Michael Berryman","Plot":"McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.","Language":"English","Country":"United States","Awards":"Won 5 Oscars. 38 wins & 15 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"8.7","imdbVotes":"1,047,812","imdbID":"tt0073486","Type":"movie","DVD":"30 Nov 2016","BoxOffice":"$108,981,275","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Game of Thrones","Year":"2011–2019","Rated":"TV-MA","Released":"17 Apr 2011","Runtime":"57 min","Genre":"Action, Adventure, Drama","Director":"N/A","Writer":"David Benioff, D.B. Weiss","Actors":"Emilia Clarke, Peter Dinklage, Kit Harington","Plot":"In the mythical continent of Westeros, several powerful families fight for control of the Seven Kingdoms. As conflict erupts in the kingdoms of men, an ancient enemy rises once again to threaten them all. Meanwhile, the last heirs of a recently usurped dynasty plot to take back their homeland from across the Narrow Sea.","Language":"English","Country":"United States, United Kingdom","Awards":"Won 59 Primetime Emmys. 389 wins & 634 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.2/10"}],"Metascore":"N/A","imdbRating":"9.2","imdbVotes":"2,215,502","imdbID":"tt0944947","Type":"series","totalSeasons":"8","Response":"True"},
    {"Title":"Crash Landing on You","Year":"2019–2020","Rated":"TV-14","Released":"14 Dec 2019","Runtime":"70 min","Genre":"Adventure, Comedy, Romance","Director":"N/A","Writer":"N/A","Actors":"Hyun Bin, Son Ye-jin, Seo Ji-hye","Plot":"When famous fashion company owner Yoon Se-ri finds herself trapped in North Korea after a devastating paragliding accident, she meets Ri Jeong-hyeok, a respectable military captain. During her stay, Se-ri discovers the hardships of living in North Korea, and as she slowly falls in love with Captain Ri, it is up to her and her fellow North Korean comrades to find her way back home to the South while hiding their love for each other.","Language":"Korean","Country":"South Korea","Awards":"4 wins & 9 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMzRiZWUyN2YtNDI4YS00NTg2LTg0OTgtMGI2ZjU4ODQ4Yjk3XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"}],"Metascore":"N/A","imdbRating":"8.7","imdbVotes":"37,632","imdbID":"tt10850932","Type":"series","totalSeasons":"1","Response":"True"},
    {"Title":"Saving Private Ryan","Year":"1998","Rated":"R","Released":"24 Jul 1998","Runtime":"169 min","Genre":"Drama, War","Director":"Steven Spielberg","Writer":"Robert Rodat","Actors":"Tom Hanks, Matt Damon, Tom Sizemore","Plot":"Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...","Language":"English, French, German, Czech","Country":"United States","Awards":"Won 5 Oscars. 79 wins & 75 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"91/100"}],"Metascore":"91","imdbRating":"8.6","imdbVotes":"1,458,416","imdbID":"tt0120815","Type":"movie","DVD":"27 May 2016","BoxOffice":"$217,049,603","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Intouchables","Year":"2011","Rated":"R","Released":"02 Nov 2011","Runtime":"112 min","Genre":"Biography, Comedy, Drama","Director":"Olivier Nakache, Éric Toledano","Writer":"Olivier Nakache, Éric Toledano, Philippe Pozzo di Borgo","Actors":"François Cluzet, Omar Sy, Anne Le Ny","Plot":"In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.","Language":"French, English","Country":"France","Awards":"Nominated for 1 BAFTA Award38 wins & 40 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"76%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"8.5","imdbVotes":"904,506","imdbID":"tt1675434","Type":"movie","DVD":"05 Mar 2013","BoxOffice":"$10,198,820","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Chernobyl","Year":"2019","Rated":"TV-MA","Released":"06 May 2019","Runtime":"330 min","Genre":"Drama, History, Thriller","Director":"N/A","Writer":"Craig Mazin","Actors":"Jessie Buckley, Jared Harris, Stellan Skarsgård","Plot":"In April 1986, a huge explosion erupted at the Chernobyl nuclear power station in northern Ukraine. This series follows the stories of the men and women, who tried to contain the disaster, as well as those who gave their lives preventing a subsequent and worse one.","Language":"English, Russian, Ukrainian","Country":"United States, United Kingdom","Awards":"Won 10 Primetime Emmys. 84 wins & 60 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.3/10"}],"Metascore":"N/A","imdbRating":"9.3","imdbVotes":"827,074","imdbID":"tt7366338","Type":"series","totalSeasons":"1","Response":"True"},
    {"Title":"Apocalypse Now","Year":"1979","Rated":"R","Released":"15 Aug 1979","Runtime":"147 min","Genre":"Drama, Mystery, War","Director":"Francis Ford Coppola","Writer":"John Milius, Francis Ford Coppola, Michael Herr","Actors":"Martin Sheen, Marlon Brando, Robert Duvall","Plot":"It is the height of the war in Vietnam, and U.S. Army Captain Willard is sent by Colonel Lucas and a General to carry out a mission that, officially, 'does not exist - nor will it ever exist'. The mission: To seek out a mysterious Green Beret Colonel, Walter Kurtz, whose army has crossed the border into Cambodia and is conducting hit-and-run missions against the Viet Cong and NVA. The army believes Kurtz has gone completely insane and Willard's job is to eliminate him. Willard, sent up the Nung River on a U.S. Navy patrol boat, discovers that his target is one of the most decorated officers in the U.S. Army. His crew meets up with surfer-type Lt-Colonel Kilgore, head of a U.S Army helicopter cavalry group which eliminates a Viet Cong outpost to provide an entry point into the Nung River. After some hair-raising encounters, in which some of his crew are killed, Willard, Lance and Chef reach Colonel Kurtz's outpost, beyond the Do Lung Bridge. Now, after becoming prisoners of Kurtz, will Willard & the others be able to fulfill their mission?","Language":"English, French, Vietnamese","Country":"United States","Awards":"Won 2 Oscars. 21 wins & 33 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.4","imdbVotes":"695,588","imdbID":"tt0078788","Type":"movie","DVD":"29 Sep 2013","BoxOffice":"$96,042,913","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Braveheart","Year":"1995","Rated":"R","Released":"24 May 1995","Runtime":"178 min","Genre":"Biography, Drama, History","Director":"Mel Gibson","Writer":"Randall Wallace","Actors":"Mel Gibson, Sophie Marceau, Patrick McGoohan","Plot":"William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce.","Language":"English, French, Latin, Gaelic, Italian","Country":"United States","Awards":"Won 5 Oscars. 34 wins & 34 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"76%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"8.3","imdbVotes":"1,072,619","imdbID":"tt0112573","Type":"movie","DVD":"01 Aug 2013","BoxOffice":"$75,609,945","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Once Upon a Time in America","Year":"1984","Rated":"R","Released":"01 Jun 1984","Runtime":"229 min","Genre":"Crime, Drama","Director":"Sergio Leone","Writer":"Harry Grey, Leonardo Benvenuti, Piero De Bernardi","Actors":"Robert De Niro, James Woods, Elizabeth McGovern","Plot":"With the vivid memory of his long-gone childhood friends Max, Patsy, and Cockeye etched in his mind, his ferociously loyal partners-in-crime during their rise to prominence in New York's Prohibition-era Lower East Side, the defeated, penniless, and guilt-ridden former gangster David \"Noodles\" Aaronson returns to Manhattan. Not knowing what to expect on his mission to shed light on his opaque past, grizzled Noodles reunites with his only living friend Fat Moe after 35 haunted years of self-exile. However, the relentless, piercing sound of culpability stands in the way of finding closure, as the inscrutable content of a well-worn leather suitcase further complicates matters. And now, against the backdrop of a torn conscience, the sad, bittersweet recollections of more than 50 years of love, death, and everything in-between become inextricably intertwined, leading to even more puzzling questions. But what are a man's options when he is left with nothing?","Language":"English, Italian, French, Yiddish, Hebrew","Country":"United States, Italy","Awards":"Won 2 BAFTA 11 wins & 13 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMmQzZjdmZDAtOGE2Yy00MmUwLTljYzgtZTMwMjk3ZDdiOWUyXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"8.3","imdbVotes":"369,114","imdbID":"tt0087843","Type":"movie","DVD":"12 Dec 2015","BoxOffice":"$5,321,508","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Requiem for a Dream","Year":"2000","Rated":"Unrated","Released":"15 Dec 2000","Runtime":"102 min","Genre":"Drama","Director":"Darren Aronofsky","Writer":"Hubert Selby Jr., Darren Aronofsky","Actors":"Ellen Burstyn, Jared Leto, Jennifer Connelly","Plot":"Sara Goldfarb (Ellen Burstyn) is a retired widow, living in a small apartment. She spends most of her time watching TV, especially a particular self-help show. She has delusions of rising above her current dull existence by being a guest on that show. Her son, Harry (Jared Leto) is a junkie but along with his friend Tyrone (Marlon Wayans) has visions of making it big by becoming a drug dealer. Harry's girlfriend Marion (Jennifer Connelly) could be fashion designer or artist but is swept along in Harry's drug-centric world. Meanwhile Sara has developed an addiction of her own. She desperately wants to lose weight and so goes on a crash course involving popping pills, pills which turn out to be very addictive and harmful to her mental state.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 37 wins & 69 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"71/100"}],"Metascore":"71","imdbRating":"8.3","imdbVotes":"879,492","imdbID":"tt0180093","Type":"movie","DVD":"06 Dec 2015","BoxOffice":"$3,635,482","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"The Hunt","Year":"2012","Rated":"R","Released":"10 Jan 2013","Runtime":"115 min","Genre":"Drama","Director":"Thomas Vinterberg","Writer":"Thomas Vinterberg, Tobias Lindholm","Actors":"Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp","Plot":"Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before it's taken from him for good.","Language":"Danish, English, Polish","Country":"Denmark, Sweden","Awards":"Nominated for 1 Oscar. 38 wins & 73 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"77/100"}],"Metascore":"77","imdbRating":"8.3","imdbVotes":"351,672","imdbID":"tt2106476","Type":"movie","DVD":"12 Jul 2014","BoxOffice":"$613,308","Production":"N/A","Website":"N/A","Response":"True"},
    {"Title":"Itaewon Class","Year":"2020","Rated":"TV-MA","Released":"31 Jan 2020","Runtime":"N/A","Genre":"Drama, Romance","Director":"N/A","Writer":"Gwang Jin","Actors":"Park Seo-joon, Kim Da-mi, Yoo Jae-myung","Plot":"An ex-con opens a street bar in Itaewon, while also seeking revenge on the family who was responsible for his father's death.","Language":"Korean","Country":"South Korea","Awards":"5 wins & 5 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BODY1NWE2OTctOTU5MC00NTlmLWI2MzktMmYzMTUzYjk4YjEzXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"}],"Metascore":"N/A","imdbRating":"8.2","imdbVotes":"17,669","imdbID":"tt11239552","Type":"series","totalSeasons":"1","Response":"True"},
    {"Title":"Alchemy of Souls","Year":"2022–","Rated":"TV-14","Released":"18 Jun 2022","Runtime":"40S min","Genre":"Action, Drama, Fantasy","Director":"N/A","Writer":"N/A","Actors":"Lee Jae-wook, Min-Hyun Hwang, Joon-Sang Yoo","Plot":"Set in a fictional country called Daeho, it is about the love and growth of young mages as they overcome their twisted fates due to a forbidden magic spell known as the \"alchemy of souls\", which allows souls to switch bodies.","Language":"Korean","Country":"South Korea","Awards":"N/A","Poster":"https://m.media-amazon.com/images/M/MV5BMmJhZGFhMmItM2RmMC00NWIxLWE5ZjMtMmIwZmJkNTdjZTg4XkEyXkFqcGdeQXVyOTI5NDk4NDQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"}],"Metascore":"N/A","imdbRating":"8.8","imdbVotes":"14,031","imdbID":"tt20859920","Type":"series","totalSeasons":"2","Response":"True"},
]

window.onload = renderOurPicks;

const ourPicksBox = document.getElementById("our-picks-box");

function renderOurPicks() {
    for (let movie of ourPicksArray) {
        ourPicksBox.innerHTML += `
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
                        </div>
                        <div class="movie-plot">${movie.Plot}</div>
                    </div>
                </div>
            </div>
        `;

    }
}