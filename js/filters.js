// filters.js
// This file filters the watchlist based on title, status, genre, and platform.

function filterWatchlistItems(
  items,
  searchText,
  status,
  genre,
  platform,
  rating
) {
  var results = [];
  var search = searchText.trim().toLowerCase();
  var genreSearch = genre.trim().toLowerCase();
  var platformSearch = platform.trim().toLowerCase();

  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    var titleMatches =
      search === "" || item.title.toLowerCase().indexOf(search) !== -1;

    var statusMatches =
      status === "" || item.status === status;

    var genreMatches =
      genreSearch === "" ||
      item.genre.toLowerCase().indexOf(genreSearch) !== -1;

    var platformMatches =
      platformSearch === "" ||
      item.platform.toLowerCase().indexOf(platformSearch) !== -1;

    var ratingMatches =
      rating === "" || String(item.rating) === rating;

    if (
      titleMatches &&
      statusMatches &&
      genreMatches &&
      platformMatches &&
      ratingMatches
    ) {
      results.push(item);
    }
  }

  return results;
}

function sortWatchlistItems(items, sortBy) {
  var sortedItems = items.slice();

  if (sortBy === "title-asc") {
    sortedItems.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  }

  if (sortBy === "rating-desc") {
    sortedItems.sort(function (a, b) {
      return Number(b.rating || 0) - Number(a.rating || 0);
    });
  }

  if (sortBy === "newest") {
    sortedItems.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  }

  return sortedItems;
}