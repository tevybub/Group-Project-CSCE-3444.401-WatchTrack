// app.js
// This file connects the buttons and forms on the page to the functions in the other files.

window.addEventListener("load", startApp);

function startApp() {
  seedDemoAccount();
  setupAuthTabs();
  setupNavigation();
  setupLoginForm();
  setupRegisterForm();
  setupLogoutButton();
  setupDemoButton();
  setupRecommendationForm();
  setupFilterInputs();
  setupWatchlistButtons();
}

function setupAuthTabs() {
  var loginTab = document.getElementById("login-tab");
  var registerTab = document.getElementById("register-tab");
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");

  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    clearMessages();
  });

  registerTab.addEventListener("click", function () {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    clearMessages();
  });
}

function setupNavigation() {
  var navLinks = document.querySelectorAll(".nav-link");

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      showSection(this.getAttribute("data-section"));
    });
  }
}

function setupLoginForm() {
  var loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    var result = loginUser(email, password);

    showMessage("login-message", result.message, result.success);

    if (result.success) {
      showApp();
    }
  });
}

function setupRegisterForm() {
  var registerForm = document.getElementById("register-form");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("register-name").value;
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var result = registerUser(name, email, password);

    showMessage("register-message", result.message, result.success);

    if (result.success) {
      showApp();
    }
  });
}

function setupLogoutButton() {
  document.getElementById("logout-btn").addEventListener("click", function () {
    logoutUser();
    showAuth();
  });
}

function setupDemoButton() {
  document.getElementById("load-demo-btn").addEventListener("click", function () {
    loadDemoWatchlistData();
    updateDashboard();
    renderWatchlist();
    showSection("watchlist-section");
  });
}

function setupRecommendationForm() {
  var form = document.getElementById("recommendation-form");
  var cancelButton = document.getElementById("cancel-edit-btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var item = getRecommendationFormValues();
    var editId = document.getElementById("edit-id").value;

    if (editId !== "") {
      updateWatchlistItem(editId, item);
      showMessage("form-message", "Recommendation updated.", true);
    } else {
      addWatchlistItem(item);
      showMessage("form-message", "Recommendation saved.", true);
    }

    resetRecommendationForm();
    updateDashboard();
    renderWatchlist();
    showSection("watchlist-section");
  });

  cancelButton.addEventListener("click", resetRecommendationForm);
}

function setupFilterInputs() {
  document.getElementById("search-input").addEventListener("input", renderWatchlist);
  document.getElementById("status-filter").addEventListener("change", renderWatchlist);
  document.getElementById("genre-filter").addEventListener("input", renderWatchlist);
  document.getElementById("platform-filter").addEventListener("input", renderWatchlist);

  document.getElementById("clear-filters-btn").addEventListener("click", function () {
    document.getElementById("search-input").value = "";
    document.getElementById("status-filter").value = "";
    document.getElementById("genre-filter").value = "";
    document.getElementById("platform-filter").value = "";
    renderWatchlist();
  });
}

function setupWatchlistButtons() {
  var tableBody = document.getElementById("watchlist-body");

  tableBody.addEventListener("click", function (event) {
    var action = event.target.getAttribute("data-action");
    var id = event.target.getAttribute("data-id");

    if (action === "edit") {
      startEditItem(id);
    }

    if (action === "delete") {
      deleteWatchlistItem(id);
      updateDashboard();
      renderWatchlist();
    }
  });

  tableBody.addEventListener("change", function (event) {
    var action = event.target.getAttribute("data-action");
    var id = event.target.getAttribute("data-id");

    if (action === "status") {
      updateWatchlistItem(id, { status: event.target.value });
      updateDashboard();
      renderWatchlist();
    }
  });
}

function showApp() {
  document.getElementById("auth-section").classList.add("hidden");
  document.getElementById("app-section").classList.remove("hidden");
  document.getElementById("app-nav").classList.remove("hidden");
  showSection("dashboard-section");
  updateDashboard();
  renderWatchlist();
}

function showAuth() {
  document.getElementById("auth-section").classList.remove("hidden");
  document.getElementById("app-section").classList.add("hidden");
  document.getElementById("app-nav").classList.add("hidden");
  clearMessages();
}

function showSection(sectionId) {
  var sections = document.querySelectorAll(".app-panel");
  var navLinks = document.querySelectorAll(".nav-link");

  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id === sectionId) {
      sections[i].classList.remove("hidden");
    } else {
      sections[i].classList.add("hidden");
    }
  }

  for (var j = 0; j < navLinks.length; j++) {
    if (navLinks[j].getAttribute("data-section") === sectionId) {
      navLinks[j].classList.add("active");
    } else {
      navLinks[j].classList.remove("active");
    }
  }

  if (sectionId === "dashboard-section") {
    updateDashboard();
  }

  if (sectionId === "watchlist-section") {
    renderWatchlist();
  }
}

