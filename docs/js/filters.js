const WatchTrackFilters = (() => {
  function filterItems(items, filters) {
    const searchTerm = filters.search.trim().toLowerCase();
    const status = filters.status;
    const genre = filters.genre.trim().toLowerCase();
    const platform = filters.platform.trim().toLowerCase();

    return items.filter((item) => {
      const titleMatch = !searchTerm || item.title.toLowerCase().includes(searchTerm);
      const statusMatch = !status || item.status === status;
      const genreMatch = !genre || item.genre.toLowerCase().includes(genre);
      const platformMatch = !platform || item.platform.toLowerCase().includes(platform);

      return titleMatch && statusMatch && genreMatch && platformMatch;
    });
  }

  return {
    filterItems
  };
})();
