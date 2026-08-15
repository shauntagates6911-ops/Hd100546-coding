// Auth.js — HD 100546b Coding
// Zero-thought cosmic authentication

function hdLogin(username, password) {
  const users = JSON.parse(localStorage.getItem("hd_users") || "{}");

  if (!users[username]) return false;
  if (users[username].password !== password) return false;

  localStorage.setItem("hd_currentUser", username);
  return true;
}

function hdRegister(username, password) {
  const users = JSON.parse(localStorage.getItem("hd_users") || "{}");

  users[username] = { password };
  localStorage.setItem("hd_users", JSON.stringify(users));
}

function hdLogout() {
  localStorage.removeItem("hd_currentUser");
}

function hdCurrentUser() {
  return localStorage.getItem("hd_currentUser");
}
