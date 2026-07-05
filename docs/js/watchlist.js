const WatchTrackList = (() => {
  function getItems() {
    return WatchTrackStorage.getWatchlist();
  }

  function addItem(item) {
    const items = getItems();
    items.unshift({
      id: crypto.randomUUID(),
      ...item,
      createdAt: new Date().toISOString()
    });
    WatchTrackStorage.saveWatchlist(items);
    return items;
  }

  function updateItem(id, updates) {
    const items = getItems().map((item) => (
      item.id === id ? { ...item, ...updates } : item
    ));
    WatchTrackStorage.saveWatchlist(items);
    return items;
  }

  function deleteItem(id) {
    const items = getItems().filter((item) => item.id !== id);
    WatchTrackStorage.saveWatchlist(items);
    return items;
  }

  function findItem(id) {
    return getItems().find((item) => item.id === id);
  }

  function loadDemoData() {
    const items = [
      {
        id: crypto.randomUUID(),
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
        id: crypto.randomUUID(),
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
        id: crypto.randomUUID(),
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
        id: crypto.randomUUID(),
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

    WatchTrackStorage.saveWatchlist(items);
    return items;
  }

  return {
    getItems,
    addItem,
    updateItem,
    deleteItem,
    findItem,
    loadDemoData
  };
})();
