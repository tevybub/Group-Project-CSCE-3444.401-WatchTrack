const WatchTrackDashboard = (() => {
  function updateDashboard() {
    const user = WatchTrackAuth.getCurrentUser();
    const items = WatchTrackList.getItems();

    document.getElementById("welcome-heading").textContent = user
      ? `Welcome, ${user.name}`
      : "Welcome";

    document.getElementById("total-count").textContent = items.length;
    document.getElementById("plan-count").textContent = items.filter((item) => item.status === "Plan to Watch").length;
    document.getElementById("watching-count").textContent = items.filter((item) => item.status === "Watching").length;
    document.getElementById("completed-count").textContent = items.filter((item) => item.status === "Completed").length;

    const recentList = document.getElementById("recent-list");
    const recentItems = items.slice(0, 3);

    if (recentItems.length === 0) {
      recentList.innerHTML = "<p class='hint'>No recommendations yet. Add one to start tracking.</p>";
      return;
    }

    recentList.innerHTML = recentItems.map((item) => `
      <div class="recent-item">
        <strong>${escapeHtml(item.title)}</strong>
        <span class="badge">${escapeHtml(item.status)}</span>
        <p class="hint">Recommended by ${escapeHtml(item.recommender || "Unknown")}</p>
      </div>
    `).join("");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  return {
    updateDashboard,
    escapeHtml
  };
})();
