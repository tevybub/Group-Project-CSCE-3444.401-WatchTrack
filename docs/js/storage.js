const WatchTrackStorage = (() => {
  const USERS_KEY = "watchtrack_users";
  const CURRENT_USER_KEY = "watchtrack_current_user";

  function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getCurrentUserEmail() {
    return localStorage.getItem(CURRENT_USER_KEY);
  }

  function setCurrentUserEmail(email) {
    localStorage.setItem(CURRENT_USER_KEY, email);
  }

  function clearCurrentUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
  }

  function watchlistKey(email) {
    return `watchtrack_watchlist_${email}`;
  }

  function getWatchlist(email = getCurrentUserEmail()) {
    if (!email) return [];
    return JSON.parse(localStorage.getItem(watchlistKey(email))) || [];
  }

  function saveWatchlist(items, email = getCurrentUserEmail()) {
    if (!email) return;
    localStorage.setItem(watchlistKey(email), JSON.stringify(items));
  }

  function seedDemoAccount() {
    const users = getUsers();
    const exists = users.some((user) => user.email === "demo@watchtrack.com");

    if (!exists) {
      users.push({
        id: crypto.randomUUID(),
        name: "Demo User",
        email: "demo@watchtrack.com",
        password: "watchtrack"
      });
      saveUsers(users);
    }

    if (getWatchlist("demo@watchtrack.com").length === 0) {
      saveWatchlist([
        {
          id: crypto.randomUUID(),
          title: "The Last of Us",
          type: "TV Show",
          genre: "Drama",
          platform: "Max",
          recommender: "Classmate",
          status: "Watching",
          rating: "",
          notes: "Recommended because of the story and game connection.",
          createdAt: new Date().toISOString()
        },
        {
          id: crypto.randomUUID(),
          title: "Spider-Man: Into the Spider-Verse",
          type: "Movie",
          genre: "Animation",
          platform: "Netflix",
          recommender: "Friend",
          status: "Completed",
          rating: "5",
          notes: "Great visuals and easy recommendation for movie night.",
          createdAt: new Date().toISOString()
        },
        {
          id: crypto.randomUUID(),
          title: "Severance",
          type: "TV Show",
          genre: "Sci-Fi",
          platform: "Apple TV+",
          recommender: "Online community",
          status: "Plan to Watch",
          rating: "",
          notes: "Added after seeing multiple positive posts online.",
          createdAt: new Date().toISOString()
        }
      ], "demo@watchtrack.com");
    }
  }

  return {
    getUsers,
    saveUsers,
    getCurrentUserEmail,
    setCurrentUserEmail,
    clearCurrentUser,
    getWatchlist,
    saveWatchlist,
    seedDemoAccount
  };
})();
