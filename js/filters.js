// filters.js
// Filters the user's watchlist by title, status, genre, and streaming platform.

function filterWatchlistItems(items, searchText, status, genre, platform) {
    // Store matching results
    var results = [];

    // Normalize search inputs
    var search = searchText.trim().toLowerCase();
    var genreSearch = genre.trim().toLowerCase();
    var platformSearch = platform.trim().toLowerCase();

    // Check every item in the watchlist
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        // Check if the item matches each filter
        var titleMatches = search === "" || item.title.toLowerCase().indexOf(search) !== -1;
        var statusMatches = status === "" || item.status === status;
        var genreMatches = genreSearch === "" || item.genre.toLowerCase().indexOf(genreSearch) !== -1;
        var platformMatches = platformSearch === "" || item.platform.toLowerCase().indexOf(platformSearch) !== -1;

        // Add matching items to the results list
        if (titleMatches && statusMatches && genreMatches && platformMatches) {
            results.push(item);
        }
    }

    // Return filtered watchlist
    return results;
}
