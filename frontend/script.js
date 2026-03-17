// Validate form and submit via fetch
function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("mobileError").innerText = "";
  document.getElementById("genderError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  // Name validation
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  // Mobile validation
  let mobile = document.getElementById("mobile").value.trim();
  if (mobile.length !== 10 || isNaN(mobile)) {
    document.getElementById("mobileError").innerText =
      "Enter a valid 10-digit mobile number (numbers only)";
    isValid = false;
  }

  // Gender validation
  let gender = document.getElementById("gender").value;
  if (gender === "") {
    document.getElementById("genderError").innerText =
      "Please select your gender";
    isValid = false;
  }

  // Password validation
  let password = document.getElementById("password").value;
  if (password.length < 8) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 8 characters";
    isValid = false;
  }

  // If form is valid, send data to backend
  if (isValid) {
    submitForm({ name, mobile, gender, password });
  }

  return false; // change from false to isValid for testing
}

// Check mobile input on typing
function checkmobile() {
  let mobile = document.getElementById("mobile").value;
  let errorDiv = document.getElementById("mobileError");

  for (let i = 0; i < mobile.length; i++) {
    let char = mobile[i];
    if (char < "0" || char > "9") {
      errorDiv.innerText = "Only numbers allowed";
      return;
    }
  }

  if (mobile.length > 10) {
    errorDiv.innerText = "Mobile number cannot exceed 10 digits";
    return;
  }

  errorDiv.innerText = "";
}

// Function to send form data to Spring Boot backend
function submitForm(data) {
  fetch("http://localhost:8080/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
      alert("Form submitted successfully!");
      document.getElementById("registrationForm").reset(); // corrected id
    })
    .catch(error => console.error("Error:", error));
}

// Export for testing (if using Jest)
if (typeof module !== "undefined") {
  module.exports = { validateForm, checkmobile, submitForm };
}