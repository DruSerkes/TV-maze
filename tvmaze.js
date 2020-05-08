/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  const response = await axios.get('http://api.tvmaze.com/search/shows', { params: { q: query } });
  let shows = [];
  for (let result of response.data){
    let show = {
        id: result.show.id,
        name: result.show.name,
        summary: result.show.summary, 
    };
    if (result.show.image){
      show.image = result.show.image.original;
    };
    shows.push(show);
}
  return shows;
}



/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let img = show.image? show.image: 'https://tinyurl.com/tv-missing';
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <div class="card-body">
             <img class="card-img-top" src="${img}">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="btn btn-outline-secondary" data-toggle='modal' data-target='#episodeModal'>See Episodes</button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
  }
}

// Populate episodes list 
// - given list of episodes, add episodes to DOM 
const populateEpisodes = (episodes) => {
  const $episodesArea = $('#episodes-area');
  $episodesArea.empty();
  for (let episode of episodes){
    let $newLi = $(`<li>${episode.name} (Season ${episode.season}, Episode ${episode.number})</li>`);
    $episodesArea.append($newLi);
  };
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});

// Handle see episodes click  
$('#shows-list').on('click', 'button', async function handleEpisodes (evt){
  $('#episodes-area').css('display', 'block');

  let id = $((this).closest('.card')).data('show-id');
  if (!id) return; 

  let episodes = await getEpisodes(id);

  populateEpisodes(episodes);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  const response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
  let episodes = [];
  for (let result of response.data){
    let episode = {
        id: result.id,
        name: result.name,
        summary: result.summary,
        season: result.season,
        number: result.number
    };
    episodes.push(episode);
}
  return episodes;
}

