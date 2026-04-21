function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;

    if (!name || !email || !pass || !cpass || !age || !gender) {
        alert("All fields required");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email");
        return false;
    }

    if (pass !== cpass) {
        alert("Passwords do not match");
        return false;
    }

    if (isNaN(age)) {
        alert("Age must be number");
        return false;
    }

    localStorage.setItem("username", name);

    window.location.href = "dashboard.html";
    return false;
}

function welcomeUser() {
    let name = localStorage.getItem("username");
    document.getElementById("welcome").innerText = "Welcome " + name;
}

function showDate() {
    document.getElementById("date").innerText = new Date();
}

function showCourses() {
    let selected = [];
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

    checkboxes.forEach(c => selected.push(c.value));

    alert("Selected: " + selected.join(", "));
}

function feedbackValidation() {
    let name = document.getElementById("fname").value;
    let comment = document.getElementById("comment").value;
    let rating = document.getElementById("rating").value;

    if (!name || !comment || !rating) {
        alert("All fields required");
        return false;
    }

    alert("Feedback Submitted Successfully");
    return false;
}