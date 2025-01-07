// Form elements
const loginForm = document.getElementById("loginForm");
const createAccountForm = document.getElementById("createAccountForm");

// Switch links
const showCreateAccountLink = document.getElementById("showCreateAccount");
const showLoginFormLink = document.getElementById("showLoginForm");

// Show the Create Account form
showCreateAccountLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("hidden");
    createAccountForm.classList.remove("hidden");
});

// Show the Login form
showLoginFormLink.addEventListener("click", (e) => {
    e.preventDefault();
    createAccountForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Login form validation
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    if (username === "") {
        usernameError.textContent = "Username is required.";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    if (password === "") {
        passwordError.textContent = "Password is required.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        alert("Login successful!");
    }
});

// Create Account form validation
createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value.trim();
    const email = document.getElementById("email").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    const newUsernameError = document.getElementById("newUsernameError");
    const emailError = document.getElementById("emailError");
    const newPasswordError = document.getElementById("newPasswordError");

    let isValid = true;

    if (newUsername === "") {
        newUsernameError.textContent = "Username is required.";
        newUsernameError.style.display = "block";
        isValid = false;
    } else {
        newUsernameError.style.display = "none";
    }

    if (email === "") {
        emailError.textContent = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    if (newPassword === "") {
        newPasswordError.textContent = "Password is required.";
        newPasswordError.style.display = "block";
        isValid = false;
    } else if (newPassword.length < 6) {
        newPasswordError.textContent = "Password must be at least 6 characters.";
        newPasswordError.style.display = "block";
        isValid = false;
    } else {
        newPasswordError.style.display = "none";
    }

    if (isValid) {
        alert("Account created successfully!");
    }
});
