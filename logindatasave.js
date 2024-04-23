function login() {
    alert("1233");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve stored user data
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        // Redirect or do something else on successful login
    } else {
        alert("Login failed. Please try again.");
    }
}
