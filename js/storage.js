// storage.js
// This file saves and loads WatchTrack data using the browser's localStorage.
// For the prototype, localStorage is being used instead of a real database.

var USERS_KEY = "watchtrack_users";
var CURRENT_USER_KEY = "watchtrack_current_user";

function getUsers() {
  var usersText = localStorage.getItem(USERS_KEY);

  if (usersText === null) {
    return [];
  }

  return JSON.parse(usersText);
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

function makeWatchlistKey(email) {
  return "watchtrack_watchlist_" + email;
}

function getWatchlist(email) {
  if (!email) {
    email = getCurrentUserEmail();
  }

  if (!email) {
    return [];
  }

  var itemsText = localStorage.getItem(makeWatchlistKey(email));

  if (itemsText === null) {
    return [];
  }

  return JSON.parse(itemsText);
}

function saveWatchlist(items, email) {
  if (!email) {
    email = getCurrentUserEmail();
  }

  if (!email) {
    return;
  }

  localStorage.setItem(makeWatchlistKey(email), JSON.stringify(items));
}

function createId() {
  return "id-" + Date.now() + "-" + Math.floor(Math.random() * 100000);
}

function seedDemoAccount() {
  var users = getUsers();
  var demoExists = false;

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === "demo@watchtrack.com") {
      demoExists = true;
    }
  }

  if (!demoExists) {
    users.push({
      id: createId(),
      name: "Demo User",
      email: "demo@watchtrack.com",
      password: "watchtrack"
    });
    saveUsers(users);
  }

  var demoItems = getWatchlist("demo@watchtrack.com");

  if (demoItems.length === 0) {
    saveWatchlist([
      {
        id: createId(),
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
        id: createId(),
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
        id: createId(),
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
