// filters.js
// This file filters the watchlist based on title, status, genre, and platform.

function filterWatchlistItems(items, searchText, status, genre, platform) {
  var results = [];
  var search = searchText.trim().toLowerCase();
  var genreSearch = genre.trim().toLowerCase();
  var platformSearch = platform.trim().toLowerCase();

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var titleMatches = search === "" || item.title.toLowerCase().indexOf(search) !== -1;
    var statusMatches = status === "" || item.status === status;
    var genreMatches = genreSearch === "" || item.genre.toLowerCase().indexOf(genreSearch) !== -1;
    var platformMatches = platformSearch === "" || item.platform.toLowerCase().indexOf(platformSearch) !== -1;

    if (titleMatches && statusMatches && genreMatches && platformMatches) {
      results.push(item);
    }
  }

  return results;
}
