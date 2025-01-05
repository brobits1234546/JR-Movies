// Elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");
const registerUsername = document.getElementById("register-username");
const registerPassword = document.getElementById("register-password");

const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

const showRegisterLink = document.getElementById("show-register");
const showLoginLink = document.getElementById("show-login");

// Show Register form
showRegisterLink.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

// Show Login form
showLoginLink.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

// Register function
registerBtn.addEventListener("click", () => {
    const username = registerUsername.value;
    const password = registerPassword.value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Account created successfully!");
        registerUsername.value = "";
        registerPassword.value = "";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        alert("Please fill in both fields.");
    }
});

// Login function
loginBtn.addEventListener("click", () => {
    const username = loginUsername.value;
    const password = loginPassword.value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to another page
    } else {
        alert("Invalid username or password.");
    }
});
