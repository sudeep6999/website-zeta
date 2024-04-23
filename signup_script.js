function signup() {
    var fullName = document.getElementById("fullName").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }
    localStorage.setItem("username", fullName);
    console.log("username", fullName);
    localStorage.setItem("password", password);

    alert("Sign up successful! You can now login.");
    

    window.location.href = "logincopy.html";
}
