// auth.js
// This file handles register, login, logout, and the current user.
// This is prototype authentication only. Passwords are not secure yet.

function getCurrentUser() {
  var email = getCurrentUserEmail();

  if (!email) {
    return null;
  }

  var users = getUsers();

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return users[i];
    }
  }

  return null;
}

function registerUser(name, email, password) {
  var users = getUsers();
  var cleanEmail = email.trim().toLowerCase();

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === cleanEmail) {
      return {
        success: false,
        message: "An account with this email already exists."
      };
    }
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters."
    };
  }

  var newUser = {
    id: createId(),
    name: name.trim(),
    email: cleanEmail,
    password: password
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUserEmail(cleanEmail);

  return {
    success: true,
    message: "Account created successfully."
  };
}

function loginUser(email, password) {
  var users = getUsers();
  var cleanEmail = email.trim().toLowerCase();

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === cleanEmail && users[i].password === password) {
      setCurrentUserEmail(cleanEmail);
      return {
        success: true,
        message: "Login successful."
      };
    }
  }

  return {
    success: false,
    message: "Invalid email or password."
  };
}

function logoutUser() {
  clearCurrentUser();
}
