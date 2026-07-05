document.addEventListener("DOMContentLoaded", () => {
  WatchTrackStorage.seedDemoAccount();

  const authSection = document.getElementById("auth-section");
  const appSection = document.getElementById("app-section");
  const appNav = document.getElementById("app-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const loginMessage = document.getElementById("login-message");
  const registerMessage = document.getElementById("register-message");

  const recommendationForm = document.getElementById("recommendation-form");
  const formMessage = document.getElementById("form-message");
  const formTitle = document.getElementById("form-title");
  const editIdInput = document.getElementById("edit-id");
  const cancelEditBtn = document.getElementById("cancel-edit-btn");

  const searchInput = document.getElementById("search-input");
  const statusFilter = document.getElementById("status-filter");
  const genreFilter = document.getElementById("genre-filter");
  const platformFilter = document.getElementById("platform-filter");

  document.querySelectorAll("[data-auth-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.authTab;
      document.querySelectorAll(".tab").forEach((button) => button.classList.remove("active"));
      tab.classList.add("active");

      loginForm.classList.toggle("hidden", target !== "login");
      registerForm.classList.toggle("hidden", target !== "register");
      clearMessages();
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      showSection(link.dataset.section);
    });
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const result = WatchTrackAuth.login({
      email: document.getElementById("login-email").value,
      password: document.getElementById("login-password").value
    });

    setMessage(loginMessage, result.message, result.success);
    if (result.success) {
      showApp();
    }
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const result = WatchTrackAuth.register({
      name: document.getElementById("register-name").value,
      email: document.getElementById("register-email").value,
      password: document.getElementById("register-password").value
    });

    setMessage(registerMessage, result.message, result.success);
    if (result.success) {
      showApp();
    }
  });

  document.getElementById("logout-btn").addEventListener("click", () => {
    WatchTrackAuth.logout();
    showAuth();
  });

  document.getElementById("load-demo-btn").addEventListener("click", () => {
    WatchTrackList.loadDemoData();
    renderAll();
    showSection("watchlist-section");
  });

  recommendationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = getFormValues();
    const editingId = editIdInput.value;

    if (editingId) {
      WatchTrackList.updateItem(editingId, item);
      setMessage(formMessage, "Recommendation updated.", true);
    } else {
      WatchTrackList.addItem(item);
      setMessage(formMessage, "Recommendation saved.", true);
    }

    resetRecommendationForm();
    renderAll();
    showSection("watchlist-section");
  });

  cancelEditBtn.addEventListener("click", resetRecommendationForm);

  [searchInput, statusFilter, genreFilter, platformFilter].forEach((input) => {
    input.addEventListener("input", renderWatchlist);
    input.addEventListener("change", renderWatchlist);
  });

  document.getElementById("clear-filters-btn").addEventListener("click", () => {
    searchInput.value = "";
    statusFilter.value = "";
    genreFilter.value = "";
    platformFilter.value = "";
    renderWatchlist();
  });

  document.getElementById("watchlist-body").addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    const id = event.target.dataset.id;

    if (!action || !id) return;

    if (action === "edit") {
      populateEditForm(id);
    }

    if (action === "delete") {
      WatchTrackList.deleteItem(id);
      renderAll();
    }
  });

  document.getElementById("watchlist-body").addEventListener("change", (event) => {
    if (event.target.dataset.action !== "status") return;

    WatchTrackList.updateItem(event.target.dataset.id, {
      status: event.target.value
    });
    renderAll();
  });

  function showApp() {
    authSection.classList.add("hidden");
    appSection.classList.remove("hidden");
    appNav.classList.remove("hidden");
    showSection("dashboard-section");
    renderAll();
  }

  function showAuth() {
    authSection.classList.remove("hidden");
    appSection.classList.add("hidden");
    appNav.classList.add("hidden");
    clearMessages();
  }

  function showSection(sectionId) {
    document.querySelectorAll(".app-panel").forEach((section) => {
      section.classList.toggle("hidden", section.id !== sectionId);
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.section === sectionId);
    });

    if (sectionId === "dashboard-section") {
      WatchTrackDashboard.updateDashboard();
    }

    if (sectionId === "watchlist-section") {
      renderWatchlist();
    }
  }

  function renderAll() {
    WatchTrackDashboard.updateDashboard();
    renderWatchlist();
  }

  function renderWatchlist() {
    const filters = {
      search: searchInput.value,
      status: statusFilter.value,
      genre: genreFilter.value,
      platform: platformFilter.value
    };

    const items = WatchTrackFilters.filterItems(WatchTrackList.getItems(), filters);
    const tbody = document.getElementById("watchlist-body");
    const emptyState = document.getElementById("empty-state");

    document.getElementById("result-count").textContent = `${items.length} result${items.length === 1 ? "" : "s"}`;
    emptyState.classList.toggle("hidden", items.length > 0);

    tbody.innerHTML = items.map((item) => {
      const escape = WatchTrackDashboard.escapeHtml;
      return `
        <tr>
          <td>
            <strong>${escape(item.title)}</strong>
            <p class="hint">${escape(item.notes || "")}</p>
          </td>
          <td>${escape(item.type)}</td>
          <td>${escape(item.genre || "N/A")}</td>
          <td>${escape(item.platform || "N/A")}</td>
          <td>${escape(item.recommender || "N/A")}</td>
          <td>
            <select class="status-select" data-action="status" data-id="${item.id}">
              ${["Recommended", "Plan to Watch", "Watching", "Completed", "Dropped"].map((status) => `
                <option ${item.status === status ? "selected" : ""}>${status}</option>
              `).join("")}
            </select>
          </td>
          <td>${escape(item.rating || "N/A")}</td>
          <td class="actions">
            <button type="button" class="secondary-btn" data-action="edit" data-id="${item.id}">Edit</button>
            <button type="button" class="danger-btn" data-action="delete" data-id="${item.id}">Delete</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  function getFormValues() {
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

  function populateEditForm(id) {
    const item = WatchTrackList.findItem(id);
    if (!item) return;

    editIdInput.value = item.id;
    document.getElementById("media-title").value = item.title;
    document.getElementById("media-type").value = item.type;
    document.getElementById("media-genre").value = item.genre;
    document.getElementById("media-platform").value = item.platform;
    document.getElementById("media-recommender").value = item.recommender;
    document.getElementById("media-status").value = item.status;
    document.getElementById("media-rating").value = item.rating;
    document.getElementById("media-notes").value = item.notes;

    formTitle.textContent = "Edit Recommendation";
    cancelEditBtn.classList.remove("hidden");
    formMessage.textContent = "";
    showSection("add-section");
  }

  function resetRecommendationForm() {
    recommendationForm.reset();
    editIdInput.value = "";
    formTitle.textContent = "Add a Movie or Show";
    cancelEditBtn.classList.add("hidden");
  }

  function setMessage(element, text, success) {
    element.textContent = text;
    element.classList.toggle("success", success);
    element.classList.toggle("error", !success);
  }

  function clearMessages() {
    [loginMessage, registerMessage, formMessage].forEach((message) => {
      message.textContent = "";
      message.className = "message";
      if (message.id === "form-message") {
        message.classList.add("full-span");
      }
    });
  }

  if (WatchTrackAuth.getCurrentUser()) {
    showApp();
  } else {
    showAuth();
  }
});
