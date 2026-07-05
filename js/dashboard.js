// dashboard.js
// This file updates the dashboard numbers and recent recommendation list.

function updateDashboard() {
  var user = getCurrentUser();
  var items = getWatchlistItems();

  if (user) {
    document.getElementById("welcome-heading").textContent = "Welcome, " + user.name;
  } else {
    document.getElementById("welcome-heading").textContent = "Welcome";
  }

  document.getElementById("total-count").textContent = items.length;
  document.getElementById("plan-count").textContent = countItemsByStatus(items, "Plan to Watch");
  document.getElementById("watching-count").textContent = countItemsByStatus(items, "Watching");
  document.getElementById("completed-count").textContent = countItemsByStatus(items, "Completed");

  showRecentItems(items);
}

function countItemsByStatus(items, status) {
  var count = 0;

  for (var i = 0; i < items.length; i++) {
    if (items[i].status === status) {
      count++;
    }
  }

  return count;
}

function showRecentItems(items) {
  var recentList = document.getElementById("recent-list");

  if (items.length === 0) {
    recentList.innerHTML = "<p class='hint'>No recommendations yet. Add one to start tracking.</p>";
    return;
  }

  var html = "";
  var maxItems = 3;

  if (items.length < 3) {
    maxItems = items.length;
  }

  for (var i = 0; i < maxItems; i++) {
    html += "<div class='recent-item'>";
    html += "<strong>" + escapeHtml(items[i].title) + "</strong>";
    html += "<span class='badge'>" + escapeHtml(items[i].status) + "</span>";
    html += "<p class='hint'>Recommended by " + escapeHtml(items[i].recommender || "Unknown") + "</p>";
    html += "</div>";
  }

  recentList.innerHTML = html;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
