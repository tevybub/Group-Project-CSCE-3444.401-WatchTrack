// watchlist.js
// This file handles adding, editing, deleting, and finding recommendations.

function getWatchlistItems() {
  return getWatchlist();
}

function addWatchlistItem(item) {
  var items = getWatchlistItems();

  item.id = createId();
  item.createdAt = new Date().toISOString();

  items.unshift(item);
  saveWatchlist(items);

  return items;
}

function updateWatchlistItem(id, updates) {
  var items = getWatchlistItems();

  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      for (var field in updates) {
        items[i][field] = updates[field];
      }
    }
  }

  saveWatchlist(items);
  return items;
}

function deleteWatchlistItem(id) {
  var items = getWatchlistItems();
  var updatedItems = [];

  for (var i = 0; i < items.length; i++) {
    if (items[i].id !== id) {
      updatedItems.push(items[i]);
    }
  }

  saveWatchlist(updatedItems);
  return updatedItems;
}

function findWatchlistItem(id) {
  var items = getWatchlistItems();

  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) {
      return items[i];
    }
  }

  return null;
}

function loadDemoWatchlistData() {
  var items = [
    {
      id: createId(),
      title: "Dune: Part Two",
      type: "Movie",
      genre: "Sci-Fi",
      platform: "Max",
      recommender: "Tevin",
      status: "Recommended",
      rating: "",
      notes: "Recommended for the visuals and story.",
      createdAt: new Date().toISOString()
    },
    {
      id: createId(),
      title: "The Bear",
      type: "TV Show",
      genre: "Drama",
      platform: "Hulu",
      recommender: "Jeet",
      status: "Watching",
      rating: "",
      notes: "Short episodes and strong characters.",
      createdAt: new Date().toISOString()
    },
    {
      id: createId(),
      title: "Arcane",
      type: "TV Show",
      genre: "Animation",
      platform: "Netflix",
      recommender: "Collin",
      status: "Completed",
      rating: "5",
      notes: "Good example for animation and story recommendations.",
      createdAt: new Date().toISOString()
    },
    {
      id: createId(),
      title: "Oppenheimer",
      type: "Movie",
      genre: "Biography",
      platform: "Peacock",
      recommender: "Zion",
      status: "Plan to Watch",
      rating: "",
      notes: "Saved for a weekend watch.",
      createdAt: new Date().toISOString()
    }
  ];

  saveWatchlist(items);
  return items;
}