function renderWatchlist() {
  var allItems = getWatchlistItems();
  var search = document.getElementById("search-input").value;
  var status = document.getElementById("status-filter").value;
  var genre = document.getElementById("genre-filter").value;
  var platform = document.getElementById("platform-filter").value;

  var items = filterWatchlistItems(allItems, search, status, genre, platform);
  var tableBody = document.getElementById("watchlist-body");
  var emptyState = document.getElementById("empty-state");

  document.getElementById("result-count").textContent = items.length + " result" + (items.length === 1 ? "" : "s");

  if (items.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  var html = "";

  for (var i = 0; i < items.length; i++) {
    html += makeWatchlistRow(items[i]);
  }

  tableBody.innerHTML = html;
}

function makeWatchlistRow(item) {
  var html = "";

  html += "<tr>";
  html += "<td><strong>" + escapeHtml(item.title) + "</strong><p class='hint'>" + escapeHtml(item.notes || "") + "</p></td>";
  html += "<td>" + escapeHtml(item.type) + "</td>";
  html += "<td>" + escapeHtml(item.genre || "N/A") + "</td>";
  html += "<td>" + escapeHtml(item.platform || "N/A") + "</td>";
  html += "<td>" + escapeHtml(item.recommender || "N/A") + "</td>";
  html += "<td>" + makeStatusSelect(item) + "</td>";
  html += "<td>" + escapeHtml(item.rating || "N/A") + "</td>";
  html += "<td class='actions'>";
  html += "<button type='button' class='secondary-btn' data-action='edit' data-id='" + item.id + "'>Edit</button>";
  html += "<button type='button' class='danger-btn' data-action='delete' data-id='" + item.id + "'>Delete</button>";
  html += "</td>";
  html += "</tr>";

  return html;
}

function makeStatusSelect(item) {
  var statuses = ["Recommended", "Plan to Watch", "Watching", "Completed", "Dropped"];
  var html = "<select class='status-select' data-action='status' data-id='" + item.id + "'>";

  for (var i = 0; i < statuses.length; i++) {
    if (item.status === statuses[i]) {
      html += "<option selected>" + statuses[i] + "</option>";
    } else {
      html += "<option>" + statuses[i] + "</option>";
    }
  }

  html += "</select>";
  return html;
}

function getRecommendationFormValues() {
  return {
    title: document.getElementById("media-title").value.trim(),
    type: document.getElementById("media-type").value,
    genre: document.getElementById("media-genre").value.trim(),
    platform: document.getElementById("media-platform").value.trim(),
    recommender: document.getElementById("media-recommender").value.trim(),
    status: document.getElementById("media-status").value,
    rating: document.getElementById("media-rating").value,
    notes: document.getElementById("media-notes").value.trim()
  };
}

function startEditItem(id) {
  var item = findWatchlistItem(id);

  if (!item) {
    return;
  }

  document.getElementById("edit-id").value = item.id;
  document.getElementById("media-title").value = item.title;
  document.getElementById("media-type").value = item.type;
  document.getElementById("media-genre").value = item.genre;
  document.getElementById("media-platform").value = item.platform;
  document.getElementById("media-recommender").value = item.recommender;
  document.getElementById("media-status").value = item.status;
  document.getElementById("media-rating").value = item.rating;
  document.getElementById("media-notes").value = item.notes;

  document.getElementById("form-title").textContent = "Edit Recommendation";
  document.getElementById("cancel-edit-btn").classList.remove("hidden");
  showSection("add-section");
}

function resetRecommendationForm() {
  document.getElementById("recommendation-form").reset();
  document.getElementById("edit-id").value = "";
  document.getElementById("form-title").textContent = "Add a Movie or Show";
  document.getElementById("cancel-edit-btn").classList.add("hidden");
}

function showMessage(elementId, message, success) {
  var element = document.getElementById(elementId);
  element.textContent = message;

  if (success) {
    element.classList.remove("error");
    element.classList.add("success");
  } else {
    element.classList.remove("success");
    element.classList.add("error");
  }
}

function clearMessages() {
  var messages = document.querySelectorAll(".message");

  for (var i = 0; i < messages.length; i++) {
    messages[i].textContent = "";
    messages[i].classList.remove("success");
    messages[i].classList.remove("error");
  }
}
