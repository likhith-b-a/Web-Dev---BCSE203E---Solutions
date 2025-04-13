function updateTime() {
  document.getElementById("time").textContent = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);
document
  .getElementById("validationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let zip = document.getElementById("zip").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let verifyPassword = document.getElementById("verifyPassword").value;
    let pan = document.getElementById("pan").value;
    let country = document.getElementById("country").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let preferences = document.querySelectorAll(
      "input[name='preferences']:checked"
    );
    if (
      !name ||
      !zip ||
      !phone ||
      !email ||
      !password ||
      !verifyPassword ||
      !pan ||
      !country ||
      !gender ||
      preferences.length === 0
    ) {
      alert("All mandatory fields must be filled!");
      return;
    }
    if (name.length > 15) {
      alert("Name should not exceed 15 characters");
      return;
    }
    if (!/^[0-9]{6}$/.test(zip)) {
      alert("Zip code must be numeric and 6 digits");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Phone number must be numeric and 10 digits");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email format");
      return;
    }
    if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
        password
      )
    ) {
      alert(
        "Password must contain letters, numbers, special characters, and be 8-15 characters long"
      );
      return;
    }
    if (password !== verifyPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
      alert("Invalid PAN number format");
      return;
    }
    alert("Form submitted successfully!");
  });
