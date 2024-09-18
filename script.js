// Simulated user data
const USERNAME = "user";
const PASSWORD = "password";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    if (username === USERNAME && password === PASSWORD) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);
        showWelcomeMessage();
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    showLoginForm();
}

function showWelcomeMessage() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("user-name").textContent = localStorage.getItem("username");
}

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("welcome-message").style.display = "none";
}

// Check if user is already logged in
if (localStorage.getItem("loggedIn") === "true") {
    showWelcomeMessage();
}