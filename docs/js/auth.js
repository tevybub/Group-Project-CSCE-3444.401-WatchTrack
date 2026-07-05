const WatchTrackAuth = (() => {
  function getCurrentUser() {
    const email = WatchTrackStorage.getCurrentUserEmail();
    if (!email) return null;
    return WatchTrackStorage.getUsers().find((user) => user.email === email) || null;
  }

  function register({ name, email, password }) {
    const users = WatchTrackStorage.getUsers();
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((user) => user.email === normalizedEmail)) {
      return { success: false, message: "An account with this email already exists." };
    }

    if (password.length < 6) {
      return { success: false, message: "Password must be at least 6 characters." };
    }

    const user = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      password
    };

    users.push(user);
    WatchTrackStorage.saveUsers(users);
    WatchTrackStorage.setCurrentUserEmail(normalizedEmail);

    return { success: true, message: "Account created successfully." };
  }

  function login({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const user = WatchTrackStorage
      .getUsers()
      .find((savedUser) => savedUser.email === normalizedEmail && savedUser.password === password);

    if (!user) {
      return { success: false, message: "Invalid email or password." };
    }

    WatchTrackStorage.setCurrentUserEmail(normalizedEmail);
    return { success: true, message: "Login successful." };
  }

  function logout() {
    WatchTrackStorage.clearCurrentUser();
  }

  return {
    getCurrentUser,
    register,
    login,
    logout
  };
})();
